# GIDDY MOBILE
This application was built using [Expo Bare Workflow](https://docs.expo.dev/introduction/managed-vs-bare/#bare-workflow).

# Application Lifecycle Events
- [ ] Create iOS & Android Certificates & access
- [x] User Flow && design kick-off **June 13, 2022**
- [ ] Create app components && complete application UI *in development*
- [ ] Begin middleware creation && connect drupal api's
- [ ] Run Test & QA
- [ ] Submit application && art work to iOS and Android markets
# Why Expo?
Although Expo is some what new to the industry they have made tremendous strides in helping bridge the gap between web and mobile development. We chose Expo bare workflow so we can always access native api's when needed but also for Expo's package manager `expo install` and deployment procedures `expo build/deploy/update`.

# Quick Start
- You must have [Node JS](https://nodejs.org) installed.
- You must have [Watchman](https://watchman.org) installed.

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