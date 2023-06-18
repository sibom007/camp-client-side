import { HiFaceFrown } from "react-icons/hi2";
import { Link, useRouteError } from 'react-router-dom'
import errorss from '../../public/undraw_page_not_found_re_e9o6.svg'

const Error = () => {
    const { error, status } = useRouteError()
    return (
        <div>
            <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
                <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                    {/* <HiFaceFrown className='w-40 h-40 text-yellow-500' /> */}
                    <img src={errorss} alt="" />
                    <div className='max-w-md text-center'>
                        <p className='text-2xl font-semibold md:text-3xl text-red-800 mb-8 mt-5'>
                            {error?.message}
                        </p>
                        <Link to='/' className='btn bg-blue-400 hover:bg-blue-500'>
                            Back to homepage
                        </Link>
                    </div>
                </div>
                
            </section>

        </div>
    );
};

export default Error;