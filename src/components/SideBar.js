import React from "react";
import faker from "faker";
import styled from "styled-components";
import ProfileCard from "./images/card-bg.svg";
import User from './images/user.svg'

function SideBar() {
  return (
    <Container className="container body sidebar">
      <div className="profile-card">
        <img className="profile-card-bg" src={ProfileCard} alt="" />
        <div className="profile-logo">
          <img src={User} alt="" />
        </div>
        <div className="profile-details">
          <h2>
            {faker.name.firstName()} {faker.name.lastName()}
          </h2>
          <p>Front-End Web Developer and Web designer</p>
        </div>
        <div className="wrapper">
          <div className="detailsPP">
            {" "}
            <p> Who viewed your profile</p>{" "}
            <span>{Math.floor(Math.random() * 1100)}</span>
          </div>
          <div className="detailsPP">
            <p>Views of your post </p>
            <span>{Math.floor(Math.random() * 1100)}</span>
          </div>
        </div>
        <div className="hired-message">
          <p>Access exclusive tools & insights</p>
          <h4>Get Hired Faster, try Premium Free</h4>
        </div>
        <div className="last-profile">
          <i className="bx bxs-bookmark-star"></i>
          <p>My items</p>
        </div>
      </div>
      <div className="profile-card-1">
        <div className="profile-card-1-a">
          <p>Recent</p> <i class="bx bx-chevron-down"></i>
        </div>
        <div className="profile-card-1-a">
          <p className="blue-color">Groups</p>{" "}
          <i class="bx bx-chevron-down"></i>
        </div>
        <div className="profile-card-1-a">
          <p className="blue-color">Events</p>{" "}
          <i class="bx bx-chevron-down"></i>
        </div>
        <div className="detailsPP">
          <i class="bx bxs-book-bookmark"></i>
          <p> React Global Online summit...</p>
        </div>
        <div className="detailsPP PP">
          <i class="bx bxs-book-bookmark"></i>
          <p> Github Global summit...</p>
        </div>
        <div className="detailsPP PP">See all</div>
        <div className="profile-card-1-a">
          <p className="blue-color">Followed Hashtags</p>{" "}
          <i class="bx bx-chevron-down"></i>
        </div>
        <div className="detailsPP PP">
          <i class="bx bx-hash"></i>
          <p> 100DaysOfCode</p>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
margin: 0;

`;

export default SideBar;
