import React, {Component} from 'react';
import {View, Text} from 'react-native';
import CustomTextInput from '../components/textInput';
import CustomButton from '../components/customButton';
import {TouchableOpacity} from 'react-native-gesture-handler';

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
    console.log(username);
  }
  passwordChange(password) {
    this.setState({password});
    console.log(password);
  }
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
        <CustomButton
          title="Login"
          onPress={() => this.props.navigation.navigate('PrivatePage')}
        />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Register_page')}>
          <Text>No account? Create one !!!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default LoginPage;
