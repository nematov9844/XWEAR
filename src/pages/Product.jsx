import { useQuery } from "@tanstack/react-query";
import { useAxios } from "../api/api";
import { Link } from "react-router-dom";
import Category from "../components/Category";
import { useSelector } from "react-redux";

export default function Product() {
    const categoryId = useSelector((state) => state.category.selectedCategoryId);
    const axios = useAxios();
console.log(categoryId);

    // Fetching products by categoryId
    const { data, isLoading, isError } = useQuery({
        queryKey: ["product", categoryId],
        queryFn: () => axios({ url: categoryId ? `products/?categoryId=${categoryId}` : categoryId == 0 ? `products` : `products` }),
    });

    if (isError) return <div className="text-center text-red-500">Error fetching products.</div>;

    return (
        <div className="flex flex-col lg:flex-row w-full h-full">
            {/* Product List Section */}
            <div className="flex-1 p-4 bg-gray-100 dark:bg-gray-800">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Products</h1>

                {/* Loading State with Spinner */}
                {isLoading && (
                    <div className="flex items-center justify-center p-4">
                        <div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
                    </div>
                )}

                {/* Main Content */}
                {data?.length ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {data.map((item) => (
                            <div
                                key={item.id}
                                className="p-4 bg-white dark:bg-gray-700 flex flex-col h-[400px] justify-between rounded-lg shadow-md hover:shadow-lg transition">
                                {/* Product Image */}
                                <img
                                    src={item.images[0]}
                                    alt={item.title}
                                    className="w-full h-48 object-cover rounded-md mb-4"
                                />

                                {/* Product Title */}
                                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 truncate">
                                    {item.title}
                                </h2>

                                {/* Product Price */}
                                <p className="text-xl font-bold text-blue-600 dark:text-blue-400">${item.price}</p>

                                {/* Product Description */}
                                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mt-2">
                                    {item.description}
                                </p>

                                {/* View Details Button */}
                                <Link
                                    to={`/productDetails/${item.id}`}
                                    className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-600 transition">
                                    View Details
                                </Link>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-600 dark:text-gray-400">No products found.</p>
                )}
            </div>

            {/* Sidebar Section */}
            <Category />
        </div>
    );
}