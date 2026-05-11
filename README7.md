75. how do you handle performance of the page- code splitting, lazy loading, react.memo, useMemo, useCallback, webpack, avoid memory leaks, lighthouse, ssr
76. webworkers- offload cpu intensive tasks so the main thread stays responsive. Web Workers in React provide a mechanism to execute JavaScript code
 in a separate background thread, distinct from the main thread responsible for rendering the UI and handling user interactions. This approach is
 beneficial for offloading computationally intensive tasks, preventing the main thread from becoming blocked and ensuring a smooth, responsive
 user interface. Improved UI Responsiveness, Enhanced Performance, Better User Experience react optimization techniques - react.memo, useMemo, useCallback, code splitting, lazy loading(React.lazy,Suspense),throttle, debounce, key, web workers
77. service-worker.js - A Service Worker in a React application is a JavaScript file that runs in the background, separate from the main thread
 of the web page,enabling features like offline access, push notifications, and background data synchronization, Offline Support and Caching,
Performance Enhancement, Background Tasks, Lifecycle Management.
storages in html - web storage(local storage, session storage,5mb,cookies 4 kb,indexed DB(No SQL),cache storage(service workers)
78. what is sonar qube vulnerability - bugs, code smells, code duplication, security issues,xss,weak cors policies
79. how do you handle security of the application - <PrivateRoute></PrivateRoute>,use csp headers,csrf protection tokens,xss,snyk,sonar qube,https
80. lazy loading in react for login form username and password, using suspense, lazy
84. <!DOCTYPE html> in html5 If we are not using What will happen app will  work or not - quirks mode, css layout effect, cross browser inconsistency
85. Use of key in list how it works
86. custom hook - clean up components by moving logic out and view separate, code reuse, easier testing, organized
87. html and css related like box model
102. from css/html metatag - character encoding(charset=utf-8),description,keywords,author,viewport(width=device-width, initial-scale=1.0)
103. webcomponents - custom html tags or elements, shadow dom, html templates
104. canvas - draw graphics using js,shapes,lines,text,images,animations,charts,games,graphs
107. coding : filter list and use debounce
108. check whether a string is palindrome - part 1 - 343
109. create custom event handler
110. project structure(src folder structure) in prev company
112. deep copy and shallow copy - part 2 - 63
113. any scenario where we use deep copy- updating deeply nested state in react,avoiding side effects in redux reducers,copying json payloads,form builder
114. debouncing/debounce - wait until user stops triggering an event(search input, window resize, auto saving form data),only run the function after a delay
115. throttling - limit function to run once in a set time(scroll,mouse move,api rate limit)
116. event loop - call stack(lifo),web api, callback/task queue, microtask/macrotask queue
117. async(analytics or third party script - as soon as ready) and defer(your own script - after html parsed -  after dom is ready ) in script tag in html
118. Work done and tech used in previous projects
119. What is the most challenging bug u have faced in your previous project and how u were able to do it.
120. Why react js- component based architecture, virtual dom(better performance)
122. React Routes - useParams(),useNavigate(),Link,BrowserRouter as Router,Routes,Route,PrivateRoute,path="*"
124. How do u  build e-commerce site - src/ - components,pages,redux,server - models,routes,controllers,
126. React.memo - HOC
const Child = React.memo(({name}) => {
console.log('child rendered');
return <div>{name}</div>
});
127. filter the array remove duplicates(const unique = [...new Set(arr)]; and find second largest Number - part 1 - 412
128. pure function - always return the same output for same input,has no side effects, reducers(redux,useReducer),utility,helper,map,filter,reduce
129. call,apply,bind
130. Ssr- faster initial load,better seo,dynamic pages,send pre rendered html from server,rendering your component on the server
131. How to stop rerenders - React.memo(),useCallback(),useMemo(),key in li,
132) find non repetitive chars in string in js- part 2 - 295
133) different type of statemanagement- useState,useReducer,redux,context api,react query
134. use of package.json - metadata(store basic info about project),manage dependencies,devDependencies,scripts,versioning and license,main,module,engines
137. Will you accept feedback from others ?
138. How you check the code quality- combining automated tools, manual inspections, and collaboration within the development team, SonarQube, ESLint, Unit Tests
139. How you handle the tight deadlines ?
140. Explain your earlier project and roles and responsibilities ?
141. what was your previous project ?
142. explain the scrum you followed in last project ?
143. Key Responsibilities:

	• Develop and maintain web applications using HTML5, CSS, and JavaScript.
	• Utilize React, Redux, and Node.js to build and enhance front-end solutions.
	• Collaborate with onshore counterparts, ensuring reasonable overlap time and attending onshore calls.
	• Address critical production issues and meet deadlines as required.
	• 7+ years of hands-on UI engineering experience.
	• Expertise in front-end development using JavaScript, React, Redux, Node.js, and CSS.
	• Extensive experience with common front-end development tools.
	• Knowledge of modern web architectures and asynchronous service-to-service communication.
	• Strong problem-solving and troubleshooting skills.
	• Experience in Agile methodologies and DevOps tools (GIT, Jenkins).
          Excellent team player with strong verbal & written communication skills.


144. Please read Bhomi flow 
145. basic awareness to integrations 
146. Use Callback
147. React hooks
148. Lexical scope
149. Have you Worked on html , css
150. Performance optimization
151. Previous project experience
152. Restrict object from updating
153. Solo project experience
154. React Memo
155. Tools used for code performance.
156. How to create webpage using HTML,CSS
157. New technology bamboozle
158. Figma designs.
159. code optimization process.
160. Reduce() in javascript.
161. hoisting in javascript.
162. how to create html page.
163. how to make page responsive.
164. Regarding roles and responsibility of previous project
165. How to work as single developer
166. what are the process after creating html page to get approval from
1. Flexbox and property
2. What is grid?
3. Difference between space around and space even
4. What is the position property
5. In CSS, browser compatibility issues -> how to resolve it.
6. Example of pseudo class and element
7. How do you create responsive design
8. What are semantic elements
9. Difference between Session storage and local storage
