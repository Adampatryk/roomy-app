import { StyleSheet, Text, View } from "react-native";
import colors from "../../config/colors";
import ListItemContainer from "./ListItemContainer";
import styles from "./styles";

const ListItem = ({ title, onPress, backgroundColor }) => {
  return (
    <ListItemContainer onPress={onPress} backgroundColor={backgroundColor}>
      <Text style={styles.title}>{title}</Text>
    </ListItemContainer>
  );
};

export default ListItem;
