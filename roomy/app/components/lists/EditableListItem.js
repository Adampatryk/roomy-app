import { useIsFocused, useNavigation } from "@react-navigation/native";
import React, { useRef, useState } from "react";
import {
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import colors from "../../config/colors";
import DeleteIcon from "../DeleteIcon";
import AppTextInput from "../AppTextInput";
import { AppButton } from "../buttons";
import ListItemContainer from "./ListItemContainer";
import globalStyles from "./styles";

const EditableListItem = ({ title, saveTitle, onDelete }) => {
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState(title);
  const inputRef = useRef();

  const style = {
    ...globalStyles.title,
    ...styles.input,
  };

  const stopEditting = () => {
    saveTitle(value);
    setEditMode(false);
  };

  return (
    <ListItemContainer
      onPress={() => {
        setEditMode(true);
        inputRef.current.focus();
      }}
    >
      <View style={styles.container}>
        <TextInput
          ref={inputRef}
          style={style}
          value={value}
          onChangeText={(value) => setValue(value)}
          onSubmitEditing={stopEditting}
          onFocus={() => setEditMode(true)}
          onBlur={() => stopEditting()}
          maxLength={25}
        />

        {editMode && (
          <DeleteIcon
            onPress={onDelete}
            color={colors.WHITE}
            size={22}
            style={styles.deleteIcon}
          />
        )}
      </View>
    </ListItemContainer>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    textAlign: "center",
  },
  container: {
    flexDirection: "row",
    width: "100%",
  },
  deleteIcon: {
    padding: 0,
    margin: 0,
    position: "absolute",
    right: 0,
  },
});

export default EditableListItem;
