import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import "./list.scss";
import ListItem from "../listitem/Listitem";
import { useRef, useState } from "react";

const List = () => {
  const [isMoved, setIsMoved] = useState(false);

  const [sliderNum, setSlierNum] = useState(0);

  const leftRef = useRef();
  const handlClick = (direction) => {
    setIsMoved(true);
    let distance = leftRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && sliderNum > 0) {
      setSlierNum(sliderNum - 1);
      leftRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && sliderNum <= 5) {
      setSlierNum(sliderNum + 1);
      leftRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
    console.log(distance);
  };

  return (
    <div className="list">
      <span className="listTitle">Conteinue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handlClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={leftRef}>
        <ListItem index={0} />
          <ListItem index={1} />
          <ListItem index={2} />
          <ListItem index={3} />
          <ListItem index={4} />
          <ListItem index={5} />
          <ListItem index={6} />
          <ListItem index={7} />
          <ListItem index={8} />
          <ListItem index={9} />
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handlClick("right")}
        />
      </div>
    </div>
  );
};

export default List;
