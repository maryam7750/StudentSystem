import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "./server/API";

export default function Home() {

  const [students, setStudents] = useState([]);


  const loadStudents = () => {

    API.get("/Student")
      .then((res) => {

        const sorted = res.data
          .map((student) => ({
            id: student.id ?? student.Id,
            fullName: student.fullName ?? student.FullName ?? "",
            mobile: student.mobile ?? student.Mobile ?? "",
          }))
          .filter((student) => student.id > 0)
          .sort((a,b)=> b.id - a.id);


        setStudents(sorted);

      })
      .catch((err)=> console.log(err));

  };



  useEffect(()=>{

    loadStudents();

  },[]);



  return (

    <div className="bg-white rounded shadow p-5">


      <div className="flex justify-between items-center mb-5">


        <h2 className="text-2xl font-bold text-blue-700">
          Student List
        </h2>


        <Link
        to="/add"
        className="bg-green-600 text-white px-4 py-2 rounded">

          Add Student

        </Link>


      </div>



      <table className="w-full border">


        <thead className="bg-gray-200">

          <tr>

            <th className="p-3">ID</th>

            <th className="p-3">Full Name</th>

            <th className="p-3">Mobile</th>

          </tr>


        </thead>



        <tbody>


        {
          students.length === 0 ? (

            <tr>

              <td
              colSpan="3"
              className="p-5 text-center text-gray-500">

                No students found

              </td>

            </tr>


          ) : (


            students.map((student)=>(


              <tr
              key={student.id}
              className="border-t text-center">


                <td className="p-3">
                  {student.id}
                </td>


                <td>
                  {student.fullName}
                </td>


                <td>
                  {student.mobile}
                </td>


              </tr>


            ))


          )
        }


        </tbody>


      </table>


    </div>

  );

}