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
- [2. Handling Events](#2-handling-events)
- [3. Reusable comments \& specialization](#3-reusable-comments--specialization)

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

## 2. Handling Events
**Create a new handing event**

In the `Notifications` component:
- Convert the function into a React Class
- Make sure that the tests are still passing
- Create a new `markAsRead` function within the Notifications class. It accepts one argument: id(number)
- When the function is called, it logs to the console the message “Notification $id has been marked as read
- Pass the function `markAsRead` to the `NotificationItem` component as a property

In the `NotificationItem` Class:
- Modify the `li` element to call the new function `markAsRead` on click. It should send the id of the notification
- Define the new property type and the default property for the new properties

**Add the tests**

In the `Notifications` test file:
- Create a test, that will mockup the console.log function
- Check that when calling the function `markAsRead` on an instance of the component, the spy is being called with the right message

In the `NotificationItem` test file:
- Create a test, that will pass a spy as the `markAsRead` property
- Check that when simulating a click on the component, the spy is called with the right ID argument

**Requirements:**
- Make sure to bind the function `markAsRead` in your constructor to avoid unecessary re-rendering
- In the test file, make sure to restore the console function you mocked
- At this point, reloading the App should display the exact same page as the last task. Use the React Chrome Extension to make sure the Notifications component displays correctly
- The console in your browser should not show any error or warning
- File: `task_2/dashboard/src/Notifications/NotificationItem.js, task_2/dashboard/src/Notifications/NotificationItem.test.js, task_2/dashboard/src/Notifications/Notifications.js, task_2/dashboard/src/Notifications/Notifications.test.js`

<sub>[Return to top](#react_component)</sub>

## 3. Reusable comments & specialization

**Containment**

Create a new component named `BodySection`. The component does not know its children. It should output the following:
- A div with the class `bodySection`
- Within the div, a `h2` element containing a title passed as a prop
- Under the `h2` the children of `BodySection`

**Tips:**

Rendering the following
```jsx
<BodySection title="test">
  <p>test</p>
</BodySection>
```

Should generate:
```html
<div className="bodySection">
  <h2>test</h2>
  <p>test</p>
</div>
```
- File: `task_3/dashboard/src/BodySection/BodySection.js`

<sub>[Return to top](#react_component)</sub>
