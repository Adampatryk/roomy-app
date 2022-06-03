import { StyleSheet, Text, View } from "react-native";
import colors from "../../config/colors";
import ListItemContainer from "./ListItemContainer";
import styles from "./styles";

const ListItem = ({ title, subtitle, onPress }) => {
  return (
    <ListItemContainer onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </ListItemContainer>
  );
};

export default ListItem;
