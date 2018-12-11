import * as React from "react";
import {
  Image,
} from "react-native";

interface IconProps {
  name: string;
  size: number;
}

const iconPaths = {
  PSLogoActive: () => require("../../../resources/Images/Icons/Platform.PS_active.png"),
  PSLogoDefault: () => require("../../../resources/Images/Icons/Platform.PS_default.png"),
  WindowsLogoActive: () => require("../../../resources/Images/Icons/Platform.Windows_active.png"),
  WindowsLogoDefault: () => require("../../../resources/Images/Icons/Platform.Windows_default.png"),
  XboxLogoActive: () => require("../../../resources/Images/Icons/Platform.Xbox_active.png"),
  XboxLogoDefault: () => require("../../../resources/Images/Icons/Platform.Xbox_default.png"),
};

const Icon: React.SFC<IconProps> = ({ name, size }) => {
  return (
    <Image
      style={{ width: size, height: size }}
      resizeMode="contain"
      source={iconPaths[name]()}
    />
  );
};

Icon.defaultProps = {
  size: 24,
};

export default Icon;
