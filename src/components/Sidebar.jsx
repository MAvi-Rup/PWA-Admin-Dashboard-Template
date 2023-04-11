import React, { useState } from "react";
import "./Sidebar.css";
// import Logo from "./favicon-32x32.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarDataFT } from "../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
import auth from "../firebase.init";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true)

  const navigate = useNavigate();


  const logout = () => {
    signOut(auth);
    navigate('/')
    toast("Logout Successfully")
  };

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }
  console.log(window.innerWidth)
  return (
    <>
      <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        <UilBars />
      </div>
    <motion.div className='sidebar'
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >
      {/* logo */}
      <div className="logo" onClick={()=>{navigate('/dashboard')}}>
        <img src='https://i.ibb.co/yq7hVy8/maskable-icon.png' alt="logo" />
        <span>
          Vir<span>go </span>Leaf 
        </span>
      </div>

      <div className="menu">
        {SidebarDataFT.map((item, index) => {
          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}
            >
              <item.icon />
              <span onClick={()=>{navigate(item.link)}}>{item.heading}</span>
            </div>
          );
        })}
        {/* signoutIcon */}
        <div className="menuItem">
          <UilSignOutAlt onClick={logout}/>
        </div>
      </div>
    </motion.div>
    </>
  );
};

export default Sidebar;
