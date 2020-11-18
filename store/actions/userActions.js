import {createUser, fetchUsers} from '../../src/helpers/db';

export const addUser = (ID, username, email, password) => {
  return async (dispatch) => {
    dispatch({type: 'RESET_USER_LIST', payload: null});
    try {
      const dbResult = await createUser(ID, username, email, password);
      console.log(dbResult);
      dispatch({
        type: 'CREATE_USER',
        payload: {
          ID: ID,
          username: username,
          email: email,
          password: password,
        },
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};

export const showAllUsers = () => {
  return async (dispatch) => {
    try {
      const userResult = await fetchUsers();
      dispatch({type: 'SHOW_ALL_USERS', payload: userResult.rows});
    } catch (err) {
      console.log('Klaida');
      throw err;
    }
  };
};
