/** @format */

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react"; // useState to manage menu toggle
import { useSelector } from "react-redux";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

export default function Header() {
	const navigate = useNavigate();
	const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage the menu visibility
	const [likesCount, setLikesCount] = useState(0); // State for likes count
	const [cartItemsCount, setCartItemsCount] = useState(0); // State for cart items count
	const cartItems = useSelector((state) => state.shop.cartItems);
	const likedItems = useSelector((state) => state.like.likedItems);
	console.log();

	const handleLike = () => {
		setLikesCount((prev) => prev + 1);
	};

	const handleAddToCart = () => {
		setCartItemsCount((prev) => prev + 1);
	};

	return (
		<header className='p-4 bg-gray-200 text-gray-900 z-30 dark:bg-gray-700 sticky top-0 left-0 dark:text-gray-100 shadow-md'>
			<div className='container mx-auto flex flex-wrap items-center justify-between'>
				{/* LOGO */}
				<div className='text-2xl font-bold'>LOGO</div>

				{/* Navigation Menu */}
				<nav className='hidden md:flex items-center gap-6'>
					<Link
						to='/'
						className='hover:text-blue-600 dark:hover:text-blue-400 transition'>
						Home
					</Link>
					<Link
						to='/product'
						className='hover:text-blue-600 dark:hover:text-blue-400 transition'>
						Product
					</Link>
					<Link
						to='/about'
						className='hover:text-blue-600 dark:hover:text-blue-400 transition'>
						About
					</Link>
				</nav>

				{/* Responsive Menu Button */}
				<div className='flex md:hidden'>
					<button
						className='p-2 rounded-md bg-gray-300 text-gray-800 hover:bg-gray-400 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 transition'
						onClick={() => setIsMenuOpen(!isMenuOpen)}>
						☰
					</button>
				</div>

				{/* Actions */}
				<div className='hidden md:flex gap-4 items-center'>
					<button
						onClick={() => navigate("/like")}
						className='px-1 py-0 relative  text-white  transition'>
						<AiOutlineHeart className='inline-block mr-2 w-5 h-5' />
						<span className=' absolute top-0 right-0 text-xs'>{likedItems.length}</span>
					</button>
					<button
						onClick={() => navigate("/cart")}
						className='px-1 py-0 relative  text-white  transition'>
						<AiOutlineShoppingCart className='inline-block mr-2 w-5 h-5' />
						<span className=' absolute top-0 right-0 text-xs'>{cartItems.length}</span>
					</button>
					<button className='px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 transition'>
						Login
					</button>
					<button className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 dark:bg-blue-700 dark:hover:bg-blue-600 transition'>
						Sign Up
					</button>
				</div>
			</div>

			{/* Responsive Dropdown Menu */}
			<div className={`mt-4 md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
				<ul className='space-y-2'>
					<li>
						<Link
							to='/'
							className='block px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 transition'>
							Home
						</Link>
					</li>
					<li>
						<Link
							to='/product'
							className='block px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 transition'>
							Product
						</Link>
					</li>
					<li>
						<Link
							to='/about'
							className='block px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 transition'>
							About
						</Link>
					</li>
					<li>
						<button
							onClick={handleLike}
							className='w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-400 dark:bg-red-600 dark:hover:bg-red-500 transition'>
							Like ({likesCount})
						</button>
					</li>
					<li>
						<button
							onClick={handleAddToCart}
							className='w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-400 dark:bg-green-600 dark:hover:bg-green-500 transition'>
							Cart ({cartItemsCount})
						</button>
					</li>
					<li className='flex justify-between gap-2'>
						<button className='w-full px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 transition'>
							Login
						</button>
						<button className='w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 dark:bg-blue-700 dark:hover:bg-blue-600 transition'>
							Sign Up
						</button>
					</li>
				</ul>
			</div>
		</header>
	);
}
