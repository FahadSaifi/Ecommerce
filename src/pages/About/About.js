import React from "react";
import {useState} from "react";
import aboutSecond from "../../images/busy-employer.jpg";
import {AiOutlineUserAdd} from "react-icons/ai";
import {TbTruckDelivery} from "react-icons/tb";
import {LuWarehouse} from "react-icons/lu";
import {GiRank3} from "react-icons/gi";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "./About.css";

const About = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <>
      <div className="about-wrapper">
        <div className="about-content">
          <div className="container">
            <h1 className="about-heading">About Us</h1>
            <p className="about-info-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis ab officia repellendus deserunt est dolore
              <br /> eum quas, nisi exercitationem praesentium!
            </p>
          </div>
        </div>
        <div className="about-info-wrapper">
          <div className="container">
            <div className="about-info">
              <div className="about-left-col">
                <h2 className="about-second-heading">About Us</h2>
                <p className="about-us-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  provident nostrum mollitia soluta cum numquam molestiae
                  laudantium facilis excepturi quia et, modi veritatis
                  accusantium a magnam sunt deserunt similique asperiores.
                  Libero repudiandae architecto magni consequuntur expedita,
                  error, possimus mollitia voluptatem veritatis earum incidunt
                  rerum quaerat eum praesentium veniam dignissimos laudantium!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  provident nostrum mollitia soluta cum numquam molestiae
                  laudantium facilis excepturi quia et, modi veritatis
                  accusantium a magnam sunt deserunt similique asperiores.
                </p>
              </div>
              <div className="about-right-col">
                <img
                  src={aboutSecond}
                  alt="about-img"
                  className="about-info-img"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="counter-animation-wrapper">
          <div className="container">
            <div className="counter-card-grid-container">
              <div className="counter-card">
                <div className="couter-card-icon">
                  <AiOutlineUserAdd className="counter-icon" />
                </div>
                <div className="counter-number-wrapper">
                  <ScrollTrigger
                    onEnter={() => setCounterOn(true)}
                    and
                    onExit={() => setCounterOn(false)}
                  >
                    <h3 className="counter-number">
                      {counterOn && (
                        <CountUp start={0} end={3200} duration={2} delay={0}>
                          +
                        </CountUp>
                      )}
                    </h3>
                  </ScrollTrigger>
                </div>
                <p className="counter-card-content">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div className="counter-card">
                <div className="couter-card-icon">
                  <TbTruckDelivery className="counter-icon" />
                </div>
                <div className="counter-number-wrapper">
                  <ScrollTrigger
                    onEnter={() => setCounterOn(true)}
                    and
                    onExit={() => setCounterOn(false)}
                  >
                    <h3 className="counter-number">
                      {counterOn && (
                        <CountUp start={0} end={3200} duration={2} delay={0}>
                          +
                        </CountUp>
                      )}
                    </h3>
                  </ScrollTrigger>
                </div>
                <p className="counter-card-content">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div className="counter-card">
                <div className="couter-card-icon">
                  <LuWarehouse className="counter-icon" />
                </div>
                <div className="counter-number-wrapper">
                  <ScrollTrigger
                    onEnter={() => setCounterOn(true)}
                    and
                    onExit={() => setCounterOn(false)}
                  >
                    <h3 className="counter-number">
                      {counterOn && (
                        <CountUp start={0} end={3200} duration={2} delay={0}>
                          +
                        </CountUp>
                      )}
                    </h3>
                  </ScrollTrigger>
                </div>
                <p className="counter-card-content">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div className="counter-card">
                <div className="couter-card-icon">
                  <GiRank3 className="counter-icon" />
                </div>
                <div className="counter-number-wrapper">
                  <ScrollTrigger
                    onEnter={() => setCounterOn(true)}
                    and
                    onExit={() => setCounterOn(false)}
                  >
                    <h3 className="counter-number">
                      {counterOn && (
                        <CountUp start={0} end={3200} duration={2} delay={0}>
                          +
                        </CountUp>
                      )}
                    </h3>
                  </ScrollTrigger>
                </div>
                <p className="counter-card-content">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
