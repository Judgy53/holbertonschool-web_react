# React_inline_styling
In this project, we learned how to do inline styling in React.

Topics Covered :
- The differences between using a CSS file and inline styling
- How to use a CSS-in-JS tool like Aphrodite
- How to use conditions within JS to apply different styles
- How to use responsive design and make the application show a different UI according to the screen size
- How to create small animations within the app

Table of Contents :
- [0. Inline styling](#0-inline-styling)

## 0. Inline styling
- Copy over the `task_5` directory from the `0x04. React components` project (We’ll be using it as the base for this project)
- Rename the `task_5` directory to `task_0`

**Modify the `CourseListRow` component in `task_0/dashboard/src/CourseList/CourseListRow.js`:**
- Using inline styling, change the background color of a row to `#f5f5f5ab`
- Using inline styling, change the background color of a header row to `#deb5b545`
- If needed, modify the test file so every test pass

**Tips:**
- For better performances, never create and pass an object to an element directly. Use a constant instead
- Use the `isHeader` prop to easily pick the style you want to apply to the `tr` tag

**Requirement:**
- Even if the modification is small, make sure that your test suites are still passing. Especially the file `CourseListRow.test.js`
- File: `task_0/dashboard/src/CourseList/CourseListRow.js, task_0/dashboard/src/CourseList/CourseListRow.test.js`

<sub>[Return to top](#react_inline_styling)</sub>
