import * as React from "react";
import {
  TouchableOpacity,
} from "react-native";

import { Icon } from "../";
import { iconButtonStyles } from "./styles";

type ButtonStyle =
  | "transparent"
  | "solidblue"
  | "soliddark";

interface IconButtonProps {
  iconName: string;
  iconSize?: number;
  handleOnPress?: () => void;
  size: number;
  selected?: boolean;
  selectedImage?: string;
  style?: ButtonStyle;
}

class IconButton extends React.Component<IconButtonProps> {
  public static defaultProps = {
    selected: false,
    style: "solidblue",
  };

  public render() {
    const {
      iconName,
      iconSize,
      handleOnPress,
      size,
      selected,
      selectedImage,
      style,
    } = this.props;
    const buttonSize = { width: size, height: size };
    const buttonStyle = style && iconButtonStyles[`${style.toLowerCase()}ButtonStyle`];
    const selectedCondition =
      (selected && selectedImage)
        ? selectedImage
        : iconName;

    return (
      <TouchableOpacity
        style={[iconButtonStyles.buttonContainer, buttonSize, buttonStyle]}
        onPress={() => handleOnPress && handleOnPress()}>
        <Icon size={iconSize ? iconSize : (size / 2)} name={selectedCondition} />
      </TouchableOpacity>
    );
  }
}

export default IconButton;
