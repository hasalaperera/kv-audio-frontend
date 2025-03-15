import { BsGraphDown } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa";
import { MdOutlineSpeaker } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { Link, Route, Routes } from "react-router-dom";
import AdminItemsPage from "./adminItemsPage";
import AddItemsPage from "./addItemsPage";

export default function AdminPage() {
  return (
    <div>
      <div className="w-full h-screen flex">
        <div className="w-[200px] h-full bg-green-200">
          <Link to="" className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center">
            <BsGraphDown />
            Dashbord
          </Link>
          <Link to="/admin/bookings" className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center">
            <FaRegBookmark />
            Bookings
          </Link>
          <Link to="/admin/items" className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center">
            <MdOutlineSpeaker />
            Items
          </Link>
          <Link to="" className="w-full h-[40px] text-[25px] font-bold flex justify-center items-center">
            <FaRegUser />
            Users
          </Link>
        </div>

        <div className="w-[calc(100vw-200px)]">
          <Routes path="/*">
            <Route path="/bookings" element={<h1>Bookings</h1>} />
            <Route path="/items" element={<AdminItemsPage/>} />
            <Route path="/items/add" element={<AddItemsPage/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
