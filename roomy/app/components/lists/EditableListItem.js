import { useIsFocused, useNavigation } from "@react-navigation/native";
import React, { useRef, useState } from "react";
import { Button, Keyboard, StyleSheet, Text, TextInput } from "react-native";
import colors from "../../config/colors";
import DeleteIcon from "../DeleteIcon";
import AppTextInput from "../AppTextInput";
import { AppButton } from "../buttons";
import ListItemContainer from "./ListItemContainer";
import globalStyles from "./styles";

const EditableListItem = ({ title, saveTitle, onDelete }) => {
  const [value, setValue] = useState(title);
  const inputRef = useRef();

  const style = {
    ...globalStyles.title,
  };

  return (
    <ListItemContainer
      onPress={() => {
        inputRef.current.focus();
      }}
    >
      <TextInput
        ref={inputRef}
        style={style}
        value={value}
        onChangeText={(value) => setValue(value)}
        onSubmitEditing={() => saveTitle(value)}
      />

      <DeleteIcon onPress={onDelete} color={colors.WHITE} />
    </ListItemContainer>
  );
};

const styles = StyleSheet.create({
  input: {
    color: colors.SECONDARY,
  },
});

export default EditableListItem;
