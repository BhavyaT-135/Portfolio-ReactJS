import "./intro.css";
import Me from "../../img/me.png";
import { BsGithub, BsLinkedin, BsDiscord, BsFillFileEarmarkPersonFill } from "react-icons/bs";
import { ImBlogger } from "react-icons/im";

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Bhavya Tewari</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">UI/UX Designer </div>
                            <div className="i-title-item">Python Developer</div>
                            <div className="i-title-item">Open-Source Enthusiast</div>
                            <div className="i-title-item">Part-Time Poet</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        A passionate software developer from India, currently pursuing B.Tech in Information
                        Technology and Mathematical Innovations from University
                        of Delhi. I am a Web/App Developer and like contibuting
                        to open source projects.
                    </p>
                </div>
                <div className="i-icons">
                    <br></br>
                    <a className="i-icon" href="https://github.com/BhavyaT-135"><BsGithub size="40px" color="#6376C1" /></a>
                    <a className="i-icon" href="https://www.linkedin.com/in/bhavya-tewari-32b88a202/"><BsLinkedin size="40px" color="#6376C1" /></a>
                    <a className="i-icon" href="https://discordapp.com/users/604239299470426142/ "><BsDiscord size="40px" color="#6376C1" /></a>
                    <a className="i-icon" href="https://tewarib.blogspot.com/"><ImBlogger size="40px" color="#6376C1" /></a>
                    <a className="i-icon" href="https://resume.creddle.io/resume/7gno4510n3u"><BsFillFileEarmarkPersonFill size="40px" color="#6376C1" /></a>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me} alt="Profile Picture" className="i-img" />
            </div>
        </div>
    )
}

export default Intro;