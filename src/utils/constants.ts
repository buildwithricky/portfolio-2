export interface Socials {
  name: string;
  url: string;
  icon: string;
  isDarkMode: boolean;
}

import githubIcon from "../assets/icons/facebook.svg";
import facebookIcon from "../assets/icons/linkedIn.svg";
import linkedInIcon from "../assets/icons/github.svg";
import twitterIcon from "../assets/icons/twitter.svg";

export const socials: Socials[] = [
  {
    name: "GitHub",
    url: "https://github.com/ricky-taylor-outcast",
    isDarkMode: true,
    icon: githubIcon,
  },
  {
    name: "GitHub",
    url: "https://github.com/ricky-taylor-outcast",
    icon: twitterIcon,
    isDarkMode: false,
  },
  {
    name: "GitHub",
    url: "https://github.com/ricky-taylor-outcast",
    icon: facebookIcon,
    isDarkMode: false,
  },
  {
    name: "GitHub",
    url: "https://github.com/ricky-taylor-outcast",
    icon: linkedInIcon,
    isDarkMode: false,
  },
];
