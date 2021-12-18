import React from 'react';
import { marilian, pirelli, suzano, tigre } from './imports';
import './brand.css';

const Brand = () => (
    <div className="traction__brand" >
        <div data-aos="flip-left" data-aos-duration="1000">
            <img src={marilian} alt='logo google' />
        </div>
        <div data-aos="flip-left" data-aos-duration="1500">
            <img src={pirelli} alt='logo slack' />
        </div>
        <div data-aos="flip-left" data-aos-duration="2000">
            <img src={suzano} alt='atlassian' />
        </div>
        <div data-aos="flip-left" data-aos-duration="2500">
            <img src={tigre} alt='dropbox' />
        </div>
    </div>
);

export default Brand;