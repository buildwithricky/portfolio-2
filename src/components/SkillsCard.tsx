import { Skill } from "@/Types/propTypes";
import Image from "next/image";



const SkillsCard:React.FC<Skill> = ({name,icon,variant="primary"})=>{
    return (
      <div className={`bg-${variant} text-${variant ==='primary' ?'secondary':'primary'} h-40 w-40 border p-5 border-black flex justify-center items-center`}>
        <div className="border border-red-300 flex items-center justify-evenly flex-col w-full h-full">
          <Image src={icon} alt="js-icon" />
          <h5 className="font-medium">{name}</h5>
        </div>
      </div>
    );
}

export default SkillsCard;