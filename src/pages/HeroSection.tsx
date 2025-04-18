import Image from "next/image";
import BoyImage from "@/assets/column.svg";
import { Socials, socials } from "../../utils/constants";
import HeroButtons from "@/components/HeroButtons";

const HeroSection = () => {
  return (
    <section className="section-container p-24 flex flex-col-reverse items-center lg:flex-row-reverse lg:justify-between px-6 lg:px-16">
      {/* Image Section */}
      <figure className="flex justify-center mb-5 lg:mb-0 items-center w-full lg:w-1/2">
        <Image
          alt="boy-image"
          src={BoyImage}
          className="min-w-[300px] w-[400px] sm:min-w-[400px] lg:min-w-[600px] lg:h-[600px] max-w-full h-auto object-contain"
        />
      </figure>

      {/* Content Section */}
      <div className="w-full lg:w-1/2 text-left p-2 md:mr-10">
        <div className="mb-5">
          <h1 className="font-semibold leading-tight text-[clamp(2.0rem,4vw,2.5rem)] tracking-wider">
            <span className="font-extrabold block">Hello, I'm Patrick.</span>
            <span className="font-extrabold block">
              Frontend{" "}
              <span className="md:text-[clamp(2rem,4vw,2.5rem)] font-bold text-white text-shadow-outline">
                Developer
              </span>
            </span>
            <span className="font-medium block mt-2">
              Based in <span className="font-bold">London</span>
            </span>
          </h1>
        </div>

        <div className="mb-5">
          <p className="text-gray-500 tracking-tighter text-justify text-[clamp(0.9rem,2.5vw,1rem)] leading-relaxed">
            I'm Patrick, a versatile software engineer with expertise in
            full-stack web and mobile development. I specialize in building
            scalable, user-focused applications that seamlessly integrate
            front-end and back-end technologies to deliver impactful solutions.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex  lg:justify-start gap-4 flex-wrap">
          {socials.map((item: Socials) => (
            <HeroButtons
              key={item.name}
              url={item.url}
              icon={item.icon}
              name={item.name}
              isDarkMode={item.isDarkMode}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
    