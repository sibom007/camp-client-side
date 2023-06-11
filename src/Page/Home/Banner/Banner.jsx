import { Parallax } from 'react-parallax';
import ph1 from '../../../../public/assiment -12/reshot-icon-school-VRTA5UGFYB.svg'
import ph2 from '../../../../public/assiment -12/reshot-icon-school-3TY25DHKL7.svg'

const Banner = () => {
    return (
        <div className='mb-10 relative' >
            <Parallax
                blur={{ min: -10, max: 10 }}
                strength={-300}
            >
                <div className="hero h-[480px] bg-fixed rounded" style={{ backgroundImage: `url(https://burst.shopifycdn.com/photos/back-to-school.jpg?width=925&format=pjpg&exif=1&iptc=1)` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content" >
                    <img hidden className='md:block w-20 h-20' src={ph1} alt="" />
                        <div className="max-w-md"> 
                            <div> 
                                <h1 className="mb-5 text-5xl font-bold">Hello</h1>
                                <p className="mb-5 text-2xl">Welcome to the Adventure Campus</p>
                                </div>
                        </div>
                        <img hidden className='md:block w-20 h-20' src={ph2} alt="" />
                    </div>
                </div>
            </Parallax>

        </div>
    );
};

export default Banner;