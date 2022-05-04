import { View, Text, Pressable, StyleSheet } from "react-native";
import colors from "../../constants/colors";

export default function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.ButtonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.ButtonInnerContainer, styles.pressed]
            : styles.ButtonInnerContainer
        }
        onPress={onPress}
      >
        <Text style={styles.TextButton}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  ButtonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  ButtonInnerContainer: {
    backgroundColor: colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 8,
    shadowColor: "black",
    shadowOffset: { height: 2, width: 0 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  TextButton: {
    color: "#fff",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
