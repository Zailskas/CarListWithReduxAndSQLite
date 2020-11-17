import React, {Component} from 'react';
import {View, Text, Button, ScrollView, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {showAll} from '../../store/actions/addAction';
import {showAllUsers} from '../../store/actions/userActions';
import 'react-native-gesture-handler';

class showScreen extends Component {
  componentDidMount() {
    this.props.showAll();
    this.props.showAllUsers();
  }
  render() {
    const {cars} = this.props;
    console.log(cars);
    /*<ScrollView style={styles.carsContainer}>
          {cars.cars.map((car, index) => (
            <View style={styles.cars} key={index}>
              <Text styles={styles.make}>
                {car.make} {car.model}
              </Text>
            </View>
          ))}
        </ScrollView> */

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Cars</Text>
        <ScrollView style={styles.carsContainer}>
          {cars.cars.map((car, index) => (
            <View style={styles.cars} key={index}>
              <Text styles={styles.make}>
                {car.Make} {car.Model}
              </Text>
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
    flex: 1,
  },
  cars: {
    padding: 20,
    backgroundColor: '#ededed',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 5,
  },
  make: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  model: {
    fontSize: 14,
    color: '#999',
  },
  title: {
    paddingTop: 30,
    paddingBottom: 20,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

const mapStateToProps = (state) => {
  return {
    cars: state.cars,
    users: state.users,
  };
};
/*const mapDispatchToProps = {
  dispatchAddCar: (car) => add(car),
};*/
export default connect(mapStateToProps, {showAll, showAllUsers})(showScreen);
