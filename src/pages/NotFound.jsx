/** @format */

import { Link } from "react-router-dom";
import { Home, RefreshCw, Coffee } from "lucide-react";

export default function NotFound() {
	return (
		<div className='min-h-screen bg-gray-100 flex items-center justify-center p-4'>
			<div className='text-center'>
				{/* Kompyuter animatsiyasi */}
				<div className='mb-8 relative'>
					<div className='w-64 h-48 mx-auto bg-gray-800 rounded-t-lg p-4 relative animate-bounce-slow'>
						<div className='w-full h-full border-4 border-blue-500 rounded-lg overflow-hidden relative'>
							<div className='absolute inset-0 flex items-center justify-center'>
								<div className='text-9xl font-bold text-blue-500 animate-glitch'>404</div>
							</div>
							{/* "Uzilgan" ekran effekti */}
							<div className='absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent animate-scan'></div>
						</div>
					</div>
					{/* Klaviatura */}
					<div className='w-72 h-6 mx-auto bg-gray-800 rounded-b-xl'></div>
					{/* Coffee cup animation */}
					<div className='absolute -right-4 top-1/2 transform -translate-y-1/2'>
						<Coffee className='w-8 h-8 text-gray-600 animate-steam' />
						<div className='w-2 h-8 bg-gradient-to-t from-gray-400/20 to-transparent absolute -top-8 left-1/2 transform -translate-x-1/2 animate-steam'></div>
					</div>
				</div>

				<h1 className='text-4xl font-bold text-gray-800 mb-4 animate-bounce-text'>
					Voy-bo'o'! Sahifa topilmadi 😅
				</h1>

				<p className='text-gray-600 mb-8 max-w-md mx-auto animate-fade-in'>
					Siz qidirayotgan sahifa kompyuterning qahva ichish tanaffusiga ketgan bo'lishi mumkin.
					Yoki bizning dasturchi uni tushda ko'rgan bo'lishi ham mumkin 😴
				</p>

				<div className='flex gap-4 justify-center items-center'>
					<Link
						to='/'
						className='inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all transform hover:scale-105'>
						<Home className='w-5 h-5' />
						Bosh sahifaga qaytish
					</Link>

					<button
						onClick={() => window.location.reload()}
						className='inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-all transform hover:scale-105'>
						<RefreshCw className='w-5 h-5 animate-spin-slow' />
						Qayta yuklash
					</button>
				</div>
			</div>
		</div>
	);
}
