5. Performance optimization techniques in JS and reactjs
6. hoisting - moving declaration at the top of the current scope, var, function,(let, const, function expression, arrow function, class)
7. Redux(store(createStore)-actions-reducers-dispatch) vs Redux toolkit(configureStore, createSlice, createAsyncThunk)
8. setinterval without given any time how much it will take - 0 milli seconds(chrome , firefox - 4ms) - timer clamping
11. Es6 features(let and const, arrow functions, template literals, Destructuring, default parameters, rest and spread operators, promises, modules(import/export))
12. Diff normal and arrows function
14. Let, var & const difference
24. How will you handle state in react application
25. useRef-access dom elements directly, store previous values, hold mutable values, ref={inputRef}, const inputRef = useRef(null);inputRef.current.focus();
26. Forwardref // receive a ref from its parent and forward it to a child element
29. console.log(typeof null); // object
30. closure - data privacy, encapsulation, maintaining state, writing modular code
38. display flex, grid
39. pseudo-classes (:) hover, focus; pseudo-elements (::) before, after
40. position: fixed; sticky
42. Pure Components- do not re-render unless their props or state change, React.PureComponent
43.  What is  the difference b/w map & filter ?
48. <div><div></div></div> how to center inside div using display:flex, justify-content: center, align-items: center
53. one react problem which display the nested array of objects
54. Closure where i used in my project? - in setTimeout and setInterval, callbacks, debouncing input, custom Hooks, useCallback
55. how to increase the performance of the JS Project?
5. Multiple ways to write and use promises in javascript.
avoid callback hell
reject() - Returns a rejected promise
resolve() - Returns a resolved promise
withResolvers() - Returns an object with:
const { promise, resolve, reject } = Promise.withResolvers();
// Now you can call resolve() or reject() anywhere in your code

fetchData()
  .then(processData)
  .then(displayData)
  .catch(handleError) // Catches errors from any of the above
  .finally(() => console.log("Done"));

async function getData() {
                           try {
                                const data = await fetchData();
                                console.log(data);
                               } catch (error) {
                                                console.error(error);
                                               }
                         }

Sol: Pending (initial), Fulfilled (successful), or Rejected (failed)
const myPromise = new Promise((resolve, reject) => {
                                                    setTimeout(() => resolve("Success!"), 1000);
                                                   });

     myPromise.then((value) => {
                                console.log(value); // Prints "Success!" after 1 second
                               });

Promise.all(iterable): Fulfills when all promises succeed; rejects immediately if any fail.
Promise.allSettled(iterable): Waits for all promises to finish (success or failure) and returns their individual outcomes.
Promise.any(iterable): Fulfills as soon as the first promise succeeds; rejects only if all fail.
Promise.race(iterable): Settles as soon as the first promise either fulfills or rejects.
 
57. callback(difficult to chain, callback hell, no built in error handling) vs Promises why we use? what is the difference.
58. Explain about promises with real-time Example.
59. what Higher order Component where i used in my project? why used it?
60. How the virtual dom Work?
62. differences between Context APi vs redux - e-commerce cart, large form, api driven data, large data sets
63. Error Boundaries
64. how to handle traffic when most of the user hit the url at same time lakhs of users like flipkart and amazon - crash or delay

- scalable backend infrastructure, use load balancer,- distribute incoming traffic across multiple servers,
- prevent any one server from getting overloaded
- auto scaling (aws ec2) - automatically adds more servers when cpu / ram crosses thresholds
- cdn and server side caching- reduces server load and speeds up response time
- client side caching - localStorage
- lazy loading / infinite scroll - load data in chunks rather than all at once

65. create a custom polyfills for js? Array.prototype - for supporting older browser
2. How to create custom array method like in-build array method in javascript ? forEach, map, filter, find, some, every, includes, reduce, flat 
68. how do you do authentication/authenticate in front end /login and authorization in your application in reactjs
69. token will have expiry time how will you handle it - redirect to login in 15 minutes

Authorization: `Bearer ${jwt-token}`
const isTokenExpired = (token) => {
                                    const decoded = jwt_decode(token);
                                    const now = Date.now() / 1000;
                                    return decoded.exp < exp;
                                  }
 if(!token) return <Navigate to='./login' />;
--------------------------------------------------
71. how you handle external browser link from current application or how to handle cross browser compatible issues

<a href='https://example.com' target='_blank' rel='noopener no referrer'> visit </a>

72. microfrontend - (module federation (webpack 5)), (iframe),

- each team can deploy without affecting others.
- teams can use react, angular in the same product.
- better for large team working for large app.
- a bug in one micro app wont break the whole ui
- parallel development across teams

73. tell me about yourself
74. localstorage size - 5mb, only strings can be stored, data is synchronous, data is not sent to the server with request, better for non sensitive data
