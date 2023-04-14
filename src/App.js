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

  const outTheme = {
    backgroundColor: "red",
    color: "white",
    padding: "2px 4px",
    borderRadius: "5px",
  };
  const notOutTheme = {
    backgroundColor: "wheat",
    color: "black",
    padding: "2px 4px",
    borderRadius: "5px",
  };
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
      alert(`Match over... Reload to play again`);
    }
  };

  return (
    <div className="container">
      <div>
        <h2>Score Board</h2>
        <div>
          <table className="table table-bordered table-hover text-center">
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
                    <td className="scoreData">
                      <span className="score">
                        {e.score < 10 ? "0" + e.score : e.score}
                      </span>
                    </td>
                    <td>
                      <span
                        className="wicket"
                        style={e.wicket == "Not Out" ? notOutTheme : outTheme}
                      >
                        {e.wicket}
                      </span>
                    </td>
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
          <div>
            <h4>
              Total Score =
              {arr.team.reduce((acc, cur) => {
                return acc + cur.score;
              }, 0)}
            </h4>
          </div>
        </div>
        <div>
          <h4>Wicket = {wicket}</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
