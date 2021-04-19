import React, { useEffect, useState } from "react";

import { axiosWithAuth } from "../helpers/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/colors")
      .then((res) => {
        setColorList(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  return (
    <div>
      {console.log("Hello world from BubblePage.js")}
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </div>
  );
};

export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
