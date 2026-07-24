import TopRatedVehicles from '@/components/car-rental/top-rated-vehicles'
import Hero from '@/components/shared/hero'
import SmartCarousel, {
	CarouselItem,
	FilterConfig,
} from '@/components/shared/smart-carousel'
import NewsletterSignup from '@/components/stays/news-letter-signup'
import SponsoredFeatures from '@/components/stays/sponsored-feature'

const carFilters: FilterConfig[] = [
	{
		id: 'dates',
		label: 'Date',
		type: 'date-range',
		dateLabels: ['Pick-up', 'Drop-off'],
	},
	{
		id: 'Sort by',
		label: 'Sort by',
		type: 'select',
		options: [
			'Price Low to High',
			'Price High to Low',
			'Top Rated',
			'Most Popular',
		],
	},
	{
		id: 'fuelType',
		label: 'Fuel Type',
		type: 'select',
		options: ['Petrol', 'Diesel', 'Hybrid', 'Electric', 'All Fuel Types'],
	},
	{
		id: 'Rating',
		label: 'Rating',
		type: 'select',
		options: ['4.9* & above', '4.7* & above', '4.5* & above', 'All ratings'],
	},
]

const mockCars: CarouselItem[] = [
	{
		id: '1',
		title: 'Toyota Land Cruiser',
		subtitle: '4x4 SUV',
		location: 'Nairobi, Kenya',
		tags: '7 seats · 4 bags · Diesel',
		rating: 4.9,
		rawPrice: 95,
		popularity: 100,
		fuelType: 'Diesel',
		priceText: (
			<>
				<span className='text-tour-green font-bold text-lg'>$95</span>
				<span className='text-tour-green text-sm ml-1'>/ day</span>
			</>
		),
		image: '/assets/images/car-rental/defender.jpg',
	},
	{
		id: '2',
        title: 'Land Rover Defender',
        subtitle: 'Off-Road 4x4',
		location: 'Nairobi, Kenya',
		tags: '5 seats · 3 bags · Diesel',
		rating: 4.9,
		rawPrice: 95,
		popularity: 85,
		fuelType: 'Diesel',
		priceText: (
			<>
				<span className='text-tour-green font-bold text-lg'>$140</span>
				<span className='text-tour-green text-sm ml-1'>/ day</span>
			</>
		),
		image: '/assets/images/car-rental/defender.jpg',
	},
	{
		id: '3',
        title: 'BMW X5',
        subtitle: 'Luxury SUV',
        location: 'Cairo, Egypt',
		tags: '5 seats · 3 bags · Petrol',
		rating: 4.9,
		rawPrice: 95,
		popularity: 90,
		fuelType: 'Petrol',
		priceText: (
			<>
				<span className='text-tour-green font-bold text-lg'>$155</span>
				<span className='text-tour-green text-sm ml-1'>/ day</span>
			</>
		),
		image: '/assets/images/car-rental/defender.jpg',
	},
	{
		id: '4',
        title: 'Mercedes E-Class',
        subtitle: 'Luxury Sedan',
        location: 'Cape Town, SA',
		tags: '5 seats · 2 bags · Hybrid',
		rating: 4.9,
		rawPrice: 450,
		popularity: 100,
		fuelType: 'Hybrid',
		priceText: (
			<>
				<span className='text-tour-green font-bold text-lg'>$450</span>
				<span className='text-tour-green text-sm ml-1'>/ day</span>
			</>
		),
		image: '/assets/images/car-rental/defender.jpg',
	},
	
	
]

export default function CarRentalPage() {
	return (
		<>
			<Hero
				backgroundImage='/assets/images/car-rental/car-rental-bg.avif'
				subtitle='Your African Journey, Your Way'
				activeCategory='Car Rental' // Highlights active page!
				searchPlaceholder='Where do you want to stay?'
				searchFilters={[
					{
						label: 'Brand',
						type: 'select',
						options: [
							'Toyota',
							'Mercedes',
							'BMW',
							'Land Rover',
							'Ford',
							'Hyundai',
						],
					},
					{
						label: 'Model',
						type: 'select',
						options: [
							'SUV',
							'Sedan',
							'4x4/Safari',
							'Minivan',
							'Pickup',
							'Luxury',
						],
					},
					{
						label: 'Price',
						type: 'select',
						options: ['Under $300/day', '$60-$120/day', '$120+/day'],
					},
					{
						label: 'Transmission',
						type: 'select',
						options: ['Automatic', 'Manual'],
					},
				]}
			/>

			{/* Top Rated Vehicles: Reusable */}
			{/* <TopRatedVehicles /> */}
			<SmartCarousel
				title='Top Rated'
				titleHighlight='Vehicles'
				subtitle="The highest-rated cars and SUVs across Africa's top cities"
				filters={carFilters}
                items={mockCars}
                itemType='cars'
			/>

			{/* Sponsored */}
			<SponsoredFeatures />

			{/* Top Rated Vehicles: Reusable */}
            <SmartCarousel
                title='Top Rated'
                titleHighlight='Vehicles'
                subtitle="The highest-rated cars and SUVs across Africa's top cities"
                filters={carFilters}
                items={mockCars}
                itemType='cars'
            />

			{/* CTA */}
			<NewsletterSignup />

			{/* Top Rated Vehicles: Reusable */}
            <SmartCarousel
                title='Top Rated'
                titleHighlight='Vehicles'
                subtitle="The highest-rated cars and SUVs across Africa's top cities"
                filters={carFilters}
                items={mockCars}
                itemType='cars'
            />
		</>
	)
}
