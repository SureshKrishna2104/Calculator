import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {add} from '../redux/UserSlice';
import LottieView from 'lottie-react-native';
import {useForm, Controller} from 'react-hook-form';

const Calculator = () => {
  const count = useSelector(state => state.user.name);

  const {
    control,
    handleSubmit,
    getValues,
    formState: {errors},
  } = useForm({
    defaultValues: {
      firstValue: '',
      secondValue: '',
    },
  });

  const dispatch = useDispatch();
  const [task, setTask] = useState('');
  const [ans, setAns] = useState('');

  // const [isAdd, setIsAdd] = useState(false);
  // const [isSub, setIsSub] = useState(false);
  // const [isMul, setIsMul] = useState(false);
  // const [isDiv, setIsDiv] = useState(false);
  //const [error, setError] = useState({});
   console.log(control._formValues.firstValue)
  const onSubmit = data => {
    let first = parseInt(data.firstValue);
    let second = parseInt(data.secondValue);
    if (task === 'Add') {
      setAns(first + second);
    } else if (task === 'Sub') {
      setAns(first - second);
    } else if (task === 'Mul') {
      setAns(first * second);
    } else if (task === 'Div') {
      setAns(first / second);
    }
    dispatch(add(ans));
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
      <LottieView source={require('../assets/97311-truck.json')} autoPlay loop />
        <Text style={styles.ans}>
          {ans ? `Calculated Value is ${ans.toFixed(2)}` : ''}
        </Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.input}
              placeholder="Enter first Value"
              placeholderTextColor={'black'}
              keyboardType="number-pad"
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="firstValue"
        />
        {errors.firstValue && <Text style={styles.error}>Please enter first value.</Text>}
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.input}
              placeholder="Enter Second Value"
              placeholderTextColor={'black'}
              keyboardType="number-pad"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="secondValue"
          rules={{required: true}}
         
        />
         {errors.secondValue && <Text style={styles.error}>Please enter second value.</Text>}

        <View style={{flexDirection: 'row', paddingBottom: 20}}>
          <TouchableOpacity
            style={{
              ...styles.button,
              backgroundColor: task === 'Add' ? 'green' : 'red',
            }}
            onPress={() => setTask('Add')}>
            <Text style={styles.text}>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.button,
              backgroundColor: task === 'Sub' ? 'green' : 'red',
            }}
            onPress={() => setTask('Sub')}>
            <Text style={styles.text}>Subtract</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{
              ...styles.button,
              backgroundColor: task === 'Mul' ? 'green' : 'red',
            }}
            onPress={() => setTask('Mul')}>
            <Text style={styles.text}>Multiply</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.button,
              backgroundColor: task === 'Div' ? 'green' : 'red',
            }}
            onPress={() => setTask('Div')}>
            <Text style={styles.text}>Divide</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.submit}
            onPress={handleSubmit(onSubmit)}>
            <Text style={styles.text}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  inputContainer: {
    alignItems: 'center',
    padding: 25,
  },
  input: {
    borderStyle: 'solid',
    width: '90%',
    borderWidth: 2,
    borderColor: '#171616',
    borderRadius: 5,
    margin: 12,
    height: 50,
    padding: 10,
    fontSize: 20,
    backgroundColor: '#fff',
  },
  button: {
    width: 150,
    height: 45,
    color: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#dbd9d9',
    marginLeft: 10,
  },
  text: {
    fontSize: 22,
    color: '#dbd9d9',
  },
  ans: {
    fontSize: 22,
    color: 'black',
  },
  error: {
    fontSize: 20,
    color: 'red',
    marginBottom: 6,
  },
  submit: {
    width: 220,
    height: 50,
    marginTop: 15,
    backgroundColor: '#00ADB5',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 9,
    borderColor: '#dbd9d9',
    marginLeft: 45,
  },
});
export default Calculator;
