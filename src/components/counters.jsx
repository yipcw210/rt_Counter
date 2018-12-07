import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("Counters - Rendered");
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <React.Fragment>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <div key={counter.id}>
            <Counter
              onDelete={onDelete}
              onIncrement={onIncrement}
              counter={counter}
            />
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
