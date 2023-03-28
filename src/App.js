import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  increment_one,
  increment_two,
  increment_four,
  increment_six,
  out,
} from "./redux/action";
import { useEffect, useState } from "react";

function App() {
  const arr = useSelector((state) => state);
  const [myId, setMyId] = useState(1);
  const [wicket, setWicket] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "scoreBoard";
  });

  const newWicket = () => {
    dispatch(out(myId));
    setMyId(myId + 1);
    for (let i = 0; i < arr.team.length; i++) {
      if (arr.team[i].id === myId) {
        setWicket(wicket + 1);
      }
    }
    if (wicket === 11) {
      alert("Match over...reload to play again");
    }
  };

  return (
    <div className="container">
      <div>
        <h2 style={{ textAlign: "center", margin: "20px" }}>Score Board</h2>
        <div>
          <table className="table table-bordered table-hover text-center table-condensed">
            <thead className="bg-secondary">
              <tr>
                <th>Players</th>
                <th>Score</th>
                <th>Wicket</th>
              </tr>
            </thead>
            <tbody>
              {arr.team.map((e, i) => {
                return (
                  <tr key={i}>
                    <td>{e.player}</td>
                    <td>{e.score}</td>
                    <td>{e.wicket}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="button">
        <button
          className="btn btn-primary btn-sm"
          onClick={() => dispatch(increment_one(myId))}
        >
          add1
        </button>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => dispatch(increment_two(myId))}
        >
          add2
        </button>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => dispatch(increment_four(myId))}
        >
          add4
        </button>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => dispatch(increment_six(myId))}
        >
          add6
        </button>
        <button className="btn btn-dark btn-sm" onClick={newWicket}>
          out
        </button>
      </div>
      <div className="bottom">
        <div>
          <h4 style={{ textAlign: "center", margin: "20px" }}>
            Total Score =
            {arr.team[0].score +
              arr.team[1].score +
              arr.team[2].score +
              arr.team[3].score +
              arr.team[4].score +
              arr.team[5].score +
              arr.team[6].score +
              arr.team[7].score +
              arr.team[8].score +
              arr.team[9].score +
              arr.team[10].score}
          </h4>
        </div>
        <div>
          <h4 style={{ textAlign: "center", margin: "20px" }}>
            Wicket = {wicket}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default App;
