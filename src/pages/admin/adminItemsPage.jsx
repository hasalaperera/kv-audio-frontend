const sampleArr = [
    {
        key: "AUDIO123",
        name: "Wireless Headphones",
        price: 99.99,
        category: "audio",
        dimentions: "20x15x10 cm",
        description: "High-quality wireless headphones with noise cancellation."
    },
    {
        key: "LIGHTS456",
        name: "LED Strip Lights",
        price: 29.99,
        category: "lights",
        dimentions: "500x1x1 cm",
        description: "Color-changing LED strip lights with remote control."
    },
    {
        key: "AUDIO789",
        name: "Bluetooth Speaker",
        price: 49.99,
        category: "audio",
        dimentions: "10x10x10 cm",
        description: "Portable Bluetooth speaker with deep bass and long battery life."
    },
    {
        key: "LIGHTS123",
        name: "Smart Bulb",
        price: 19.99,
        category: "lights",
        dimentions: "12x6x6 cm",
        description: "Wi-Fi-enabled smart bulb with voice control and dimming features."
    }
];


import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function AdminItemsPage() {

    const [items, setItems] = useState(sampleArr);
    // use effect continue

  return (
    <div className="w-full h-full relative">
      <table>
        <thead>
          <th>Key</th>
          <th>Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Dimentions</th>
          <th>Availability</th>
        </thead>
        <tbody>
            {
                items.map((product)=>{
                    console.log(product);
                    return (
                        <tr key={product.key}>
                            <td>{product.key}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.category}</td>
                            <td>{product.dimentions}</td>
                            <td>{product.availability ? "Available" : "Unavailable"}</td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>

      <Link to="/admin/items/add">
        <CiCirclePlus className="text-[70px] absolute right-2 bottom-2 hover:text-red-900" />
      </Link>
    </div>
  );
}
