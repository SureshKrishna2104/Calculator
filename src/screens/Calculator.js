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

const Calculator = () => {
  const [firstValue, setFirstValue] = useState();
  const [secondValue, setSecondValue] = useState();
  const [task, setTask] = useState('');
  const [ans, setAns] = useState('');

  const [isAdd, setIsAdd] = useState(false);
  const [isSub, setIsSub] = useState(false);
  const [isMul, setIsMul] = useState(false);
  const [isDiv, setIsDiv] = useState(false);
  const [error, setError] = useState({});

  const onSubmit = () => {
    let first = parseInt(firstValue);
    let second = parseInt(secondValue);
    if (!firstValue && !secondValue) {
      setError({
        name: 'error',
        msg: 'Please Enter the Values',
      });
    } else if (!firstValue) {
      setError({
        name: 'first',
        msg: 'Please Enter First Value',
      });
    } else if (!secondValue) {
      setError({
        name: 'second',
        msg: 'Please Enter Second Value',
      });
    } else {
      if (task === 'Add') {
        setAns(first + second);
      } else if (task === 'Sub') {
        setAns(first - second);
      } else if (task === 'Mul') {
        setAns(first * second);
      } else if (task === 'Div') {
        setAns(first / second);
      }
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.ans}>
          {ans ? `Calculated Value is ${ans.toFixed(2)}` : ''}
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter first Value"
          placeholderTextColor={'black'}
          keyboardType="number-pad"
          value={firstValue}
          onChangeText={e => setFirstValue(e)}
          onChange={() => (setAns(''), setError({}))}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter second Value"
          placeholderTextColor={'black'}
          keyboardType="number-pad"
          value={secondValue}
          onChangeText={e => setSecondValue(e)}
          onChange={() => (setAns(''), setError({}))}
        />
        <Text style={{...styles.error, height: 25}}>
          {error ? error.msg : ''}
        </Text>
        <View style={{flexDirection: 'row', paddingBottom: 20}}>
          <TouchableOpacity
            style={{...styles.button, backgroundColor: isAdd ? 'green' : 'red'}}
            onPress={() => (
              setTask('Add'),
              setIsAdd(true),
              setIsSub(false),
              setIsMul(false),
              setIsDiv(false)
            )}>
            <Text style={styles.text}>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{...styles.button, backgroundColor: isSub ? 'green' : 'red'}}
            onPress={() => (
              setTask('Sub'),
              setIsAdd(false),
              setIsSub(true),
              setIsMul(false),
              setIsDiv(false)
            )}>
            <Text style={styles.text}>Subtract</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{...styles.button, backgroundColor: isMul ? 'green' : 'red'}}
            onPress={() => (
              setTask('Mul'),
              setIsAdd(false),
              setIsSub(false),
              setIsMul(true),
              setIsDiv(false)
            )}>
            <Text style={styles.text}>Multiply</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{...styles.button, backgroundColor: isDiv ? 'green' : 'red'}}
            onPress={() => (
              setTask('Div'),
              setIsAdd(false),
              setIsSub(false),
              setIsMul(false),
              setIsDiv(true)
            )}>
            <Text style={styles.text}>Divide</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.submit} onPress={() => onSubmit()}>
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
