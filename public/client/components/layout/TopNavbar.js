import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faComment } from "@fortawesome/free-solid-svg-icons";

const TopNavbar = () => {
  return (
    <div className="bg-gray-400 flex justify-between">
      <div>
        <a className="text-xs" href="#">
          <FontAwesomeIcon icon={faEnvelope} /> LimeLightDevs@Gmail.com
        </a>
      </div>
      <div>
        <a className="text-xs" href="">
          <FontAwesomeIcon className="flip" icon={faComment} /> Live Chat
        </a>
      </div>
    </div>
  );
};

export default TopNavbar;
