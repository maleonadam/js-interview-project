import { FETCH_USERS } from "./types";

export const fetchUsers = () => dispatch => {
  fetch("https://ti-react-test.herokuapp.com/users")
    .then(res => res.json())
    .then(users =>
      dispatch({
        type: FETCH_USERS,
        payload: users
      })
    );
};
