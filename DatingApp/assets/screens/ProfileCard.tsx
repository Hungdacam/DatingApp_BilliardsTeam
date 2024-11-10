import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Button, TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
export default function ProfileCard() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <FontAwesome name="bars" size={24} color="black" />
        <Text style={styles.title}>HeartSync</Text>
        <FontAwesome name="sliders" size={24} color="black" />
      </View>

      <View style={styles.progressBar}>
        <View style={styles.progress} />
      </View>

      <ImageBackground
        source={{ uri: 'https://picsum.photos/200/300' }} // URL ảnh profile
        style={styles.cardBackground}
      >
        <View style={styles.overlay} />

        {/* Swipe Right Section */}
        <View style={styles.swipeContainer}>
          <Text style={styles.swipeText}>
            <Text style={styles.swipeTitle}>Swipe right if you like{'\n'}</Text>
            <Text style={styles.subText}>
              If the person also swipes right on you,{'\n'}it’s a match and you can connect.
            </Text>
          </Text>
          <FontAwesome name="arrow-right" size={24} color="#ffffff" style={styles.iconRight} />
        </View>

        <View style={styles.separator} />

        {/* Swipe Left Section */}
        <View style={styles.swipeContainer}>
        <FontAwesome name="arrow-left" size={24} color="#ffffff" style={styles.iconLeft} />
          <Text style={styles.swipeText}>
            <Text style={styles.swipeTitle}>Swipe left to pass{'\n'}</Text>
            <Text style={styles.subText}>
              If the person is not your cup of tea,{'\n'}simply pass. It’s that easy!
            </Text>
          </Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.name}>
            Ava Jones, 25 <FontAwesome name="check-circle" size={16} color="#00bfff" />
          </Text>
          <View style={styles.pronounsContainer}>
            <Text style={styles.pronouns}>she/her/hers</Text>
          </View>
          <Text style={styles.job}>Business Analyst at Tech</Text>
        </View>
      </ImageBackground>

      <View style={styles.footer}>
        <FontAwesome name="undo" size={24} color="gray" />
        <FontAwesome name="heart" size={24} color="skyblue" />
        <FontAwesome name="bookmark" size={24} color="gray" />
        <TouchableOpacity 
        onPress={()=>navigation.goBack()}>
        <FontAwesome name="user" size={24} color="gray" />
        </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  progressBar: {
    height: 7,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    marginTop: 10,
    width: '50%',
    alignSelf: 'center',
  },
  progress: {
    height: '100%',
    width: '50%',
    backgroundColor: '#00bfff',
    borderRadius: 2,
  },
  cardBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 25,
    height: '100%',
    width: 372,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(146, 202, 219, 0.4)',
    height:'100%'
  },
  swipeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  swipeText: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 10,
  },
  swipeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconLeft: {
    marginRight: 32,
  },
  iconRight: {
    marginLeft: 32,
  },
  subText: {
    fontSize: 14,
    color: '#dcdcdc',
  },
  separator: {
    width: '100%',
    height: 2,
    backgroundColor: '#ffffff',
    marginVertical: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 10,
  },
  pronounsContainer: {
    backgroundColor: '#00bfff', // Background color for the pronouns box
    marginVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 20, // Border radius for the pronouns box
    marginBottom: 10,
  },
  pronouns: {
    fontSize: 14,
    color: '#ffffff', // Text color inside the pronouns box
  },
  job: {
    fontSize: 14,
    color: '#dcdcdc',
    marginBottom: 10,
  },
  info: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    padding: 10,
    borderRadius: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 20,
    
  },
});
