import axios from "axios";
import { useEffect, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";


export default function AdminItemsPage() {
  const [items, setItems] = useState([]);

  const [itemsLoaded, setItemsLoaded] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!itemsLoaded) {
      const token = localStorage.getItem("token");
      axios.get("http://localhost:3000/api/products", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          console.log(res.data);
          setItems(res.data);
          setItemsLoaded(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [itemsLoaded]);

  const handleEdit = (key) => {
    console.log("Edit", key);
  };

  const handleDelete = (key) => {
    const token = localStorage.getItem("token");
    axios
      .delete(`http://localhost:3000/api/products/${key}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data);
        setItemsLoaded(!itemsLoaded);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-full h-full relative p-4 flex justify-center flex-col">
      {!itemsLoaded && <div className="border-4 my-4 border-b-green-500 rounded-full w-[100px] h-[100px] animate-spin">
      </div>}
      {itemsLoaded && <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-4 py-2 border">Key</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Price</th>
              <th className="px-4 py-2 border">Category</th>
              <th className="px-4 py-2 border">Dimensions</th>
              <th className="px-4 py-2 border">Availability</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((product) => (
              <tr key={product.key} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">{product.key}</td>
                <td className="px-4 py-2 border">{product.name}</td>
                <td className="px-4 py-2 border">${product.price}</td>
                <td className="px-4 py-2 border">{product.category}</td>
                <td className="px-4 py-2 border">{product.dimentions}</td>
                <td className="px-4 py-2 border">
                  {product.availability ? "Available" : "Unavailable"}
                </td>
                <td className="px-4 py-2 border space-x-2">
                  <button
                    onClick={() => navigate(`/admin/items/edit/` , { state: product })}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product.key)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      }
      <Link to="/admin/items/add">
        <CiCirclePlus className="text-[70px] absolute right-4 bottom-4 text-blue-600 hover:text-blue-800 cursor-pointer" />
      </Link>
    </div>
  );
}
