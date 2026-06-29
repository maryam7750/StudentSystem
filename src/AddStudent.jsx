import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "./server/API";

const emptyForm = {
  id: "",
  fullName: "",
  mobile: "",
};

export default function AddStudent() {

  const [formData, setFormData] = useState(emptyForm);

  const navigate = useNavigate();


  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((prev)=>({
      ...prev,
      [name]: value
    }));

  };



  const handleSave = async (e)=>{

    e.preventDefault();


    if(!formData.id || !formData.fullName || !formData.mobile){

      alert("Please fill all fields before saving");

      return;

    }



    try{


      await API.post("/insert",{

        id:Number(formData.id),
        fullName:formData.fullName,
        mobile:formData.mobile

      });



      alert("Saved Successfully");


      setFormData(emptyForm);


      navigate("/");


    }
    catch(error){

      console.log(error);

      alert("Error Saving Student");

    }


  };



  return (

    <div className="bg-white p-5 rounded shadow">


      <h2 className="text-xl font-bold mb-4">
        Add New Student
      </h2>



      <form
      onSubmit={handleSave}
      className="space-y-3">



        <input

        name="id"
        value={formData.id}
        onChange={handleChange}
        placeholder="ID"

        className="w-full border p-2 rounded"

        />



        <input

        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="Full Name"

        className="w-full border p-2 rounded"

        />



        <input

        name="mobile"
        value={formData.mobile}
        onChange={handleChange}
        placeholder="Mobile"

        className="w-full border p-2 rounded"

        />




        <div className="flex gap-3">


        <button

        type="submit"

        className="bg-green-600 text-white px-5 py-2 rounded">

          Save

        </button>




        <Link

        to="/"

        className="bg-gray-600 text-white px-5 py-2 rounded">

          Back

        </Link>



        </div>



      </form>



    </div>


  );

}