import React, { useState } from "react"
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from "react-native"


export default function Dropdown({ label }) {
  const [visible, setVisible] = useState(false);

  const toggleDropdown = () => {
    setVisible(!visible);
  };

  const renderDropdown = () => {
    if (visible) {
      return (
        <Text> dropdown </Text>
      )
    }
  }

  return (
    <TouchableOpacity style={styles.button} onPress={toggleDropdown}>
      {renderDropdown()}
      <Text>{label}</Text>

    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
  }
})
