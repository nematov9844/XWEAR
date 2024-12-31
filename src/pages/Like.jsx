/** @format */

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Like() {
	const data = useSelector((state) => state.like.likedItems);

	return (
		<div className='flex-1 p-4 bg-gray-100 dark:bg-gray-800'>
			<h1 className='text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4'>Likes</h1>

			{/* Main Content */}
			{data?.length ?
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
					{data.map((item) =>
						item.images[0] ?
							<div
								key={item.id}
								className='p-4 bg-white dark:bg-gray-700 flex flex-col h-[400px] justify-between rounded-lg shadow-md hover:shadow-lg transition'>
								{/* Product Image */}
								<img
									src={item.images[0]}
									alt={item.title}
									className='w-full h-48 object-cover rounded-md mb-4'
								/>

								{/* Product Title */}
								<h2 className='text-lg font-semibold text-gray-800 dark:text-gray-200 truncate'>
									{item.title}
								</h2>

								{/* Product Price */}
								<p className='text-xl font-bold text-blue-600 dark:text-blue-400'>${item.price}</p>

								{/* Product Description */}
								<p className='text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mt-2'>
									{item.description}
								</p>

								{/* View Details Button */}
								<Link
									to={`/productDetails/${item.id}`}
									className='w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-600 transition'>
									View Details
								</Link>
							</div>
						:	"",
					)}
				</div>
			:	<p className='text-center text-gray-600 dark:text-gray-400'>No products found.</p>}
		</div>
	);
}
