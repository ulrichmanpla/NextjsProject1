import Image from "next/image"

const Hero1 = () => {
  return (
 
    <div className="relative bg-[#FFF3E4] py-1 px-10 pb-24 overflow-hidden">
        <div className="flex-1 md:flex justify-between items-center max-w-7xl mx-auto">
            <div>
                <div className="mb-2 ">
                    <span className="font-bold text-2xl md:text-5xl text-[#030968]">Studying</span>{' '}
                    <span className="font-bold text-2xl md:text-5xl text-[#F48C06]">Online is now</span><br />
                </div>
                <div>
                    <span className="font-bold text-2xl md:text-5xl text-[#F48C06]">much easier</span>
                </div>
                
                <p className="text-gray-600 text-sm md:text-2xl my-8">
                    Skilline is an interesting platform that will teach <br />
                    you in a more interactive way
                </p>
                
                <div className="flex gap-4 items-center">
                    <div className="font-semibold text-sm  text-white bg-amber-500 rounded-full py-2 px-4 cursor-pointer hover:bg-amber-600 transition-colors">
                        Join for free
                    </div>
                    
                    <div className="flex items-center">
                        <div className="flex relative w-12 h-12 mt-2">
                            <Image className="object-contain" src='/Group.png' alt="play1" fill sizes="48px"/>
                        </div>
                        <div className="ml-2 font-medium text-[#030968] cursor-pointer">
                            Watch how it works
                        </div>
                    </div>
                </div>
            </div>
            
            <div>
                <div className="relative">
                    <Image src='/headerpic.png' alt="heroimg" width={500} height={500} priority />
                </div>
            </div>
        </div>

     
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0">
            <svg 
                viewBox="0 0 1200 120" 
                preserveAspectRatio="none" 
                className="relative block w-[calc(100%+1.3px)] h-45 fill-white"
            >
                <path d="M0,0 C300,90 900,90 1200,0 L1200,120 L0,120 Z"></path>
            </svg>
        </div>
    </div>
  )
}

export default Hero1
