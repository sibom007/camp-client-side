import { FcLike,FcAddressBook,FcReadingEbook,FcBusinessman } from "react-icons/fc";

const Extrasection = () => {
    return (
        <div>
            <div className='grid md:grid-cols-4 grid-cols-2 md:space-x-8 md:ml-32 mt-5 mb-6 '>
                <div className='border-4 mt-5 ml-4 rounded-lg text-xl font-bold text-center border-sky-400 text-yellow-300 w-36 h-36 md:hover:w-56 md:hover:h-52 md:hover:bg-sky-300 duration-700'><FcLike className='ml-9 w-16 h-16'/> total Likes <br />25.6K</div>
                <div className='border-4 mt-5 ml-4 rounded-lg text-xl font-bold text-center border-sky-400 w-36 h-36 text-orange-400 md:hover:w-56 md:hover:h-52 md:hover:bg-sky-300 duration-700'><FcAddressBook className='ml-9 w-16 h-16'/> Page Views <br /> 2.6M</div>
                <div className='border-4 mt-5 ml-4 rounded-lg text-pink-500 text-xl font-bold text-center border-sky-400 w-36 h-36 md:hover:w-56 md:hover:h-52 md:hover:bg-sky-300 duration-700'><FcReadingEbook className='ml-9 w-16 h-16'/> New Registers<br /> 1,200</div>
                <div className='border-4 mt-5 ml-4 rounded-lg text-xl font-bold text-center border-sky-400 w-36 h-36 md:hover:w-56 md:hover:h-52 md:hover:bg-sky-300 duration-700'><FcBusinessman className='ml-9 w-16 h-16'/> New Users <br /> 4,200</div>
            </div>
        </div>
    );
};

export default Extrasection;