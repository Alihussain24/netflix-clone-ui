import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      

      <video
        className="video"
        autoPlay
        muted
        progress
        controls
        src="https://stream.mux.com/6fiGM5ChLz8T66ZZiuzk1KZuIKX8zJz00/medium.mp4"
        />
    </div>
  );
};
export default Watch;
