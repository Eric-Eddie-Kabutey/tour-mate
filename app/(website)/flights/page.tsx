import TopRatedVehicles from '@/components/car-rental/top-rated-vehicles'
import Hero from '@/components/shared/hero'
import SmartCarousel, {
	CarouselItem,
	FilterConfig,
} from '@/components/shared/smart-carousel'
import NewsletterSignup from '@/components/stays/news-letter-signup'
import SponsoredFeatures from '@/components/stays/sponsored-feature'

const flightFilters: FilterConfig[] = [
	{
		id: 'Sort by',
		label: 'Sort by',
		type: 'select',
		options: [
			'Price Low to High',
			'Price High to Low',
			'Duration',
			'Top Rated',
		],
	},
	{ id: 'directOnly', label: 'Direct', type: 'button' },
	{
		id: 'Stops',
		label: 'Stops',
		type: 'select',
		options: ['Direct only', 'Up to 1 stop', 'Up to 2 stops'],
	},
	{
		id: 'Airline',
		label: 'Airline',
		type: 'select',
		options: [
			'Kenya Airways',
			'Ethiopia Airlines',
			'RwandAir',
			'Air Peace',
			'EgyptAir',
			'Royal Air Maroc',
		],
	},
	{
		id: 'Max Price',
		label: 'Max Price',
		type: 'select',
		options: ['Under $200', 'Under $350', 'Under $500', '$500+'],
	}, // Note: The Smart Engine parses "Under $200" automatically!
]

const mockFlights: CarouselItem[] = [
	{
		id: '1',
        title: 'Nairobi to Lagos Business',
		subtitle: '4x4 SUV',
        location: 'Nairobi → Lagos',
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
		image: '/assets/images/flights/flight.jpg',
	},
	{
		id: '2',
        title: 'Nairobi to Cape Town',
		subtitle: 'Off-Road 4x4',
        location: 'Nairobi → Lagos',
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
		image: '/assets/images/flights/flight.jpg',
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
		image: '/assets/images/flights/flight.jpg',
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
		image: '/assets/images/flights/flight.jpg',
	},
]

export default function FlightsPage() {
	return (
		<>
			<Hero
				backgroundImage='/assets/images/flights/flights-bg.jpg'
				subtitle='Your African Journey, Your Way'
				activeCategory='Flights' // Highlights active page!
				searchPlaceholder='From - To'
				searchFilters={[
					{ label: 'Departure date', type: 'date' }, // Renders the beautiful Date Picker
					{
						label: 'Cabin Class',
						type: 'select',
						options: ['Economy', 'Business', 'First Class', 'Premium Economy'],
					},
					{
						label: 'Trip type',
						type: 'select',
						options: ['Round Trip', 'One Way'],
					},
				]}
			/>

			{/* Top Rated Vehicles: Reusable */}
			<SmartCarousel
                title='Best Flight'
                titleHighlight='Deals'
                subtitle="Top-value routes across Africa, curated for the savvy traveller"
				filters={flightFilters}
                items={mockFlights}
                itemType='flights'
			/>

			{/* Sponsored */}
			<SponsoredFeatures />

            {/* Recommended Routes: Reusable */}  
			<SmartCarousel
                title='Recommended'
                titleHighlight='Routes'
                subtitle="Flights tailored to your departure city and preferred travel dates"
				filters={flightFilters}
                items={mockFlights}
                itemType='flights'
			/>

			{/* CTA */}
			<NewsletterSignup />

            {/* BFlights You Like: Reusable */}
			<SmartCarousel
				title='BFlights You'
				titleHighlight='Like'
                subtitle="More routes connecting Africa's greatest cities and destinations"
				filters={flightFilters}
                items={mockFlights}
                itemType='flights'
			/>
		</>
	)
}
