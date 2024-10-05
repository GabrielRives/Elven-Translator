import "./Gradient.scss";
import { useSelector } from "react-redux";

function Gradient() {
  const direction = useSelector((store) => store.gradient.direction);
  const firstColor = useSelector((store) => store.gradient.firstColor);
  const secondColor = useSelector((store) => store.gradient.secondColor);
  const thirdColor = useSelector((store) => store.gradient.thirdColor);
  const fourthColor = useSelector((store) => store.gradient.fourthColor);
  const backgroundSize = useSelector((store) => store.gradient.backgroundSize);
  const animation = useSelector((store) => store.gradient.animation);
  const width = useSelector((store) => store.gradient.width);
  const height = useSelector((store) => store.gradient.height);
  const position = useSelector((store) => store.gradient.position);
  const zIndex = useSelector((store) => store.gradient.zIndex);

  console.log("Gradient state updated:", {
    direction,
    firstColor,
    secondColor,
    thirdColor,
    fourthColor,
  });

  const gradientStyle = {
    backgroundImage: `linear-gradient(${direction}, ${firstColor}, ${secondColor}, ${thirdColor}, ${fourthColor})`,
    backgroundSize: `${backgroundSize}`,
    animation: `${animation}`,
    width: `${width}`,
    height: `${height}`,
    position: `${position}`,
    zIndex: `${zIndex}`,
  };

  return (
    <div className="area" id="gradient" style={gradientStyle}>
      <ul className="circles">
        <li>r</li>
        <li>g</li>
        <li>l</li>
        <li>c</li>
        <li>q</li>
        <li>m</li>
        <li>h</li>
        <li>d</li>
        <li>u</li>
        <li>t</li>
      </ul>
    </div>
  );
}

export default Gradient;
