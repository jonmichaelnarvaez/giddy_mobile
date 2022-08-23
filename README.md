# GIDDY MOBILE
Built with [Expo Bare Workflow](https://docs.expo.dev/introduction/managed-vs-bare/#bare-workflow).
# Application TODO List
- [ ] Wait for endpoint and base URL from backend support & redux re-factoring + additions.
- [ ] Create iOS & Android Certificates & Team Access
- [ ] Create TestFlight Access for the team.
- [x] User Flow && design kick-off **June 13, 2022**
- [x] Delegate deliverables to Team Leads **June 13, 2022** [Asana Mobile](https://app.asana.com/0/1202390205827772/calendar)
- [x] Wait for content and design on feedback and UI updates 
- [ ] Refractor uncontrolled components for optimization.
- [ ] Finalize app store configuration is Xcode
- [ ] Finalize play store configuration is Android Studio
- [ ] Run Test & QA
- [ ] Submit application && art work to iOS and Android markets
# Architecture
Drupal was chosen at the conception of Giddy's online presence and where all of the current data and analytics originate. Due to the state of business we were more inclined to build an application that was heavy front-end with a focus on great UX. This architecture allowed us to cut build time by 75% and launch and application in less than a month. Our front-end was built using React Native Expo's bare-workflow and redux for the application middleware. 

![drupal   react native](https://user-images.githubusercontent.com/105945733/174606053-8c16836f-ffef-4aff-8c5f-4b04591c435b.jpeg)

# Notifications
We are using Firebase as the provider for external notifications and scheduling internal notifications to the native operating system.

![firebase react native](https://blog.logrocket.com/wp-content/uploads/2020/11/Push-notifications-in-React-Native-APNs-FCM.png)

# Analytics with Expo
I chose expo because of their developer experience and how simple it is to connect to each operating systems native APIs. Directly connected to Firebase Analytics you can pull real time data from Firebase Analytics and query large data sets using Firebase Extensions.

![ Expo Firebase Analytics](https://docs.expo.dev/versions/latest/sdk/firebase-analytics/#analyticslogeventname-properties)

![Firebase Analytics Dashboard](https://analytics.google.com/analytics/web/?authuser=0&hl=en#/p323399511/reports/dashboard?r=firebase-overview)

# Why Expo?
Although Expo is some what new to the industry they have made tremendous strides in helping bridge the gap between web and mobile development. We chose Expo bare workflow so we can always access native api's when needed but also for Expo's package manager `expo install` and deployment procedures `expo build/deploy/update` as well as the ability to build at a rapid pase.

**Expo update June 2022** [Reference](https://appjs.co)
- Publish updates with Expo
- Push Notifications Update
- Major updates to native API access.
# Quick Start
- You must have [Node JS](https://nodejs.org) installed.
- You must have [Watchman](https://watchman.org) installed.
- Create your branch
- Run `expo run:ios` to install dev client on your iOS simulator.
- Run `expo run:android` to install dev client on your Android simulator

###### Start with iOS
> You will need to replace the simulator number for it to work properly.
```
expo run:ios   -----> opens ios simulator with dev client
```
###### Add new dependencies
> Why not yarn or npm? Expo manager keeps track of all the dependencies to ensure they co-exist inside the application.
```
expo install (packageName) --> add new dependencies to the project
```
# Third party dependencies to watch
> Regular maintenance required
0. @react-navigation/ ----> [@react-navigation/](https://reactnavigation.org/)
1. react-native-calendars ----> [react-native-calendar](https://www.npmjs.com/package/react-native-calendars)
2. react-native-chart-kit ----> [react-native-chart-kit](https://www.npmjs.com/package/react-native-chart-kit)
3. react-native-walkthrough-tooltip ----> [react-native-walkthrough-tooltip](https://www.npmjs.com/package/react-native-walkthrough-tooltip)
4. react-native-confetti-cannon ----> [react-native-confetti-cannon](https://www.npmjs.com/package/react-native-confetti-cannon)
5. react-native-onboarding-swiper ----> [react-native-onboarding-swiper](https://www.npmjs.com/package/react-native-onboarding-swiper)
