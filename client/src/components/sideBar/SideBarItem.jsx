import Home_icon from "../../assets/svg_icons/Home_icon.svg";
import Subscriber_icon from "../../assets/svg_icons/Subscriber_icon.svg";
import Profile_icon from "../../assets/svg_icons/Profile_icon.svg";

export const sideBarItem = [
  {
    id: 1,
    title: "",
    items: [
      {
        id: "home",
        icon: Home_icon,
        name: "Home",
        subitems: [],
        link: "/",
      },
    ],
  },
  {
    id: 1,
    title: "",
    items: [
      {
        id: "subscriber",
        icon: Subscriber_icon,
        name: "Subscriber",
        subitems: [],
        link: "/",
      },
    ],
  },
  {
    id: 1,
    title: "",
    items: [
      {
        id: "user",
        icon: Profile_icon,
        name: "User",
        subitems: [],
        link: "/",
      },
    ],
  },
];
