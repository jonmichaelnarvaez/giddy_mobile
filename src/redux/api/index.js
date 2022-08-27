import drupalApi from "./drupal";
import {Platform} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
// import Upload from 'react-native-background-upload'

// !!DEVELOPER!!
// This is JT's pre-existing redux code; the plan was to refractor all of this code to fit
// what we needed to take the application to market.
// Feel free to completely re-write to how you see fit.

const RCTNetworking = require('react-native/Libraries/Network/RCTNetworking');
const startTimeOption = { year: 'numeric', month: 'short', day: 'numeric',  hour: 'numeric', minute: 'numeric'};
const endTimeOption = { hour: 'numeric', minute: 'numeric'};
const currentTime = (Date.now())/100
const currentDatetimeTime = (Date.now())/1000

const TimeConverter = (timeOptions,time,duration = 0) =>{
  let endTime = (Number(duration)*3600*1000)
  let date = (Number(time)*1000)+endTime;
  date = (new Intl.DateTimeFormat('en-US',timeOptions).format(date));
  return date;
}

export const registerUser = async ({ username, email, password }) => {
    RCTNetworking.clearCookies(() => {});
    try { 
      const tokenResponse = await drupalApi.get(
        '/session/token',
      );
      const xCSRFToken = tokenResponse;
      const registerResponse = await drupalApi.post(
          '/user/register?_format=json',
          {"name": [{"value":username}], "mail":[{"value":email}], "pass":[{"value":password}]},
          {headers:{"X-CSRF-Token":xCSRFToken}}
      )
      const regUser = registerResponse.data;
      const uuid = regUser.uuid[0].value;
      const uid = regUser.uid[0].value;
      const userUids = {uuid:uuid, uid:uid};

      await AsyncStorage.setItem('userUidData', JSON.stringify(userUids))

      const user = {};
      
      const login = async (username, password, user) => {
        const response = await drupalApi.post(
          '/user/login?_format=json',
          { "name":username, "pass":password},
        );
      
        user = response.data;
        await AsyncStorage.setItem('regAuthToken', user.access_token)
        return (user)
      }
      
      await login(username, password);
      
      return{step:1,error:null}
    } catch (err) {
      return{error:err.response.data};
      }
};

export const registerUserMoreData = async ({firstname, lastname, dateofbirth, gender, state}) =>{
  
  RCTNetworking.clearCookies(() => {});
  
  const uids = await AsyncStorage.getItem('userUidData')
  
  let parsedUids = JSON.parse(uids);
  
  const token = await AsyncStorage.getItem('regAuthToken')
  
  const response = await drupalApi.patch(
    `/jsonapi/user/user/${parsedUids.uuid}`, 
    { 
      "data": {
        "type": "user--user",
        "id": parsedUids.uuid,
        "attributes": {
          "field_date_of_birth": dateofbirth,
          "field_first_name": firstname,
          "field_gender": gender,
          "field_last_name": lastname,
          "field_state": state
        }
      } 
    },
    {
      headers:{
        'Content-Type': 'application/vnd.api+json',
        'Accept': 'application/vnd.api+json',
        "Authorization" : `Bearer ${token}`
      }
    }
  );
  return{step:4};
}

export const militaryIdCheck = async ({militaryID}) =>{
  RCTNetworking.clearCookies(() => {});
  const uids = await AsyncStorage.getItem('userUidData')
  let parsedUids = JSON.parse(uids);
  const token = await AsyncStorage.getItem('regAuthToken')
  const response = await drupalApi.patch(
    `/jsonapi/user/user/${parsedUids.uuid}`, 
    { 
      "data": {
        "type": "user--user",
        "id": parsedUids.uuid,
        "attributes": {
          "field_military_id": militaryID,
          "field_military": true,
        }
      } 
    },
    {
      headers:{
        'Content-Type': 'application/vnd.api+json',
        'Accept': 'application/vnd.api+json',
        "Authorization" : `Bearer ${token}`
      }
    }
  );
  return{step:6};
}

export const userRegTosSign = async () =>{
  RCTNetworking.clearCookies(() => {});
  const uids = await AsyncStorage.getItem('userUidData')
  let parsedUids = JSON.parse(uids);
  const token = await AsyncStorage.getItem('regAuthToken')
  const signingDate = TimeConverter(startTimeOption,currentDatetimeTime)
  const response = await drupalApi.patch(
    `/jsonapi/user/user/${parsedUids.uuid}`, 
    { 
      "data": {
        "type": "user--user",
        "id": parsedUids.uuid,
        "attributes": {
          "field_terms_and_conditions": true,
          "field_terms_and_conditions_sig":signingDate,
        }
      } 
    },
    {
      headers:{
        'Content-Type': 'application/vnd.api+json',
        'Accept': 'application/vnd.api+json',
        "Authorization" : `Bearer ${token}`
      }
    }
  );
  await AsyncStorage.setItem('authToken', token)
  return{};
}

export const userPhoneCheck = async ({phoneNumber}) => {
  RCTNetworking.clearCookies(() => {});
  const token = await AsyncStorage.getItem('regAuthToken')
  const response = await drupalApi.post(
    `/twilio/start`, 
    { 
      "phone":phoneNumber
    },
    {
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "Authorization" : `Bearer ${token}`
      }
    }
  );
  const message = (response.data)
  return{step:2,phone:phoneNumber,message};
}


export const resendUserPhoneCheck = async ({phoneNumber}) => {
  RCTNetworking.clearCookies(() => {});
  const token = await AsyncStorage.getItem('regAuthToken')
  const response = await drupalApi.post(
    `/twilio/start`, 
    { 
      "phone":phoneNumber
    },
    {
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "Authorization" : `Bearer ${token}`
      }
    }
  );
  const message = (response.data)
  return{};
}

export const userPhoneCodeCheck = async ({phoneNumber,validationNumber}) => {
  RCTNetworking.clearCookies(() => {});
  const token = await AsyncStorage.getItem('regAuthToken')
  const response = await drupalApi.post(
    `/twilio/check`, 
    { 
      "phone":phoneNumber,
      "code":validationNumber
    },
    {
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "Authorization" : `Bearer ${token}`
      }
    }
  );
  if(response.data.valid === true){
    await AsyncStorage.setItem('authToken', token)
    return{
      isAuth:true,
      loginStep:0

    }
  }else{
    alert('wrong code')
  }
};

export const userRegPhoneCodeCheck = async ({phoneNumber,validationNumber}) => {
  RCTNetworking.clearCookies(() => {});
  const token = await AsyncStorage.getItem('regAuthToken')
  const response = await drupalApi.post(
    `/twilio/check`, 
    { 
      "phone":phoneNumber,
      "code":validationNumber
    },
    {
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "Authorization" : `Bearer ${token}`
      }
    }
  );
  if(response.data.valid === true){
    RCTNetworking.clearCookies(() => {});
    const uids = await AsyncStorage.getItem('userUidData')
    let parsedUids = JSON.parse(uids);
    const apiResponse = await drupalApi.patch(
      `/jsonapi/user/user/${parsedUids.uuid}`, 
      { 
        "data": {
          "type": "user--user",
          "id": parsedUids.uuid,
          "attributes": {
            "field_phone": phoneNumber,
          }
        } 
      },
      {
        headers:{
          'Content-Type': 'application/vnd.api+json',
          'Accept': 'application/vnd.api+json',
          "Authorization" : `Bearer ${token}`
        }
      }
    );
    return{step:3,error:null}
  }else{
    return{error:'Verification code is incorrect'}
  }
};

export const updateUserData = async ({ dateofbirth, gender, state}) =>{
  RCTNetworking.clearCookies(() => {});
  const uids = await AsyncStorage.getItem('userUidData')
  let parsedUids = JSON.parse(uids);
  const token = await AsyncStorage.getItem('regAuthToken')
  const response = await drupalApi.patch(
    `/jsonapi/user/user/${parsedUids.uuid}`, 
    { 
      "data": {
        "type": "user--user",
        "id": parsedUids.uuid,
        "attributes": {
          "field_date_of_birth": dateofbirth,
          "field_gender": gender,
          "field_state": state,
        }
      } 
    },
    {
      headers:{
        'Content-Type': 'application/vnd.api+json',
        'Accept': 'application/vnd.api+json',
        "Authorization" : `Bearer ${token}`
      }
    }
  );
  const userData = response.data.data.attributes;
  return{
    dob:userData.field_date_of_birth,
    gender:userData.field_gender,
    state:userData.field_state,
    isLoading:false
  };
}

export const userProfileImage = async (image,step) =>{
  RCTNetworking.clearCookies(() => {});
  const uids = await AsyncStorage.getItem('userUidData')
  let parsedUids = JSON.parse(uids);
  const min = Math.ceil(1);
  const max = Math.floor(1000000);
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  let token = '';
  if(step == 'reg'){
    // console.log('reg step')
    token = await AsyncStorage.getItem('regAuthToken')
  }else{
    token = await AsyncStorage.getItem('authToken')
  }
  const options = {
    url: `https://dev-speakeasily.pantheonsite.io/jsonapi/user/user/${parsedUids.uuid}/field_profile_image`,
    path: Platform.OS === 'ios' ? `file:///${image.path}` :  image.path.replace('file://', ''),
    method: 'POST',
    type: 'raw',
    headers: {
      'Content-Type': 'application/octet-stream',
      'Accept': 'application/vnd.api+json',
      "Content-Disposition": 'file; filename="userProfileImage'+parsedUids.uid+'-'+randomNumber+'.jpg"',
      "Authorization" : `Bearer ${token}`
    },
    // Below are options only supported on Android
    notification: {
      enabled: true
    },
    useUtf8Charset: true
  }
  Upload.startUpload(options).then((uploadId) => {
    // console.log('Upload started')
    Upload.addListener('progress', uploadId, (data) => {
      // console.log(`Progress: ${data.progress}%`)
    })
    Upload.addListener('error', uploadId, (data) => {
      // console.log(`Error: ${data.error}%`)
    })
    Upload.addListener('cancelled', uploadId, (data) => {
      // console.log(`Cancelled!`)
    })
    Upload.addListener('completed', uploadId, (data) => {
      // data includes responseCode: number and responseBody: Object
      // console.log('Completed!')
    })
  }).catch((err) => {
    // console.log('Upload error!', err)
  })
}

export const userLogin = async ({ email, password }) => {
  let access_token;
  RCTNetworking.clearCookies(() => {});
  try { 
      const response = await drupalApi.post(
          '/user/login?_format=json',
          { 
            "name":email, 
            "pass":password
          },
      );
          const user = response.data;
          const uuid = user.current_user.uuid;
          const uid = user.current_user.uid;
          const userUids = {uuid:uuid, uid:uid};
          await AsyncStorage.setItem('userUidData', JSON.stringify(userUids))
          access_token = user.access_token
          RCTNetworking.clearCookies(() => {});
          const apiResponse = await drupalApi.get(
            `/jsonapi/user/user/${userUids.uuid}?include=field_profile_image`, 
            {
              headers:{
                'Content-Type': 'application/vnd.api+json',
                'Accept': 'application/vnd.api+json',
                "Authorization" : `Bearer ${access_token}`
              }
            }
          );

    const userData = apiResponse.data.data.attributes;
    let twoStepAuth = true;
    let step = 0;
    const twoFactorAuth = await AsyncStorage.getItem('twoFactorAuth')
    if(twoFactorAuth !== null) {
      if(twoFactorAuth == 'true'){
        twoStepAuth = false;
        step = 1;
        const response = await drupalApi.post(
          `/twilio/start`, 
          { 
            "phone":userData.field_phone
          },
          {
            headers:{
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              "Authorization" : `Bearer ${access_token}`
            }
          }
        );
        const message = (response.data)
        await AsyncStorage.setItem('regAuthToken', access_token)
      }else{
        await AsyncStorage.setItem('authToken', access_token)
      }
    }else{
      await AsyncStorage.setItem('authToken', access_token)
    }
    return{
      isAuth:twoStepAuth,
      token:user.access_token,
      email:userData.mail,
      firstName:userData.field_first_name,
      military:userData.field_military,
      militaryID:userData.field_military_id,
      lastName:userData.field_last_name,
      profileImage:user.current_user.profile_image,
      userName:userData.display_name,
      dob:userData.field_date_of_birth,
      gender:userData.field_gender,
      state:userData.field_state,
      phone:userData.field_phone,
      tokens:userData.field_tokens,
      loginStep:step
    };

  } catch (err) {
      alert('Error: ' + err.response.data + err.message);;
    }
};

export const getUserData = async () => {
  RCTNetworking.clearCookies(() => {});
  try { 
    const uids = await AsyncStorage.getItem('userUidData')
    let parsedUids = JSON.parse(uids);
    const token = await AsyncStorage.getItem('authToken')
    const apiResponse = await drupalApi.get(
      `/jsonapi/user/user/${parsedUids.uuid}?include=field_profile_image`, 
      {
        headers:{
          'Content-Type': 'application/vnd.api+json',
          'Accept': 'application/vnd.api+json',
          "Authorization" : `Bearer ${token}`
        }
      }
    );

    const userData = apiResponse.data.data.attributes;
    const userDataIncludes = apiResponse.data.included[0].attributes.uri.url;
    // // console.log(userData)
    return{
      email:userData.mail,
      firstName:userData.field_first_name,
      lastName:userData.field_last_name,
      profileImage:userDataIncludes,
      userName:userData.display_name,
      dob:userData.field_date_of_birth,
      gender:userData.field_gender,
      state:userData.field_state,
      phone:userData.field_phone,
      tokens:userData.field_tokens,
      bio:userData.field_bio,
      credentials:userData.field_credentials,
    };

  } catch (err) {
    }
};

export const autoLogin = async () => {
  try {
    const value = await AsyncStorage.getItem('authToken')
    if(value !== null) {
  RCTNetworking.clearCookies(() => {});
  const uids = await AsyncStorage.getItem('userUidData')
  let parsedUids = JSON.parse(uids);
  const response = await drupalApi.get(
    `/jsonapi/user/user/${parsedUids.uuid}`, 
    {
      headers:{
        'Content-Type': 'application/vnd.api+json',
        'Accept': 'application/vnd.api+json',
        "Authorization" : `Bearer ${value}`
      }
    }
  );
    const userData = response.data.data.attributes;

      return{
        isAuth:true,
        token:value,
        firstName:userData.field_first_name,
        lastName:userData.field_last_name,
        firstName:userData.field_first_name,
        military:userData.field_military,
        userName:userData.display_name,
        dob:userData.field_date_of_birth,
        gender:userData.field_gender,
        state:userData.field_state,
        phone:userData.field_phone,
        tokens:userData.field_tokens,
      }
    }else{
      return{isAuth:false}
    }
  } catch(e) {
    // error reading value
  }
};

export const userLogout = async () => {
  try {
      await AsyncStorage.removeItem('userUidData')
      await AsyncStorage.removeItem('authToken')
      return{isAuth:false,token:''}
  } catch(e) {
      // error reading value
    }
};

export const updateUserPassword = async ({oldPassword,newPassword}) => {
  try {
  RCTNetworking.clearCookies(() => {});
  const value = await AsyncStorage.getItem('authToken')
    const response = await drupalApi.post(
        '/giddy_tools/password',
        { 
          "password":oldPassword,
        },
    {
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "Authorization" : `Bearer ${value}`
      }
    }
  );
    const passwordValidation = response.data.password_valid;

if(passwordValidation == true){
  RCTNetworking.clearCookies(() => {});
  const uids = await AsyncStorage.getItem('userUidData')
  let parsedUids = JSON.parse(uids);
  const token = await AsyncStorage.getItem('authToken')
  const passwordUpdate = await drupalApi.patch(
    `/jsonapi/user/user/${parsedUids.uuid}`, 
      { 
        "data": {
          "type": "user--user",
          "id": parsedUids.uuid,
          "attributes": {
            'pass':{
              "value": newPassword,
              "existing": oldPassword,
            }
          }
        } 
      },
    {
      headers:{
        'Content-Type': 'application/vnd.api+json',
        'Accept': 'application/vnd.api+json',
        "Authorization" : `Bearer ${token}`
      }
    }
  );
    const responsePasswordUpdate = passwordUpdate.data;
    return{isLoading:false,response}
}else{
  Alert.alert('wrong')
}
  } catch(e) {
    // error reading value
  }
};

export const getUserOrderHistory = async () => {
  RCTNetworking.clearCookies(() => {});
  const token = await AsyncStorage.getItem('authToken')
  const response = await drupalApi.post(
    `/commerce_appstore/records`,
    {
      type:'tokens'
    },
    {
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "Authorization" : `Bearer ${token}`
      }
    }
  );
  const orders = (response.data.orders)
  return{orders:orders};
}

export const getUserEventHistory = async () => {
  RCTNetworking.clearCookies(() => {});
  const token = await AsyncStorage.getItem('authToken')
  const response = await drupalApi.post(
    
    `/commerce_appstore/records`,
    {
      type:'sessions'
    },
    {
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "Authorization" : `Bearer ${token}`
      }
    }
  );
  const events = (response.data.orders)
  events.map((session,key)=>{
    const dateOfEvent = TimeConverter(startTimeOption,session.session_time)
    const dateRegistered = TimeConverter(startTimeOption,session.date)
    session.dateRegistered = dateRegistered
    session.dateOfEvent = dateOfEvent
  })
  return{events:events};
}

export const getUserEvents = async () => {
  RCTNetworking.clearCookies(() => {});
  const token = await AsyncStorage.getItem('authToken')
  const response = await drupalApi.get(
    `/se_events/events/user`,
    {
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "Authorization" : `Bearer ${token}`
      }
    }
  );
  const sortedEventsList =[];

  if(response.data.user_events.length > 0){
    response.data.user_events.map(event => event.sessions.map((session, key) => {
    if((event.type == 'free' && session.paid == true) || event.type == 'private' || event.type == 'semi'){  
      let startTime = TimeConverter(startTimeOption,session.time)
      let endTime = TimeConverter(endTimeOption,session.time,event.duration )
      let pastEvents
      let sessionTime = (session.time + event.duration*3600)/1000
      if(currentTime >= sessionTime){
        pastEvents = true
      }else{
        pastEvents = false
      }
      sortedEventsList.push({
        name:event.name,
        tokenCost:event.token_cost,
        uuid:event.uuid,
        id:event.id,
        maxSeats:event.max_seats,
        seatsTaken:event.seats_taken,
        moderator:event.moderator,
        category:event.category,
        conferenceId:event.conference_id,
        description:event.description,
        summary:event.summary,
        duration:event.duration,
        type:event.type,
        totalTokenCost:event.total_token_cost,
        sessionId:session.id,
        sessionUuid:session.uuid,
        time:session.time,
        startTime:startTime,
        endTime:endTime,
        paid:session.paid,
        sessionNum:key+1,
        pastEvents:pastEvents
      })
    }
    sortedEventsList.sort((a, b) => a.time > b.time ? 1:-1)
  }))

  return{upcomingEvents:sortedEventsList,upcoming:true};
  }else{
    return{upcoming:false};
  }
  
}

export const getUserCalendar = async () => {
  RCTNetworking.clearCookies(() => {});
  const token = await AsyncStorage.getItem('authToken')
  const response = await drupalApi.get(
    // change speakeasily to giddy mobile se => gm 
    `/gm_events/events/user`,
    {
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "Authorization" : `Bearer ${token}`
      }
    }
  );

  const sortedEventsList =[];
  if(response.data.user_events.length > 0){
    response.data.user_events.map(event => event.sessions.map((session, key) => {
      
      let startTime = TimeConverter(startTimeOption,session.time)
      let endTime = TimeConverter(endTimeOption,session.time,event.duration )
      let pastEvents
      let sessionTime = (session.time + event.duration*3600)/1000
      if(currentTime >= sessionTime){
        pastEvents = true
      }else{
        pastEvents = false
      }
      sortedEventsList.push({
        name:event.name,
        // tokenCost:event.token_cost,
        uuid:event.uuid,
        id:event.id,
        // moderator:event.moderator,
        category:event.category,
        // conferenceId:event.conference_id,
        description:event.description,
        summary:event.summary,
        // duration:event.duration,
        type:event.type,
        // totalTokenCost:event.total_token_cost,
        // sessionId:session.id,
        // sessionUuid:session.uuid,
        time:session.time,
        startTime:startTime,
        endTime:endTime,
        paid:session.paid,
        sessionNum:key+1,
        pastEvents:pastEvents
      })
      sortedEventsList.sort((a, b) => a.time > b.time ? 1:-1)
    }))

    return{calendar:sortedEventsList,calendarLoaded:true};
  }else{
    return{};
  }
  
}

export const getUserBookmarked = async () => {
  RCTNetworking.clearCookies(() => {});
  const token = await AsyncStorage.getItem('authToken')
  const response = await drupalApi.get(
    `/se_events/bookmarks/view`,
    {
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "Authorization" : `Bearer ${token}`
      }
    }
  );
  const sortedEventsList =[];
  if(response.data.user_bookmarked_events.length > 0){
    response.data.user_bookmarked_events.map((event, key)  => {
      let startTime = TimeConverter(startTimeOption,event.sessions[0].time)
      let endTime = TimeConverter(endTimeOption,event.sessions[0].time,event.duration )
      let sessionTime = (event.sessions[0].time + event.duration*3600)/1000
      if(currentTime <= sessionTime){
        sortedEventsList.push({
          name:event.name,
          tokenCost:event.token_cost,
          uuid:event.uuid,
          id:event.id,
          maxSeats:event.max_seats,
          seatsTaken:event.seats_taken,
          moderator:event.moderator,
          category:event.category,
          conferenceId:event.conference_id,
          description:event.description,
          summary:event.summary,
          duration:event.duration,
          totalSessions:event.sessions.length,
          type:event.type,
          totalTokenCost:event.total_token_cost,
          sessionId:event.sessions[0].id,
          sessionUuid:event.sessions[0].uuid,
          time:event.sessions[0].time,
          startTime:startTime,
          endTime:endTime,
          sessionNum:key+1,
        })
      }
      sortedEventsList.sort((a, b) => a.time > b.time ? 1:-1)
      
    })
    if(sortedEventsList.length > 0){
      return{bookmarksEvents:sortedEventsList,bookmarks:true};
    }else{
      return{bookmarks:false};
    }
  }else{
    return{bookmarks:false};
  }
}

export const addEventBookmark = async (purchasedSessions) => {
  RCTNetworking.clearCookies(() => {});
  const token = await AsyncStorage.getItem('authToken')
  const response = await drupalApi.post(
    `/se_events/bookmarks/add`,
    {
      ids:purchasedSessions
    },
    {
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "Authorization" : `Bearer ${token}`
      }
    }
  );
    return{loadedEvents:false};
}

export const removeEventBookmark = async (purchasedSessions) => {
  RCTNetworking.clearCookies(() => {});
  const token = await AsyncStorage.getItem('authToken')
  const response = await drupalApi.post(
    `/se_events/bookmarks/remove`,
    {
      ids:purchasedSessions
    },
    {
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "Authorization" : `Bearer ${token}`
      }
    }
  );
    return{loadedEvents:false};
}

export const getUserRecommended = async () => {
  RCTNetworking.clearCookies(() => {});
  const token = await AsyncStorage.getItem('authToken')
  const response = await drupalApi.get(
    `/se_events/events/recommended`,
    {
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "Authorization" : `Bearer ${token}`
      }
    }
  );
  const sortedEventsList =[];
  if(response.data.recommended_events.length > 0){
    response.data.recommended_events.map((event, key)  => {
      let startTime = TimeConverter(startTimeOption,event.sessions[0].time)
      let endTime = TimeConverter(endTimeOption,event.sessions[0].time,event.duration )
      let sessionTime = (event.sessions[0].time + event.duration*3600)/1000
      if(currentTime <= sessionTime){
        sortedEventsList.push({
          name:event.name,
          tokenCost:event.token_cost,
          uuid:event.uuid,
          id:event.id,
          maxSeats:event.max_seats,
          seatsTaken:event.seats_taken,
          moderator:event.moderator,
          category:event.category,
          conferenceId:event.conference_id,
          description:event.description,
          summary:event.summary,
          duration:event.duration,
          totalSessions:event.sessions.length,
          type:event.type,
          totalTokenCost:event.total_token_cost,
          sessionId:event.sessions[0].id,
          sessionUuid:event.sessions[0].uuid,
          time:event.sessions[0].time,
          startTime:startTime,
          endTime:endTime,
          sessionNum:key+1,
        })
      }
      sortedEventsList.sort((a, b) => a.time > b.time ? 1:-1)
    })
    if(sortedEventsList.length > 0){
      return{recommendedEvents:sortedEventsList,recommended:true};
    }else{
      return{recommended:false};
    }
  }else{
    return{recommended:false};
  }
} 

export const getAllEvents = async () => {
  RCTNetworking.clearCookies(() => {});
  const token = await AsyncStorage.getItem('authToken')
  const response = await drupalApi.get(
    `/se_events/events/all`,
    {
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "Authorization" : `Bearer ${token}`
      }
    }
  );
  const events = (response.data.events)
  return{events:events, eventsHaveLoaded:true};
}

export const getAllModEvents = async () => {
  RCTNetworking.clearCookies(() => {});
  const token = await AsyncStorage.getItem('authToken')
  const response = await drupalApi.get(
    `/se_events/events/mod`,
    {
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "Authorization" : `Bearer ${token}`
      }
    }
  );
  const sortedEventsList =[];
  if(response.data.events.length > 0){
    response.data.events.map(event => event.sessions.map((session, key) => {
        let startTime = TimeConverter(startTimeOption,session.time)
        let endTime = TimeConverter(endTimeOption,session.time,event.duration )
        let pastEvents
        let sessionTime = (session.time + event.duration*3600)/1000
        if(currentTime >= sessionTime){
          pastEvents = true
        }else{
          pastEvents = false
        }
        sortedEventsList.push({
          name:event.name,
          tokenCost:event.token_cost,
          uuid:event.uuid,
          id:event.id,
          maxSeats:event.max_seats,
          seatsTaken:event.seats_taken,
          moderator:event.moderator,
          category:event.category,
          conferenceId:event.conference_id,
          description:event.description,
          summary:event.summary,
          duration:event.duration,
          type:event.type,
          totalTokenCost:event.total_token_cost,
          sessionId:session.id,
          sessionUuid:session.uuid,
          time:session.time,
          startTime:startTime,
          endTime:endTime,
          paid:session.paid,
          sessionNum:key+1,
          pastEvents:pastEvents
        })
      sortedEventsList.sort((a, b) => a.time > b.time ? 1:-1)
    }))
    return{upcomingEvents:sortedEventsList,upcoming:true};
  }else{
    return{upcoming:false};
  } 
}

export const getAllCategories = async () => {
  RCTNetworking.clearCookies(() => {});
  const token = await AsyncStorage.getItem('authToken')
  const response = await drupalApi.get(
    `/se_categories/view/all`,
    {
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "Authorization" : `Bearer ${token}`
      }
    }
  );
  const categories = (response.data.categories)
  return{categories:categories};
}

export const getUsersThreads = async () => {
  RCTNetworking.clearCookies(() => {});
  const token = await AsyncStorage.getItem('authToken')
  let unreadCount = 0
  const response = await drupalApi.get(
    `/messenger/threads`,
    {
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "Authorization" : `Bearer ${token}`
      }
    }
  );
  const threads = (response.data.threads)
  threads.map((thread,threadskey) => {
    if(thread.read == false){
      unreadCount = unreadCount+1
    }
    
    thread.messages.map((message,messagekey) => {
      let startTime = TimeConverter(startTimeOption,message.time)
      threads[threadskey].messages[messagekey].dateTime=startTime
    })
  });
  threads.sort((a, b) => a.last_message_time < b.last_message_time ? 1:-1)
  return{threads:threads,unread:unreadCount};
}

export const userReadThreads = async (id) => {
  RCTNetworking.clearCookies(() => {});
  const token = await AsyncStorage.getItem('authToken')
  const response = await drupalApi.post(
    `/messenger/read`, 
    { 
      "thread":id
    },
    {
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "Authorization" : `Bearer ${token}`
      }
    }
  );
  return{};
}

export const purchaseSession = async (purchasedSessions) => {
  RCTNetworking.clearCookies(() => {});
  const token = await AsyncStorage.getItem('authToken')
  const response = await drupalApi.post(
    `/se_events/session/join`,
    { 
      "sessions":purchasedSessions
    },
    {
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "Authorization" : `Bearer ${token}`
      }
    }
  );
  return{};
}

export const recommendedQuizAnswers = async (values) => {
  RCTNetworking.clearCookies(() => {});
  const token = await AsyncStorage.getItem('authToken')
  const response = await drupalApi.post(
    `/se_categories/add`,
    { 
      "categories_and_tags":values
    },
    {
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "Authorization" : `Bearer ${token}`
      }
    }
  );
  return{};
}

export const submitSuggestedGroup = async (values) => {
  // console.log('API call',values);
  const uids = await AsyncStorage.getItem('userUidData')
  let parsedUids = JSON.parse(uids);
  // console.log(uids.uuid)
  RCTNetworking.clearCookies(() => {});
  const token = await AsyncStorage.getItem('authToken')
  const response = await drupalApi.post(
    `/jsonapi/node/proposed_event`,
    {
      "data": {
        "type": "node--proposed_event",
        "attributes": {
          "title": values.name,
          "body": {
            "value": values.description,
          },
          "field_cadence": values.cadence,
          "field_days": values.days,
          "field_end_time": values.endTime*900,
          "field_max_seats_proposed": values.maxSeats,
          "field_min_seats_proposed": values.minSeats,
          "field_sessions_number": values.totalSessions,
          "field_privacy": values.type,
          "field_start_date": {
            "value": values.date
          },
          "field_start_time": values.startTime*900,
        },
        "relationships": {
          "field_submitter": {
            "data": {
              "type": "user--user",
              "id": parsedUids.uuid
            }
          },
          "field_topics": {
            "data": {
              "type": "taxonomy_term--topics_of_interest",
              "id": values.topic
            }
          }
        },
      },
    },
    {
      headers:{
        'Content-Type': 'application/vnd.api+json',
        'Accept': 'application/vnd.api+json',
        "Authorization" : `Bearer ${token}`
      }
    }
  );
  return{};
}

export const getModEvents = async () => {
  RCTNetworking.clearCookies(() => {});
  const token = await AsyncStorage.getItem('authToken')
  const response = await drupalApi.get(
    `/se_events/events/all`,
    {
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "Authorization" : `Bearer ${token}`
      }
    }
  );
  const events = (response.data.events)
  if(response.data.events.length > 0){
    response.data.events.map(event => event.sessions.map((session, key) => {
      if (event.moderator == ''){
        // console.log(event)
      }
    }))
  }

  return{events:events, eventsHaveLoaded:true};
}