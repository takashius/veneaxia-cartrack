import { Block } from "galio-framework";
import React, { useState } from "react";
import { Image, StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("screen");
const ratio = (width * 0.8) / 375;
const MenuLogo = require("../../../assets/logo.png");
import { Button, Text, TextInput } from "react-native-paper";
import Theme from "../../constants/Theme";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [secureText, setSecureText] = useState(true);

  return (
    <Block flex style={styles.content}>
      <Block style={styles.imageBackgroundContainer}>
        <Image source={MenuLogo}></Image>
      </Block>
      <Block style={{ paddingHorizontal: 40, marginTop: 80 }}>
        <TextInput
          label="Email Address"
          value={username}
          onChangeText={setUsername}
          theme={Theme.paperTheme}
          style={styles.input}
          underlineColor={Theme.COLORS.INPUT}
          right={
            <TextInput.Icon
              icon={"email-outline"}
              color={Theme.COLORS.GENESIS.CLARO}
            />
          }
        />

        <TextInput
          label="Password"
          secureTextEntry={secureText}
          value={password}
          onChangeText={setPassword}
          theme={Theme.paperTheme}
          style={styles.input}
          underlineColor={Theme.COLORS.INPUT}
          right={
            <TextInput.Icon
              icon={secureText ? "eye" : "eye-off"}
              onPress={() => setSecureText(!secureText)}
              color={Theme.COLORS.GENESIS.CLARO}
            />
          }
        />

        <Block right>
          <Text style={{ color: Theme.COLORS.GENESIS.BOLD }}>
            Forgot Password?
          </Text>
        </Block>

        <Button
          mode="contained"
          style={styles.createButton}
          buttonColor={Theme.COLORS.GENESIS.BACKGROUND}
          onPress={() => console.log("Pressed")}
        >
          SIGN IN
        </Button>

        <Block
          row
          space="around"
          style={{ marginTop: 60, marginHorizontal: 20 }}
        >
          <Button
            icon="google"
            labelStyle={{
              fontSize: 40,
              color: Theme.COLORS.GENESIS.BOLD,
            }}
          ></Button>
          <Button
            icon="facebook"
            labelStyle={{
              fontSize: 40,
              color: Theme.COLORS.GENESIS.BOLD,
            }}
          ></Button>
          <Button
            icon="apple"
            labelStyle={{
              fontSize: 40,
              color: Theme.COLORS.GENESIS.BOLD,
            }}
          ></Button>
        </Block>
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: Theme.COLORS.WHITE,
  },
  imageBackgroundContainer: {
    width: width,
    height: "25%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: width * 0.8,
    height: 100 * ratio,
    resizeMode: "cover",
  },
  input: {
    fontSize: 14,
    backgroundColor: Theme.COLORS.WHITE,
    height: 50,
    marginBottom: 10,
  },
  createButton: {
    marginTop: 50,
    borderRadius: 10,
    paddingVertical: 8,
  },
});

export default Login;
