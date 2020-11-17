import React, {Component} from 'react';
import {View, Text, Alert} from 'react-native';
import CustomTextInput from '../components/textInput';
import CustomButton from '../components/customButton';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {login} from '../../store/actions/userActions';
import {setLoginError} from '../../store/actions/messageActions';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  usernameChange(username) {
    this.setState({username});
  }
  passwordChange(password) {
    this.setState({password});
  }
  handleSubmit = () => {
    this.props.login(this.state.username, this.state.password);
    if (this.props.message.errorLogin === false) {
      this.props.navigation.navigate('PrivatePage');
    } else {
      Alert.alert('Wrong credentials');
    }

    //if (this.props.message)
  };
  //this.props.navigation.navigate('PrivatePage')

  render() {
    return (
      <View>
        <CustomTextInput
          title="Username"
          value={this.state.username}
          placeholder="Enter your username"
          onChangeText={(text) => this.usernameChange(text)}
        />
        <CustomTextInput
          title="Password"
          value={this.state.password}
          placeholder="Enter your password"
          onChangeText={(text) => this.passwordChange(text)}
          secureTextEntry={true}
        />
        <CustomButton title="Login" onPress={() => this.handleSubmit()} />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Register_page')}>
          <Text>No account? Create one !!!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.users,
    message: state.message,
  };
};
export default connect(mapStateToProps, {login, setLoginError})(LoginPage);
