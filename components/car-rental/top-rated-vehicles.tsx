'use client'
import { useRef, useState, useMemo, ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
	ChevronLeft,
	ChevronRight,
	MapPin,
	Heart,
	Star,
	ChevronDown,
} from 'lucide-react'
import Image from 'next/image'

// ==========================================
// 1. REUSABLE FILTER POPOVER COMPONENT
// ==========================================
interface FilterPopoverProps {
	label: string
	isOpen: boolean
	isActive?: boolean
	onToggle: () => void
	onClose: () => void
	children: ReactNode
}

export function FilterPopover({
	label,
	isOpen,
	isActive,
	onToggle,
	onClose,
	children,
}: FilterPopoverProps) {
	return (
		<div className='relative'>
			<button
				onClick={onToggle}
				className={`flex items-center space-x-1.5 px-4 py-2 border rounded-full text-sm whitespace-nowrap transition-colors duration-200 ${
					isOpen || isActive
						? 'border-tour-green text-tour-green bg-[#E6F8EB]/50'
						: 'border-gray-200 text-gray-600 hover:bg-gray-50'
				}`}>
				<span className='font-medium'>{label}</span>
				<ChevronDown
					className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
				/>
			</button>

			<AnimatePresence>
				{isOpen && (
					<>
						{/* Invisible overlay to detect outside clicks */}
						<div className='fixed inset-0 z-30' onClick={onClose} />
						<motion.div
							initial={{ opacity: 0, y: 10, scale: 0.95 }}
							animate={{ opacity: 1, y: 0, scale: 1 }}
							exit={{ opacity: 0, y: 10, scale: 0.95 }}
							transition={{ duration: 0.2 }}
							className='absolute top-full left-0 mt-2 min-w-[200px] bg-white border border-gray-100 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] z-40 py-2 flex flex-col overflow-hidden'>
							{children}
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</div>
	)
}

// ==========================================
// 2. MOCK DATA
// ==========================================
const initialVehicles = [
	{
		id: '1',
		name: 'Toyota Land Cruiser',
		type: '4x4 SUV',
		location: 'Nairobi, Kenya',
		seats: 7,
		bags: 4,
		fuel: 'Diesel',
		price: 95,
		rating: 4.9,
		popularity: 100,
		image: '/assets/images/car-rental/land-cruiser.jpg',
	},	
	{
		id: '2',
		name: 'Land Rover Defender',
		type: 'Off-Road 4x4',
		location: 'Nairobi, Kenya',
		seats: 5,
		bags: 3,
		fuel: 'Diesel',
		price: 140,
		rating: 4.9,
		popularity: 85,
		image: '/assets/images/car-rental/defender.jpg',
	},	
	{
		id: '3',
		name: 'BMW X5',
		type: 'Luxury SUV',
		location: 'Cairo, Egypt',
		seats: 5,
		bags: 3,
		fuel: 'Petrol',
		price: 155,
		rating: 4.9,
		popularity: 90,
		image: '/assets/images/car-rental/defender.jpg',
	},	
	{
		id: '4',
		name: 'Mercedes E-Class',
		type: 'Luxury Sedan',
		location: 'Cape Town, SA',
		seats: 5,
		bags: 2,
		fuel: 'Petrol',
		price: 120,
		rating: 4.8,
		popularity: 95,
		image: '/assets/images/car-rental/land-cruiser.jpg',
	},	
	{
		id: '5',
		name: 'Nissan Patrol',
		type: 'Full-size SUV',
		location: 'Dar es Salaam, TZ',
		seats: 8,
		bags: 5,
		fuel: 'Petrol',
		price: 105,
		rating: 4.8,
		popularity: 80,
		image: '/assets/images/car-rental/defender.jpg',
	},
	{
		id: '6',
		name: 'Tesla Model Y',
		type: 'Electric SUV',
		location: 'Kigali, Rwanda',
		seats: 5,
		bags: 3,
		fuel: 'Electric',
		price: 110,
		rating: 4.7,
		popularity: 75,
		image: '/assets/images/car-rental/land-cruiser.jpg',
	},	
	{
		id: '7',
		name: 'Toyota Prius',
		type: 'Hybrid Sedan',
		location: 'Accra, Ghana',
		seats: 5,
		bags: 2,
		fuel: 'Hybrid',
		price: 65,
		rating: 4.5,
		popularity: 70,
		image: '/assets/images/car-rental/defender.jpg',
	},	
]

// ==========================================
// 3. MAIN COMPONENT
// ==========================================
export default function TopRatedVehicles() {
	const scrollRef = useRef<HTMLDivElement>(null)

	// Active Dropdown Tracker
	const [activeDropdown, setActiveDropdown] = useState<
		'dates' | 'sort' | 'fuel' | 'rating' | null
	>(null)

	// Filter States
	const [sortBy, setSortBy] = useState<string>('Recommended')
	const [fuelType, setFuelType] = useState<string>('All')
	const [minRating, setMinRating] = useState<number>(0)
	const [datesSet, setDatesSet] = useState(false)

	// Apply Filters & Sorting dynamically
	const filteredVehicles = useMemo(() => {
		let result = [...initialVehicles]

		// 1. Filter by Fuel
		if (fuelType !== 'All') {
			result = result.filter((v) => v.fuel === fuelType)
		}

		// 2. Filter by Rating
		if (minRating > 0) {
			result = result.filter((v) => v.rating >= minRating)
		}

		// 3. Sort
		if (sortBy === 'Price: Low to High')
			result.sort((a, b) => a.price - b.price)
		else if (sortBy === 'Price: High to Low')
			result.sort((a, b) => b.price - a.price)
		else if (sortBy === 'Top Rated') result.sort((a, b) => b.rating - a.rating)
		else if (sortBy === 'Most Popular')
			result.sort((a, b) => b.popularity - a.popularity)

		return result
	}, [fuelType, minRating, sortBy])

	// Desktop Scroll Logic
	const scroll = (direction: 'left' | 'right') => {
		if (!scrollRef.current) return
		const scrollAmount = scrollRef.current.children[0].clientWidth + 24
		scrollRef.current.scrollBy({
			left: direction === 'left' ? -scrollAmount : scrollAmount,
			behavior: 'smooth',
		})
	}

	return (
		<section className='py-16 md:py-24 bg-tour-white w-full overflow-hidden'>
			<div className='max-w-[1400px] mx-auto px-4 sm:px-8'>
				{/* Header Section */}
				<div className='flex flex-col md:flex-row md:items-end justify-between mb-8'>
					<div className='flex flex-col items-start max-w-2xl'>
						<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-3'>
							Top Rated <span className='text-tour-green'>Vehicles</span>
						</h2>
						<p className='text-gray-500 text-sm md:text-base'>
							The highest-rated cars and SUVs across Africa&apos;s top cities
							The highest-rated cars and SUVs across Africa&apos;s top cities
						</p>
					</div>

					<div className='hidden md:flex items-center space-x-3 pb-2'>
						<button
							onClick={() => scroll('left')}
							className='w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-tour-green transition shadow-sm'>
							<ChevronLeft className='w-5 h-5' />
						</button>
						<button
							onClick={() => scroll('right')}
							className='w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-tour-green transition shadow-sm'>
							<ChevronRight className='w-5 h-5' />
						</button>
					</div>
				</div>

				{/* Filters Row */}
				<div className='flex overflow-x-auto gap-3 pb-4 mb-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
					{/* 1. Dates Picker */}
					<FilterPopover
						label={datesSet ? 'Dates Selected' : 'Dates'}
						isOpen={activeDropdown === 'dates'}
						isActive={datesSet}
						onToggle={() =>
							setActiveDropdown(activeDropdown === 'dates' ? null : 'dates')
						}
						onClose={() => setActiveDropdown(null)}>
						<div className='p-4 w-72'>
							<div className='mb-4'>
								<label className='text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5 block'>
									Pick-up
								</label>
								<input
									type='date'
									className='w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-tour-green focus:ring-1 focus:ring-tour-green transition'
								/>
							</div>
							<div className='mb-5'>
								<label className='text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5 block'>
									Drop-off
								</label>
								<input
									type='date'
									className='w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-tour-green focus:ring-1 focus:ring-tour-green transition'
								/>
							</div>
							<button
								onClick={() => {
									setDatesSet(true)
									setActiveDropdown(null)
								}}
								className='w-full bg-tour-green hover:bg-[#048417] text-white rounded-xl py-2.5 font-bold text-sm transition-colors'>
								Done
							</button>
						</div>
					</FilterPopover>

					{/* 2. Sort By */}
					<FilterPopover
						label={sortBy === 'Recommended' ? 'Sort by' : sortBy}
						isOpen={activeDropdown === 'sort'}
						isActive={sortBy !== 'Recommended'}
						onToggle={() =>
							setActiveDropdown(activeDropdown === 'sort' ? null : 'sort')
						}
						onClose={() => setActiveDropdown(null)}>
						{[
							'Recommended',
							'Price: Low to High',
							'Price: High to Low',
							'Top Rated',
							'Most Popular',
						].map((option) => (
							<button
								key={option}
								onClick={() => {
									setSortBy(option)
									setActiveDropdown(null)
								}}
								className={`px-5 py-2.5 text-sm text-left hover:bg-gray-50 transition-colors ${sortBy === option ? 'text-tour-green font-semibold bg-[#E6F8EB]/30' : 'text-gray-700'}`}>
								{option}
							</button>
						))}
					</FilterPopover>

					{/* 3. Fuel Type */}
					<FilterPopover
						label={fuelType === 'All' ? 'Fuel Type' : fuelType}
						isOpen={activeDropdown === 'fuel'}
						isActive={fuelType !== 'All'}
						onToggle={() =>
							setActiveDropdown(activeDropdown === 'fuel' ? null : 'fuel')
						}
						onClose={() => setActiveDropdown(null)}>
						{['All', 'Petrol', 'Diesel', 'Hybrid', 'Electric'].map((option) => (
							<button
								key={option}
								onClick={() => {
									setFuelType(option)
									setActiveDropdown(null)
								}}
								className={`px-5 py-2.5 text-sm text-left hover:bg-gray-50 transition-colors ${fuelType === option ? 'text-tour-green font-semibold bg-[#E6F8EB]/30' : 'text-gray-700'}`}>
								{option === 'All' ? 'All Fuel Types' : option}
							</button>
						))}
					</FilterPopover>

					{/* 4. Rating */}
					<FilterPopover
						label={minRating === 0 ? 'Rating' : `${minRating} & above`}
						isOpen={activeDropdown === 'rating'}
						isActive={minRating !== 0}
						onToggle={() =>
							setActiveDropdown(activeDropdown === 'rating' ? null : 'rating')
						}
						onClose={() => setActiveDropdown(null)}>
						{[
							{ label: 'All ratings', value: 0 },
							{ label: '4.9 & above', value: 4.9 },
							{ label: '4.7 & above', value: 4.7 },
							{ label: '4.5 & above', value: 4.5 },
						].map((option) => (
							<button
								key={option.value}
								onClick={() => {
									setMinRating(option.value)
									setActiveDropdown(null)
								}}
								className={`px-5 py-2.5 text-sm text-left hover:bg-gray-50 transition-colors ${minRating === option.value ? 'text-tour-green font-semibold bg-[#E6F8EB]/30' : 'text-gray-700'}`}>
								{option.label}
							</button>
						))}
					</FilterPopover>
				</div>

				{/* Carousel Container */}
				<div
					ref={scrollRef}
					className='flex gap-6 overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pb-8 pt-2 min-h-[440px]'>
					<AnimatePresence>
						{filteredVehicles.length > 0 ? (
							filteredVehicles.map((vehicle) => (
								<motion.div
									layout
									initial={{ opacity: 0, scale: 0.9 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.9 }}
									transition={{ duration: 0.4, type: 'spring' }}
									key={vehicle.id}
									className='w-[85vw] md:w-[280px] lg:w-[300px] flex-shrink-0 snap-center md:snap-start bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col group cursor-pointer'>
									{/* Image Section */}
									<div className='relative w-full h-[190px] overflow-hidden'>
										<Image
											src={vehicle.image}
											alt={vehicle.name}
											fill
											className='object-cover group-hover:scale-105 transition-transform duration-500'
										/>
										<button className='absolute top-3 right-3 w-8 h-8 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/40 transition z-10'>
											<Heart className='w-4 h-4 text-white' />
										</button>
										<div className='absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm rounded-md px-2 py-1 flex items-center space-x-1 z-10'>
											<Star className='w-3.5 h-3.5 text-yellow-400 fill-yellow-400' />
											<span className='text-white text-xs font-semibold'>
												{vehicle.rating}
											</span>
										</div>
									</div>

									{/* Content Section */}
									<div className='p-5 flex flex-col flex-grow'>
										<h3 className='text-lg font-bold text-gray-900 mb-1 line-clamp-1'>
											{vehicle.name}
										</h3>
										<p className='text-sm text-gray-500 mb-3'>{vehicle.type}</p>

										<div className='flex items-center space-x-1.5 text-gray-400 mb-3'>
											<MapPin className='w-4 h-4' />
											<span className='text-sm'>{vehicle.location}</span>
										</div>

										<div className='text-[13px] text-gray-500 mb-5'>
											{vehicle.seats} seats · {vehicle.bags} bags ·{' '}
											{vehicle.fuel}
										</div>

										<div className='mt-auto flex flex-col space-y-4'>
											<div className='flex items-end'>
												<span className='text-tour-green font-bold text-lg'>
													${vehicle.price}
												</span>
												<span className='text-tour-green text-sm font-medium mb-0.5 ml-1'>
													/ day
												</span>
											</div>
											<button className='w-full py-2.5 rounded-xl border border-tour-green text-tour-green font-semibold hover:bg-tour-green hover:text-white transition-colors duration-300'>
												Book Now
											</button>
										</div>
									</div>
								</motion.div>
							))
						) : (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								className='w-full flex flex-col items-center justify-center py-16 text-gray-400'>
								<p>No vehicles found matching your criteria.</p>
								<button
									onClick={() => {
										setFuelType('All')
										setMinRating(0)
										setSortBy('Recommended')
									}}
									className='mt-4 px-6 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-full text-sm font-medium transition'>
									Clear Filters
								</button>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</section>
	)
}
