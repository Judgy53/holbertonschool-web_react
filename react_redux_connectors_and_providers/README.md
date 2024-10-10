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
- [13. Understand how to use the Redux Chrome extension](#13-understand-how-to-use-the-redux-chrome-extension)
- [14. Combine store: Root reducer](#14-combine-store-root-reducer)
- [15. Combine store: modify the application](#15-combine-store-modify-the-application)
- [16. Combine store: write the tests](#16-combine-store-write-the-tests)
- [17. Connect notifications: New Action Creator](#17-connect-notifications-new-action-creator)
- [18. Connect notifications: Improve reducer](#18-connect-notifications-improve-reducer)

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

## 13. Understand how to use the Redux Chrome extension
Install the Redux DevTools extension on your Chrome browser:
- Modify the `index.js` to support the extension
- Use the application and note the different actions being registered when you are logging in / logging out
- Note that a version of the state is saved along the different actions and you can jump at a different moment of the user journey

Tips:
- Read the documentation of the extension to learn how to support the Chrome extension as well as the Thunk middleware
- This extension can be one of the most powerful tool to debug an application. Make sure to become familiar with it
- File: `task_3/dashboard/src/index.js`

<sub>[Return to Top](#react_redux_connectors_and_providers)</sub>

## 14. Combine store: Root reducer
Since you have more than one reducer for your application, you will need to combine them into the store.

Create a new file `reducers/rootReducer.js`, in this file, export a `rootReducer`:
- the root should contain every reducer
- `courses` maps to `courseReducer`
- `notifications` maps to `notificationReducer`
- `ui` maps to `uiReducer`
- File: `task_4/dashboard/src/reducers/rootReducer.js`

<sub>[Return to Top](#react_redux_connectors_and_providers)</sub>

## 15. Combine store: modify the application
In the `index.js`, create the store using the root reducer instead of only the ui reducer:

- Any component connected to the state will probably need to be updated since you added a nested level
- File: `task_4/dashboard/src/index.js`

<sub>[Return to Top](#react_redux_connectors_and_providers)</sub>

## 16. Combine store: write the tests
Modify the test suites:

- In the `App.test.js`, modify `mapStateToProps` to correctly work with the new format of the reducer
- Create a `rootReducer.test.js` file to test the root reducer’s initial state for the following structure:

```js
{
  courses: Map {},
  notifications: Map {},
  ui: Map {}
}
```

Requirements:
- No errors in the browser’s console
- All tests should pass
- Use `combineReducer` to create the root reducer
- File: `task_4/dashboard/src/App/App.test.js, task_4/dashboard/src/reducers/rootReducer.test.js`

<sub>[Return to Top](#react_redux_connectors_and_providers)</sub>

## 17. Connect notifications: New Action Creator
We now know how to connect a simple component to a reducer. Let’s work on connecting a more complex component to the the entire API.

Add the following three action creators to `notificationActionCreators.js`
- `setLoadingState` whose parameter is a boolean. It will send the `SET_LOADING_STATE` action and the boolean.
- `setNotifications` whose parameter is an array. It will send the `FETCH_NOTIFICATIONS_SUCCESS` action with the data.
- `fetchNotifications` (which does not have a parameter). Calling it will dispatch `setLoadingState` with the boolean set to true
    - It fetches `/notifications.json`
    - Once the fetch is realized, it will dispatch `setNotifications` with the data
    - At the end of the query it sets the loading state to `false` again
- File: `task_5/dashboard/src/actions/notificationActionCreators.js`

<sub>[Return to Top](#react_redux_connectors_and_providers)</sub>

## 18. Connect notifications: Improve reducer
In the function `notificationReducer` within `notificationReducer.js`:
- Make sure to add a `loading` attribute to the initial state.
- Modify the `notifications` object to have the right initial state when merging the data coming from the API
- Create a `SET_LOADING_STATE` case and update the state accordingly
- Modify the `FETCH_NOTIFICATIONS_SUCCESS` case to perform a `mergeDeep` with the data
- File: `task_5/dashboard/src/reducers/notificationReducer.js`

<sub>[Return to Top](#react_redux_connectors_and_providers)</sub>
