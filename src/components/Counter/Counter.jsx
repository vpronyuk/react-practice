import { Component } from "react";

class Counter extends Component {
  state = {
    total: 0,
  };
  //   handleClickDecrement = (evt) => {
  //     this.setState((prevState) => {
  //       return {
  //         total: prevState.total - 1,
  //       };
  //     });
  //   };

  handleClickDecrement = () =>
    this.setState((prevState) => ({
      //неявне повернення. видалено return
      total: prevState.total - 1,
    }));

  handleClickIncrement = () =>
    this.setState((prevState) => ({
      total: prevState.total + 1,
    }));

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body text-center">
                <h5>Counter</h5>
                <div className="d-flex justify-content-center align-items-center">
                  <button
                    id="minus"
                    className="btn btn-minus btn-secondary"
                    onClick={this.handleClickDecrement}
                  >
                    -
                  </button>
                  <div id="count" className="mx-3">
                    {this.state.total}
                  </div>
                  <button
                    id="plus"
                    className="btn btn-plus btn-secondary"
                    onClick={this.handleClickIncrement}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
