import { StyleSheet, Text, Pressable } from 'react-native'
import PropTypes from 'prop-types'
import React from 'react'

function Button ({title, onPress, disabled}) {
  return (
    <Pressable style={[styles.container, disabled ? styles.disabledContainer : {}]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

export default Button

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  disabled: PropTypes.bool
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#58cc02',
      height: 50,
      
      marginVertical: 10,

      alignSelf: 'stretch',
      alignItems: 'center',
      justifyContent: 'center',

      borderRadius: 5,
      borderBottomWidth: 5,
      borderColor: '#57a600'
    },
    text: {
      fontSize: 17,
      fontWeight: 'bold',
      color: 'white',

      borderColor: 'white',
      borderBottomWidth: 1.5,
    },
    disabledContainer: {
      backgroundColor: 'lightgrey',
      borderColor: 'grey'
    }
})