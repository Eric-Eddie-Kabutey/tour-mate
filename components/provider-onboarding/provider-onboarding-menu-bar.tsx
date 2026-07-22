import Link from "next/link";

export default function ProviderOnboardingMenuBar() {
    return (<>
    {/* LEFT SIDE: Dark Green Sidebar */}
                <aside className="w-full lg:w-[25%] bg-tour-darker-green p-8 lg:p-12 flex flex-col justify-between min-h-[30vh] lg:min-h-screen relative overflow-hidden">
                    {/* Subtle background glow/pattern could go here if needed */}
    
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 z-10 w-max">
                        <div className="w-8 h-8 bg-tour-green rounded-full rounded-br-none flex items-center justify-center">
                            <div className="w-3 h-3 bg-white rounded-full" />
                        </div>
                        <span className="text-2xl font-bold text-white tracking-tight">Tourmate</span>
                    </Link>
    
                    {/* Testimonial */}
                    <div className="mt-16 lg:mt-0 z-10 max-w-sm">
                        <p className="text-gray-300 text-lg md:text-xl font-light italic leading-relaxed mb-6">
                            &quot;Tourmate helped me double my bookings in the first month. The setup was incredibly easy.&quot;
                        </p>
                        <p className="text-tour-green font-bold text-sm">
                            Kwame A. — Tour Guide, Accra
                        </p>
                    </div>
                </aside>
    </>)
}