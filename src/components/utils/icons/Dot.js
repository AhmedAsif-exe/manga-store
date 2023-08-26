const Dot = (props) => {
  return (
    <svg
      className={props.svg}
      id="el0PeviQNTo1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 20 20"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
    >
      <g transform="translate(0 4.251208)">
        <path
          d="M7.8,10c0,1.215026.984974,2.2,2.2,2.2s2.2-.984974,2.2-2.2-.984974-2.2-2.2-2.2-2.2.984974-2.2,2.2Z"
          fill={`${props.blue ? "blue" : "#f00"}`}
          stroke="#f00"
          strokeWidth="0.0002"
        />
      </g>
    </svg>
  );
};

export default Dot;
