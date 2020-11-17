import {createUser, fetchUsers, userLogin} from '../../src/helpers/db';

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

export const login = (username, password) => {
  return async (dispatch) => {
    dispatch({type: 'RESET_USER_LIST', payload: null});
    try {
      const dbResult = await userLogin(username, password);
      console.log(dbResult.rows.length);
      if (dbResult.rows.length > 0) {
        dispatch({type: 'ERROR_LOGIN', payload: false});
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: dbResult.rows,
        });
      } else {
        console.log('Blogi duomenys');
        dispatch({type: 'ERROR_LOGIN', payload: true});
      }
    } catch (err) {
      console.log('Klaida');
      throw err;
    }
  };
};
