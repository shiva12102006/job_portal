import Link from 'next/link'
import Image from 'next/image'
import "./not-found.css";



export default function NotFound() {
    return (<>

        <div className='flex justify-center items-center mt-26'>
            <div>
                <Image
                    src="/not403.png"
                    // public folder ke andar
                    className='rounded-bl-lg rounded-br-lg'
                    alt="Profile"
                    width={500}
                    height={500}

                />



            </div>

            <div className=' items-center p-6  gap-5'>
                <h1 className='bold-none text-5xl font-bold'>OOPS !</h1>
                <p className='font-bold text-5xl'>PAGE  <span className='text-green-600'>NOT FOUND </span></p>
                <Link
                    href="/"
                    className="relative inline-block px-7 py-3 mt-6
             font-semibold text-green-600
             border-2 border-green-600 rounded-lg
             overflow-hidden
             group"
                >
                    <span className="absolute inset-0 bg-green-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <span className="relative group-hover:text-white transition-colors duration-300">
                        GO TO HOME
                    </span>
                </Link>

            </div>

        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='wave44'>
            <path fill="#f3f4f5" fillOpacity="0.7" d="M0,224L48,208C96,192,192,160,288,165.3C384,171,480,213,576,234.7C672,256,768,256,864,234.7C960,213,1056,171,1152,170.7C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>




        </svg>






    </>

    )
}
