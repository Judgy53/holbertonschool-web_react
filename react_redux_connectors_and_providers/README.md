# react_redux_connectors_and_providers
In this project, we learned how to use react-redux, and redux's connectors and providers.

Topics Covered:
- Redux connectors and how to use them
- The different functions you can pass to a connector (mapStateToProps, mapDispatchToPros)
- How to map an action creator to a component using a connector
- How to map an async action creator to a component with Redux Thunk
- What Redux Providers are and how to set up your app’s store
- How you can improve a connector’s performance using Reselect
- How to use Redux’s dev tools to debug the state of your application

Table of Contents:
- [0. Write mapStateToProps](#0-write-mapstatetoprops)

## 0. Write mapStateToProps
Reuse the latest dashboard project you worked on in the React course `0x09-React_Redux_reducer` and install `react-redux`

Within the `App/App.js` file:
- Create a function named `mapStateToProps`. This should connect the `uiReducer` you created and the property `isLoggedIn` that your component is already using
- Import `connect` from Redux, and connect the `mapStateToProps` to the component
- File: `task_0/dashboard/src/App/App.js`

<sub>[Return to Top](#react_redux_connectors_and_providers)</sub>
