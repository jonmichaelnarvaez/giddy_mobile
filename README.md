# GIDDY MOBILE
Built with [Expo Bare Workflow](https://docs.expo.dev/introduction/managed-vs-bare/#bare-workflow).
# Architecture
Drupal was chosen at the conception of Giddy's online presence and where all of the current data and analytics originate. Due to the state of business we were more inclined to build an application that was heavy front-end with a focus on great UX & micro-animations. This architecture allowed us to cut build time by 75% and launch and application in less than a month.
![drupal   react native](https://user-images.githubusercontent.com/105945733/174606053-8c16836f-ffef-4aff-8c5f-4b04591c435b.jpeg)
# Application Lifecycle Events
- [ ] Create iOS & Android Certificates & Team Access
- [x] User Flow && design kick-off **June 13, 2022**
- [x] Delegate deliverables to Team Leads **June 13, 2022** [Asana Mobile](https://app.asana.com/0/1202390205827772/calendar)
- [ ] Create app components && complete application UI **_Active Development_**
- [ ] Begin middleware creation && connect drupal api's
- [ ] Run Test & QA
- [ ] Submit application && art work to iOS and Android markets
# Why Expo?
Although Expo is some what new to the industry they have made tremendous strides in helping bridge the gap between web and mobile development. We chose Expo bare workflow so we can always access native api's when needed but also for Expo's package manager `expo install` and deployment procedures `expo build/deploy/update` as well as the ability to build at a rapid pase.

**Expo update June 2022** [Reference](https://appjs.co)
- Publish updates with Expo
- Push Notifications Update
- Major updates to native API access.
# Quick Start
- You must have [Node JS](https://nodejs.org) installed.
- You must have [Watchman](https://watchman.org) installed.
- Clone project & create your branch
- Run `expo install expo-dev-client` to install dev client on your simulator.

###### Start with iOS
```
yarn start   -----> opens ios simulator
```
###### Add new dependencies
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
