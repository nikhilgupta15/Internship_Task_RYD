import React, { Component } from "react";
import axios from "axios";

class AddSurvey extends Component {
  constructor(props) {
    super(props);

    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeCountry = this.onChangeCountry.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      age: 0,
      country: "",
      gender: "",
    };
  }

  onChangeUserName(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangeAge(e) {
    this.setState({
      age: e.target.value,
    });
  }

  onChangeCountry(e) {
    this.setState({
      country: e.target.value,
    });
  }

  onChangeGender(e) {
    this.setState({
      gender: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const survey = {
      username: this.state.username,
      age: this.state.age,
      country: this.state.country,
      gender: this.state.gender,
    };

    axios
      .post("http://localhost:5000/survey/add", survey)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    window.location = "/";
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="m-3">
          <div className="form-group">
            <label>User Name: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUserName}
            />
          </div>
          <div className="form-group">
            <label>Age: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.age}
              onChange={this.onChangeAge}
            />
          </div>
          <div className="form-group">
            <label>Country: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.country}
              onChange={this.onChangeCountry}
            />
          </div>
          <div className="form-group">
            <label>Gender: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.gender}
              onChange={this.onChangeGender}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Add Survey"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default AddSurvey;
