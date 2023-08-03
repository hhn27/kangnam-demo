import Link from 'next/link'
import SlideProjectProminent from './SlideProjectProminent'
import Button from '../general/Button'

export default function ProjectProminent() {
    return (
        <section className='w-screen px-120 py-[8.125vw]'>
            <div className='flex justify-between'>
                <div>
                    <span className='sub-title'>Tổng hợp các dự án</span>
                    <h2 className='title56 text-den mt-[0.62vw] mb-[3vw]'>Dự án nổi bật</h2>
                </div>
                <Button href={'/'}>Xem tất cả</Button>
            </div>
            <SlideProjectProminent />
        </section>
    )
}
