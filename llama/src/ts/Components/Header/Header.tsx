import * as React from "react";
import {
  StatusBar,
  Text,
  View,
} from "react-native";

import headerStyles from "./styles";

interface HeaderProps {
  title: string;
}

const Header: React.SFC<HeaderProps> = ({ title }) => {
  return (
    <View>
      <StatusBar barStyle="light-content" />
      <Text style={headerStyles.title}>{title}</Text>
    </View>
  );
};

export default Header;
