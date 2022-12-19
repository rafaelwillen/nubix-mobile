import 'react-native-gesture-handler';

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  useFonts,
} from '@expo-google-fonts/poppins';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { RootStackParamListType } from './src/constants/routes';
import theme from './src/utils/theme';
import {
  Home,
  Pay,
  ReceiveMoney,
  ScannerQR,
  Transfer,
  TransferValue,
} from './src/views';

const Stack = createNativeStackNavigator<RootStackParamListType>();

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NativeBaseProvider theme={theme}>
      <BottomSheetModalProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="home"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen name="home" component={Home} />
              <Stack.Screen name="transfer" component={Transfer} />
              <Stack.Screen name="transferValue" component={TransferValue} />
              <Stack.Screen name="pay" component={Pay} />
              <Stack.Screen name="scannerQr" component={ScannerQR} />
              <Stack.Screen name="receive" component={ReceiveMoney} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </BottomSheetModalProvider>
    </NativeBaseProvider>
  );
}
