// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,UilApps,
  UilSignOutAlt,
  UilUserNurse,UilClipboardNotes,UilCreditCard,UilUserPlus,UilFileAlt
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Orders",
  },
  {
    icon: UilUsersAlt,
    heading: "Customers",
  },
  {
    icon: UilPackage,
    heading: 'Products'
  },
  {
    icon: UilChart,
    heading: 'Analytics'
  },
];
export const SidebarDataFT = [
  {
    icon: UilApps,
    heading: 'Dashboard',
    link: '/dashboard'
  },
  {
    icon: UilUserPlus,
    heading: 'Registration',
    link:'reg-farmers'
  },
  {
    icon: UilFileAlt,
    heading: 'Generate TP',
    link:'transport-permit'
  },
  {
    icon: UilCreditCard,
    heading: 'Loan Sanction',
    link:'loan'
  },
  {
    icon: UilUsersAlt,
    heading: 'View Users',
    link:'users'
  }
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Sales",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Revenue",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Expenses",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

export const cardsDataFT = [
  {
    title: "Farmers",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    
    png: UilUserNurse,
    series: [
      {
        name: "Farmers",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
    value:[31, 40, 28, 51, 42, 109, 100].reduce((a, b) => a + b, 0).toLocaleString(),
  },
  {
    title: "TP",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    
    png: UilClipboardNotes,
    series: [
      {
        name: "TP",
        data: [10, 15, 5, 20,8, 5, 7],
      },
    ],
    value: [10, 15, 5, 20,8, 5, 7].reduce((a, b) => a + b, 0).toLocaleString(),
  },
  {
    title: "Loan Sanction",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    
    png: UilCreditCard,
    series: [
      {
        name: "Loan Sanction",
        data: [10000, 2500, 1000, 7000, 1200, 1550, 2000],
      },
    ],
    value: `$ ${[10000, 2500, 1000, 7000, 1200, 1550, 2000].reduce((a, b) => a + b, 0).toLocaleString()}`
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "has ordered Apple smart watch 2500mh battery.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "James Bond",
    noti: "has received Samsung gadget for charging battery.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Iron Man",
    noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
    time: "2 hours ago",
  },
];
