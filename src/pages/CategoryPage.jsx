import { useEffect } from "react";
import { useProductStore } from "../store/useProductStore"
import { useParams } from "react-router-dom";


const CategoryPage = () => {

  const {products, fetchProductsByCategory} = useProductStore();
  const {category} = useParams();

  useEffect(() => {
    fetchProductsByCategory(category);  
  },[fetchProductsByCategory, category]);

  console.log("Products", products);

  return (
    <div>CategoryPage</div>
  )
}

export default CategoryPage;