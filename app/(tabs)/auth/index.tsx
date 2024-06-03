
import { Link } from 'expo-router'
import { View } from 'react-native'
import LoginScreen  from './screen/LoginScreen'



export default function index() {

  return (
    <View style={{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    }}>
     <LoginScreen />

    </View>
  )
};


