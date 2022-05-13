import { StyleSheet, View } from "react-native";
import ListItem from "./ListItem";
import PlusButton from "./PlusButton";

const InputList = ({ data, displayNameField, keyField, onNewItemPressed }) => {
  return (
    <View style={styles.container}>
      {data.map((item) => (
        <ListItem key={item[keyField]} title={item[displayNameField]} />
      ))}
      <PlusButton onPressed={onNewItemPressed} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
});
export default InputList;
