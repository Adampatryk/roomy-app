import { TouchableOpacity, View } from "react-native";
import styles from "./styles";

const ListItemContainer = ({ children, onPress, onBlur }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      onBlur={onBlur}
      style={styles.container}
    >
      {children}
    </TouchableOpacity>
  );
};

export default ListItemContainer;
