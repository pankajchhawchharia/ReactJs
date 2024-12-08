import React,{useState, useEffect} from "react";

export default function App () {
  const apiLink = "https://jsonplaceholder.typicode.com/users";
  const [user,setUser] = useState([]);
  useEffect (()=> {
    function fetchApi() {
    fetch('apiLink')
    .then((res)=>res.json())
    .then((data)=>setUser(data)
          .catch((error)=>console.log("error:",error);
    }
    fetchApi();
  },[]);

return(
  <div className="App">
  <h1>Hello</h1>
  {user.map((data,i)=>{
    return <p key={i}>{data.firstName}</p>
            })
}
  </div>
  );
}
