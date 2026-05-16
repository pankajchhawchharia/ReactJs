import React, {useState } from "react";

export default function App() {
  const [formData,setFormData] = useState({
    name: '',
    address: '',
    mobile: '',
    pincode: ''
  });
  const [errors,setErrors] = useState({});
  const handleChange = (e) => {
    const {name,value} = e.target;
    setFormData ({
      ...formData,
      [name] : value,
    });
  };

const validate = () => {
  let newErrors = {};
  if(formData.name.trim() === "") {
    newErrors.name = "name is required";
  }
  if(formData.address.trim() === '') {
    newErrors.address = "address is required"
  }
  const mobilePattern = /^[6-9][0-9]{9}$/;
  if(!mobilePattern.test(formData.mobile)){
    newErrors.mobile = "enter valid 10 digit number";
  }
  const pincodePattern = /^[1-9][0-9]{5}$/;
  if(!pincodePattern.test(formData.pincode)) {
    newErrors.pincode = 'enter valid 6 digit pincode';
  }
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
}


  const handleSubmit = (e) => {
    e.preventDefault();
    if(validate()) {
      alert('form submitted successfully');
      console.log(formData);
      setFormData({
        name: '',
        address: '',
        mobile: '',
        pincode: '',
      });
      setErrors({});
    }
  }

  return (
    <div>
<h2>React form validation</h2>
<form onSubmit={handleSubmit}>
  <div>
    <label>Name: </label>
    <input type='text'
    name='name'
    value={formData.name}
    onChange={handleChange} />
    {errors.name && <p>{errors.name}</p>}
<div>
  <label>address: </label>
  <input type='text'
  name='address'
  value={formData.address}
  onChange={handleChange}
  />
      {errors.name && <p>{errors.address}</p>}
  </div>
  <div>
    <label>mobile: </label>
    <input type='text'
    name='mobile'
    onChange={handleChange}
    value={formData.mobile} maxLength='10'/>
       {errors.name && <p>{errors.mobile}</p>}
    </div>
<div>
  <label>pincode: </label>
  <input type='text'
  name='pincode'
  value={formData.pincode}
  onChange={handleChange} maxLength='6'/>
         {errors.name && <p>{errors.pincode}</p>}
  </div>
<button type='submit' >Submit</button>

    </div>
    </form>
    <h4>submitted data</h4>
    <table>
      <tr>
        <th>name</th>
        <th>address</th>
        <th>mobile</th>
        <th>pincode</th>
        </tr>
   {formData && (
     <>
     <tr>
       <td>{formData.name}</td>
       <td>{formData.address}</td>
       <td>{formData.mobile}</td>
       <td>{formData.pincode}</td>
       </tr>
     </>
   ) }
        </table>
    </div>
  );
}
