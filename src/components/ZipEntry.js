import React, { useState } from "react";
import "../App.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import backdrop1 from "../img/backdrop1.jpg";
import posed, { PoseGroup } from "react-pose";

const postcode = require("postcode-validator");

function ZipEntry(props) {
  const [zip, setZip] = useState("");
  const [validFormat, setValidFormat] = useState(false);

  const animation = {
    enter: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const Start = posed.div(animation);
  const Valid = posed.div(animation);
  const Invalid = posed.div(animation);

  let valid = (
    <Start className="text-white start text-sm" key="start">
      Please Enter Your Zip Code
    </Start>
  );
  if (zip.length > 4 && postcode.validate(zip, "US")) {
    valid = (
      <Valid className="text-blue-400 valid text-sm" key="valid">
        valid numeric format zip code!
      </Valid>
    );
  } else if (zip.length > 4 && !postcode.validate(zip, "US")) {
    valid = (
      <Invalid className="text-red-400 invalid text-sm" key="invalid">
        invalid zip code format
      </Invalid>
    );
  }
  let button = (
    <Button variant="contained" disabled>
      <span className="normal-case">Find Weather</span>
    </Button>
  );
  if (validFormat === true) {
    button = (
      <Button variant="contained" onClick={submit}>
        <span className="normal-case">Find Weather</span>
      </Button>
    );
  }

  function handleChange(e) {
    setZip(e.target.value);
    if (postcode.validate(e.target.value, "US")) {
      setValidFormat(true);
    } else {
      setValidFormat(false);
    }
  }

  function submit() {
    props.setView("forecast");
  }

  return (
    <div
      style={{
        backgroundImage: `url(${backdrop1})`,
        backgroundSize: "cover"
      }}
      className="h-screen w-screen pt-32"
    >
      <div className="font-sans shadow mx-auto w-3/5 sm:w-2/5 lg:w-2/6 xl:w-1/5 sm:text-base sm:rounded-full text-xs text-center rounded-lg pt-2 pb-5 bg-white">
        <div className="p-1">
          <PoseGroup>{valid}</PoseGroup>
        </div>
        <div className="pb-4">
          <TextField
            id="standard-dense"
            label="Enter Your Zip Code"
            margin="dense"
            value={zip}
            onChange={handleChange}
          />
        </div>
        <div></div>
        <div className="pt-1">{button}</div>
      </div>
    </div>
  );
}

export default ZipEntry;
