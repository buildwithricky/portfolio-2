import Image from "next/image"
import BoyImage from "@/assets/column.svg"
import { Socials, socials } from "@/utils/constants";
const HeroSection = ()=>{

    return (
        <main>
            {/* Main information section */}
            <section className="border border-red-400 flex px-5 text-justify flex-col justify-between items-center w-full h-screen">
                <figure>
                <Image alt="boy image" src={BoyImage}/>
                </figure>
                <div className="mb-5">
                <h1>Hello i'am <span>Patrick.</span> Frontend <span>Developer Based in</span> <span>London</span></h1>
                </div>
                <div>
                <p>I'm Patrick., a versatile software engineer with expertise in full-stack web and mobile development. 
                    I specialize in building scalable, user-focused applications that seamlessly 
                    integrate front-end and back-end technologies to deliver impactful solutions.
</p>
                </div>
                {/* Social media links */}
                {socials.map((item:Socials)=><a href={item.url}></a>)}
            </section>
        </main>
    )
}

export default HeroSection;