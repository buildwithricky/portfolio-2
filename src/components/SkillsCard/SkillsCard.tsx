import { Skill } from "@/Types/propTypes";
import Image from "next/image";
import styles from "./SkillsCard.module.css"


const SkillsCard:React.FC<Skill> = ({name,icon,variant="primary"})=>{
    const variantStyles =
      variant === "primary"
        ? "bg-primary text-secondary"
        : "bg-secondary text-primary";
    return (
      <div className={`${styles.card} ${variantStyles}` }>
        <div className=" flex items-center justify-evenly flex-col w-full h-full">
          <Image src={icon} alt="js-icon" />
          <h5 className="font-medium">{name}</h5>
        </div>
      </div>
    );
}

export default SkillsCard;