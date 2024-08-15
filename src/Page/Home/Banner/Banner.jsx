import { Parallax } from 'react-parallax';
import ph1 from '../../../../public/assiment -12/reshot-icon-school-VRTA5UGFYB.svg'
import ph2 from '../../../../public/assiment -12/reshot-icon-school-3TY25DHKL7.svg'

const Banner = () => {
    return (
      <div className="mb-10 relative mt-5 ">
        <Parallax
          blur={{ min: -10, max: 10 }}
          strength={-300}
          className="rounded-2xl">
          <div
            className="hero h-[480px] bg-fixed "
            style={{
              backgroundImage: `url(https://burst.shopifycdn.com/photos/back-to-school.jpg?width=925&format=pjpg&exif=1&iptc=1)`,
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content ">
              <img hidden className="md:block w-20 h-20" src={ph1} alt="" />
              <div className="max-w-md">
                <h1 className="text-xl font-bold text-white mb-2">
                  {" "}
                  Hello Welcome To Adventure Campus
                </h1>
                <div>
                  <p className="mb-5 text-2xl">
                    Empowering young minds with knowledge, creativity, and
                    character. Join us in shaping the future!
                  </p>
                </div>
              </div>
              <img hidden className="md:block w-20 h-20" src={ph2} alt="" />
            </div>
          </div>
        </Parallax>
      </div>
    );
};

export default Banner;