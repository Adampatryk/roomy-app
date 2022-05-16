import { StyleSheet, View } from "react-native";
import { PlusButton } from "./buttons";
import { ListItem } from "./lists";

const InputList = ({
  data,
  displayNameField,
  subtitleField,
  subtitleFunction = (subtitle) => subtitle,
  keyField,
  onNewItemPressed,
  renderItem,
}) => {
  return (
    <View style={styles.container}>
      {data.map((item) =>
        renderItem ? (
          renderItem(item)
        ) : (
          <ListItem
            key={item[keyField]}
            title={item[displayNameField]}
            subtitle={subtitleFunction(item[subtitleField])}
          />
        )
      )}
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
