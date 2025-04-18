import { Experience } from "@/Types/propTypes"
import Image from "next/image";


const ExperienceSection = ()=>{
    return (
      <section className="section-container bg-secondary text-primary md:py-10 md:px-40">
        <h2 className="section-heading">
          My <span>Experience</span>
        </h2>
        {/* Experience section */}
        <article className="border border-tertiary font-light flex flex-col p-5 text-left leading-7 tracking-tighter rounded-md mb-4">
          <div className="flex items-center mb-4">
            <p className="font-bold text-2xl mr-5">G</p>
            <h3 className="font-medium text-xl">
              Software Engineer <br /> At Charisol
            </h3>
          </div>
          <div className="mb-4">
            <p>2022 - Present</p>
            <p>GlobeX, London</p>
          </div>
          <div>
            <p className="text-primary font-light">
              As a Senior Software Engineer at Google, I played a pivotal role
              in developing innovative solutions for Google's core search
              algorithms. Collaborating with a dynamic team of engineers, I
              contributed to the enhancement of search accuracy and efficiency,
              optimizing user experiences for millions of users worldwide.
            </p>
          </div>
        </article>
     
      
      </section>
    );
}

export default ExperienceSection;