import { TouchableOpacity, View } from "react-native";
import colors from "../../config/colors";
import styles from "./styles";

const ListItemContainer = ({
  children,
  onPress,
  onBlur,
  backgroundColor = colors.PRIMARY,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      onBlur={onBlur}
      style={{ ...styles.container, backgroundColor: backgroundColor }}
    >
      {children}
    </TouchableOpacity>
  );
};

export default ListItemContainer;
