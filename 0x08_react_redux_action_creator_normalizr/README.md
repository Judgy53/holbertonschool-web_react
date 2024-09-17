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
- [1. Normalize a nested JSON](#1-normalize-a-nested-json)
- [2. Filter a normalized Schema](#2-filter-a-normalized-schema)

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

## 1. Normalize a nested JSON
Copy over `dashboard` from the previous task into a `task_1` directory at the root of the project

Modify `src/schema/notifications.js` to set up a schema using Normalizr

You’re going to use `schema.Entity` to create a 3 of entities.

The first one is an example the task will provide for you.

`const user = new schema.Entity("users")`
- Create a message entity in a variable called `message` whose key is `messages` and set the `idAttribute` to the string `guid` in the options
- Create a notification entity in a variable called `notification` whose key is `notifications` and set the definition of the entity as so:
    - author: user
    - context: message

Add a test in `schema/notifications.test.js` to verify that your normalized data has a correct `result` array. It should contain:
```
  "5debd76480edafc8af244228"
  "5debd764507712e7a1307303"
  "5debd76444dd4dafea89d53b"
  "5debd76485ee4dfd1284f97b"
  "5debd7644e561e022d66e61a"
  "5debd7644aaed86c97bf9d5e"
  "5debd76413f0d5e5429c28a0"
  "5debd7642e815cd350407777"
  "5debd764c1127bc5a490a4d0"
  "5debd7646ef31e0861ec1cab"
  "5debd764a4f11eabef05a81d"
  "5debd764af0fdd1fc815ad9b"
  "5debd76468cb5b277fd125f4"
  "5debd764de9fa684468cdc0b"
```

Add a test to verify that your normalized data has a correct `users` entity. Test to access the user with the id `5debd764a7c57c7839d722e9`. It should return:
```
      age: 25,
      email: "poole.sanders@holberton.nz",
      id: "5debd764a7c57c7839d722e9",
      name: { first: "Poole", last: "Sanders" },
      picture: "http://placehold.it/32x32"
```

Add a test to verify that your normalized data has a correct `messages` entity. Test to access the message with the guid `efb6c485-00f7-4fdf-97cc-5e12d14d6c41`. It should return:
```
      guid: "efb6c485-00f7-4fdf-97cc-5e12d14d6c41",
      isRead: false,
      type: "default",
      value: "Cursus risus at ultrices mi."
```

Add a test to verify that your normalized data has a correct `notifications` entity. Test to access the notification with the id `5debd7642e815cd350407777`. It should return:
```
      author: "5debd764f8452ef92346c772",
      context: "3068c575-d619-40af-bf12-dece1ee18dd3",
      id: "5debd7642e815cd350407777"
```

Tips:
- The expected goal is to obtain a very easy to use dataset
- If you are having undefined issues, look at `idAttribute` from the Normalizr documentation

Requirements:
- You must export the list of notifications using a Normalizr’s `normalize`
- All the tests in the project should pass
- File: `task_1/dashboard/src/schema/notifications.js, task_1/dashboard/src/schema/notifications.test.js`

## 2. Filter a normalized Schema
Copy the contents of `dashboard` from the `task_1` directory into a `task_2` directory at the root of the project

Modify the function `getAllNotificationsByUser` to use the normalized dataset

Requirements:
- You should only use one loop at this point
- You should not use `Object.keys`
- You should not have to modify the test, and the test should pass correctly
- All the tests in the project should pass
- File: `task_2/dashboard/src/schema/notifications.js`
