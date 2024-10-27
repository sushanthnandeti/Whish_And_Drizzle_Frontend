import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../store/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts.jsx";


const categories = [
	{ href: "/wedding cakes", name: "Wedding Cakes", imageUrl: "/wedding_cakes.jpg" },
	{ href: "/birthday cakes", name: "Birthday Cakes", imageUrl: "/birthday_cakes.jpg" },
	{ href: "/cookies", name: "Cookies", imageUrl: "/cookies.jpg" },
	{ href: "/cup cakes", name: "Cup Cakes", imageUrl: "/cup_cakes.jpg" },
	{ href: "/pastries", name: "Pastries", imageUrl: "/pastries.jpg" },
	{ href: "/seasonal", name: "Seasonal", imageUrl: "/seasonal.jpg" },

];


const HomePage = () =>{

    const {fetchFeaturedProducts, products, isLoading } = useProductStore();
   

    useEffect(()=> {
        fetchFeaturedProducts();
    },[fetchFeaturedProducts]);



    return (
        <div className="relative min-h-screen text-white overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className='text-center text-5xl sm:text-6xl font-bold text-emerald-400 mb-4'>
					Explore Our Categories
				</h1>
				<p className='text-center text-xl text-gray-300 mb-12'>
                Explore our delicious categories and find your next sweet obsession!
				</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {categories.map((category) =>(
                        <CategoryItem category = {category} key={category.name} />
                    ))}
                </div>
                
                {!isLoading && products.length > 0 && <FeaturedProducts featuredProducts = {products} /> }

            </div>
        </div>
    );
}


export default HomePage;