import React from 'react';
import '../WhoWeAre.css';
import Header from '../components/Header';
import iitbLogo from '../iitb.png';
import csLogo from '../icons/cs.png';
import hdfcLogo from '../icons/hdfc.png';
import mcmrLogo from '../icons/mcmr.png';
import instagramIcon from '../icons/instagram.png';
import twitterIcon from '../icons/twitter.png';
import youtubeIcon from '../icons/youtube.png';
import facebookIcon from '../icons/facebook.png';

const WhoWeAre = () => {
    return (
        <>
            {/* <Header/> */}
            <div className="who-we-are h-full">
                <p>Climate Studies at IIT Bombay, in collaboration with HDFC Ergo, hopes to harness the power of social media to monitor Mumbai floods by taking help from its residents and asking them to post details about floods in their neighborhoods, and collecting this data to issue real-time geographically-specific flood alerts/warnings. The gathered data shall be used to improve flood emergency response and rescue efforts, and help develop accurate flood forecasts in the future.
                <br></br>
                <br></br>
                Real-time information at hand can help save lives during disasters. At best, we hope to help Mumbaikars plan their monsoon days effectively. Our ultimate aim is to create a flood resilience plan for the Mumbai metropolitan region. 
                </p>
                <h1>WHO WE ARE</h1>
                <div className="content">
                    <div className="left-section">
                        <div className="section">
                            <br></br>
                            <h2>Implementing Partners</h2>
                            <div className="partners">
                                <img src={iitbLogo} alt="IIT Logo" />
                                <img src={csLogo} alt="Climate Studies Logo" />
                            </div>
                        </div>
                        <div className="section">
                            <br></br>
                            <h2>Sponsoring Partner</h2>
                            <div className="partners">
                                <img src={hdfcLogo} alt="HDFC Ergo Logo" />
                            </div>
                        </div>
                        <div className="section">
                            <h2>Project Partners</h2>
                            <div className="partners">
                                <img src={mcmrLogo} alt="MCGM Center Logo" />
                            </div>
                        </div>
                    </div>
                    <div className="right-section">
                        <div className="iit-team">
                            <br></br>
                            <h2>IIT Bombay Team</h2>
                            <ul>
                                <li>Prof. Subimal Ghosh</li>
                                <li>Prof. Raghu Murtugudde</li>
                                <li>Dr. Aniket Navalkar</li>
                                <li>Dr. Mayank Gupta</li>
                                <li>Dr. Sanghita Basu</li>
                                <li>Puja Tripathy</li>
                            </ul>
                            <p>
                                Website & App developed by <br/>IIT Bombay students, Deepak <br/>Silaych & Gulshan Kumar
                            </p>
                        </div>
                    </div>
                </div>
                <div className="social-media-icons">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src={instagramIcon} alt="Instagram" />
                    </a>
                    <a href="https://x.com/ClimateIITB" target="_blank" rel="noopener noreferrer">
                        <img src={twitterIcon} alt="Twitter" />
                    </a>
                    <a href="https://www.youtube.com/@IDPinClimateStudiesIITBombay" target="_blank" rel="noopener noreferrer">
                        <img src={youtubeIcon} alt="YouTube" />
                    </a>
                    <a href="https://www.facebook.com/IITBclimate" target="_blank" rel="noopener noreferrer">
                        <img src={facebookIcon} alt="Facebook" />
                    </a>
                </div>
            </div>
        </>
    );
};

export default WhoWeAre;