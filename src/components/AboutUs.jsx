import BgPolygon from "../assets/polygon.png"
import vector from "../assets/vector-wave.png"
import { FaUser } from "react-icons/fa"


const bgStyle = {
    backgroundImage: `url(${BgPolygon})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
    position: 'relative'
}

const AboutUs = () => {
  return (
    <section style={bgStyle} className="">
        <div className="container mx-auto py-8 min-h-[500px] relative z-10">
            <h1 className="py-8 tracking-wide text-2xl font-semibold text-white text-center">
                About Us
            </h1>

            {/* card section */}
            <div className="bg-white/80 my-10">
                <p className="p-10 ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi architecto facilis 
                    voluptate et rem sit ut nostrum sed, vel eos. Enim veritatis et tenetur ipsum, dolorem 
                    accusamus modi fuga quo adipisci, rerum similique saepe! Veniam unde perspiciatis 
                    necessitatibus ad eos dolores tempora libero, inventore eius soluta modi qui aspernatur 
                    ab. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, unde harum 
                    saepe nihil beatae illo inventore distinctio totam et incidunt aliquam. Iure impedit 
                    reprehenderit sit hic eveniet, dicta repudiandae consectetur. Lorem ipsum, dolor sit amet 
                    consectetur adipisicing elit. Rem vitae soluta aliquam, perferendis aperiam et iusto 
                    reiciendis aliquid natus maxime?
                </p>
                <div className="flex justify-center pb-12">
                    <button className="flex items-center gap-2 bg-primary text-xl h-[40px]
                    px-5 text-white py-2 hover:scale-105 transition-all ease-in-out delay-200 cursor-pointer">
                        <FaUser />
                        My Account
                    </button>
            </div>
            </div>
           
        </div>
        {/* vector section */}
        <div>
            <img 
                src={vector} 
                alt="vector" 
                className="absolute top-0 left-0 right-0 w-full "
            />
        </div>
    </section>
  )
}

export default AboutUs