import React from "react";
import styled from "styled-components";
import Info from "./images/info.svg";
import LinkedinLogo from "./images/linkedin-footer.svg";
import NewsHeadlines from "./NewsHeadlines";
function RighBar() {
  return (
    <Container className="rightbar">
      <div className="rightbar-news">
        <div className="heading">
          <p>LinkedIn News</p>
          <img src={Info} alt="" />
        </div>
        <NewsHeadlines
          day="2"
          readers=""
          content="How you communicate at work counts"
        />
        <NewsHeadlines
          day="2"
          readers="3,890"
          content="Nykaa vs Paytm: Spot the difference"
        />
        <NewsHeadlines
          day="1"
          readers="23,400"
          content="Talent wars: IT firms go all out"
        />
        <NewsHeadlines
          day="3"
          readers="12,367"
          content="Twitter tells Musk to sell Tesla stock"
        />
        <NewsHeadlines
          day="6"
          readers="34,908"
          content="YouTube makes a play for your wallet"
        />
      </div>
      <div className="footer">
        <ul>
          <a href=""><li>About</li></a>
          <a href=""><li>Accessibility</li></a>
          <a href=""><li>Help Center</li></a>
          <a href=""><li>Privacy & Terms</li></a>
          <a href=""><li>Ad Choices</li></a>
          <a href=""><li>Advertising</li></a>
          <a href=""><li>Business Services</li></a>
          <a href=""><li>Get the LinkedIn app</li></a>
          <a href=""><li>About</li></a>
        </ul>
        <div className="footer-logo"> <img src={LinkedinLogo} alt="" /> <p>LinkedIn Corporation © 2021</p></div>
      </div>
    </Container>
  );
}

const Container = styled.div``;
export default RighBar;
