import PrimaryButton from "../shared/PrimaryButton";

const Banner = () => {
  return (
    <section>
        <div className="container mx-auto py-14 relative">

            <div>
                <h1 className="py-8 tracking-wide text-2xl font-semibold text-dark text-center">
                    Taste the Healthy Difference
                </h1>

                {/* content section */}
                <div className="space-y-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">

                        <div>
                            <p>
                                We know that <span className="text-primary">time </span> time is the greatest 
                                value in the modern world. 
                                Our healthy meal plan delivery service Good Fod in Miami is the answer for those 
                                who want to eat healthily, saving time for buying food and preparing delicious, 
                                healthy meals.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="spay-y-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
                    <div></div>
                    <div>
                        <p>
                            We know that <span className="text-primary">time </span> time is the greatest 
                            value in the modern world. 
                            Our healthy meal plan delivery service Good Fod in Miami is the answer for those 
                            who want to eat healthily, saving time for buying food and preparing delicious, 
                            healthy meals.
                        </p>
                    </div>
                    </div>
                </div>
                <div className="flex justify-center mt-10 sm:mt-14">
                    <PrimaryButton />
                </div>

            </div>
            {/* bg fruits pngs */}
            <div className="absolute top-5 -left-16 sm:bottom-0 sm:left-0 opacity-45 sm:opacity-100">
                <img 
                    src="src/assets/png/leaf.png" 
                    alt="leaf" 
                    className="max-w-[160px]"
                />
            </div>
            <div className="absolute -bottom-16 -left-16 sm:bottom-0 sm:left-0 opacity-45 sm:opacity-100">
                <img 
                    src="src/assets/png/tomato.png" 
                    alt="leaf" 
                    className="max-w-[160px]"
                />
            </div>
            <div className="hidden sm:block absolute bottom-0 right-0 top-0">
                <img 
                    src="src/assets/png/lemon.png" 
                    alt="leaf" 
                    className="max-w-[160px]"
                />
            </div>
            <div className="hidden sm:block absolute bottom-0 right-0 ">
                <img 
                    src="src/assets/png/apple.png" 
                    alt="leaf" 
                    className="max-w-[160px]"
                />
            </div>
            <div className="absolute top-[60%] -translate-y-1/2 left-[42%] -translate-x-1/2 opacity-50 sm:opacity-100">
                <img 
                    src="src/assets/png/kiwi.png" 
                    alt="leaf" 
                    className="max-w-[160px]"
                />
            </div>
            
        </div>
        
    </section>
  )
}

export default Banner