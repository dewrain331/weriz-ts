import LoaderImg from "../../assets/imgs/LoaderImg.gif";
import { LoaderBackground, LoaderText } from "./loader.style";

const Loader = () => {
  return (
    <LoaderBackground>
      <img src={LoaderImg} alt="Spinner" />
      <LoaderText>Loading...</LoaderText>
    </LoaderBackground>
  );
};

export default Loader;
