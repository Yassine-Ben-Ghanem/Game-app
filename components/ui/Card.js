import { View, StyleSheet, Dimensions } from "react-native";
import colors from "../../constants/colors";

export default function Card({ children }) {
  return <View style={styles.InputContaner}>{children}</View>;
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  InputContaner: {
    alignItems: "center",
    marginTop: deviceWidth < 380 ? 18 : 16,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: colors.primary800,
    borderRadius: 8,
    elevation: 8,
    shadowColor: "black",
    shadowOffset: { height: 2, width: 0 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
