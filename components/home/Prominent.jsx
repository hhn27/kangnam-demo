import Image from 'next/image'

export default function Prominent() {
    return (
        <section className='relative h-screen'>
            <Image
                className='object-cover'
                src='/bg-prominent.jpg'
                fill
                quality={100}
            />
        </section>
    )
}
