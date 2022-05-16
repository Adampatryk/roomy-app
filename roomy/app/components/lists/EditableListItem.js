import { useIsFocused, useNavigation } from "@react-navigation/native";
import React, { useRef, useState } from "react";
import { Text, TextInput } from "react-native";
import ListItemContainer from "./ListItemContainer";
import styles from "./styles";

const EditableListItem = ({ title }) => {
  const [editMode, setEditMode] = useState(true);
  const inputRef = useRef();
  return (
    <ListItemContainer
      onPress={() => {
        inputRef.focus();
      }}
      onBlur={() => setEditMode(false)}
    >
      {editMode ? (
        <TextInput ref={inputRef} style={styles.title} value="hello" />
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
    </ListItemContainer>
  );
};

export default EditableListItem;
