'use client'
import React, { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { Share, Heart, Star, MapPin, Minus, Plus } from 'lucide-react'
import Link from 'next/link'

// ==========================================
// MOCK DATA GENERATOR (Adapts based on type)
// ==========================================
const getListingData = (type: string | null) => {
	// You can easily expand this switch statement for 'cars', 'tours', etc.
	switch (type) {
		case 'stays':
			return {
				title: 'The Silo Hotel',
				typeLabel: 'Stays',
				badge: 'Top Rated',
				location: 'Cape Town, SA',
				price: 480,
				priceUnit: '/ night',
				rating: 4.9,
				reviewsCount: 30,
				images: [
					'/assets/images/stays/stays-bg.png',
					'/assets/images/stays/silo-2.png',
					'/assets/images/stays/silo-3.png',
					'/assets/images/stays/silo-4.png',
					'/assets/images/stays/silo-5.png',
				],
				overview:
					"The Silo Hotel is a boutique hotel situated in Cape Town, SA. Combining contemporary design with authentic African warmth, this property offers guests an exceptional retreat — whether you're travelling for business, leisure, or a special occasion. Expect attentive service, beautifully appointed rooms, and an atmosphere that makes you feel right at home far from home.",
				amenities: [
					'Boutique Hotel',
					'Top Rated',
					'Free WiFi',
					'24hr Security',
					'Daily Housekeeping',
					'Parking Available',
				],
				propertyType: ['Boutique Hotel'],
				reviews: [
					{
						name: 'Fatoumata Jallow',
						date: '6/15/2025 - 12:30 PM',
						rating: 5,
						avatar: '/assets/images/users/user1.png',
						text: "Absolutely loved staying at The Silo Hotel. The room was spotless, the staff incredibly attentive, and the breakfast spread was one of the best I've had in Africa. Will definitely return.",
					},
					{
						name: 'Awa Sanyang',
						date: '6/14/2025 - 09:15 AM',
						rating: 5,
						avatar: '/assets/images/users/user2.png',
						text: 'Came for a weekend getaway with friends and we had such a relaxing time. The pool area was gorgeous and the service was top-notch. Only wish the spa stayed open a little later!',
					},
					{
						name: 'Isatou Cham',
						date: '6/10/2025 - 02:20 PM',
						rating: 5,
						avatar: '/assets/images/users/user3.png',
						text: 'Exceeded every expectation. Super clean rooms, friendly staff everywhere you turned, and the live...',
					},
				],
			}
		default:
			return {
				title: 'The Silo Hotel',
				typeLabel: 'Stays',
				badge: 'Top Rated',
				location: 'Cape Town, SA',
				price: 480,
				priceUnit: '/ night',
				rating: 4.9,
				reviewsCount: 30,
				images: [
					'/assets/images/car-rental/car-rental-bg.avif',
					'/assets/images/car-rental/car-rental-bg.avif',
					'/assets/images/car-rental/car-rental-bg.avif',
					'/assets/images/car-rental/car-rental-bg.avif',
					'/assets/images/car-rental/car-rental-bg.avif',
				],
				overview:
					"The Silo Hotel is a boutique hotel situated in Cape Town, SA. Combining contemporary design with authentic African warmth, this property offers guests an exceptional retreat — whether you're travelling for business, leisure, or a special occasion. Expect attentive service, beautifully appointed rooms, and an atmosphere that makes you feel right at home far from home.",
				amenities: [
					'Boutique Hotel',
					'Top Rated',
					'Free WiFi',
					'24hr Security',
					'Daily Housekeeping',
					'Parking Available',
				],
				propertyType: ['Boutique Hotel'],
				reviews: [
					{
						name: 'Fatoumata Jallow',
						date: '6/15/2025 - 12:30 PM',
						rating: 5,
                        avatar: '/assets/images/comment-1.avif',
						text: "Absolutely loved staying at The Silo Hotel. The room was spotless, the staff incredibly attentive, and the breakfast spread was one of the best I've had in Africa. Will definitely return.",
					},
					{
						name: 'Awa Sanyang',
						date: '6/14/2025 - 09:15 AM',
						rating: 5,
                        avatar: '/assets/images/comment-2.avif',
						text: 'Came for a weekend getaway with friends and we had such a relaxing time. The pool area was gorgeous and the service was top-notch. Only wish the spa stayed open a little later!',
					},
					{
						name: 'Isatou Cham',
						date: '6/10/2025 - 02:20 PM',
						rating: 5,
                        avatar: '/assets/images/comment-3.avif',
						text: 'Exceeded every expectation. Super clean rooms, friendly staff everywhere you turned, and the live...',
					},
				],
			}
	}
}

// ==========================================
// DYNAMIC CONTENT COMPONENT
// ==========================================
function ListingContent() {
	const searchParams = useSearchParams()
	const type = searchParams.get('type') // e.g., 'stays'
	const data = getListingData(type)

	return (
		<div className='bg-white min-h-screen pt-24 pb-24'>
			<div className='max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-6'>
				{/* Breadcrumbs & Actions */}
				<div className='flex flex-col sm:flex-row sm:items-center justify-between mb-6'>
					<div className='text-sm text-gray-500 mb-4 sm:mb-0'>
						<Link href='/' className='hover:underline cursor-pointer'>
							Home
						</Link>{' '}
						<span className='mx-2'>/</span>
						<Link href='/stays' className='hover:underline cursor-pointer'>
							{data.typeLabel}
						</Link>{' '}
						<span className='mx-2'>
							/
						</span>
						<Link href='#' className='text-gray-900 font-medium'>
							{data.title}
						</Link>
					</div>

					<div className='flex items-center space-x-4'>
						<button className='flex items-center space-x-1.5 text-sm font-medium text-gray-700 hover:text-gray-900 transition underline underline-offset-2'>
							<Share className='w-4 h-4' />
							<span>Share</span>
						</button>
						<button className='flex items-center space-x-1.5 text-sm font-medium text-gray-700 hover:text-gray-900 transition underline underline-offset-2'>
							<Heart className='w-4 h-4' />
							<span>Save</span>
						</button>
					</div>
				</div>

				{/* Title Section */}
				<h1 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
					{data.title}
				</h1>

				{/* Image Gallery */}
				<div className='grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-3 h-[300px] sm:h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-8'>
					{/* Main Large Image */}
					<div className='md:col-span-2 row-span-2 relative cursor-pointer group'>
						<Image
							src={data.images[0]}
							alt='Main Image'
							fill
							className='object-cover group-hover:scale-105 transition-transform duration-500'
						/>
					</div>
					{/* Top Right Images */}
					<div className='hidden md:block relative cursor-pointer group overflow-hidden'>
						<Image
							src={data.images[1]}
							alt='Gallery 1'
							fill
							className='object-cover group-hover:scale-105 transition-transform duration-500'
						/>
					</div>
					<div className='hidden md:block relative cursor-pointer group overflow-hidden'>
						<Image
							src={data.images[2]}
							alt='Gallery 2'
							fill
							className='object-cover group-hover:scale-105 transition-transform duration-500'
						/>
					</div>
					{/* Bottom Right Images */}
					<div className='hidden md:block relative cursor-pointer group overflow-hidden'>
						<Image
							src={data.images[3]}
							alt='Gallery 3'
							fill
							className='object-cover group-hover:scale-105 transition-transform duration-500'
						/>
					</div>
					<div className='hidden md:block relative cursor-pointer group overflow-hidden'>
						<Image
							src={data.images[4]}
							alt='Gallery 4'
							fill
							className='object-cover group-hover:scale-105 transition-transform duration-500'
						/>
						<div className='absolute inset-0 bg-black/40 flex items-center justify-center transition hover:bg-black/50'>
							<span className='text-white font-medium underline underline-offset-4'>
								See all photos
							</span>
						</div>
					</div>
				</div>

				{/* Main Content & Sidebar Layout */}
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-12 relative'>
					{/* LEFT COLUMN: Details */}
					<div className='lg:col-span-2 space-y-12'>
						{/* Header Details */}
						<div className='flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-gray-100 pb-8'>
							<div>
								<div className='flex items-center space-x-3 mb-2'>
									<h2 className='text-2xl font-bold text-gray-900'>
										{data.title}
									</h2>
									<span className='bg-[#E6F8EB] text-tour-green px-3 py-1 rounded-full text-xs font-bold tracking-wide'>
										{data.badge}
									</span>
								</div>
								<div className='flex items-center space-x-1.5 text-gray-500 mb-2'>
									<MapPin className='w-4 h-4' />
									<span className='text-sm'>{data.location}</span>
								</div>
								<div className='flex items-end'>
									<span className='text-tour-green font-bold text-lg'>
										${data.price}
									</span>
									<span className='text-tour-green text-sm font-medium mb-0.5 ml-1'>
										{data.priceUnit}
									</span>
								</div>
							</div>
							<div className='flex items-center space-x-1.5 text-gray-900'>
								<Star className='w-4 h-4 text-yellow-400 fill-yellow-400' />
								<span className='font-bold'>{data.rating}</span>
								<span className='text-gray-500 underline text-sm'>
									({data.reviewsCount} Reviews)
								</span>
							</div>
						</div>

						{/* Overview */}
						<div>
							<h3 className='text-xl font-bold text-gray-900 mb-4'>Overview</h3>
							<p className='text-gray-600 leading-relaxed text-sm md:text-base'>
								{data.overview}
							</p>
						</div>

						{/* Amenities & Features */}
						<div>
							<h3 className='text-xl font-bold text-gray-900 mb-4'>
								Amenities & Features
							</h3>
							<div className='flex flex-wrap gap-3'>
								{data.amenities.map((item, idx) => (
									<span
										key={idx}
										className='px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 font-medium'>
										{item}
									</span>
								))}
							</div>
						</div>

						{/* Property Type */}
						<div>
							<h3 className='text-xl font-bold text-gray-900 mb-4'>
								Property Type
							</h3>
							<div className='flex flex-wrap gap-3'>
								{data.propertyType.map((item, idx) => (
									<span
										key={idx}
										className='px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 font-medium'>
										{item}
									</span>
								))}
							</div>
						</div>

						{/* Map Location */}
						<div>
							<h3 className='text-xl font-bold text-gray-900 mb-4'>
								Map Location
							</h3>
							<div className='w-full h-[250px] bg-[#e8f5e9] rounded-2xl relative overflow-hidden flex items-center justify-center border border-gray-200'>
								{/* CSS Grid Pattern Background */}
								<div
									className='absolute inset-0'
									style={{
										backgroundImage:
											'linear-gradient(#c8e6c9 1px, transparent 1px), linear-gradient(90deg, #c8e6c9 1px, transparent 1px)',
										backgroundSize: '40px 40px',
									}}></div>

								{/* Fake Map Pin */}
								<div className='relative z-10 flex flex-col items-center'>
									<div className='w-10 h-10 bg-tour-darker-green rounded-full flex items-center justify-center shadow-lg border-2 border-white mb-2'>
										<MapPin className='w-5 h-5 text-white' />
									</div>
									<div className='bg-white px-3 py-1.5 rounded-lg shadow-md text-sm font-bold text-gray-900'>
										{data.location}
									</div>
								</div>
							</div>
						</div>

						{/* Reviews Section */}
						<div>
							<h3 className='text-xl font-bold text-gray-900 mb-6'>
								Reviews ({data.reviewsCount})
							</h3>

							<div className='flex flex-col md:flex-row md:items-center gap-8 mb-10'>
								<div className='flex flex-col items-center'>
									<div className='flex items-center space-x-2'>
										<Star className='w-8 h-8 text-yellow-400 fill-yellow-400' />
										<span className='text-5xl font-bold text-gray-900'>
											{data.rating}
										</span>
									</div>
									<span className='text-gray-500 text-sm mt-1'>out of 5</span>
								</div>

								{/* Progress Bars */}
								<div className='flex-1 space-y-2'>
									{[5, 4, 3, 2, 1].map((star) => (
										<div
											key={star}
											className='flex items-center space-x-3 text-sm font-medium text-gray-600'>
											<span className='w-2'>{star}</span>
											<div className='flex-1 h-2 bg-gray-100 rounded-full overflow-hidden'>
												<div
													className='h-full bg-gray-800 rounded-full'
													style={{
														width:
															star === 5
																? '80%'
																: star === 4
																	? '50%'
																	: star === 3
																		? '20%'
																		: star === 2
																			? '10%'
																			: '5%',
													}}
												/>
											</div>
										</div>
									))}
								</div>
							</div>

							{/* Review Cards */}
							<div className='space-y-4'>
								{data.reviews.map((review, idx) => (
									<div
										key={idx}
										className='p-6 border border-gray-200 rounded-2xl bg-white shadow-sm'>
										<div className='flex justify-between items-start mb-4'>
											<div className='flex items-center space-x-3'>
												<div className='w-10 h-10 rounded-full bg-gray-200 overflow-hidden relative'>
													<Image
														src={review.avatar}
														alt={review.name}
														fill
														className='object-cover'
													/>
												</div>
												<span className='font-bold text-gray-900'>
													{review.name}
												</span>
											</div>
											<div className='flex'>
												{[...Array(5)].map((_, i) => (
													<Star
														key={i}
														className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
													/>
												))}
											</div>
										</div>
										<p className='text-gray-600 text-sm leading-relaxed mb-3'>
											{review.text}
										</p>
										<span className='text-xs text-gray-400'>{review.date}</span>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* RIGHT COLUMN: Sticky Booking Widget */}
					<div className='lg:col-span-1 relative'>
						<div className='sticky top-28 bg-white border border-gray-200 rounded-3xl p-6 shadow-xl'>
							<div className='flex items-end mb-6'>
								<span className='text-3xl font-bold text-gray-900'>
									${data.price}
								</span>
								<span className='text-gray-500 text-sm mb-1 ml-1'>
									{data.priceUnit}
								</span>
							</div>

							{/* Form Controls */}
							<div className='border border-gray-200 rounded-2xl overflow-hidden mb-6'>
								<div className='flex border-b border-gray-200'>
									<div className='flex-1 p-3 border-r border-gray-200'>
										<span className='block text-[10px] font-bold text-gray-900 uppercase tracking-wide mb-1'>
											Check-In
										</span>
										<span className='text-sm text-gray-600'>07/25/2026</span>
									</div>
									<div className='flex-1 p-3'>
										<span className='block text-[10px] font-bold text-gray-900 uppercase tracking-wide mb-1'>
											Checkout
										</span>
										<span className='text-sm text-gray-600'>07/28/2026</span>
									</div>
								</div>
								<div className='p-3 flex items-center justify-between'>
									<div>
										<span className='block text-[10px] font-bold text-gray-900 uppercase tracking-wide mb-1'>
											Guests
										</span>
										<span className='text-sm text-gray-600'>2 guests</span>
									</div>
									<div className='flex items-center space-x-3'>
										<button className='w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50'>
											<Minus className='w-4 h-4 text-gray-500' />
										</button>
										<span className='text-sm font-bold text-gray-900'>2</span>
										<button className='w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50'>
											<Plus className='w-4 h-4 text-gray-500' />
										</button>
									</div>
								</div>
							</div>

							{/* Action Buttons */}
							<div className='space-y-3 mb-6'>
								<button className='w-full bg-tour-green hover:bg-[#048417] text-white font-bold py-3.5 rounded-xl transition-colors'>
									Book Now
								</button>
								<button className='w-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-900 font-bold py-3.5 rounded-xl transition-colors'>
									Reserve
								</button>
							</div>

							{/* Price Breakdown */}
							<div className='space-y-3 mb-6 pb-6 border-b border-gray-100 text-sm text-gray-600'>
								<div className='flex justify-between'>
									<span className='underline cursor-pointer'>
										${data.price} × 3 nights
									</span>
									<span>$1,440</span>
								</div>
								<div className='flex justify-between'>
									<span className='underline cursor-pointer'>
										Tourmate service fee
									</span>
									<span>$173</span>
								</div>
							</div>

							{/* Total */}
							<div className='flex justify-between items-center font-bold text-gray-900 text-lg'>
								<span>Total before taxes</span>
								<span>$1,613</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

// ==========================================
// EXPORTED PAGE WRAPPER
// ==========================================
export default function ListingPage() {
	return (
		<>
			{/* 
        Must wrap components using useSearchParams in Suspense.
        This prevents Next.js from bailing out of Static Rendering for the whole app.
      */}
			<Suspense
				fallback={
					<div className='min-h-screen flex items-center justify-center text-gray-500'>
						Loading listing details...
					</div>
				}>
				<ListingContent />
			</Suspense>
		</>
	)
}
