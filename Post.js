import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { EvilIcons } from '@expo/vector-icons';

export default function Post(props) {
  const [likes, setLikes] = useState(0);

  function increaseLikes(){
    setLikes(likes+1)
  }

  return (
    <View style={styles.container}>
      <Text>{props.text}</Text>
      <TouchableOpacity style={styles.button} onPress={increaseLikes}>
        <EvilIcons name="like" size={24} color="black" />
        <Text>{likes}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})