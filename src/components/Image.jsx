import { PATH_IMAGES } from "../helpers";

const Image = ({ right = false, size = 300, src = "31-min.jpg" }) => {
  return (
    <img
      className={`pull-${right ? "right" : "left"} img-responsive`}
      src={`${PATH_IMAGES}/detail-post/${src}`}
      style={{ width: size }}
      alt={src}
    />
  );
};

export default Image;