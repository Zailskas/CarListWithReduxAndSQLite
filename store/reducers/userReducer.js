const initialState = {
  user: [],
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_USER':
      console.log('ID' + action.payload.ID);
      console.log('email' + action.payload.email);
      const newUser = {
        ID: action.payload.ID,
        username: action.payload.username,
        email: action.payload.email,
        password: action.payload.password,
      };
      return {
        user: state.user.concat(newUser),
      };
    case 'RESET_USER_LIST':
      return {user: []};
    case 'SHOW_ALL_USERS':
      const userList = [];
      for (let i = 0; i < action.payload.length; ++i) {
        userList.push(action.payload.item(i));
        console.log(action.payload.item(i));
      }
      return {user: [...state.user, ...userList]};
    case 'LOGIN_SUCCESS':
      console.log(action.payload);
    /*const user = {
        ID: action.payload.ID,
        username: action.payload.username,
        password: action.payload.password,
      };
      return user;*/
    default:
      return state;
  }
};
