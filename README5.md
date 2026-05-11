1. What is Prototype inheritance ?
3. What is  the difference b/w map & filter ?
6. How many ways we can manage state in react?
7. What are React Actions? and What do they return? useActionState, useFormStatus, useOptimistic
8. What is significant of useMemo and useCallback ?
useMemo in React is a hook that helps optimize performance by "remembering" the result of a calculation.
9. WHat happen if dependencies changes with useCallback hook, The function will be re-create or it will be re-executed ?
10. What is callback Hell ?
11. What is the limitations of useContext ?
12. What is the difference b/w redux and useContext ?
13. Why we required to use middleware in react ? 
14. In my website, I want to display a advertisement and it should be visible everytime on same place if I scroll the page. How we can do this using HTML and CSS ?
17. Justify-content property
18. Ellipsis in CSS
19. White-space:nowrap
20. Var, let and const which is function scope and block scope explain with example
21. Find a string is palindrome or not
23. How do you handle errors in javascript
24. Event Bubbling and Event Capturing	
25. Event.preventDefault and event.stopPropagation
26. Is spread operator is shallow copy or deep copy. Examples for deepcopy
27. How can we improve performance of a Application
29. React.Memo
30. How to achieve lifecycle methods in functional components (explanation with useEffect syntax)
31. useLayoutEffect Hook
32. conditional rendering
33. context api
34. Redux
35. Custom hook
36. What is the role of suspense in lazy loading
37. Web Workers
38. Controlled and uncontrolled components
40. How can we communicate two applications using microfrontend.
41. Deployment Process in previous projects.
42. How to fix a bug, if we found it in production.
43. How you are dealing with security of application.
45. Pure function.
46. Function currying (usecase) - partial application, functional composition, customizable event handlers, reusability, readability
function add(a) {
                  return function(b) {
                                       return a + b;
                                     }
                }
console.log(add(2)(3));
47. List out some Higher order functions.map,filter,reduce,forEach,some,every,find,sort,setTimeout,setInterval,Function.prototype.bind, Currying, Memoization, React.memo, React.forwardRef, React.cloneElement
48. Generator function in js
49. How arrow functions are different from regular functions.
50. Destructuring assignment in js

const numbers = [1,2,3];
const [a,b,c] = numbers;
console.log(a,b,c);

const users = {name: "alice", age: 23};
const {name,age} = users;
console.log(name,age);

51. Tree shaking in js - reduce bundle size, improve performance, speed up page loads- the bundler like webpack.config.js, rollup, esbuild, vite
52. React.memo and useMemo in react
53. Object.freeze and Const in js
54. What differences you observed between var and let.
55. Event delegation
57. How do you handle status codes if api requests fails.
58. CSS pre processors
59. State management (Redux concepts)
60. Middleware(Thunk)
61. Mixing keyword in css
62. HTML - storage type (local & session storage)
63. how to delete one cookie out of all - document.cookie = "username=;expires= thu,01 jun 1970 00:00:00 utc;path=/;";
64. HTML - is it compiler language(c++) or interpreter language(python) - Explain - markup language(html)
68. In a Single Page Application (SPA), how do you navigate to different sections within the same page and transition to another page or route?
69. How can you create an alert-style popup using only CSS?
70. Media queries in CSS.
71. Positions in CSS.
72. How to optimize any project performance.
73. Which tool did you use to measure website metrics, and which specific areas did you focus on?
74. What is search engine optimization.
75. Which state management library you have used.
76. Have you used any custom hooks in your project? If so, could you explain which ones and what they were used for?
77. How to use routing in React.
81. Hoisting
82. Difference useMemo and useCallback.
83. Redux process
84. useSelector and useDispach hooks.
85. What is package.json and use 
86. what is pipeline.yml(pipeline.yaml) file and use.
87. fetch Api
88. html: what is the use doctype in html. if you miss it what will happen?
89. meta tag?
90. what is use of sudo class vs sudo element?
91. what is z-index?
92. flex vs grid
93. difference position relative and absolute?
94. windows scroll - size should be able to modify
1. Jwt token and how we handle on react 
sol: json web token - header(algorithm & token Type).payload(user iD & roles).signature(verifies the token).
A JSON Web Token (JWT) is a secure, stateless method for transmitting information between a client and a server. It consists of three parts separated by dots: the Header (defines the algorithm and token type), the Payload (contains user data like IDs and roles), and the Signature (verifies that the token hasn't been tampered with)
2. Create a context and access that context in a component
3. Create a timer with start, stop and reset button
4. UseMemo, useCallback, useEffect, useState, useContext, useReducer, useRef
