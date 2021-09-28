import s from "./Preloader.module.css";
import preloader from "../../assets/svg/preloader.svg";

const Preloader = (props) => {
  return (
    <div className={`${s.preloader} ${props.preloader && s.active}`}>
      <img src={preloader} />
    </div>
  );
};
export default Preloader;
