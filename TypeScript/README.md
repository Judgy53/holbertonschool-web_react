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
- [8. Ambient Namespaces](#8-ambient-namespaces)
- [9. Namespace \& Declaration merging](#9-namespace--declaration-merging)

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

## 8. Ambient Namespaces
The first part of this will require that you build an `interface` and a `type`. Inside a file named `interface.ts`:
- Create a type `RowID` and set it equal to `number`
- Create an interface `RowElement` that contains these 3 fields:
    - `firstName`: `string`
    - `lastName`: `string`
    - `age?`: `number`

You are building the next part of the application architecture. The goal is to save the entities to a database. Because of time constraints, you can’t write a connector to the database, and you decided to download a library called `crud.js`. Copy this file into the `task_3/js` directory.

Here it is

```js
export function insertRow(row) {
  console.log('Insert row', row);
  return Math.floor(Math.random() * Math.floor(1000));
}

export function deleteRow(rowId) {
  console.log('Delete row id', rowId);
  return;
}

export function updateRow(rowId, row) {
  console.log(`Update row ${rowId}`, row);

  return rowId;
}
```

Write an ambient file within `task_3/js`, named `crud.d.ts` containing the type declarations for each crud function. At the top of the file import `RowID` and `RowElement` from `interface.ts`.

In `main.ts`

- At the top of the file create a [triple slash directive](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html "triple slash directive") that includes all the dependencies from `crud.d.ts`
- Import the `rowID` type and `rowElement` from `interface.ts`
- Import everything from `crud.js` as `CRUD`

Create an object called `row` with the type `RowElement` with the fields set to these values:

- `firstName`: `Guillaume`
- `lastName`: `Salva`

Create a `const` variable named `newRowID` with the type `RowID` and assign the value the `insertRow` command.

Next, create a `const` variable named `updatedRow` with the type `RowElement` and update `row` with an age field set to `23`

Finally, call the `updateRow` and `deleteRow` commands.

Requirements:

- When running `npm run build`, no TypeScript error should be displayed.
- Every variable should use TypeScript when possible.
- The main file and the ambient file should both import the types defined in the interface file.
- You can easily test your ambient file by looking at the intellisense of your IDE when using the 3rd party functions.

---
- Given Files: `task_3/package.json, task_3/.eslintrc.js, task_3/tsconfig.json, task_3/webpack.config.js`
- Out Files: `task_3/js/main.ts, task_3/js/interface.ts, task_3/js/crud.d.ts`

Expected result:

```ts
const obj = {firstName: "Guillaume", lastName: "Salva"};
CRUD.insertRow(obj)
// Insert row {firstName: "Guillaume", lastName: "Salva"}

const updatedRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };
CRUD.updateRow(newRowID, updatedRow);
// Update row 125 {firstName: "Guillaume", lastName: "Salva", age: 23}

CRUD.deleteRow(125);
// Delete row id 125
```

<sub>[Return to top](#typescript)</sub>

## 9. Namespace & Declaration merging
In `task_4/js/subjects`:
- Create a file `Teacher.ts` and write a `Teacher` interface in a namespace named `Subjects`.
    - the interface requires `firstName` and `lastName` as string
- Create a file `Subject.ts` and write a `Subject` class in the same namespace named `Subjects`.
    - the class has one attribute `teacher` that implements the `Teacher` interface
    - the class has one setter method `setTeacher` that accepts a `teacher` in argument (and as setter, set the instance attribute `teacher` with it)
- Create a file `Cpp.ts` and make the following modifications in the same namespace.
    - Using declaration merging, add a new optional attribute `experienceTeachingC` (number) to the `Teacher` interface
    - Create a class `Cpp` extending from `Subject`
    - Write a method named `getRequirements` that will return a string `Here is the list of requirements for Cpp`
    - Write a method named `getAvailableTeacher` that will return a string `Available Teacher: <first name of teacher>`
    - If the teacher doesn’t have any experience in teaching C, then the method should return a string `No available teacher`
- Create a file `React.ts` and write a `React Class` in the same namespace.
    - Add a new attribute `experienceTeachingReact?` (number) to the `Teacher` interface
    - In the class, write a method named `getRequirements` that will return a string `Here is the list of requirements for React`
    - Write a method named `getAvailableTeacher` that will return a string `Available Teacher: <first name of teacher>`
    - If the teacher doesn’t have any experience in teaching React, then the method should return a string `No available teacher`
- Create a file `Java.ts` and write a `Java Class` in the same namespace.
    - Add a new attribute `experienceTeachingJava?` (number) to the `Teacher` interface
    - In the class, write a method named `getRequirements` that will return a string `Here is the list of requirements for Java`
    - Write a method named `getAvailableTeacher` that will return a string `Available Teacher: <first name of teacher>`
    - If the teacher doesn’t have any experience in teaching Java, then the method should return a string `No available teacher`

---
- Given Files: `task_4/package.json, task_4/tsconfig.json`
- Out File: `task_4/js/subjects/Cpp.ts, task_4/js/subjects/Java.ts, task_4/js/subjects/React.ts, task_4/js/subjects/Subject.ts, task_4/js/subjects/Teacher.ts`

<sub>[Return to top](#typescript)</sub>
