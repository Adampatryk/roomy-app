import { MaterialIcons } from "@expo/vector-icons";
import colors from "../config/colors";

const DeleteIcon = ({ size = 28, color = colors.BLACK, onPress, style }) => {
  return (
    <MaterialIcons
      style={style}
      onPress={onPress}
      name="cancel"
      size={size}
      color={color}
    />
  );
};

export default DeleteIcon;
