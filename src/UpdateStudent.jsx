import {useEffect,useState} from "react";
import {Link} from "react-router-dom";
import API from "./server/API";


export default function UpdateStudent(){


const [students,setStudents]=useState([]);

const [form,setForm]=useState(null);



const load=()=>{

API.get("/Student")
.then(res=>{

const data=res.data.sort(
(a,b)=>b.id-a.id
);

setStudents(data);


})


}



useEffect(()=>{

load();

},[]);



const selectStudent=(s)=>{

setForm(s);

}




const update=async(e)=>{

e.preventDefault();


await API.put("/Update",form);


alert("Update Success");


setForm(null);


load();


}




return (

<div>


<Link
to="/"
className="bg-gray-600 text-white px-4 py-2 rounded">

Back

</Link>



<table className="w-full mt-5">

<thead>

<tr>

<th>ID</th>
<th>Name</th>
<th>Mobile</th>
<th></th>

</tr>

</thead>


<tbody>

{students.map(s=>(

<tr key={s.id}>


<td>{s.id}</td>

<td>{s.fullName}</td>

<td>{s.mobile}</td>


<td>

<button
onClick={()=>selectStudent(s)}
className="bg-yellow-500 text-white px-3">

Select

</button>


</td>


</tr>


))}


</tbody>

</table>



{
form &&

<form onSubmit={update}
className="mt-5 space-y-3">


<input
value={form.id}
readOnly
className="border p-2 w-full"
/>


<input
value={form.fullName}
onChange={e=>setForm({...form,fullName:e.target.value})}
className="border p-2 w-full"
/>


<input
value={form.mobile}
onChange={e=>setForm({...form,mobile:e.target.value})}
className="border p-2 w-full"
/>



<button
className="bg-blue-600 text-white px-5 py-2">

Update

</button>



</form>

}


</div>


)

}