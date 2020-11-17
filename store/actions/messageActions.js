export const setLoginError = () => {
  return async (dispatch) => {
    dispatch({type: 'ERROR', payload: true});
  };
};
