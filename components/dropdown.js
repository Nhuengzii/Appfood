import React, { useState } from "react"
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from "react-native"


export default function Dropdown({ label, data, onSelect, backgroundColor, width }) {

  const styles = StyleSheet.create({
    button: {
      backgroundColor: backgroundColor,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      height: 35,
      borderRadius: 10,
      paddingHorizontal: 10,
      margin: 5,
    },
    dropdownWrapper: {
      alignItems: "center",
      backgroundColor: backgroundColor,
      borderRadius: 10,
      paddingLeft: 10,
      margin: 5,
      height: 200
    },
    dropdown: {
      width: width,
      margin: 20,

    }
  })

  const [visible, setVisible] = useState(false);
  const [select, setSelect] = useState(label);

  const toggleDropdown = () => {
    setVisible(!visible);
  };

  const renderDropdown = () => {
    if (visible) {
      return (
        <View style={styles.dropdownWrapper}>
          <FlatList
            style={styles.dropdown}
            data={data}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => {
                setSelect(item);
                onSelect(item);
                setVisible(false);
              }}>
                <Text>{item}</Text>
              </TouchableOpacity>
            )}
            contentContainerStyle={{ rowGap: 3 }}
            fadingEdgeLength={20}
            persistentScrollbar={true}
            nestedScrollEnabled={true}
          />
        </View>
      )
    }
  }

  return (
    <View style={{ width: width }}>

      <TouchableOpacity style={styles.button} onPress={toggleDropdown}>
        <Text>{select}</Text>
        <Text>icon</Text>
      </TouchableOpacity>
      {renderDropdown()}
    </View>
  )

}

/*
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 35,
    borderRadius: 10,
    paddingHorizontal: 10,
    margin: 5,
  },
  dropdownWrapper: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingLeft: 10,
    margin: 5,
    height: 200
  },
  dropdown: {
    width: "100%",
    margin: 20,

  }
})*/
