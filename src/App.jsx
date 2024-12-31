/** @format */

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import Header from "./components/header.jsx";
import ProductsDetails from "./pages/ProductsDetails.jsx";
import Cart from "./pages/Cart.jsx";
import Like from "./pages/Like.jsx";
import NotFound from "./pages/NotFound.jsx";
const App = () => {

	return (
		<div className='min-h-screen bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100'>
			<Header />
			<div className='flex flex-col'>
				<main className='w-full bg-gray-200 dark:bg-gray-800 p-4 rounded-md shadow-md'>
					<Routes>
						<Route
							path='/'
							element={<Home />}
						/>
						<Route
							path='/product'
							element={<Product />}
						/>
						<Route
							path='/productDetails/:id'
							element={<ProductsDetails />}
						/>
						<Route
							path='/about'
							element={<About />}
						/>
						<Route
							path='/cart'
							element={<Cart />}
						/>
						<Route
							path='/like'
							element={<Like />}
						/>
						<Route path="*" element={<NotFound/>} />
					</Routes>
				</main>
			</div>
		</div>
	);
};

export default App;
