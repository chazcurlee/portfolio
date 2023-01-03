import "../index.css";

const Footer = ({ classState }) => {
  return (
    <div className={`${classState} foot-container`}>
      <a href="https://www.linkedin.com/in/chaz-curlee/" target="external">
        <i className={`${classState} footer fa-brands fa-linkedin-in`}></i>
      </a>
      <a href="https://github.com/chazcurlee" target="external">
        <i class={`${classState} footer fa-brands fa-github`}></i>
      </a>
      <a href="mailto:chaz.curlee@gmail.com">
        <i class={`${classState} footer fa-regular fa-envelope`}></i>
      </a>
    </div>
  );
};

export default Footer;
