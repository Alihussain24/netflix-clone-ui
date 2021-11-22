import {
  Add,
  PlayArrow,
  ThumbUpOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";
import "./listitem.scss";

const Listitem = ({ index }) => {
  const [isHoverd, setIsHoverd] = useState(false);
  const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

  return (
    <div
      className="listitem"
      style={{ left: isHoverd && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHoverd(true)}
      onMouseLeave={() => setIsHoverd(false)}
    >
      <img
        src="https://images.unsplash.com/photo-1627473276841-0708804cda00?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80"
        alt=""
      />

      {isHoverd && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfoDetails">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>

            <div className="itemInfoTop">
              <span>10 hour 10 min</span>
              <span className="limit">+15</span>
              <span>2020</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
              iure, quidem neque quae quis nostrum optio excepturi
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
};

export default Listitem;
