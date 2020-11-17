import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {showAll, removeCar} from '../../store/actions/addAction';
import 'react-native-gesture-handler';

class deleteScreen extends Component {
  componentDidMount() {
    this.props.showAll();
  }
  /*removeCar() {
    const index = this.props.cars.findIndex(
      (car) => car.id === 2,
    );
    console.log('indeksas', index);
    this.props.deleteCar(index);
  }*/
  render() {
    const {cars} = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Delete car</Text>
        <ScrollView style={styles.carsContainer}>
          {cars.cars.map((car, index) => (
            <View style={styles.cars} key={index}>
              <View style={{flex: 1, justifyContent: 'center'}}>
                <Text styles={styles.make}>
                  {car.Make} {car.Model}
                </Text>
              </View>
              <View style={styles.deleteButton}>
                <TouchableOpacity onPress={() => this.props.removeCar(car.id)}>
                  <View style={styles.addButtonContainer}>
                    <Text style={styles.addButton}>DELETE</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carsContainer: {
    borderTopWidth: 3,
    borderTopColor: '#ddd',
  },
  cars: {
    padding: 20,
    flexDirection: 'row',
    backgroundColor: '#ededed',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 5,
  },
  make: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  model: {
    fontSize: 22,
    color: '#999',
    fontWeight: 'bold',
  },
  title: {
    paddingTop: 30,
    paddingBottom: 20,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  deleteButton: {
    flex: 1,
    alignItems: 'flex-end',
  },
  addButton: {
    fontSize: 24,
    lineHeight: 24,
  },
  addButtonContainer: {
    width: 100,
    height: 50,
    backgroundColor: 'tomato',
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});

const mapStateToProps = (state) => {
  return {
    cars: state.cars,
  };
};
/*const mapDispatchToProps = {
  dispatchAddCar: (car) => add(car),
};*/
export default connect(mapStateToProps, {showAll, removeCar})(deleteScreen);
