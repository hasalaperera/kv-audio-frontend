import { Link } from "react-router-dom";

export default function ErrorNotFound() {
    
    return (
      <div>
        <h1>404 Error: Page not found</h1>
        <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" to="/">Go Home</Link>
      </div>
    );
  }
  