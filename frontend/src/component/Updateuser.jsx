import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function Updateuser() {
  const  [inputUser, setinputUser] = useState({
    name:"",
    Email:"",
    password:""
  })

 
  const handleChnage = (event) => {
    setinputUser(
      {
        ...inputUser,
        [event.target.name]:event.target.value
      }
    )
  };
  const handlesubmit = async (event) => {
    event.preventDefault();
    console.log(inputUser);
    const res = await axios.put(
      `http://localhost:3000/updateuser/${id}`,
      inputUser
    );
    console.log(res);
    if (res.status === 200) {
      window.location = "/";
    }
    // fetchAllUser();
  };

  const {id} = useParams();
  const fetchSingledata = async () => {
    const res =await axios.get(`http://localhost:3000/read/${id}`);
    console.log(res);
    setinputUser(res.data);
  };

  useEffect(() => {
   fetchSingledata()
  }, []);


  return (
    <div className="w-2/3 mx-auto mt-5">
    <form onSubmit={handlesubmit}>
        <h1>Update User</h1>
        <div className="">
          <label className=" text-sm text-gray-500 ">Name</label>
          <input
            type="text"
            name="name"
            className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent  border-2 border-gray-300"
            placeholder="Enter name"
            required
            value={inputUser.name}
            onChange={handleChnage}
          />
        </div>
        <div className="">
          <label className=" text-sm text-gray-500 ">Email</label>
          <input
            type="Email"
            name="Email"
            className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent  border-2 border-gray-300"
            placeholder="Enter email "
            required
            value={inputUser.Email}
            onChange={handleChnage}
          />
        </div>
        <div className="">
          <label className=" text-sm text-gray-500 ">Password</label>
          <input
            type="password"
            name="password"
            className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent  border-2 border-gray-300"
            placeholder="Enter Password "
            required
            value={inputUser.password}
            onChange={handleChnage}
          />
        </div>

        <div className="flex justify-center my-4">
          <button type="submit" className="px-4 py-2 bg-yellow-400 rounded-sm">
            update User
          </button>
        </div>
      </form>
      </div>
  )
}

export default Updateuser