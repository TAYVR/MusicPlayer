import AudioProvieder from "./app/context/audioProvieder";
import AppNavigator from "./app/navigation/appNavigator";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <AudioProvieder>

      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AudioProvieder>
  );
}


