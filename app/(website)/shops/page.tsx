import TopRatedVehicles from "@/components/car-rental/top-rated-vehicles";
import Hero from "@/components/shared/hero";
import SmartCarousel, { CarouselItem, FilterConfig } from "@/components/shared/smart-carousel";
import NewsletterSignup from "@/components/stays/news-letter-signup";
import SponsoredFeatures from "@/components/stays/sponsored-feature";

const shopsFilters: FilterConfig[] = [       
    {
        id: 'Sort by',
        label: 'Sort by',
        type: 'select',
        options: [
            'Most popular',            
            'Top Rated',
            'Newest',
        ],
    },
    { id: 'openOwn', label: 'Onw Onw', type: 'button' },
    { id: 'freeEntry', label: 'Free Entry', type: 'button' },    
    {
        id: 'origin',
        label: 'Origin',
        type: 'select',
        options: ['Local Artisan', 'African Brand', 'International'],
    },
    {
        id: 'openHours',
        label: 'Open Hours',
        type: 'select',
        options: ['Open Weekdays', 'Open Weekend', 'Open Daily'],
    },
    {
        id: 'country',
        label: 'Country',
        type: 'select',
        options: [ 'Kenya', 'Nigeria', 'Ghana', 'South Africa', 'Tanzania', 'Morocco', 'Egypt' ],
    },
    {
        id: 'rating',
        label: 'Rating',
        type: 'select',
        options: [ '4.9* & above', '4.7* & above', '4.5* & above', 'All ratings' ],
    },
]

const mockShop: CarouselItem[] = [
    {
        id: '1',
        title: 'Cape Town Design Quarter',
        subtitle: 'Design & Art',
        location: 'Cape Town, SA',	
        tags: 'Daily, 10am–8pm',
        rating: 5.0,
        rawPrice: 0,
        popularity: 100,		
        priceText: (
            <>
                <span className='text-tour-green font-bold text-lg'>Free entry</span>               
            </>
        ),
        image: '/assets/images/shops/c1.jpg',
    },
    {
        id: '2',
        title: 'Cairo Khan el-Khalili',
        subtitle: 'Antiques & Crafts',
        location: 'Cairo, Egypt',	
        tags: 'Daily, 9am–10pm',
        rating: 4.9,
        rawPrice: 0,
        popularity: 85,		
        priceText: (
            <>
                <span className='text-tour-green font-bold text-lg'>Free Entry</span>                
            </>
        ),
        image: '/assets/images/shops/c2.jpg',
    },
    {
        id: '3',
        title: 'Marrakech Medina Souks',
        subtitle: 'Textiles & Spice',
        location: 'Marrakech, Morocco',
        tags: 'Daily, 9am–9pm',
        rating: 4.9,
        rawPrice: 0,
        popularity: 90,		
        priceText: (
            <>
                <span className='text-tour-green font-bold text-lg'>Free Entry</span>                
            </>
        ),
        image: '/assets/images/shops/c3.jpg',
    },
    {
        id: '4',
        title: 'Maasai Market',
        subtitle: 'Crafts & Art',
        location: 'Nairobi, Kenya',
        tags: 'Mon–Sat, 8am–6pm',
        rating: 4.9,
        rawPrice: 380,
        popularity: 100,		
        priceText: (
            <>
                <span className='text-tour-green font-bold text-lg'>Free Entry</span>                
            </>
        ),
        image: '/assets/images/shops/c2.jpg',
    },

]

export default function ShopsPage() {
    return (<>        
        <Hero
            backgroundImage="/assets/images/shops/shops-bg.avif" 
            subtitle="Your African Journey, Your Way"
            activeCategory="Shops" // Highlights active page!
            searchPlaceholder="City or neighborhood"
            searchFilters={[
                { label: "Language", type: "select", options: [ "English", "French", "Arabic", "Swahili", "Portuguese", "Spanish" ] },
                { label: "Rating", type: "select", options: [ "4.5* & above", "4* & above", "3.5* & above", "All ratings" ] },
                { label: "Category", type: "select", options: [ "Safari", "City tour", "Cultural", "Adventure", "Wildlife", "Photography" ] },
                { label: "Price", type: "select", options: [ "Under $50", "$50 - $100", "$100 - $250", "$250+" ] },
            ]}
        />
        
         {/* Popular Markets & Shops: Reusable */}
                <SmartCarousel
                    title='Popular Markets'
                    titleHighlight='& Shops'
            subtitle="Africa's most beloved markets and boutiques, visited by thousands of travellers"
                                filters={shopsFilters}
                                items={mockShop}
                                itemType='shops'
                            />

        {/* Sponsored */}
        <SponsoredFeatures />

        {/* Recommended for You: Reusable */}
        <SmartCarousel
            title='Recommended'
            titleHighlight='for You'
            subtitle="Curated shops and markets matching your interests and wishlist"
            filters={shopsFilters}
            items={mockShop}
            itemType='shops'
        />

        {/* CTA */}
        <NewsletterSignup />

        {/* Shops You Might Like: Reusable */}
        <SmartCarousel
            title='Shops'
            titleHighlight='You Might Like'
            subtitle="More unique finds and local treasures worth exploring across the continent"
            filters={shopsFilters}
            items={mockShop}
            itemType='shops'
        />

    </>)
}