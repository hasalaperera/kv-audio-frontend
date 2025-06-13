import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

export default function UpdateItemsPage() {
    const location = useLocation();

    console.log(location);

    const [productKey, setProductKey] = useState(location.state.key);
    const [productName, setProductName] = useState(location.state.name);
    const [productPrice, setProductPrice] = useState(location.state.price);
    const [productCategory, setProductCategory] = useState(location.state.category);
    const [productDimentions, setProductDimentions] = useState(location.state.dimentions);
    const [productDescription, setProductDescription] = useState(location.state.description);
    const navigate = useNavigate();
    

    async function handleAddItem(){
        console.log(productKey, productName, productPrice, productCategory, productDimentions, productDescription);

        const token = localStorage.getItem("token");

        if(token) {
            try{
            const result = await axios.put(`http://localhost:3000/api/products/${productKey}`,{
                
                name : productName,
                price : productPrice,
                category : productCategory, 
                dimentions : productDimentions,
                description : productDescription
            }, {
                headers: {
                    Authorization: "Bearer " + token,
            }
            })
            toast.success(result.data.message);
            navigate("/admin/items");
        }catch(err){
            toast.error(err.response.data.error);
        }
        }else{
            toast.error("You are not logged in");
        }

    }
    
    return (
        <div className="w-full h-full flex flex-col items-center">
            <h1>Update Items</h1>
            <div className="w-[400px] border p-4 flex flex-col items-center gap-2">
                <input
                    disabled
                    type="text" 
                    placeholder="Product key" 
                    value={productKey} 
                    onChange={(e) => setProductKey(e.target.value)}
                    className="border p-2 w-full"
                />
                <input 
                    type="text" 
                    placeholder="Product name" 
                    value={productName} 
                    onChange={(e) => setProductName(e.target.value)}
                    className="border p-2 w-full"
                />
                <input 
                    type="number" 
                    placeholder="Product price" 
                    value={productPrice} 
                    onChange={(e) => setProductPrice(e.target.value)}
                    className="border p-2 w-full"
                />
                <select 
                    value={productCategory} 
                    onChange={(e) => setProductCategory(e.target.value)}
                    className="border p-2 w-full"
                >
                    <option value="audio">Audio</option>
                    <option value="lights">Lights</option>
                </select>
                <input 
                    type="text" 
                    placeholder="Product dimensions" 
                    value={productDimentions} 
                    onChange={(e) => setProductDimentions(e.target.value)}
                    className="border p-2 w-full"
                />
                <textarea 
                    type="text" 
                    placeholder="Product description" 
                    value={productDescription} 
                    onChange={(e) => setProductDescription(e.target.value)}
                    className="border p-2 w-full"
                />
                <button onClick={handleAddItem} className="bg-blue-500 text-white p-2 w-full rounded">Update</button>
                <button onClick={() => navigate("/admin/items")} className="bg-red-500 text-white p-2 w-full rounded">Cancel</button>
            </div>
        </div>
    );
}
