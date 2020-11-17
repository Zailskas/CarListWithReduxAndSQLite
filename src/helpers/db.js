import SQLite from 'react-native-sqlite-storage';
const db = SQLite.openDatabase(
  {
    name: 'Garage',
    location: 'default',
    createFromLocation: '~Garage.db',
  },
  () => {
    console.log('OK veikia');
  },
  (error) => {
    console.log('Error:' + error);
  },
);

export const init = () => {
  db;
};

export const getCars = () => {
  db.transaction((tx) => {
    tx.executeSql('SELECT * FROM Car', [], (_, results) => {
      return results;
      /*let dataLength = results.rows.length;
      let cars = [];
      for (let i = 0; i < results.rows.length; i++) {
        cars.push(results.rows.item(i));
      }
      console.log(cars);
      return cars;*/
    });
  });
};

export const fetchCars = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM Car',
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        },
      );
    });
  });
  return promise;
};

export const insertCar = (make, model) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO Car (make, model) VALUES (?, ?);',
        [make, model],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        },
      );
    });
  });
  return promise;
};

export const deleteCar = (id) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM Car WHERE id = ?;',
        [id],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        },
      );
    });
  });
  return promise;
};

export const createUser = (ID, username, email, password) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO User (ID, username, email, password) VALUES (?, ?, ?, ?);',
        [ID, username, email, password],
        (_, result) => {
          resolve(result);
          console.log('Ok');
        },
        (_, err) => {
          reject(err);
          console.log('NO');
        },
      );
    });
  });
  return promise;
};

export const fetchUsers = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM User',
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        },
      );
    });
  });
  return promise;
};
export const userLogin = (username, password) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT ID, username, password FROM User WHERE username = ? and password = ?;',
        [username, password],
        (_, result) => {
          console.log('Login success');
          resolve(result);
        },
        (_, err) => {
          reject(err);
        },
      );
    });
  });
  return promise;
};
