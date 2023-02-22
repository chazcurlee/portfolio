import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Landing = ({ open, setOpen }) => {
  const [arrow, setArrow] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    setOpen("entrance");
    setArrow("hidden");
    setTimeout(transition, 1200);
  };

  const transition = () => {
    navigate("/portfolio");
  };

  return (
    <div
      className={`landing display-grid just-cont-center align-cont-center width-100-vw `}
    >
      <div
        className={`middle-box ${open} width-100-vw height-100-vh display-grid`}
      >
        <BsArrowLeft className={`left-arrow ${arrow}`} />{" "}
        <BsArrowRight className={`right-arrow ${arrow} align-self-center`} />
        <div
          className={`open-box ${open} display-flex just-cont-center align-cont-center just-self-center align-self-center`}
          onClick={handleClick}
        >
          <h3 className="marginless">You're Next Software Engineer</h3>
        </div>
      </div>
    </div>
  );
};

export default Landing;
