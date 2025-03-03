import { FaBus } from "react-icons/fa"

const WhyChooseUs = () => {
  return (
    <section className="py-14 md:py-8 bg-gray-50">
        <div className="container mx-auto py-8">
            {/* heading section */}
            <h1 className="py-8 tracking-wide text-2xl font-semibold text-dark text-center">
                Why Choose Us
            </h1>
            {/* card section */}
            <div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-14 sm:gap-4 ">

                    {/* first card section */}
                    <div className="text-center justify-center flex items-center flex-col gap-1 px-2 ">
                        <p className="text-dark/70 font-semibold ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.  
                        </p>
                        <p className="text-5xl rotate-90 text-primary text-center translate-x-4">
                            ....
                        </p>
                        <FaBus 
                            className="text-5xl text-secondary"
                        />
                    </div>
                    {/* second card section */}
                    <div className="text-center justify-center flex items-center flex-col gap-1 px-2 ">
                        <FaBus 
                            className="text-5xl text-secondary"
                        />
                        <p className="text-5xl rotate-90 text-primary text-center translate-x-4">
                            ....
                        </p>
                        <p className="text-dark/70 font-semibold ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.  
                        </p>
                        
                    </div>

                    {/* first card section */}
                    <div className="text-center justify-center flex items-center flex-col gap-1 px-2 ">
                        <p className="text-dark/70 font-semibold ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.  
                        </p>
                        <p className="text-5xl rotate-90 text-primary text-center translate-x-4">
                            ....
                        </p>
                        <FaBus 
                            className="text-5xl text-secondary"
                        />
                    </div>
                    {/* second card section */}
                    <div className="text-center justify-center flex items-center flex-col gap-1 px-2 ">
                        <FaBus 
                            className="text-5xl text-secondary"
                        />
                        <p className="text-5xl rotate-90 text-primary text-center translate-x-4">
                            ....
                        </p>
                        <p className="text-dark/70 font-semibold ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.  
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhyChooseUs