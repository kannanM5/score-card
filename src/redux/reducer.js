import {
  INCREMENT_ONE,
  INCREMENT_TWO,
  INCREMENT_FOUR,
  INCREMENT_SIX,
  OUT,
} from "./actionTypes";

const initialState = {
  team: [
    { player: "Player1", score: 0, wicket: "Not Out", id: 1 },
    { player: "Player2", score: 0, wicket: "Not Out", id: 2 },
    { player: "Player3", score: 0, wicket: "Not Out", id: 3 },
    { player: "Player4", score: 0, wicket: "Not Out", id: 4 },
    { player: "Player5", score: 0, wicket: "Not Out", id: 5 },
    { player: "Player6", score: 0, wicket: "Not Out", id: 6 },
    { player: "Player7", score: 0, wicket: "Not Out", id: 7 },
    { player: "Player8", score: 0, wicket: "Not Out", id: 8 },
    { player: "Player9", score: 0, wicket: "Not Out", id: 9 },
    { player: "Player10", score: 0, wicket: "Not Out", id: 10 },
    { player: "Player11", score: 0, wicket: "Not Out", id: 11 },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_ONE:
      return {
        ...state,
        team: state.team.map((player) => {
          if (player.id === action.payload) {
            return { ...player, score: player.score + 1 };
          } else {
            return player;
          }
        }),
      };
    case INCREMENT_TWO:
      return {
        ...state,
        team: state.team.map((player) => {
          if (player.id === action.payload) {
            return { ...player, score: player.score + 2 };
          } else {
            return player;
          }
        }),
      };
    case INCREMENT_FOUR:
      return {
        ...state,
        team: state.team.map((player) => {
          if (player.id === action.payload) {
            return { ...player, score: player.score + 4 };
          } else {
            return player;
          }
        }),
      };
    case INCREMENT_SIX:
      return {
        ...state,
        team: state.team.map((player) => {
          if (player.id === action.payload) {
            return { ...player, score: player.score + 6 };
          } else {
            return player;
          }
        }),
      };
    case OUT:
      return {
        ...state,
        team: state.team.map((player) => {
          if (player.id === action.payload) {
            return {
              ...player,
              wicket: player.wicket.replace("Not Out", "OuT"),
            };
          } else {
            return player;
          }
        }),
      };
    default:
      return state;
  }
};

export default reducer;
