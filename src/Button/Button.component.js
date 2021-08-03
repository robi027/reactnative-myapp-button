//flow
import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import type { Props } from "./Button.type";
import style from "./Button.style";

const Button = (props: Props): React.Node => {
  return (
    <TouchableOpacity style={style.button} onPress={props.onPress}>
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
