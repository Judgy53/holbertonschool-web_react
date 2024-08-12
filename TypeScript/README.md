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
- [3. Printing teachers](#3-printing-teachers)
- [4. Writing a class](#4-writing-a-class)
- [5. Advanced types Part 1](#5-advanced-types-part-1)
- [6. Creating functions specific to employees](#6-creating-functions-specific-to-employees)
- [7. String literal types](#7-string-literal-types)

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

## 3. Printing teachers
Write a function `printTeacher`:

- It accepts two arguments `firstName` and `lastName`
- It returns the first letter of the firstName and the full lastName
- Example: `printTeacher("John", "Doe") -> J. Doe`

Write an interface for the function named `printTeacherFunction`.

---
- Out File: `task_1/js/main.ts`

<sub>[Return to top](#typescript)</sub>

## 4. Writing a class
Write a Class named `StudentClass`:
- The constructor accepts `firstName(string)` and `lastName(string)` arguments
- The class has a method named `workOnHomework` that return the string `Currently working`
- The class has a method named `displayName`. It returns the firstName of the student
- The constructor of the class should be described through an Interface
- The class should be described through an Interface

Requirements:
- You can reuse the Webpack configuration from the previous exercise to compile the code.
- When running `npm run build`, no TypeScript error should be displayed.
- Every variable should use TypeScript when possible.

---
- Out File: `task_1/js/main.ts`
- 
<sub>[Return to top](#typescript)</sub>

## 5. Advanced types Part 1
Create the `DirectorInterface` interface with the 3 expected methods:

- `workFromHome()` returning a string
- `getCoffeeBreak()` returning a string
- `workDirectorTasks()` returning a string

Create the `TeacherInterface` interface with the 3 expected methods:

- `workFromHome()` returning a string
- `getCoffeeBreak()` returning a string
- `workTeacherTasks()` returning a string

Create a class `Director` that will implement `DirectorInterface`

- `workFromHome` should return the string `Working from home`
- `getToWork` should return the string `Getting a coffee break`
- `workDirectorTasks` should return the string `Getting to director tasks`

Create a class `Teacher` that will implement `TeacherInterface`

- `workFromHome` should return the string `Cannot work from home`
- `getCoffeeBreak` should return the string `Cannot have a break`
- `workTeacherTasks` should return the string `Getting to work`

Create a function `createEmployee` with the following requirements:

- It can return either a `Director` or a `Teacher` instance
- It accepts 1 arguments:
    - `salary`(either number or string)
- if `salary` is a number and less than 500 - It should return a new `Teacher`. Otherwise it should return a `Director`


---
- Given Files : `task_2/package.json, task_2/.eslintrc.js, task_2/tsconfig.json, task_2/webpack.config.js`
- Out File: `task_2/js/main.ts`

Expected result:

```ts
console.log(createEmployee(200));
Teacher
console.log(createEmployee(1000));
Director
console.log(createEmployee('$500'));
Director
```

<sub>[Return to top](#typescript)</sub>

## 6. Creating functions specific to employees
Write a function `isDirector`:
- it accepts `employee` as an argument
- it will be used as a type predicate and if the employee is a director

Write a function `executeWork`:
- it accepts `employee` as an argument
- if the employee is a Director, it will call `workDirectorTasks`
- if the employee is a Teacher, it will call `workTeacherTasks`

---
- Out File: `task_2/js/main.ts`

Expected result:

```ts
executeWork(createEmployee(200));
Getting to work
executeWork(createEmployee(1000));
Getting to director tasks
```

<sub>[Return to top](#typescript)</sub>

## 7. String literal types
Write a String literal type named `Subjects` allowing a variable to have the value `Math` or `History` only. Write a function named `teachClass`:
- it takes `todayClass` as an argument
- it will return the string `Teaching Math` if `todayClass` is `Math`
- it will return the string `Teaching History` if `todayClass` is `History`

---
- Out File: `task_2/js/main.ts`

Expected result:

```ts
teachClass('Math');
Teaching Math
teachClass('History');
Teaching History
```

<sub>[Return to top](#typescript)</sub>
