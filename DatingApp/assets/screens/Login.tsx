import { StyleSheet, Text, View, Image,TouchableOpacity, SafeAreaView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import {useNavigation}  from '@react-navigation/native';
export function Login() {
  const navigation = useNavigation();
  function handleLogin(){
    navigation.navigate("ProfileCard");
  }
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../images/logo.png')} style={styles.imageContainer}/>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>
          HeartSync
        </Text>
        <Text style={styles.sloganText}>
          Where Hearts Connect, Love Finds Its Sync
        </Text>
      </View>
      <View style={styles.buttonLogin}>
        {/* Apple Button */}
      <TouchableOpacity 
      onPress={handleLogin}
      style={[styles.button, styles.appleButton]}>
        <FontAwesome name="apple" size={24} color="white" style={styles.icon} />
        <Text style={styles.buttonText}>Continue with Apple</Text>
      </TouchableOpacity>

      {/* Facebook Button */}
      <TouchableOpacity 
      onPress={handleLogin}
      style={[styles.button, styles.facebookButton]}>
        <FontAwesome name="facebook" size={24} color="white" style={styles.icon} />
        <Text style={styles.buttonText}>Continue with Facebook</Text>
      </TouchableOpacity>

      {/* Phone Number Button */}
      <TouchableOpacity 
      onPress={handleLogin}
      style={[styles.button, styles.phoneButton]}>
        <FontAwesome name="phone" size={24} color="white" style={styles.icon} />
        <Text style={styles.buttonText}>Use phone number</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.privacyContainer}>
        <Text style={styles.text}>
          By signing up you agree to our{' '}
          <Text style={styles.link} >
            Terms and Conditions
          </Text>
        </Text>
        <Text style={styles.text}>
          See how we use your data in our{' '}
          <Text style={styles.link} >
            Privacy Policy
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer:{
    width:250,
    height:250
  },
  titleContainer:{
    alignItems:'center',
    marginTop:30
  },
  titleText:{
    fontSize:50,
    fontWeight:'bold',
    marginTop:15,
    marginBottom:5
  },
  sloganText:{
    color:'#A9A9A9',
    fontSize:17,
  },
  buttonLogin:{
    alignItems:'center',
    marginTop: 60
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    width: 300,
    marginVertical: 10,
  },
  icon: {
    marginRight: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal:20
  },
  appleButton: {
    backgroundColor: '#000000',
  },
  facebookButton: {
    backgroundColor: '#1877F2',
  },
  phoneButton: {
    backgroundColor: '#00BFFF',
  },
  privacyContainer:{
    alignItems: 'center',
    marginTop: 90,
  },
  text: {
    color: '#555',
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 4,
  },
  link: {
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
  
});
