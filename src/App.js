import React from "react";
import "./App.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import backdrop1 from "./img/backdrop1.jpg";
import posed, { PoseGroup } from "react-pose";

const postcode = require("postcode-validator");
const animation = {
  enter: { opacity: 1 },
  exit: { opacity: 0 }
};

const Start = posed.div(animation);
const Valid = posed.div(animation);
const Invalid = posed.div(animation);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { zip: "", validFormat: false };
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }
  handleChange(event) {
    this.setState({ zip: event.target.value });
    if (postcode.validate(event.target.value, "US")) {
      this.setState({ validFormat: true });
    } else {
      this.setState({ validFormat: false });
    }
  }
  submit() {
    alert("this worked");
  }

  render() {
    let valid = (
      <Start className="text-white pb-2 pt-1 start" key="start">
        Please Enter Your Zip Code
      </Start>
    );
    let zip = this.state.zip;
    if (zip.length > 4 && postcode.validate(zip, "US")) {
      valid = (
        <Valid className="text-blue-400 pb-2 pt-1 valid" key="valid">
          valid numeric format zip code!
        </Valid>
      );
    } else if (zip.length > 4 && !postcode.validate(zip, "US")) {
      valid = (
        <Invalid className="text-red-400 pb-2 pt-1 invalid" key="invalid">
          invalid zip code format
        </Invalid>
      );
    }
    let button = (
      <Button variant="contained" disabled>
        <span className="normal-case">Find Weather</span>
      </Button>
    );
    if (this.state.validFormat === true) {
      button = (
        <Button variant="contained" onClick={this.submit}>
          <span className="normal-case">Find Weather</span>
        </Button>
      );
    }

    return (
      <div
        style={{
          backgroundImage: `url(${backdrop1})`,
          backgroundSize: "cover"
        }}
        className="h-screen w-screen pt-32"
      >
        <div className="font-sans shadow mx-auto w-1/5 text-center rounded-full pt-2 pb-5 bg-white">
          <TextField
            id="standard-dense"
            label="Enter Your Zip Code"
            margin="dense"
            value={this.state.zip}
            onChange={this.handleChange}
          />

          <PoseGroup>{valid}</PoseGroup>
          {button}
          <div></div>
        </div>
      </div>
    );
  }
}

export default App;
