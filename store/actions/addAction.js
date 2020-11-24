import {insertCar, fetchCars, deleteCar} from '../../src/helpers/db';
/*export const addCar = (car) => {
  return async (dispatch, getState) => {
    dispatch({type: 'ADD_CAR'});
  };
};*/
export const addCar = (make, model) => {
  return async (dispatch) => {
    try {
      const dbResult = await insertCar(make, model);
      console.log(dbResult);
      dispatch({
        type: 'ADD_CAR',
        payload: {id: dbResult.insertID, make: make, model: model},
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};
/*export function showAll() {
  return {type: 'SHOW_ALL'};
}*/
export const removeCar = (id) => {
  return async (dispatch) => {
    try {
      const dbResult = await deleteCar(id);
      console.log(dbResult);
      dispatch({type: 'DELETE_CAR', payload: {id: id}});
    } catch (err) {
      throw err;
    }
  };
};
export const showAll = () => {
  return async (dispatch) => {
    dispatch({type: 'RESET_CAR_LIST', payload: null});
    try {
      const carsResult = await fetchCars();
      dispatch({type: 'SHOW_ALL', payload: carsResult.rows});
    } catch (err) {
      console.log('Klaida');
      throw err;
    }
  };
};
