import { useState } from "react";
import { ColorBox } from './ColorBox';
import Button from '@mui/material/Button';


export function AddColor() {
  const [color, setColor] = useState("purple");
  const styles = {
    fontSize: "24px",
    backgroundColor: color,
  };

  const [colorList, setColorList] = useState(["orange", "crimson", "pink"]);

  return (
    <div>
      <div className="add-color">
        <input
          // event.target.value (newColor) -> color
          // setColor - Informs React color is changed - re-render
          onChange={(event) => setColor(event.target.value)}
          style={styles}
          type="text"
          placeholder="Enter a color"
          value={color}
        ></input>

        {/* setColorList - Informs React colorList is changed - re-render */}
        {/* copy the colorList and then add newColor to it */}
        {/* <button onClick={() => setColorList([...colorList, color])}>
          Add Color
        </button> */}

        <Button onClick={() => setColorList([...colorList, color])} variant="contained">Add Color</Button>
      </div>

      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}

    </div>
  );
}
