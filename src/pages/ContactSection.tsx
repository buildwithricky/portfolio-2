import HeroButtons from "@/components/HeroButtons";
import { Socials, socials } from "../../utils/constants";

const ContactSection = () =>{
    return (
      <section className="border text-secondary border-blue-300 section-container bg-primary">
        {/* Contact form */}
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
          <button
            type="submit"
            className="bg-secondary max-h-12 p-4 mb-4 flex justify-center items-center rounded-md"
          >
            <p className="text-primary" >Get in Touch</p>
          </button>
        </form>
        <div className="w-[70%] flex justify-between mb-4">
          {socials.map((item: Socials) => (
            <HeroButtons
              url={item.url}
              icon={item.icon}
              name={item.name}
              isDarkMode={item.isDarkMode}
            />
          ))}
        </div>
        <div className="font-semibold mb-4 text-2xl text-secondary tracking-tighter">
          <h4 className="text-left tracking-wider">
            Let's{" "}
            <span className="text-3xl font-bold text-white text-shadow-outline">
              talk
            </span>{" "}
            for <br /> Something special
          </h4>
        </div>
        <div className="mb-4">
          <p className="text-secondary font-light">
            {" "}
            I seek to push the limits of creativity to create high-engaging ,
            user friendly and memorable interactive experiences{" "}
          </p>
        </div>
        <div className="">
          <h4 className="font-bold">Nwakezepatrick@gmail.com</h4>
          <h4 className="font-bold">02072256700</h4>
        </div>
      </section>
    );
}

export default ContactSection;