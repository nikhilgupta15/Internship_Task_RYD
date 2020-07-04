import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class SurveyList extends Component {
  constructor(props) {
    super(props);

    this.deleteSurvey = this.deleteSurvey.bind(this);

    this.state = {
      survey: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/survey")
      .then((res) => {
        this.setState({
          survey: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  deleteSurvey(id) {
    axios
      .delete("http://localhost:5000/survey/" + id)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    this.setState({
      survey: this.state.survey.filter((el) => el._id !== id),
    });
  }
  render() {
    return (
      <div className="container">
        <div>
          <button type="button" className="btn btn-dark mt-2">
            <Link to="/add">Add Survey</Link>
          </button>
        </div>
        <table className="table m-3">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Age</th>
              <th>Country</th>
              <th>Gender</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.survey.map((Survey) => {
              return (
                <tr>
                  <th>{Survey.username}</th>
                  <th>{Survey.age}</th>
                  <th>{Survey.country}</th>
                  <th>{Survey.gender}</th>
                  <th>
                    <a href="/" onClick={() => this.deleteSurvey(Survey._id)}>
                      Delete
                    </a>
                  </th>
                  <th>
                    <button type="button" className="btn btn-dark">
                      <Link to={"/edit/" + Survey._id}>Edit</Link>
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SurveyList;
