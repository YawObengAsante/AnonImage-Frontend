import { Link } from "react-router-dom";


export const FeatureCard = ({ icon, title, description,link }) => {
    return (
      
    <Link to={link} className="block transition-transform hover:scale-[1.02] duration-200 ease-in-out">
      <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
        <div className="text-blue-500 text-3xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
    );
  };