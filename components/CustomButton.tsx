import { TouchableOpacity, Text } from "react-native";
import React from "react";

type Props = any;

// touchableOpacity is equal button 
const CustomButton = ({
  title,
  handlePress,
  containerStyle,
  textStyles,
  isLoading,
} : Props) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyle} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
