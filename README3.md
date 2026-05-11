11. Network traffic
12. postman devtool
13. List kind of concept in js
14. radio button 
15. navigation 
16. Security and improvement
17. css optimization
18. What is primitive type in js?
19. var obj1 = {    x:  43,    
		    y:  "Hello world!",    
		    z: function() {       
                                    return this.x;    
                                  } 
               }
obj1.x returns 43.
obj1.z() returns 43.

20. Es5 and es6
1. What is a difference between async and await  - asynchronous call and await will wait for the result until the response will come
2. Destructing of array and object, what is the use of it, helping in current project. Developer friendly for writing minimum code. Take the object which is required from the array of object. Spread operator bind the object in the variable.
3. Use effect and use state
4. Maintain state in react- global state, context api
5. What is the relevance of testing in react - enzyme, mocka , react testing library, sonar qube, stanbul
6. Key features of react
7. Library and framework - organise in function Reoccurring problem in development for framework
8. Props and state object - who will create the object - react container
9. What is the difference between controlled and uncontrolled component
10. React - bootstrap , chakra ui,
11. What is the flux architecture - action -> store, where flux implementation - > ecommerce
12. Role of webpack - bundles thing, default config, can we override the webpack file - yes , in root of project, package.json, webpack .json, line of code
13. If u want to optimize the bundle. - chunkins, in webpack we can provide the configuration, small chunks , whenever the code bundling, scss bundling, polyfills , source file
	  Bulid / Project Management/ Deployment tools in Market
	  1. Apache Ant :-->  Build / Deploy Tool 
	  2. Apache Maven :--> Dependency Mgmt / Build / Deploy 
	  3. Gradle :--> Dependency Mgmt / Build Deploy 
	  4. Docker :-> Build / Deploy / Containerized   (Could Tool)
          5. Apache eclipse :-- Java Development // Build & Development Tool 
14. Http and soap , rest web services
15. Multiple git web services , all are hosted in git , git lab, git hub, web hook notification -  http ,ftp, jenkins inside the git.
16. Maven - backend installation
17. Jdk - backend
18. react router lazy loading suspense 
sol: const MyLazyComponent = React.lazy(() => import('./MyLazyComponent'));
 
    import React, { Suspense } from 'react';
 
    function App() {
      return (
		<div>
			<Suspense fallback={<div>Loading...</div>}>
				<MyLazyComponent />
			</Suspense>
		</div>
   	     );
    }
1. Organised way, readable manner, functional approach and Functional and object based approach
2. Typeof object in function
3. Callback mechanism how is it useful, why, when use and when we don’t use callback what will happen - to make the thread alive and live output, and give the expected result.
4. Let vs var - var is the oldest keyword, traditional js vanila js, let is more powerful, replacement of var. because let is setting the scope on all level, and it has global , functional and block level, In var Block level scope is not there.
5. What is difference between arrow and normal function - anonymous function - function expression, don’t have there own this, var userFun = () => {}, var arrFun = function () {}
6. Why typescript was evolved over js - enum, type safety, js is core language and beautiful manner, ts do the implement manner, add on features, data types , interface, annotation, modifiers, enums.
7. What is closures in js - inner function is a closure of outer function, it is a combination of function lexical env inner function keeping access to outer function. count will be the closure for inner function.
	function outer() {
				let count = 0;
				return function inner() {
				return count ++;
			}
var counter = outer();
console.log(counter());
