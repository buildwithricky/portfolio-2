export interface Skill {
  name: string;
  icon: string;
  variant?: "primary" | "secondary"
}

export interface Experience {
  company: string;
  durationStart: number;
  durationEnd: number;
  icon: string;
  position: string;
  description: string;
}