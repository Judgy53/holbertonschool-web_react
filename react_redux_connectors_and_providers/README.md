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
- [4. Connect your actions creators](#4-connect-your-actions-creators)
- [5. Refactor your code](#5-refactor-your-code)
- [6. Update your tests](#6-update-your-tests)
- [7. Async actions \& Thunk middleware](#7-async-actions--thunk-middleware)
- [8. Connect LoginRequest to the App](#8-connect-loginrequest-to-the-app)
- [9. Connect user state to the Footer](#9-connect-user-state-to-the-footer)
- [10. Connect Logout action creator to the Header](#10-connect-logout-action-creator-to-the-header)
- [11. Modify the uiReducer](#11-modify-the-uireducer)
- [12. Modify the test suites](#12-modify-the-test-suites)

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

## 4. Connect your actions creators
In the `App.js` file:
- Connect to the component the actions creators `displayNotificationDrawer` and `hideNotificationDrawer`
- You should use the simplified version for the `mapDispatchToProps`. No need to import `bindActionCreators`
- Modify the render function of the component to use the functions passed within the props instead of the action within the Class component
- File: `task_1/dashboard/src/App/App.js`

<sub>[Return to Top](#react_redux_connectors_and_providers)</sub>

## 5. Refactor your code
In the `App.js` file:
- You can delete the old function `handleDisplayDrawer`
- You can delete the old function `handleHideDrawer`
- Remove any state property related to the display of the drawer
- Remove any binding in the constructor
- You are now passing to your components props. You need to define `propTypes` and `defaultProps`
- File: `task_1/dashboard/src/App/App.js`

<sub>[Return to Top](#react_redux_connectors_and_providers)</sub>

## 6. Update your tests
You can now refactor the `App.test.js` file:
- You don’t need to test the functions `handleDisplayDrawer` and `handleHideDrawer` since everything is already tested using the Redux mechanism
- You need to update the test you previously created to support the new attribute

Tips:
- At this point your app should be functional and able to display/hide the drawer using the Redux state
- Remember that the state of `uiReducer` is using Map from Immutable

- File: `task_1/dashboard/src/App/App.test.js`

<sub>[Return to Top](#react_redux_connectors_and_providers)</sub>

## 7. Async actions & Thunk middleware
Let’s implement the `LoginRequest` / `logout` actions creators accross the entire application. `LoginRequest` is calling an API and is Async. Therefore, Redux will not support it. We will need to use a middleware

Install `redux-thunk` within your project. And in the `index.js` file, apply the middleware to your store
- File: `task_2/dashboard/src/index.js`

<sub>[Return to Top](#react_redux_connectors_and_providers)</sub>

## 8. Connect LoginRequest to the App
Modify the file `App/App.js`:
- Connect the action creator `loginRequest` and map it to the `login` prop
- Modify the component to use the new `login` function from the props instead of the one within the class
- Refactor the component to remove any `login` or `logout` function and bind
- File: `task_2/dashboard/src/App/App.js`

<sub>[Return to Top](#react_redux_connectors_and_providers)</sub>

## 9. Connect user state to the Footer

Modify the file `Footer/Footer.js`
- Create a `mapStateToProps` function
- Map the `user` props to the `user` within the Redux state
- Connect the Footer component to the function you created
- Modify the render function and remove any use of the Context. Instead use the `user` prop
- File: `task_2/dashboard/src/Footer/Footer.js`

<sub>[Return to Top](#react_redux_connectors_and_providers)</sub>

## 10. Connect Logout action creator to the Header
Modify the file `Header/Header.js`
- Create a `mapStateToProps` function
- Map the `user` props to the `user` within the Redux state
- Connect the Header component to the function you created
- Connect the Header component to the `logout` action creator
- Modify the render function and remove any use of the Context. Instead use the `user` prop. When the user clicks on the link, it should now dispatch the `logout` action creator
- File: `task_2/dashboard/src/Header/Header.js`

<sub>[Return to Top](#react_redux_connectors_and_providers)</sub>

## 11. Modify the uiReducer
Now that we can have the entire login request and the entire feedback loop, let’s modify a few things within the reducer:
- When the action `LOGIN` is passed, set the user within the state to the one passed within the action
- When the `LOGOUT` action is passed, make sure to set the `user` to `null`
- File: `task_2/dashboard/src/reducers/uiReducer.js`

<sub>[Return to Top](#react_redux_connectors_and_providers)</sub>

## 12. Modify the test suites
Modify the test suites of the different components you modified:
- In the `App.test.js`, `Footer.test.js`, and `Header.test.js` to import the Stateless components instead of the connected component
- Remove any use of the `mount` function, and convert everything to use the `shallow` function
- You should remove any use of `setState` within the tests and pass directly the props to the stateless components
- Remove any test linked to the `login`, `logout` function within App, and Header
- Add a test in `uiReducer` to support the new action you just created

Tips:
- At this point your app should be functional and able to display/hide the drawer, login/logout using the Redux state
- Remember that the state of uiReducer is using Map from Immutable
- You can now see that your components logic is simplified. They only respond to props change. The logic is happening within the action creators

Requirements:
- Do not forget to add `defaultProps` and `PropTypes` to any component receiving props
- No error should be displayed within the console
- All the tests in the project should pass
- File: `task_2/dashboard/src/App/App.test.js, task_2/dashboard/src/Footer/Footer.test.js, task_2/dashboard/src/Header/Header.test.js, task_2/dashboard/src/reducers/uiReducer.test.js`

<sub>[Return to Top](#react_redux_connectors_and_providers)</sub>
