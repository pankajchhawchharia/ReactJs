51. use async await for api calls , call 2 api calls both should run parallelly, dont use promise
Sol: import React, { useEffect, useState } from 'react';

function ApiCall() {
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const api1 = fetch('https://jsonplaceholder.typicode.com/posts/1');
      const api2 = fetch('https://jsonplaceholder.typicode.com/users/2');
      const res1 = await api1;
      const res2 = await api2;
      const result1 = await res1.json();
      const result2 = await res2.json();
      setData1(result1);
      setData2(result2);
    };
    fetchData();
  }, []);
  return (
    <>
      <p>hi from api call</p>
      <h3>api 1 data</h3>
      <pre>{JSON.stringify(data1, null, 2)}</pre>
      <h2>api 2 data</h2>
      <pre>{JSON.stringify(data2, null, 2)}</pre>
    </>
  );
}
export default ApiCall;

52. flat the nested array [1,2,[3,4]] and reverse it in same function without inbuilt functions-> [4,3,2,1]  - part 2 - 22
 // Flatten the array to any depth using flat(Infinity).
  // You can also specify a number for a specific depth if needed.
  const flattenedArray = nestedArray.flat(Infinity);
  // Reverse the flattened array in place.
  const reversedArray = flattenedArray.reverse();

56. Promises Example o/p Question:

const promise1 = Promise.resolve('First')

const promise2 = Promise.resolve('Second')

const promise3 = Promise.reject('Third')

const promise4 = Promise.resolve('Fourth')

const runPromises = async () => {

  const res1 = await Promise.all([promise1, promise2])

  const res2  = await Promise.all([promise3, promise4])

  return [res1, res2]

}

runPromises()

  .then(res => console.log(res))

  .catch(err => console.log(err)) // Third

61. Why context api? - auth state(user info), navbar, sidebar, theme(light/dark)toggle, language/i18n(show app in multiple language)
sol: // New file: /MyContext.js

import React, { createContext } from 'react';
import Child from './Child';

export const DataContext = createContext();

const data = 'my context';

function MyContext() {
  return (
    <DataContext.Provider value={{ data }}>
      <Child />
    </DataContext.Provider>
  );
}
export default MyContext;
_____________________________________________________
import React, { useContext } from 'react';
import { DataContext } from './MyContext';

function Child() {
  const { data } = useContext(DataContext);

  return (
    <>
      <p>child data - {data}</p>
    </>
  );
}
export default Child;

66. responsiveness in html and css- rectangle inside that we have circle make it responsive - coding
Sol:      <div class='rectangle'>
        <div class='circle'>
        </div>
      </div>
 .rectangle{
width: 80%;
aspect-ratio:16/9;
background-color: blue;
position: relative;
margin: 20px auto;
border: 2px solid red;
border-radius: 12px;
}
.circle {
width: 30%;
aspect-ratio: 1/1;
background-color: green;
border-radius: 50%;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
}
