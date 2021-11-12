import React from "react";
import styled from "styled-components";
import "../style/style.css";
import Home from "./images/nav-home.svg";
import jobs from "./images/nav-jobs.svg";
import messaging from "./images/nav-messaging.svg";
import network from "./images/nav-network.svg";
import Notifications from "./images/nav-notifications.svg";
import Work from "./images/nav-work.svg";
function Header() {
  return (
    <Container>
      <div className="container header">
        <div className="logo-searchbx">
          <img src="/linkedin.png" />
          <div className="searchBx">
            <i className="bx bx-search"></i>
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <img className="messaging-mobile" src={messaging} alt="" />
        <div className="navIcons">
          <div className="navlogos">
            <img src={Home} alt="" />
            <p>Home</p>
          </div>
          <div className="navlogos">
            <img src={network} alt="" />
            <p>Network</p>
          </div>
          <div className="navlogos">
            <img src={jobs} alt="" />
            <p>jobs</p>
          </div>

          <div className="navlogos">
            <img src={messaging} alt="" />
            <p>messaging</p>
          </div>
          <div className="navlogos">
            <img src={Notifications} alt="" />
            <p>Notifications</p>
          </div>
          <div className="navlogos">
            <img src={Work} alt="" />
            <p>Work</p>
          </div>
        </div>
        <div className="hire-message">
          <a href="">Get Hired Faster, Try Premium Free</a>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  height: 53px;
  top: 0;
  width: 100vw;
  background-color: #fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export default Header;
