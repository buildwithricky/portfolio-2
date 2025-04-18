import boyImage from "@/assets/boy_2.svg"
import Image from "next/image";

const About = ()=> {
    return (
      <section className="section-container md:flex-row 2xl:py-40  2xl:px-60 md:justify-evenly md:items-center">
        <div className="md:w-1/2">
          <figure className="flex flex-col sm:max-xl:mr-10 items-center md:block">
            <Image
              alt="boy-image"
              src={boyImage}
              className="md:w-full md:h-full object-contain md:max-w-[525px] md:max-h-{572px]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </figure>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-left text-2xl mb-5 md:mb-10 md:text-5xl">
            About{" "}
            <span className="ml-2 font-extrabold text-2xl md:text-5xl ">
              Me
            </span>
          </h2>
          <article>
            <p className="about-paragraph">
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and
              writing clear, readable, highly performant code matters to me.
            </p>
            <p className="about-paragraph">
              I began my journey as a web developer in 2015, and since then,
              I've continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, in my early thirties, 7 years after starting my web
              development journey, I'm building cutting-edge web applications
              using modern technologies such as Next.js, TypeScript, Nestjs,
              Tailwindcss, Supabase and much more.
            </p>
            <p className="about-paragraph">
              When I'm not in full-on developer mode, you can find me hovering
              around on twitter or on indie hacker, witnessing the journey of
              early startups or enjoying some free time. You can follow me on
              Twitter where I share tech-related bites and build in public, or
              you can follow me on GitHub.
            </p>
          </article>
        </div>
      </section>
    );
}
export default About;