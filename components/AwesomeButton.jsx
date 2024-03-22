import { Text, TouchableOpacity, View } from "react-native";

export const AwesomeButton = ({
  title,
  color = "#000",
  backgroundColor = "#f1f1f1",
  bold = false,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          padding: 20,
          backgroundColor,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            color,
            textAlign: "center",
            fontWeight: bold ? "900" : "normal",
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
