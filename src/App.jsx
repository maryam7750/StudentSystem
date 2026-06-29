import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import AddStudent from "./AddStudent";
import UpdateStudent from "./UpdateStudent";

function App() {

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
          Student Management System
        </h1>


        <nav className="flex justify-center gap-4 mb-8">

          <Link
          className="bg-gray-700 text-white px-5 py-2 rounded-lg hover:bg-gray-900"
          to="/">
            Home
          </Link>


          <Link
          className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-800"
          to="/add">
            Add Student
          </Link>


          <Link
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-800"
          to="/update">
            Update
          </Link>


        </nav>


        <div className="bg-white shadow-lg rounded-xl p-5">

        <Routes>

          <Route path="/" element={<Home/>}/>

          <Route path="/add" element={<AddStudent/>}/>

          <Route path="/update" element={<UpdateStudent/>}/>

        </Routes>

        </div>


      </div>


    </div>
  )
}

export default App;