import PrimaryButton from "../shared/PrimaryButton";
import gradient from "../assets/heroBg.png"


const BgStyle = {
  backgroundImage: `url(${gradient})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'center',
  width: '100%',
  height: '100%'
}

const Hero = () => {
  return (
    <section style={BgStyle} className="z-[-1] w-full min-h-screen">
      <div className="container mx-auto py-16 sm:py-0">

        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center min-h-[600px]">
          {/* text content section */}

          <div className="space-y-7 text-dark order-2 sm:order-1">
            <h1 className="text-4xl md:text-6xl">
              Fresh & Healthy Meal Plan 
              <span className="font-ephesis text-secondary text-6xl md:text-7xl"> Delivery </span>
              In Miami
            </h1>
            <p className="max-w-sm">
              Delicious Meals Delivered to Your Door from $132.9 per Week
            </p>
            {/* button section */}
            <div>
               <PrimaryButton />
            </div>
          </div>

          {/* Image section */}

          <div className="order-1 sm:order-2 relative z-30 ">
            <img 
              src="src/assets/hero.png" 
              alt="hero image" 
              className="w-full sm:scale-125 sm:translate-y-16"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero