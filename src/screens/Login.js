import React from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import {addUser,getAllUsers} from '../Database'
import Realm from "realm";

const Login = () => {
  const [name, setName] = React.useState('');
  const [pwd, setPwd] = React.useState('');
  const[user,serUser]=React.useState(getAllUsers())
  const [errors,setErrors]=React.useState({})

  const onSubmit=()=>{
       if(!name){
           setErrors({"name":"Please Enter the name"})
       }
       else if(!pwd){
        setErrors({"pwd":"Please Enter the password"})
    }
    else{
        addUser(name,pwd)
        serUser(getAllUsers())
        setErrors({})
    }
  }
   console.log(getAllUsers())
  return (
    <View style={styles.cotainer}>
      <TextInput
        style={styles.input}
        placeholder="name"
        placeholderTextColor="black"
        value={name}
        onChangeText={(e)=>setName(e)}
      />
      {errors.name?<Text>Please enter the name</Text>:null}
      <TextInput
        style={styles.input}
        placeholder="password"
        placeholderTextColor="black"
        value={pwd}
        onChangeText={(e)=>setPwd(e)}
      />
       {errors.pwd?<Text>Please enter the pw</Text>:null}
      <TouchableOpacity style={styles.button} onPress={()=>onSubmit()}>
        <Text style={styles.font}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: '15%',
    width: '80%',
    marginVertical: 10,
    marginHorizontal: 30,
    borderWidth: 1,
    borderColor: 'black',
  },
  button: {
    height: '14%',
    width: '60%',
    backgroundColor: 'red',
    color: 'red',
    marginVertical: 10,
    marginHorizontal: 70,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  font: {
    fontSize: 20,
  },
});
export default Login;
