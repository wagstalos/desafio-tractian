import React from 'react';
import { google, slack, atlassian, dropbox } from './imports';
import './brand.css';

const Brand = () => (
    <div className="traction__brand" >
        <div data-aos="flip-left" data-aos-duration="1000">
            <img src={google} />
        </div>
        <div data-aos="flip-left" data-aos-duration="1500">
            <img src={slack} />
        </div>
        <div data-aos="flip-left" data-aos-duration="2000">
            <img src={atlassian} />
        </div>
        <div data-aos="flip-left" data-aos-duration="2500">
            <img src={dropbox} />
        </div>
    </div>
);

export default Brand;