import HeroButtons from "@/components/HeroButtons";
import { Socials, socials } from "../../utils/constants";

const ContactSection = () =>{
    return (
      <section className=" text-secondary  section-container bg-primary">
        {/* Contact form */}
        <h1 className="section-heading bold">Contact Me</h1>
        <div className="md:flex md:justify-center  md:gap-10 ">
          <div className="w-full md:w-1/2 md:mr-10">
            <form onSubmit={() => alert("hello world")}>
              <input
                type="text"
                className="border border-black p-2 w-full h-14 mb-4"
                placeholder="Your name"
              />
              <input
                type="email"
                className="border border-black p-2 w-full h-14 mb-4"
                placeholder="Email"
              />
              <input
                type="text"
                className="border border-black p-2 w-full h-14 mb-4"
                placeholder="Your website (if exists)"
              />
              <textarea
                className="border border-black p-2 w-full h-36 mb-4"
                placeholder="How can i help ?*"
              />
              <div className="sm:flex">
                <button
                  type="submit"
                  className="w-full sm:max-w-[173px] mr-4 bg-secondary max-h-12 p-4 mb-4 flex justify-center items-center rounded-md"
                >
                  <p className="text-primary">Get in Touch</p>
                </button>
                <div className=" flex mb-4">
                  {socials.map((item: Socials, index) => (
                    <div className="mr-4" key={index}>
                      <HeroButtons
                        url={item.url}
                        icon={item.icon}
                        name={item.name}
                        isDarkMode={item.isDarkMode}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </form>
          </div>
          <div>
            <div className="font-semibold mb-4 text-xl sm:text-2xl md:text-3xl text-secondary tracking-tighter">
              <h4 className="text-left tracking-wider font-extrabold">
                Let's{" "}
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-shadow-outline">
                  talk
                </span>{" "}
                for <br /> Something special
              </h4>
            </div>

            <div className="mb-4">
              <p className="text-sm sm:text-base md:text-lg text-secondary text-gray-500 font-normal">
                I seek to push the limits of creativity to create high-engaging,
                user friendly and memorable interactive experiences
              </p>
            </div>

            <div>
              <h4 className="font-bold text-sm sm:text-base md:text-lg">
                Nwakezepatrick@gmail.com
              </h4>
              <h4 className="font-bold text-sm sm:text-base md:text-lg">
                02072256700
              </h4>
            </div>
          </div>
        </div>
      </section>
    );
}

export default ContactSection;