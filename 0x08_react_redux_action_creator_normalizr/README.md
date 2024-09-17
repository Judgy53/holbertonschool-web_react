# React Redux action creator+normalizr
In this project, we learned how to use Normalizr and Redux.

Topics Covered :
- Normalizr’s purpose and how to use it
- schemas and normalization of nested JSON
- core concepts of Redux
- Redux actions
- Redux action creators
- async actions in Redux
- how to write tests for Redux

Table of Contents:
- [0. Read data from a JSON](#0-read-data-from-a-json)

## 0. Read data from a JSON
Reuse the latest dashboard project you worked on in the React course `0x06-React_state`

For this task, place `notifications.json` into the root of the project directory and use the data inside for the next step.

Create a new `notifications.js` file in a `schema` folder:
- Import the JSON data from `notifications.json` and give it a name. Try `import * as [variable name] from [path to notifications.json]`
- Create a function named `getAllNotificationsByUser` that accepts `userId` as an argument
- The function should return a list containing all the `context` objects from the `notifications.json` data when the author id is the same as the `userId`

In the same `schema` directory, create a `notifications.test.js` file:

- Add a test that uses the id `5debd764a7c57c7839d722e9` and verifies that the following data is returned:
```json
[
  {
    guid: "2d8e40be-1c78-4de0-afc9-fcc147afd4d2",
    isRead: true,
    type: "urgent",
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
  },
  {
    guid: "280913fe-38dd-4abd-8ab6-acdb4105f922",
    isRead: false,
    type: "urgent",
    value:
      "Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed"
  }
]
```

Tips:
- You can easily import JSON data using Babel
- When writing your test, you can use the `arrayContaining` method from Jest to easily compare what the function returns and what you are expecting

Requirements:
- You can use any loop function to go through the array
- All the tests in the project should pass
- File: `task_0/dashboard/src/schema/notifications.js, task_0/dashboard/src/schema/notifications.test.js`
