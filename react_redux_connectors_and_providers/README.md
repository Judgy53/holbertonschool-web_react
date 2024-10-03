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
- [1. Create a small store](#1-create-a-small-store)
- [2. Test MapStateToProps](#2-test-mapstatetoprops)
- [3. Update mapStateToProps](#3-update-mapstatetoprops)

## 0. Write mapStateToProps
Reuse the latest dashboard project you worked on in the React course `0x09-React_Redux_reducer` and install `react-redux`

Within the `App/App.js` file:
- Create a function named `mapStateToProps`. This should connect the `uiReducer` you created and the property `isLoggedIn` that your component is already using
- Import `connect` from Redux, and connect the `mapStateToProps` to the component
- File: `task_0/dashboard/src/App/App.js`

<sub>[Return to Top](#react_redux_connectors_and_providers)</sub>

## 1. Create a small store
In the `index.js` file:

- Create a store using `createStore` from Redux that would contain the `uiReducer` state
- Implement a provider passing the store that you created to the main `App`
- File: `task_0/dashboard/src/index.js`

<sub>[Return to Top](#react_redux_connectors_and_providers)</sub>

## 2. Test MapStateToProps
Export the `mapStateToProps` function you created if you haven’t already, and in the `App.test.js` file:
- Create a new suite to test the function
- Create a test that verify that the function returns the right object when passing the

```js
let state = fromJS({
  isUserLoggedIn: true
});
```

Should return `{ isLoggedIn: true }`

Tips:
- At this point your app is not functional but you should be able to load the page without crashing
- Remember that the state of uiReducer is using Map from Immutable

Requirements:
- No error should be displayed within the console
- All the tests in the project should pass
- File: `task_0/dashboard/src/App/App.test.js`

<sub>[Return to Top](#react_redux_connectors_and_providers)</sub>

## 3. Update mapStateToProps
In the `App.js` file:

- Update the `mapStateToProps` function to also pass to the component the value for `displayDrawer`. It should be connected to the Reducer attribute `isNotificationDrawerVisible`
- Update the render function of the component to use the value `displayDrawer` coming from the props instead of the state
- File: `task_1/dashboard/src/App/App.js`

<sub>[Return to Top](#react_redux_connectors_and_providers)</sub>
