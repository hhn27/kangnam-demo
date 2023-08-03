'use client'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

const arrProject = new Array(8).fill(0)

export default function SlideProjectProminent() {
    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={24}
            >
                {arrProject &&
                    arrProject.map((e, index) => (
                        <SwiperSlide key={index}>
                            <div className='w-[20.125vw] h-[26.1825vw] relative select-none'>
                                <Image
                                    src='/slideitem.jpg'
                                    alt={`slide-${index}`}
                                    quality={100}
                                    fill
                                />
                            </div>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </>
    )
}
