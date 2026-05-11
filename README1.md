# ReactJs
Here is a ReactJs program
1. Flexbox and grid
2. React optimization hooks: useMemo, useCallback, useTransition, React Memo
3. Class based components in ReactJS
4. useState and useEffect
5. Flexbox
6. Performance optimization with Code Splitting
7. Higher order components
8. React Services, Working with Axios, Fetch Data from 3rd party API.
9. Dependency Injection
10. Exception Handling and Logging, Error Boundaries
11. Routing and Navigation, Dynamic Routing Parameterized routes, Child routes, Route guards
12. Securing API calls via tokens or cookies
13. Controlled Forms
14. Validate the form using Yup
15. Redux core concepts, Store , Actions, Reducers
16. Connect, useSelector, useStore, useDispatch
17. Redux Middleware
18. Testing React Applications with Jest/Enzyme
19. Running Test, Creating test files, Jest Global, Setup and Teardown, Async Testing
20. React testing library
21. React Hooks
22. Context API, UseContext, API provider
23. useReducer
24. Prop Drilling issue
25. Conditional rendering
26. Performance optimization
27. Component Life Cycle - Life Cycle methods
28. Component Interaction
29. Functional Components over Class Components
30. Managing Data in a component using states
31. Passing Data between the component using props
32. Json
33. Html
34. Ajax
35. Xml
36. SOAP (Simple Object Access Protocol)
37. Ftp
38. Http
39. CORBA is Common Object Request Broker Architecture
40. EC2 is Amazon Elastic Compute Cloud
41. S3 is Simple Storage Service
42. Data Structures and Algorithms
66. Create a Registration component with name, age. how do you design a component? how do you manage states in these components? Design Form using Formik library.

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// Validation Schema
const CustomerSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  position: Yup.string().required('Position is required'),
  salary: Yup.number().typeError('Salary must be a number').positive('Salary must be positive').required('Salary is required'),
});
const App = () => {
  const handleSubmit = (values) => {
    console.log('Customer Details:', values);
    alert("Form Submit Success")
    // You can connect this to an API call or state update
  };
  return (
    <div className="max-w-md mx-auto mt-8 p-6 border rounded shadow">
      <h2 className=" text-xl font-bold mb-4 text-center">Add Customer</h2>
      <Formik
        initialValues={{ name: '', email: '', position: '', salary: '' }}
        validationSchema={CustomerSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          {/* Name */}
          <div className="mb-4">
            <label className="block mb-1" htmlFor="name">Name</label>
            <Field name="name" type="text" className="w-full p-2 border rounded" />
            <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
          </div>
          {/* Email */}
          <div className="mb-4">
            <label className="block mb-1" htmlFor="email">Email</label>
            <Field name="email" type="email" className="w-full p-2 border rounded" />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
          </div>
          {/* Position */}
          <div className="mb-4">
            <label className="block mb-1" htmlFor="position">Position</label>
            <Field name="position" type="text" className="w-full p-2 border rounded" />
            <ErrorMessage name="position" component="div" className="text-red-500 text-sm" />
          </div>
          {/* Salary */}
          <div className="mb-4">
            <label className="block mb-1" htmlFor="salary">Salary</label>
            <Field name="salary" type="text" className="w-full p-2 border rounded" />
            <ErrorMessage name="salary" component="div" className="text-red-500 text-sm" />
          </div>
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
            Add Customer
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default App;
