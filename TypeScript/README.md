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

- Given Files : `task_0/package.json, task_0/.eslintrc.js, task_0/tsconfig.json, task_0/webpack.config.js`
- Out File: `task_0/js/main.ts`

<sub>[Return to top](#typescript)</sub>