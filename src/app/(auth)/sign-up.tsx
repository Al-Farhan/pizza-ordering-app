import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Link, Stack } from "expo-router";
import Button from "@/src/components/Button";
import Colors from "@/src/constants/Colors";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    console.warn("Clicking sign up");
  };
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Sign up" }} />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="jon@gmail.com"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button text="Sign up" onPress={onLogin} />

      <Link href={"/(auth)/sign-in"} style={styles.textButton}>
        <Text>Already have account, Sign In</Text>
      </Link>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  label: {
    color: "gray",
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "gray",
    marginTop: 5,
    marginBottom: 20,
  },
  textButton: {
    alignSelf: "center",
    color: Colors.light.tint,
    fontWeight: "bold",
    marginVertical: 10,
  },
});
