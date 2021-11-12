import React from 'react'
import styled from 'styled-components'
import faker from "faker";
import User from './images/user.svg'
import Video from './images/video-new.svg'
import Photo from './images/photo-new.svg'
import Event from './images/event-new.svg'
import Article from './images/article.svg'
import UsePosts from './UsePosts';


function PostsBar() {
    return (
        <Container>
            <div className="user-post">
                <div className="flex-user-post">
                    <img src={User} alt="" />
                    <input type="text" placeholder="Start a post" />
                </div>
                <div className="flex-user-post-icons">
                    <div className="user-post-icons">
                        <img src={Photo} alt="" />
                        <p>Photo</p>
                    </div>
                    <div className="user-post-icons">
                        <img src={Video} alt="" />
                        <p>Photo</p>
                    </div>
                    <div className="user-post-icons">
                        <img src={Event} alt="" />
                        <p>Event</p>
                    </div>
                    <div className="user-post-icons">
                        <img src={Article} alt="" />
                        <p>Article</p>
                    </div>
                </div>
            </div>
            <hr/>
            <UsePosts/>
            <UsePosts/>
            <UsePosts/>
            <UsePosts/>
            <UsePosts/>
            <UsePosts/>
            <UsePosts/>
            <UsePosts/>
            <UsePosts/>
            <UsePosts/>
            <UsePosts/>
            <UsePosts/>
            <UsePosts/>
            <UsePosts/>
            <UsePosts/>
            <UsePosts/>
            <UsePosts/>
            <UsePosts/>
        </Container>
    )
}

const Container = styled.div`
    width: 600px;
    height: 300vh;
    /* background-color: #fff; */
`
export default PostsBar
