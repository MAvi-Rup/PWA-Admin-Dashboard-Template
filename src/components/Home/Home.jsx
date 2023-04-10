import React from 'react';
import Sidebar from '../Sidebar';
import MainDash from '../MainDash/MainDash';
import RightSide from '../RigtSide/RightSide';
import '../../App.css'

const Home = () => {
    return (
        <>
            <MainDash />
            <RightSide />
        </>
    );
};

export default Home;