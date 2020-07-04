import React, { Component } from "react";
import axios from "axios";

export default class EditSurvey extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
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

  componentDidMount() {
    axios
      .get("http://localhost:5000/survey/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          username: response.data.username,
          age: response.data.age,
          country: response.data.country,
          gender: response.data.gender,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onChangeUsername(e) {
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

    console.log(survey);

    axios
      .post(
        "http://localhost:5000/survey/update/" + this.props.match.params.id,
        survey
      )
      .then((res) => console.log(res.data));

    window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>Edit Survey</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group">
            <label>Age: </label>
            <input
              type="number"
              required
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
              value="Edit Survey"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
