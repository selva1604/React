import React from "react";
import { render } from "react-dom";
import "./style.css";

class App extends React.Component {
  state = {
    points: []
  };

  getRandomPointInCircle() {
    const t = 2 * Math.PI * Math.random();
    const r = Math.sqrt(Math.random());
    const cx = r * Math.cos(t);
    const cy = r * Math.sin(t);
    const fill = "#" + ((Math.random() * 0xffffff) << 0).toString(16);

    return { cx: cx + 0.2, cy: cy, fill: fill, r: "0.08" };
  }

  addPoints = () => {
    const points = (this.state.points = new Array(1)
      .fill()
      .map(p => this.getRandomPointInCircle()));
    this.setState({ points });
  };

  render() {
    const { points } = this.state;
    return (
      <div>
        <button onClick={this.addPoints}>Click random fill cricle</button>
        <br />
        <svg style={{ overflow: "visible" }} height="200px" viewBox="-1 -1 2 2">
          <rect width="2" height="2" x="-1" y="-1" fill="#efefef" />
          <circle cx={0} cy={0} r={1} fill="#ffffff" />
          {points.map((p, index) => (
            <circle key={`${p.x}-${p.y}-${index}`} {...p} />
          ))}
        </svg>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
