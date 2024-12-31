/** @format */

import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../store/shopSlice";

export default function Cart() {
	const data = useSelector((state) => state.shop.cartItems);
	const dispatch = useDispatch();

	// Umumiy narxni hisoblash
	const totalPrice = data.reduce((acc, item) => acc + item.price * item.quantity, 0);

	const totalItems = data.reduce((acc, item) => acc + item.quantity, 0);

	// Mahsulot miqdorini oshirish
	const increaseQuantity = (item) => {
		dispatch(addToCart({ ...item, quantity: 1 })); // quantity 1 qo'shish kerak
	};

	// Mahsulot miqdorini kamaytirish
	const decreaseQuantity = (item) => {
		if (item.quantity > 1) {
			dispatch(removeFromCart({ id: item.id })); // quantity -1
		}
	};

	return (
		<div className='flex-1 p-4 bg-gray-100 dark:bg-gray-800'>
			<h1 className='text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4'>Your Cart</h1>

			{/* Main Content */}
			{data?.length ?
				<>
					{/* Cart Items List */}
					<div className='space-y-4'>
						{data.map((item) => (
							<div
								key={item.id}
								className='flex items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition'>
								{/* Product Image */}
								<img
									src={item.images[0]}
									alt={item.title}
									className='w-16 h-16 object-cover rounded-md mr-4'
								/>

								{/* Product Info */}
								<div className='flex-grow'>
									<h2 className='text-lg font-semibold text-gray-800 dark:text-gray-200 truncate'>
										{item.title}
									</h2>
									<p className='text-sm text-gray-600 dark:text-gray-400'>{item.description}</p>
								</div>

								{/* Product Quantity and Price */}
								<div className='flex items-center space-x-4'>
									{/* Quantity Buttons */}
									<div className='flex items-center space-x-2'>
										<button
											onClick={() => decreaseQuantity(item)}
											className='px-2 py-1 bg-gray-300 dark:bg-gray-600 rounded-md hover:bg-gray-400 dark:hover:bg-gray-500'>
											-
										</button>
										<p className='text-lg font-semibold'>{item.quantity}</p>
										<button
											onClick={() => increaseQuantity(item)}
											className='px-2 py-1 bg-gray-300 dark:bg-gray-600 rounded-md hover:bg-gray-400 dark:hover:bg-gray-500'>
											+
										</button>
									</div>

									{/* Product Price */}
									<p className='text-xl font-bold text-blue-600 dark:text-blue-400'>
										${(item.price * item.quantity).toFixed(2)}
									</p>
								</div>
							</div>
						))}
					</div>

					{/* Cart Summary */}
					<div className='mt-8 bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md'>
						<h2 className='text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4'>
							Cart Summary
						</h2>
						<div className='flex justify-between text-gray-800 dark:text-gray-200'>
							<p className='font-medium'>Total Items:</p>
							<p>{totalItems}</p>
						</div>
						<div className='flex justify-between text-gray-800 dark:text-gray-200 mt-2'>
							<p className='font-medium'>Total Price:</p>
							<p className='font-bold text-blue-600 dark:text-blue-400'>${totalPrice.toFixed(2)}</p>
						</div>
						{/* Checkout Button */}
						<div className='mt-4 text-center'>
							<Link
								to='/checkout'
								className='w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 dark:bg-green-700 dark:hover:bg-green-600 transition'>
								Proceed to Checkout
							</Link>
						</div>
					</div>
				</>
			:	<p className='text-center text-gray-600 dark:text-gray-400'>Your cart is empty.</p>}
		</div>
	);
}
