# React_component
In this projects, we learned when to use a class or function component, and how to use HOCs.

Topics Covered:
- When to use a Class or a function to create a component
- The lifecycle of a Class component
- How to test a component
- How to utilize a Jest spy to verify that a function is being called correctly
- What an HOC is and how to use it
- How to optimize performance and control which components to render

Table of Contents:
- [0. Commence with class components](#0-commence-with-class-components)
- [1. Lifecycles](#1-lifecycles)

## 0. Commence with class components
Start this project with files from the the last task of the `React Props` project:

**Convert the App function into a React Class:**
- Modify the function within `App.js` to convert the App function into a React class
- Make sure that the tests are still passing

**Requirements:**
- At this point, reloading the App should display the exact same page as the last task
- The console in your browser should not show any error or warning
- File: `task_0/dashboard/src/App/App.js`

<sub>[Return to top](#react_component)</sub>

## 1. Lifecycles
**Add lifecycle to a component**

In the `App` Class:
- Add a props named `logOut` with the props type being `function`
- The default value for this property, should be an empty function
- Add an event listener when the component is mounted to listen to when the user is pressing down the keyboard keys
- When the user is pressing down the `control` and the `h` keys simultaneously, display the alert `Logging you out` and call the function `logOut`

**Add the tests**

In the test file for the App Class:
- Create a test to verify that when the keys `control` and `h` are pressed the `logOut` function, passed as a prop, is called and the alert function is called with the string `Logging you out`

**Requirements:**
- Make sure to remove the event listener when the component is unmounted
- In the test file, make sure to restore the alert function you mocked
- At this point, reloading the App should display the exact same page as the last task
- The console in your browser should not show any error or warning
- File: `task_1/dashboard/src/App/App.js, task_1/dashboard/src/App/App.test.js`

<sub>[Return to top](#react_component)</sub>
