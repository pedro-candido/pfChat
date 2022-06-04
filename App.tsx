import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { ThemeProvider } from "styled-components/native";

import { ChatProvider } from "./src/context";
import theme from "./src/global/theme";

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <ChatProvider>
          <></>
        </ChatProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
