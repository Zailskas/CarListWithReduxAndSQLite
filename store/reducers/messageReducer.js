const initialState = {
  errorLogin: false,
};
export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ERROR_LOGIN':
      console.log('Message' + action.payload);
      return {errorLogin: action.payload};
    default:
      return state;
  }
};
