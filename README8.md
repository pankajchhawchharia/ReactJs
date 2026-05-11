10. Explain closures and syntax
11. Stop propagation
12. Promises
13. Hoisting
14. Reconciliation
15. Difference between “Map and forEach” methods
16. Most of our projects are used in Functional components
17. Life cycle -> Componentdidmount()
18. Which hooks used to in life cycle to achieve functional components
19. hooks
20. Integrate the user name and ID in React using the given Json path: https://jsonplaceholder.typicode.com/users
21. Array of 1234 and give output by removing the even number using filter method and double the numbers(x2) with same filter value and finally sum of numbers.
[1,2,3,4] -> Array
[1,3]-> Removed even numbers
[2,6] -> Double the value(x2) of above
[8] -> Sum of number of above
22. How to handle the multiple api call’s in js.
23. typescript new features
24. React coding level
25. Array , Object , core concepts why? To use (coding explanation)
26. Middleware react how to use?
27. Real time project related max questions
28. Write the example code for call, bind, apply.
29. What are the different phases of the component lifecycle in ReactJS?
30. Difference between custom hooks and inbuilt hooks
31. What is use of custom hooks.
32. Purpose of useEffect?
33. What are the storage available in JavaScript.
34. Write the code of Redux for each steps. (From initialize to getting the store data)
35. Write test case for getting error exception of API call.
36. Difference between Mock vs spy on.
37. What are the semantic element in HTML
38. Flex in CSS. Write the code for example
39. Expectation on  Strong JavaScript
40. You have an array of objects called Products. You have name and price properties in each object. You need to create new object using spread operator and give 50% discount for price and print it. Write the code for following task: You have list of product list. You have name and price in the object. You need to create new object using spread operator and give 50% discount for price and print it.

const Products = [
  { name: 'Laptop', price: 1000 },
  { name: 'Phone', price: 500 },
  { name: 'Tablet', price: 300 }
];
// Create new array with 50% discount
const discountedProducts = Products.map(product => ({
  ...product,         // Spread operator copies name and original price
  price: product.price * 0.5  // Overwrites the price property
}));
console.log(discountedProducts);

41. How many ways we create a copy of an object and explain the difference.
42. How Map, filter & reduce work in JavaScript and how they introduced.
43. Explain the use cases of useEffect and useState in React. How the second parameter (dependency array) works in useEffect hook?
44. Redux configuration
45. Create a Form that contains First Name & last Name as input fields and print the full Name in UI.

import React, { useState } from 'react';
const FullNameForm = () => {
  // Use state to manage both input fields in one object
  const [formData, setFormData] = useState({ firstName: '', lastName: '' });
  // Handle changes for both inputs dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  return (
    <div style={{ padding: '20px' }}>
      <form>
        <input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First" />
        <input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last" />
      </form>
      <h2>Full Name: {formData.firstName} {formData.lastName}</h2>
    </div>
  );
};

46. How will you cover code coverage in our project, and do we have any experience in writing test cases using JEST?
47. what is difference between ~ & ^ which we use in the version of package.json file.
48. Explain about margin property in CSS: margin: 10px 2px 5px.
49. Difference between inline & block in the display property.
50. How will we get responsiveness in our project?
51. Explain MUI in React. How will you handle responsiveness for each device in MUI?
52. Tell me resolution size for each screen types.
53. Explain what is webpack and why we’re using in our project?
54. Explain different types of loaders used in your previous project.
55. Any Experience in Micro Frontend Architecture?
56. What are the configurations you did in webpack?
1. Tell me your technical skills & experience.
2. How many experience you have react & UI.
4. Write the code for map.
5. Difference between map & filter.
6. What the way we have to copy the object.
7. How will you get keys list from object?
8. How will you get both keys & values list from object?
9. How will you create component. Write the whole structure.
10. What is use of useState.
11. Use of useEffect and how it will work if second param is empty array.
12. Create two field first name & last name and displaying in the page while modifying.
13. Explain Redux.
14. Tell about Jest test case and explain what are the things you have worked.
15. what is difference between ~ & ^ which we use in the version of package.json file.
16. What is margin? will it give space within box or outside box.
