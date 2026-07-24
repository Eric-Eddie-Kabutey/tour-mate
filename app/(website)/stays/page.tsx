import Hero from '@/components/shared/hero'
import SmartCarousel, {
	CarouselItem,
	FilterConfig,
} from '@/components/shared/smart-carousel'
import NewsletterSignup from '@/components/stays/news-letter-signup'
import SponsoredFeatures from '@/components/stays/sponsored-feature'

const staysFilters: FilterConfig[] = [
	{
		id: 'dates',
		label: 'Dates',
		type: 'date-range',
		dateLabels: ['Check-in', 'Check-out'],
	},
	{ id: 'Guests', label: 'Guest', type: 'counter' },
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
	{ id: 'freeCancellation', label: 'Free Cancellation', type: 'button' },
	{
		id: 'starRating',
		label: 'Star Rating',
		type: 'select',
		options: ['5 Stars', '4 Stars', '3 Stars'],
	},
	{
		id: 'Rating',
		label: 'Rating',
		type: 'select',
		options: ['4.9* & above', '4.7* & above', '4.5* & above', 'All ratings'],
	},
]

const mockStays: CarouselItem[] = [
	{
		id: '1',
		title: 'Nairobi to Lagos Business',
		subtitle: '4x4 SUV',
		location: 'Nairobi → Lagos',		
		rating: 4.9,
		rawPrice: 95,
		popularity: 100,		
		priceText: (
			<>
				<span className='text-tour-green font-bold text-lg'>$95</span>
				<span className='text-tour-green text-sm ml-1'>/ day</span>
			</>
		),
		image: '/assets/images/stay/silo.jpg',
	},
	{
		id: '2',
		title: 'Nairobi to Cape Town',
		subtitle: 'Off-Road 4x4',
		location: 'Nairobi → Lagos',		
		rating: 4.9,
		rawPrice: 95,
		popularity: 85,		
		priceText: (
			<>
				<span className='text-tour-green font-bold text-lg'>$140</span>
				<span className='text-tour-green text-sm ml-1'>/ day</span>
			</>
		),
		image: '/assets/images/stay/anantara.jpg',
	},
	{
		id: '3',
		title: 'Zanzibar Beach Villa',
		subtitle: 'Private Villa',
		location: 'Zanzibar, Tanzania',		
		rating: 4.9,
		rawPrice: 95,
		popularity: 90,		
		priceText: (
			<>
				<span className='text-tour-green font-bold text-lg'>$155</span>
				<span className='text-tour-green text-sm ml-1'>/ day</span>
			</>
		),
		image: '/assets/images/stay/zanzibar.jpg',
	},
	{
		id: '4',
		title: 'Mercedes E-Class',
		subtitle: 'Luxury Sedan',
		location: 'Cape Town, SA',		
		rating: 4.9,
		rawPrice: 450,
		popularity: 100,		
		priceText: (
			<>
				<span className='text-tour-green font-bold text-lg'>$450</span>
				<span className='text-tour-green text-sm ml-1'>/ day</span>
			</>
		),
        image: '/assets/images/stay/anantara.jpg',
	},
]

export default function StayPage() {
	return (
		<>
			<Hero
				backgroundImage='/assets/images/stay/stays-bg.avif'
				subtitle='Luxury hotels, apartments and villas across 20+ African countries.'
				activeCategory='Stays' // Highlights the Stays icon!
				searchPlaceholder='Where do you want to stay?'
				searchFilters={[
					{
						label: 'Property type',
						type: 'select',
						options: [
							'Hotel',
							'Apartment',
							'Villa',
							'Guesthouse',
							'Resort',
							'Hostel',
						],
					},
					{
						label: 'Price',
						type: 'select',
						options: [
							'Under $20',
							'$50 - $100',
							'$100 - $200',
							'$200 - $500',
							'$500+',
						],
					},
					{
						label: 'Amenities',
						type: 'select',
						options: ['Pool', 'WiFi', 'Gym', 'Spa', 'Restaurant', 'Parking'],
					},
				]}
			/>

			{/* Top Rated Stays */}
			<SmartCarousel
				title='Top Rated'
				titleHighlight='Stays'
				subtitle="Africa's highest-reviewed properties, loved by travellers"
				filters={staysFilters}
				items={mockStays}
				itemType='stays'
			/>

			{/* Sponsored */}
			<SponsoredFeatures />

			{/* Recommended stays */}
			<SmartCarousel
				title='Recommended'
				titleHighlight='for You'
				subtitle='Handpicked based on your travel dates and preferences'
				filters={staysFilters}
				items={mockStays}
				itemType='stays'
			/>

			{/* CTA */}
			<NewsletterSignup />

			{/* Stays You Might Liked */}
			<SmartCarousel
				title='Stays'
				titleHighlight='You Might Liked'
				subtitle='More hidden gems and unique properties across the continent'
				filters={staysFilters}
				items={mockStays}
				itemType='stays'
			/>
		</>
	)
}
