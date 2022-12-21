import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import * as Font from "expo-font";
// import AppLoading from "expo-app-loading";
import { AppLoading } from "expo";

const initialState = {
  login: "",
  email: "",
  password: "",
};

const loadApplication = async () => {
  await Font.loadAsync({
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    // "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
  });
};
export default function App() {
  const [state, setState] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [iasReady, setIasReady] = useState(false);

  const keyboardHide = () => {
    setIsShowKeyboard(true);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  // if (!iasReady) {
  //   return (
  //     <AppLoading
  //       startAsync={loadApplication}
  //       onFinish={() => setIasReady(true)}
  //       onError={console.warn}
  //     />
  //   );
  // }
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <ImageBackground
          style={styles.image}
          source={require("./assets/Photo BG.jpg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View style={styles.form}>
              <View>
                <Text style={styles.text}>Регистрация</Text>
              </View>
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Логин"
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.login}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, login: value }))
                  }
                />
              </View>
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Адрес электронной почты"
                  value={state.email}
                  onFocus={() => setIsShowKeyboard(true)}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                />
              </View>
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Пароль"
                  secureTextEntry={true}
                  value={state.password}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, password: value }))
                  }
                  onFocus={() => setIsShowKeyboard(true)}
                />
              </View>

              <TouchableOpacity style={styles.btn} onPress={keyboardHide}>
                <Text style={styles.btnTitle}>Зарегистрироваться</Text>
              </TouchableOpacity>
              <Text style={styles.go}> Уже есть аккаунт? Войти </Text>
            </View>
          </KeyboardAvoidingView>

          <StatusBar style="auto" />
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },

  text: {
    fontSize: 30,
    // fontFamily: "Roboto-Medium",
  },
  form: {
    flex: 1,
    marginHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF6C00",
    padding: 16,
    borderRadius: 100,
    marginTop: 43,
  },

  btnTitle: {
    fontSize: 16,
    color: "#FFFFFF",
  },
  input: {
    color: "#BDBDBD",
    marginTop: 16,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    borderWidth: 1,
    height: 40,
    width: 343,
    fontSize: 16,
    // fontFamily: "Roboto-Light",
  },

  go: {
    fontSize: 16,
    color: "#1B4371",
  },
});
