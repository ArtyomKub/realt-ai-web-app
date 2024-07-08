import React from 'react';
import Spline from "@splinetool/react-spline";
import s from './BackgroundModel.module.css'

const BackgroundModel = () => {
    return (
        <Spline className={s.cover} scene="https://prod.spline.design/aF5GtXBtVSJJyq3N/scene.splinecode"/>
    );
};

export default BackgroundModel;