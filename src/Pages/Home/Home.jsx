import React from 'react';
import './Home.scss';
import video from '../../img/anasayfa.mp4';

const Home = () => {
    return (
        <div className="homeArea">
            <div className="video-container">
                <video autoPlay loop muted className="w-full h-full object-cover">
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}

export default Home;
