import TopRatedVehicles from "@/components/car-rental/top-rated-vehicles";
import Hero from "@/components/shared/hero";
import SmartCarousel, { CarouselItem, FilterConfig } from "@/components/shared/smart-carousel";
import NewsletterSignup from "@/components/stays/news-letter-signup";
import SponsoredFeatures from "@/components/stays/sponsored-feature";

const restaurantsFilters: FilterConfig[] = [      
    {
        id: 'Sort by',
        label: 'Sort by',
        type: 'select',
        options: [
            'Top Rated',
            'Price Low to High',
            'Price High to Low',
            'Most Popular',
        ],
    },
    { id: 'outdoor', label: 'Out Door', type: 'button' },
    { id: 'rooftop', label: 'Rooftop', type: 'button' },    
    {
        id: 'dietary',
        label: 'Dietary',
        type: 'select',
        options: ['No preference', 'Vegetarian', 'Vegan', 'Halal', 'Gluten-free'],
    },
    {
        id: 'city',
        label: 'City',
        type: 'select',
        options: ['Nairobi', 'Lagos', 'Cape Town', 'Accra', 'Zanzibar', 'Cairo', 'Marrakech'],
    },
    {
        id: 'rating',
        label: 'Rating',
        type: 'select',
        options: [ '4.9* & above', '4.7* & above', '4.5* & above', 'All ratings' ],
    },
]


const mockRestaurants: CarouselItem[] = [
    {
        id: '1',
        title: 'Carnivore Restaurant',
        subtitle: 'African Grill',
        location: 'Nairobi, Kenya',	
        tags: '12pm – 10pm',
        rating: 5.0,
        rawPrice: 50,
        popularity: 100,		
        priceText: (
            <>
                <span className='text-tour-green font-bold text-lg'>$</span>                
            </>
        ),
        image: '/assets/images/restaurants/c1.jpg',
    },
    {
        id: '2',
        title: 'The Vineyard Bistro',
        subtitle: 'Mediterranean',
        location: 'Cape Town, SA',	
        tags: '12pm – 11pm',
        rating: 4.9,
        rawPrice: 500,
        popularity: 85,		
        priceText: (
            <>
                <span className='text-tour-green font-bold text-lg'>$$</span>
                <span className='text-tour-green text-sm ml-1'>/ person</span>
            </>
        ),
        image: '/assets/images/restaurants/c4.jpg',
    },
    {
        id: '3',
        title: 'Marrakech Riad Dining',
        subtitle: 'Moroccan',
        location: 'Marrakech, Morocco',
        tags: '12pm – 11pm',
        rating: 4.9,
        rawPrice: 1000,
        popularity: 90,		
        priceText: (
            <>
                <span className='text-tour-green font-bold text-lg'>$$$</span>        
            </>
        ),
        image: '/assets/images/restaurants/c1.jpg',
    },
    {
        id: '4',
        title: 'Terra Nova',
        subtitle: 'Ethiopian & Local',
        location: 'Addis Ababa, ET',
        tags: '11am – 10pm',
        rating: 4.9,
        rawPrice: 100,
        popularity: 100,		
        priceText: (
            <>
                <span className='text-tour-green font-bold text-lg'>$$</span>              
            </>
        ),
        image: '/assets/images/restaurants/c1.jpg',
    },
    {
        id: '5',
        title: 'Nile Rooftop Bar',
        subtitle: 'African & Middle Eastern',
        location: 'Cairo, Egypt',
        tags: '6pm – 2am',
        rating: 4.9,
        rawPrice: 2000,
        popularity: 89,
        priceText: (
            <>
                <span className='text-tour-green font-bold text-lg'>$$$</span>               
            </>
        ),
        image: '/assets/images/restaurants/c4.jpg',
    },
]

export default function RestaurantsPage() {
    return (<>        
        <Hero
            backgroundImage="/assets/images/restaurants/restaurants-bg.jpg" 
            subtitle="Your African Journey, Your Way"
            activeCategory="Restaurants" // Highlights active page!
            searchPlaceholder="From - To"
            searchFilters={[
                { label: "Language", type: "select", options: [ "English", "French", "Arabic", "Swahili", "Portuguese", "Spanish" ] },
                { label: "Rating", type: "select", options: [ "4.5* & above", "4* & above", "3.5* & above", "All ratings" ] },
                { label: "Category", type: "select", options: [ "Safari", "City tour", "Cultural", "Adventure", "Wildlife", "Photography" ] },
                { label: "Price", type: "select", options: [ "Under $50", "$50 - $100", "$100 - $250", "$250+" ] },
            ]}
        />

        {/* Top Rated Restaurants: Reusable */}
        <SmartCarousel
            title='Top'
            titleHighlight='Rated Restaurants'
            subtitle="Africa's finest dining experiences, celebrated by food lovers worldwide"
            filters={restaurantsFilters}
            items={mockRestaurants}
            itemType='restaurants'
        />

        {/* Sponsored */}
        <SponsoredFeatures />

        {/* Recommended for You: Reusable */}
        <SmartCarousel
            title='Recommended'
            titleHighlight='For You'
            subtitle="Dining spots matching your cuisine preferences and location"
            filters={restaurantsFilters}
            items={mockRestaurants}
            itemType='restaurants'
        />

        {/* CTA */}
        <NewsletterSignup />

        {/* Restaurants You Might Like: Reusable */}
        <SmartCarousel
            title='Restaurants'
            titleHighlight='You Might Like'
            subtitle="More flavours and dining stories waiting to be discovered across Africa"
            filters={restaurantsFilters}
            items={mockRestaurants}
            itemType='restaurants'
        />

    </>)
}