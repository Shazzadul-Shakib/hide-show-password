import React, { useState } from "react";

const home = () => {
    const [value,setValue]=useState([]);
  return (
    <div>
      <div>
        <input type="text" />
      </div>
      <div>
        <div>
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default home;
