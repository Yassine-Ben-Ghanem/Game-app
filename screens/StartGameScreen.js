import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import Card from "../components/ui/Card";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import InstructionText from "../components/ui/InstructionText";

export default function StartGameScreen({ onPickNumber }) {
  const [enterednumber, setEnterednumber] = useState("");

  const { height, width } = useWindowDimensions();

  const numberInputHandler = (text) => {
    setEnterednumber(text);
  };

  const resetInputHandler = () => {
    setEnterednumber("");
  };

  const confirmInputHandler = () => {
    const chooseNumber = parseInt(enterednumber);
    if (isNaN(chooseNumber) || chooseNumber < 1 || chooseNumber > 99) {
      Alert.alert(
        "Invalid number",
        "Number has to be a number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    onPickNumber(chooseNumber);
  };

  const marginTopDistance = height < 380 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootScreen, { marginTop: marginTopDistance }]}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText>Enter a Number</InstructionText>
            <TextInput
              style={styles.NumberInput}
              maxLength={2}
              keyboardType="numeric"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={numberInputHandler}
              value={enterednumber}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={() => setEnterednumber("")}>
                  Reset
                </PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootScreen: {
    flex: 1,
    alignItems: "center",
  },
  NumberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
