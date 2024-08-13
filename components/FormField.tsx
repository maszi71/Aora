import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { icons } from "@/constants";

//secureTextEntry : prevent to show password
const FormField = (props: any) => {
  const { title, otherStyle, placeholder, value, handleChangeText } = props;
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`${otherStyle} space-y-2`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View className="flex-row border-2 rounded-2xl border-black-200 w-full h-16 px-4 bg-black-100 focus:border-secondary items-center">
        <TextInput
          className="flex-1 w-100 text-white font-psemibold text-base"
          value={value}
          placeholderTextColor="#7b7b8b"
          placeholder={placeholder}
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              className="w-6 h-6"
              source={!showPassword ? icons.eye : icons.eyeHide}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
