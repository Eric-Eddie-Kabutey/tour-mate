import SponsoredCard from "../shared/sponsored-card";


const features = [
    {
        title: "Drive Your Way",
        description: "Affordable, reliable car rentals for every trip across Africa.",
        imageSrc: "/assets/images/sponsored/drive.jpg",
        href: "/cars"
    },
    {
        title: "Discover Local Events",
        description: "From music festivals to cultural fairs happening near your stay.",
        imageSrc: "/assets/images/sponsored/events.jpg",
        href: "/events"
    }
];

export default function SponsoredFeatures() {
    return (
        <section className="py-16 bg-tour-white w-full">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {features.map((feature) => (
                        <SponsoredCard
                            key={feature.title}
                            title={feature.title}
                            description={feature.description}
                            imageSrc={feature.imageSrc}
                            href={feature.href}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}