# TypeScript
In this project, we learned how to use typescript.

Topics Covered:
- Basic types in Typescript
- Interfaces, Classes, and functions
- How to work with the DOM and Typescript
- Generic types
- How to use namespaces
- How to merge declarations
- How to use an ambient Namespace to import an external library
- Basic nominal typing with Typescript

Table of Contents:
- [0. Creating an interface for a student](#0-creating-an-interface-for-a-student)
- [1. Let's build a Teacher interface](#1-lets-build-a-teacher-interface)
- [2. Extending the Teacher class](#2-extending-the-teacher-class)

## 0. Creating an interface for a student
Write your code in the `js/main.ts` file:

- Write an interface named `Student` that accepts the following elements:
    - `firstName`: string
    - `lastName`: string
    - `age`: number
    - `location`: string
- Create 2 students variables called `student1` and `student2` and store them into an array named `studentsList`
- Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
- Each row should contain the first name of the student and the location

**Requirements:**

- When running, Webpack should return `No type errors found`.
- Every variable should use TypeScript when possible.

---
- Given Files : `task_0/package.json, task_0/.eslintrc.js, task_0/tsconfig.json, task_0/webpack.config.js`
- Out File: `task_0/js/main.ts`

<sub>[Return to top](#typescript)</sub>

## 1. Let's build a Teacher interface
Write your code in the `task_1/js/main.ts` file:

- Write an interface named `Teacher` that accepts the following elements:
    - `firstName`: string - can only be set during initialization of an object of this interface
    - `lastName`: string - can only be set during initialization of an object of this interface
    - `fullTimeEmployee`: boolean
    - `yearsOfExperience`: number - optional
    - `location`: string
    - Add the possibility to add any attribute to the `Teacher` object like `contract(boolean)` without specifying the name of the attribute:
        - Property should be a string
        - Type of this property can be anything

**Requirements:**

- When running, Webpack should return No type errors found.
- Every variable should use TypeScript when possible.

---
- Given Files : `task_1/package.json, task_1/.eslintrc.js, task_1/tsconfig.json, task_1/webpack.config.js`
- Out File: `task_1/js/main.ts`

**Example:**

```ts
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// should print
// Object
// contract: false
// firstName: "John"
// fullTimeEmployee: false
// lastName: "Doe"
// location: "London"
```
<sub>[Return to top](#typescript)</sub>

## 2. Extending the Teacher class
Write an interface named `Directors` that extends `Teacher`. It requires an attribute named `numberOfReports(number)`

---
- Out File: `task_1/js/main.ts`

Example:

```ts
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// should print
// Object
// firstName: "John"
// fullTimeEmployee: true
// lastName: "Doe"
// location: "London"
// numberOfReports: 17
```
<sub>[Return to top](#typescript)</sub>
