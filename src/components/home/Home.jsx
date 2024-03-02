import { useRef } from "react";
import "./Home.scss";

const Home = () => {
  const x = useRef(null);
  const y = useRef(0);
  console.log(x);
  return (
    <div>
      <div className="box" ref={x}>
        {y.current}
      </div>
      <button
        onClick={() => {
          y.current++;
          console.log(y.current);
          if (y.current === 10) {
            x.current.style.backgroundColor = "red";
          }
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default Home;
