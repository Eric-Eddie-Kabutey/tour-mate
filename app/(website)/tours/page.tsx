import TopRatedVehicles from "@/components/car-rental/top-rated-vehicles";
import Hero from "@/components/shared/hero";
import SmartCarousel, { CarouselItem, FilterConfig } from "@/components/shared/smart-carousel";
import NewsletterSignup from "@/components/stays/news-letter-signup";
import SponsoredFeatures from "@/components/stays/sponsored-feature";

const toursFilters: FilterConfig[] = [
    {
        id: 'tourDate',
        label: 'Tour Date',
        type: 'date-range',
        dateLabels: [ 'Check-in', '' ],      
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
    { id: 'accessible', label: 'Accessible', type: 'button' },
    {
        id: 'specialNeed',
        label: 'Special Need',
        type: 'select',
        options: ['Wheelchair', 'Child seat', 'Extract luggage', 'Meet & Greet',],
    },
    {
        id: 'priceRange',
        label: 'Price Range',
        type: 'select',
        options: ['Under $30', '$30 - $60', '$60 - $200', '$100+'],
    },
    {
        id: 'Rating',
        label: 'Rating',
        type: 'select',
        options: [ '4.9* & above', '4.7* & above', '4.5* & above', 'All ratings' ],
    },
]

const mockTours: CarouselItem[] = [
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

export default function ToursPage() {
    return (<>        
        <Hero
            backgroundImage="/assets/images/tours/tours-bg.jpg" 
            subtitle="Your African Journey, Your Way"
            activeCategory="Tours" // Highlights active page!
            searchPlaceholder="Destination or experience"
            searchFilters={[
                { label: "Language", type: "select", options: [ "English", "French", "Arabic", "Swahili", "Portuguese", "Spanish" ] },
                { label: "Rating", type: "select", options: [ "4.5* & above", "4* & above", "3.5* & above", "All ratings" ] },
                { label: "Category", type: "select", options: [ "Safari", "City tour", "Cultural", "Adventure", "Wildlife", "Photography" ] },
                { label: "Price", type: "select", options: [ "Under $50", "$50 - $100", "$100 - $250", "$250+" ] },
            ]}
        />

        {/* Top Rated Vehicles: Reusable */}
        <SmartCarousel
                        title='Top Rated'
                        titleHighlight='Stays'
                        subtitle="Africa's highest-reviewed properties, loved by travellers"
                        filters={toursFilters}
                        items={mockTours}
                        itemType='stays'
                    />

        {/* Sponsored */}
        <SponsoredFeatures />

        {/* Top Rated Vehicles: Reusable */}
        <SmartCarousel
				title='Top Rated'
				titleHighlight='Stays'
				subtitle="Africa's highest-reviewed properties, loved by travellers"
				filters={toursFilters}
				items={mockTours}
				itemType='stays'
			/>

        {/* CTA */}
        <NewsletterSignup />

        {/* Top Rated Vehicles: Reusable */}
        <SmartCarousel
				title='Top Rated'
				titleHighlight='Stays'
				subtitle="Africa's highest-reviewed properties, loved by travellers"
				filters={toursFilters}
				items={mockTours}
				itemType='stays'
			/>

    </>)
}