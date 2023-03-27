//importing all the values 
import "./featured.scss";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
i
//rendering the html files 
const Featured = ({name,count}) => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Type of accomidations</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={count} text={count} strokeWidth={5} />
        </div>
        <p className="title">{name}</p>
      </div>
    </div>
  );
};

export default Featured;