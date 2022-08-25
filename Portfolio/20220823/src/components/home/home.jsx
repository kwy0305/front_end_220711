import "./home.css";

import Buttons from "../button/button";
import { BsMouse } from "react-icons/bs";
import { ImProfile } from "react-icons/im";
import { BsFillBagFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

function Home() {
  return (
    <div id="home" className="container home-container">
      <div className="logo">
        <div className="hover-show">
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>
      </div>

      <a href="#footer" className="scroll-down">
        <hr />
        <h5>scroll down</h5>
        <BsMouse className="scroll" />
        <hr />
      </a>

      <h2>
        <span>About Me</span> <br />
        <div>
          {" "}
          <ImProfile /> 김원영
        </div>
        <div>
          <BsFillBagFill /> 1995.03.05
        </div>
        <div>
          <MdLocationOn /> 서울특별시 중랑구
        </div>
        <div>
          <IoIosCall /> 010-xxxx-xxxx
        </div>
        <div>
          <MdEmail /> dnjsdudjj@naver.com
        </div>
      </h2>

      <Buttons />
    </div>
  );
}

export default Home;
