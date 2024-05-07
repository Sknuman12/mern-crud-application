import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'

function Readuser() {
const {id} = useParams();

const [usersingle, setsingleData] = useState([]);
const fetchSingledata = async () => {
  const res =await axios.get(`http://localhost:3000/read/${id}`);
  console.log(res);
  setsingleData(res.data)
};
useEffect(() => {
 fetchSingledata()
}, []);

  return (
    <div className="w-2/3 mx-auto mt-5">
  

<div className="relative overflow-x-auto shadow-md">
<table className="w-full text-lg text-center text-gray-500 ">
 <thead className="text-[17px] text-gray-700 uppercase bg-gray-500">
   <tr>
     <th scope="col" className="px-6 py-3">
       SN.
     </th>
     <th scope="col" className="px-6 py-3">
       Name
     </th>
     <th scope="col" className="px-6 py-3">
       Email
     </th>
     <th scope="col" className="px-6 py-3">
       Password
     </th>
     <th scope="col" className="px-6 py-3">
       Actions
     </th>
   </tr>
 </thead>
 <tbody>
   
 
<tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
           <th
             scope="row"
             className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
           >
              
         1
           </th>
           <th
             scope="row"
             className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
           >
            {usersingle.name}
           </th>
           <td className="px-6 py-4"> {usersingle.Email}</td>
           <td className="px-6 py-4"> {usersingle.password}</td>
           <td className="px-6 py-4">
        
           </td>
         </tr>
 </tbody>
</table>
</div>
</div>
  )
}

export default Readuser