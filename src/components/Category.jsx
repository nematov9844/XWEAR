import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { useAxios } from "../api/api";
import { useState } from "react";
import { setCategoryId } from "../store/store";

export default function Category() {
    const dispatch = useDispatch();
    const categoryId = useSelector((state) => state.category.selectedCategoryId);
    const axios = useAxios();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State to manage drawer visibility

    // Fetching categories
    const { data: categories } = useQuery({
        queryKey: ["categories", categoryId],
        queryFn: () => axios({ url: "categories", method: "get" }),
    });

    return (
        <aside
            className={`lg:w-[20%] w-full bg-gray-50 dark:bg-gray-700 h-full max-h-[360px] p-4 rounded-md shadow-md fixed top-[100px] lg:top-[60px] right-0 lg:relative transition-all duration-300 ${
                isDrawerOpen ? "translate-x-0" : "transform translate-x-full md:translate-x-0"
            } lg:w-[20%] lg:static`}>
            <button
                className={`lg:hidden absolute top-4 ${isDrawerOpen ? "right-[20px]" : "-left-[50px]"} bg-red-500 text-gray-800 dark:text-gray-200`}
                onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
                {isDrawerOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
                        <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
                        <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                )}
            </button>

            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">Categories</h3>
            <ul className="space-y-2">
                <li>
                    <button
                        className={`w-full text-left px-3 py-2 rounded-md font-medium ${
                            categoryId === 0
                                ? "bg-blue-500 text-white dark:bg-blue-600"
                                : "bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-300"
                        } hover:bg-blue-200 dark:hover:bg-blue-500 transition`}
                        onClick={() => dispatch(setCategoryId(0))}>
                        All
                    </button>
                </li>
                {categories?.map((item) => (
                    <li key={item.id}>
                        {item.id <= 5 && (
                            <button
                                className={`w-full text-left px-3 py-2 rounded-md font-medium ${
                                    categoryId === item.id
                                        ? "bg-blue-500 text-white dark:bg-blue-600"
                                        : "bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-300"
                                } hover:bg-blue-200 dark:hover:bg-blue-500 transition`}
                                onClick={() => dispatch(setCategoryId(item.id))}>
                                {item.name}
                            </button>
                        )}
                    </li>
                ))}
            </ul>
        </aside>
    );
}
