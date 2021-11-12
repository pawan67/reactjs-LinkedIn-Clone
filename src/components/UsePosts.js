import React from "react";
import faker from "faker";
import Clap from './images/clap.svg'
import Love from './images/love.svg'
import Like from './images/like.svg'
import User from './images/user.svg'
import LikePost from './images/like-post.svg'
import CommentPost from './images/comment-post.svg'
import SendPost from './images/send-post.svg'
import SharePost from './images/share-post.svg'
function UsePosts() {
  // •
  return (
    <div className="user-posts">
      <div className="like-mention">
        <div>
          <p>
            {faker.name.findName()} <span> likes this</span>
          </p>
        </div>
        <i class="bx bx-dots-horizontal-rounded"></i>
      </div>
      <div className="user-details">
          <div className="user-details-0">
        <img src={faker.image.avatar()} alt="" />
        <div className="user-details-1">
          <div className="user-details-2">
            <h3>{faker.name.findName()}</h3>{" "}
            <p>• {Math.floor(Math.random() * 4)}rd+</p>
          </div>
          <div className="user-details-3">
            <p>
              works at {faker.company.companyName()}{" "}
              {faker.commerce.department()}
            </p>
            <p>
              {Math.floor(Math.random() * 24)}h • <i class="bx bx-world"></i>
            </p>
          </div>
          
        </div>
        </div>
        <div className="follow"><i class='bx bx-plus' ></i> Follow</div>
      </div>

      {/* post image */}
      <div className="post-image">
        {/* <img src="/images/any.jpg" alt="" /> */}
        <img src={faker.image.image()} alt="" />
      </div>
      <div className="like-comments-div">
      <img src={Clap} alt="" />
      <img src={Love} alt="" />
      <img src={Like} alt="" />
      

      <p>{Math.floor(Math.random() * 5000)} </p> &nbsp; • &nbsp; <p>{Math.floor(Math.random() * 500)} comments</p>

      </div>
      <div className="flex-user-post-icons post">
                    <div className="user-post-icons">
                        <img src={LikePost} alt="" />
                        <p>Like</p>
                    </div>
                    <div className="user-post-icons">
                        <img src={CommentPost} alt="" />
                        <p>Comment</p>
                    </div>
                    <div className="user-post-icons">
                        <img src={SharePost} alt="" />
                        <p>Share</p>
                    </div>
                    <div className="user-post-icons">
                        <img src={SendPost} alt="" />
                        <p>Send</p>
                    </div>
                </div>
    </div>
  );
}

export default UsePosts;
