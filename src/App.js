import React from "react";
import "./App.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import backdrop1 from "./img/backdrop1.jpg";

const postcode = require("postcode-validator");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { zip: "" };
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }
  handleChange(event) {
    this.setState({ zip: event.target.value });
  }
  submit() {
    if (postcode.validate(this.state.zip, "US")) {
      alert("it is valid");
    } else {
      alert("it iss not valid");
    }
  }

  render() {
    let valid = <div className="text-white">Please Enter Zip Code</div>;

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
          {valid}
          <div>
            <Button variant="contained" onClick={this.submit}>
              <span className="normal-case">Find Weather</span>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
//
// let zip = this.state.zip;
// if (zip.length > 4 && postcode.validate(zip, "US")) {
//   valid = <div className="text-blue-400">valid zip code!</div>;
// } else if (zip.length > 4 && !postcode.validate(zip, "US")) {
//   valid = <div className="text-red-400">invalid zip code</div>;
// } else {
//   valid = <div className="text-white">invalid zip code</div>;
// }
