import { useState,useEffect } from "react";
import ProductCard from "./ProductCard.jsx";
import axios from "../lib/axios";
import LoadingSpinner from "./LoadingSpinner.jsx";
import toast from "react-hot-toast";


const PeopleAlsoBought = () => {

  const [recommendations, setrecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    
    const fetchRecommendations = async() => {
      try {
        const res = await axios.get("/products/recommendations");
        setrecommendations(res.data);

      } catch (error) {
          toast.error(error.response.data.message || "An error occued while fetching recommendations");
      }
        finally {
          setIsLoading(false);
        }
    }

    fetchRecommendations();
  }, [])


  if(isLoading) return <LoadingSpinner />

  return (
    <div className='mt-8'>
      <h3 className='text-2xl font-semibold text-emerald-400'> People also bought </h3>
      <div className='mt-6 grid grid-cols-1 gap:4 sm:grid-cols-2 lg: grid-col-3'>
          {recommendations.map((product) => (
            <ProductCard key ={product._id} product = {product}  />
          ))}

      </div>
    </div>
  )
}

export default PeopleAlsoBought