import { Parallax } from 'react-parallax';

const Banner = () => {
    return (
        <div className='mb-10 relative' >
            <Parallax
                blur={{ min: -10, max: 10 }}
                strength={-300}
            >
                <div className="hero h-[480px] bg-fixed rounded"style={{ backgroundImage: `url(https://images.unsplash.com/photo-1630610280030-da8fbc7ca25a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80)` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content" >
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Hello</h1>
                            <p className="mb-5 text-2xl">Welcome to the Adventure Campus</p>
                          
                        </div>
                    </div>
                </div>
            </Parallax>

        </div>
    );
};

export default Banner;