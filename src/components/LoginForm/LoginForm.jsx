import { Component } from "react";

class LoginForm extends Component {
  state = {
    email: "",
    password: "",
    isChecked: false,
  };

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleChecked = ({ target: { checked } }) => {
    this.setState({
      isChecked: checked,
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    // this.props.createUser(this.state);
    this.props.createUser({
      email: this.state.email,
      password: this.state.password,
    });

    this.setState({
      email: "",
      password: "",
    });
    this.props.hideModal();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={this.handleChange}
            value={this.state.password}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            value={this.state.isChecked}
            onChange={this.handleChecked}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            I agree...
          </label>
        </div>
        {/* <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Default radio
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            checked
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Default checked radio
          </label>
        </div> */}
        <button
          disabled={!this.state.isChecked}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    );
  }
}

export default LoginForm;
