import Link from 'next/link'

export default function Button({ children, href, className }) {
    return (
        <Link
            href={href}
            className={`flex gap-x-[0.75vw] w-fit h-fit py-[1vw] px-[2.5vw] rounded-[6.25vw] border-[0.7px] border-solid border-nu ${className}`}
        >
            <span className='text-nu title16-400-150'>{children}</span>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='nu'
                className='w-6 h-6'
            >
                <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M8.25 4.5l7.5 7.5-7.5 7.5'
                />
            </svg>
        </Link>
    )
}
