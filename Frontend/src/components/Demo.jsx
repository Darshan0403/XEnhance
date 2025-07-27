import Img2 from '../assets/HeadAfter.jpg';
import Img1 from '../assets/HeadBefore.jpg';
import Img3 from '../assets/LegBefore.jpg';
import Img4 from '../assets/LegAfter.jpg';

export default function Demo() {
  return (
    <div className="mt-44 w-full min-h-screen bg-stone-300" id="demo">
      <div className="flex justify-center">
        <p className="text-6xl mt-20">Demo</p>
      </div>

      <div className="flex flex-col items-center px-4 space-y-12 mt-10">
        {/* First Row - Head Images */}
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12">
          <div className="text-center">
            <p className="text-2xl mb-2">Before</p>
            <div className="bg-stone-100 h-64 w-64 rounded-lg shadow-2xl shadow-stone-600 hover:scale-105 transition-all duration-300">
              <img src={Img1} alt="Head Before" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
          <div className="text-center">
            <p className="text-2xl mb-2">After</p>
            <div className="bg-stone-500 h-64 w-64 rounded-lg shadow-2xl shadow-stone-600 hover:scale-105 transition-all duration-300">
              <img src={Img2} alt="Head After" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </div>

        <p className="text-black text-lg font-semibold max-w-2xl text-center">
          As you can see, the X-ray before is full of noises and disturbances.
        </p>

        {/* Second Row - Leg Images */}
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12">
          <div className="text-center">
            <p className="text-2xl mb-2">Before</p>
            <div className="bg-stone-100 h-64 w-64 rounded-lg shadow-2xl shadow-stone-600 hover:scale-105 transition-all duration-300">
              <img src={Img3} alt="Leg Before" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
          <div className="text-center">
            <p className="text-2xl mb-2">After</p>
            <div className="bg-stone-500 h-64 w-64 rounded-lg shadow-2xl shadow-stone-600 hover:scale-105 transition-all duration-300">
              <img src={Img4} alt="Leg After" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </div>

        <p className="text-black text-lg font-semibold max-w-2xl text-center">
          After enhancing them, you can see the X-rays are far better, cleaner,
          and noise is much less.
        </p>
      </div>
    </div>
  );
}