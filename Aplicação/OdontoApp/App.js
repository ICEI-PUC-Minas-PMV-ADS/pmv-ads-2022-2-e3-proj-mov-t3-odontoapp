import { NavigationContainer } from '@react-navigation/native';
import Rotas from './components/Rotas'
import { SafeAreaView, StatusBar } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: '#199AE2',
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }}>
      <NavigationContainer>
        <Rotas />
      </NavigationContainer>
    </SafeAreaView>
  );
}

