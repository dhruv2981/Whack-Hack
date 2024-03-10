import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash, Loading, Register, WorkInfo, Login, FarmerDashboard , DealerDashboard} from './pages';

const Stack = createNativeStackNavigator();


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgba(18, 129, 0, 1)',
    secondary: 'yellow',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen name="fdashboard" component={FarmerDashboard} />
          <Stack.Screen name="loading" component={Loading} />
          <Stack.Screen name="ddashboard" component={DealerDashboard} />
          <Stack.Screen name="register" component={Register} />
          <Stack.Screen name="switch" component={Splash} />
          <Stack.Screen name="workinfo" component={WorkInfo} />
          <Stack.Screen name="login" component={Login} />
  
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}


