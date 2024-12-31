/** @format */

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import { useSelector } from "react-redux";
import Header from "./components/header.jsx";
import ProductsDetails from "./pages/ProductsDetails.jsx";

const App = () => {
	const categoryId = useSelector((state) => state.category.selectedCategoryId);
	console.log(categoryId);
	return (
		<div className='min-h-screen bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100'>
			<Header />
			<div className='flex'>
				<main className='w-full bg-gray-200 dark:bg-gray-800 p-4 rounded-md shadow-md'>
					<Routes>
						<Route
							path='/'
							element={<Home />}
						/>
						<Route
							path='product'
							element={<Product />}
						/>
						<Route
							path='/productDetails/:id'
							element={<ProductsDetails />}
						/>
						<Route
							path='about'
							element={<About />}
						/>
					</Routes>
				</main>
			</div>
		</div>
	);
};

export default App;
