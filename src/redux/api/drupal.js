import axios from 'axios'

export default axios.create({
    // this will change to whatever Eddie provides from Pantheon
    baseURL: "https://dev-giddymobile.pantheonsite.io",
});