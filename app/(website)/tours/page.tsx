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
    { id: 'dayTrip', label: 'Day Trip', type: 'button' },
    { id: 'MultiDay', label: 'Multi-Day', type: 'button' },
    { id: 'private', label: 'Private', type: 'button' },
    {
        id: 'duration',
        label: 'Duration',
        type: 'select',
        options: ['Half day', 'Full day', '2-3 days', '4-7 days', '7+ days'],
    },
    {
        id: 'groupSize',
        label: 'Group Size',
        type: 'select',
        options: ['Solo', 'Couple', 'Small (2-6)', 'Group (7+)'],
    },
    {
        id: 'rating',
        label: 'Rating',
        type: 'select',
        options: [ '4.9* & above', '4.7* & above', '4.5* & above', 'All ratings' ],
    },
]

const mockTours: CarouselItem[] = [
    {
        id: '1',
        title: 'Gorilla Trekking Rwanda',
        subtitle: 'Wildlife Experience',
        location: 'Volcanoes NP, Rwanda',	
        tags: 'Full day · Solo–8 pax',
        rating: 5.0,
        rawPrice: 1500,
        popularity: 100,		
        priceText: (
            <>
                <span className='text-tour-green font-bold text-lg'>$1,500</span>
                <span className='text-tour-green text-sm ml-1'>/ person</span>
            </>
        ),
        image: '/assets/images/tours/elephant.jpg',
    },
    {
        id: '2',
        title: 'Serengeti Safari',
        subtitle: 'Wildlife Safari',
        location: 'Serengeti, Tanzania',	
        tags: '3 days · 2–8 pax',
        rating: 4.9,
        rawPrice: 450,
        popularity: 85,		
        priceText: (
            <>
                <span className='text-tour-green font-bold text-lg'>$450</span>
                <span className='text-tour-green text-sm ml-1'>/ person</span>
            </>
        ),
        image: '/assets/images/tours/elephant.jpg',
    },
    {
        id: '3',
        title: 'Kilimanjaro Trek',
        subtitle: 'Mountain Adventure',
        location: 'Moshi, Tanzania',
        tags: '7 days · Solo–10 pax',
        rating: 4.9,
        rawPrice: 1800,
        popularity: 90,		
        priceText: (
            <>
                <span className='text-tour-green font-bold text-lg'>$1,800</span>
                <span className='text-tour-green text-sm ml-1'>/ person</span>
            </>
        ),
        image: '/assets/images/tours/elephant.jpg',
    },
    {
        id: '4',
        title: 'Okavango Delta',
        subtitle: 'Wildlife Safari',
        location: 'Botswana',
        tags: '2 days · 2–6 pax',
        rating: 4.9,
        rawPrice: 380,
        popularity: 100,		
        priceText: (
            <>
                <span className='text-tour-green font-bold text-lg'>$380</span>
                <span className='text-tour-green text-sm ml-1'>/ person</span>
            </>
        ),
        image: '/assets/images/tours/elephant.jpg',
    },
    {
        id: '5',
        title: 'Sahara Desert Camp',
        subtitle: 'Adventure',
        location: 'Merzouga, Morocco',
        tags: '2 nights · 2–8 pax',
        rating: 4.9,
        rawPrice: 220,
        popularity: 89,
        priceText: (
            <>
                <span className='text-tour-green font-bold text-lg'>$220</span>
                <span className='text-tour-green text-sm ml-1'>/ person</span>
            </>
        ),
        image: '/assets/images/tours/sahara-desert-camp.jpg',
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

        {/* Top Rated Tours: Reusable */}
        <SmartCarousel
                        title='Top Rated'
                        titleHighlight='Tours'
            subtitle="Africa's most-loved experiences, rated by thousands of travellers"
                        filters={toursFilters}
                        items={mockTours}
                        itemType='tours'
                    />

        {/* Sponsored */}
        <SponsoredFeatures />

        {/* Recommended For You: Reusable */}
        <SmartCarousel
                title='Recommended'
				titleHighlight='For You'
            subtitle="Curated experiences matching your travel style and interests"
				filters={toursFilters}
				items={mockTours}
				itemType='tours'
			/>

        {/* CTA */}
        <NewsletterSignup />

        {/* Tours You Might Like: Reusable */}
        <SmartCarousel
				title='Tours'
            titleHighlight='You Might Like'
            subtitle="More adventures waiting for you across the African continent"
				filters={toursFilters}
				items={mockTours}
				itemType='tours'
			/>

    </>)
}