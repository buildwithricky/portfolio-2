import Image from "next/image"
import BoyImage from "@/assets/column.svg"
import { Socials, socials } from "@/utils/constants";
import HeroButtons from "@/components/HeroButtons";
const HeroSection = ()=>{
    return (
      <section className="section-container">
        {/* Main information section */}
        <figure className="mb-5">
          <Image alt="boy-image" src={BoyImage} />
        </figure>
        <div className="mb-5">
          <h1 className="font-semibold text-4xl tracking-norml  ">
            Hello i'am <span>Patrick.</span> Frontend{" "}
            <span className="text-5xl font-bold text-white text-shadow-outline">
              Developer
            </span>{" "}
            <span>Based in</span> <span>London</span>
          </h1>
        </div>
        <div className="mb-5">
          <p className="text-gray-500 text-left">
            I'm Patrick., a versatile software engineer with expertise in
            full-stack web and mobile development. I specialize in building
            scalable, user-focused applications that seamlessly integrate
            front-end and back-end technologies to deliver impactful solutions.
          </p>
        </div>
        <div className="w-[70%] flex justify-between">
          {/* Social media links */}
          {socials.map((item: Socials) => (
            <HeroButtons
              url={item.url}
              icon={item.icon}
              name={item.name}
              isDarkMode={item.isDarkMode}
            />
          ))}
        </div>
      </section>
    );
}

export default HeroSection;