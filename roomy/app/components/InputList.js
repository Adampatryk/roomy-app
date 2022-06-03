import { StyleSheet, View } from "react-native";
import { PlusButton } from "./buttons";
import { ListItem } from "./lists";

const InputList = ({
  data,
  onNewItemPressed,
  renderItem,
  canAddNewItem = true,
}) => {
  return (
    <View style={styles.container}>
      {data.map((item) => renderItem(item))}
      {canAddNewItem && <PlusButton onPressed={onNewItemPressed} />}
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
