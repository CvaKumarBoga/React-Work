import React from 'react'
import axios from 'axios';
import { useState } from 'react';


var api = axios.create({
    BaseURL : "http://localhost:8094/school/"
})

 const Readdata = () => {

    const [data,setdata] =  useState([]);
    const [id,setid] = useState("");
    const [sobj,setsobj]= useState({sid:"",fname:"",lname:"",dob:""})
    const [msg,setmsg]= useState("");

    
const read = async ()=>{
    try{
     await axios.get("http://localhost:8094/school/")
     .then(response =>
    setdata(response.data));
 
    }catch(err){
         console.log(err);
    }

}

const read1 = async ()=>{
    try{
    const response = await axios.get("http://localhost:8094/school/get/"+id);
    let  arr = [];
    arr.push(response.data)
    setdata(arr);
     console.log(arr);
    }catch(err){
         console.log(err);
    }

}
const read2 = async ()=>{
    try{
    const response = await axios.post("http://localhost:8094/school/add",sobj);
     
    setmsg(response.data);
    
    }catch(err){
         console.log(err);
    }

}

    return (
        <div>

        <div>
               Enter Id : <input name="id" onChange ={ (e)=>setsobj({ ...sobj, sid:e.target.value }) }  />
               Enter fname : <input name="id" onChange ={ (e)=>setsobj({ ...sobj, fname:e.target.value }) }  />
               Enter lname : <input name="id" onChange ={ (e)=>setsobj({ ...sobj, lname:e.target.value }) }  />
               Enter dob: <input name="id" onChange ={ (e)=>setsobj({ ...sobj, dob:e.target.value }) }  />


                <button onClick={read2}>getData</button>
                {msg}
            </div>

        <div>
                <input name="id" onChange={(e)=>{setid(e.target.value)}}/>

                <button onClick={read1}>getData</button>
            </div>


            <div>
                <input name="id" onChange={(e)=>{setid(e.target.value)}}/>

                <button onClick={read1}>getData</button>
            </div>
            <div>
                <button onClick={read}>getData</button>
            </div>
            <div>
                <table border="1">
                <thead>
                    <tr>
                        <th>
                            Id
                        </th>
                        <th>
                            First Name
                        </th>
                        <th>
                            Last Name
                        </th>
                        <th>
                            Date of Birth
                        </th>
                    </tr>
                </thead>
                <tbody>
                {data.map((item)=>{
                    return(
                    <tr>
                     <td>  {item.sid}</td>

                     <td>  {item.fname}</td>
                     <td>  {item.lname}</td>
                     <td>  {item.dob}</td>
                    </tr>
                    )
                })}

                </tbody>
                </table>

            </div>
            
        </div>
    )
}

export default Readdata;
