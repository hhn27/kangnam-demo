import 'swiper/css'
import './globals.css'

import { Inter } from 'next/font/google'
import { useLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import Footer from '@/components/general/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({ children, params }) {
    const locale = useLocale()

    if (params.locale !== locale) {
        notFound()
    }

    return (
        <html lang={locale}>
            <body
                suppressHydrationWarning={true}
                className={inter.className}
            >
                <main>{children}
                <Footer></Footer></main>
                <Script
                    src='https://maps.vietmap.vn/sdk/vietmap-gl/1.15.3/vietmap-gl.js'
                    strategy='beforeInteractive'
                />
                <Script
                    src='https://maps.vietmap.vn/sdk/vietmap-gl/1.15.3/vietmap-gl.css'
                    strategy='beforeInteractive'
                />
            </body>
        </html>
    )
}
