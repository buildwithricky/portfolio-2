import jsIcon from "@/assets/icons/jsIcon.svg"
import storyBlokIcon from "@/assets/icons/icon-storybook.svg"
import jsIcon2 from "@/assets/icons/icon-javscript.svg"
import sassIcon from "@/assets/icons/icon-sass.svg"
import typeScriptIcon from "@/assets/icons/icon-typescript.svg"
import lightingIcon from "@/assets/icons/lighting.svg"
import SkillsCard from "@/components/SkillsCard/SkillsCard"
import { Skill } from "@/Types/propTypes"


const skills:Skill[] = [
  {
    name: "Javascript",
    icon: jsIcon,
    variant: "primary",
  },
  {
    name: "Javascript",
    icon: sassIcon,
    variant: "primary",
  },
  {
    name: "Javascript",
    icon: jsIcon2,
    variant: "primary",
  },
  {
    name: "Javascript",
    icon: typeScriptIcon,
    variant: "secondary",
  },
  {
    name: "Javascript",
    icon: lightingIcon,
    variant: "primary",
  },
  {
    name: "Javascript",
    icon: storyBlokIcon,
    variant: "primary",
  },
];

const SkillsSection = ()=>{
    return (
      <section className="section-container">
        <h2 className="section-heading">
          My <span>Skills</span>
        </h2>
        <div className=" grid grid-cols-2  w-full sm:flex flex-row  self-center  flex-wrap justify-center lg:w-3/4">
          {skills.map((sk: Skill) => (
            <SkillsCard icon={sk.icon} name={sk.name} variant={sk.variant} />
          ))}
          {skills.map((sk: Skill) => (
            <SkillsCard icon={sk.icon} name={sk.name} variant={sk.variant} />
          ))}
        </div>
      </section>
    );
}


export default SkillsSection;