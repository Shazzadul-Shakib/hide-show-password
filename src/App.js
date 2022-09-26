import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const App = () => {
  const [state, setState] = useState(false);
  const handleState = () => {
    setState((prev) => !prev);
  };
  return (
    <div>
      <div className="form-control">
        <div className="input-group">
          <input
            type={state ? "text" : "password"}
            placeholder="Enter password"
            className="input input-bordered"
          />
          <button className="btn btn-square" onClick={handleState}>
            {state ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
