import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '../globals.css'
import ProviderOnboardingMenuBar from '@/components/provider-onboarding/provider-onboarding-menu-bar'
import Link from 'next/link'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Tour Mate Provider Onboarding',
	description: 'finish your onboarding by choosing what you will provide',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang='en'
			className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
			<body>
				<div className='min-h-screen bg-white flex flex-col font-sans'>
					{/* Generic Provider Header */}
					<header className='w-full bg-white h-[72px] flex items-center px-6 lg:px-12 border-b border-gray-100 relative z-40'>
						<Link href='/' className='flex items-center space-x-2'>
							<div className='w-6 h-6 bg-tour-green rounded-full rounded-br-none flex items-center justify-center'>
								<div className='w-2 h-2 bg-white rounded-full' />
							</div>
							<span className='text-xl font-bold text-gray-900 tracking-tight'>
								Tourmate
							</span>
						</Link>
					</header>

					{/* Main Content Area */}
					<main className='flex-1 flex flex-col relative z-10'>{children}</main>
				</div>
			</body>
		</html>
	)
}
