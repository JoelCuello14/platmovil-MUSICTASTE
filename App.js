import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, ImageBackground } from 'react-native';
import ButtonView from './formComponents/ButtonView/ButtonView';
import InputView from './formComponents/InputView/InputView';

export function LoginView() {
  return (
    <ImageBackground
      source={require('./assets/HONDAS.png')} // Cambia a la ruta de tu imagen
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.container1}>Correo Electrónico</Text>
        <InputView />
        <Text style={styles.container1}>Contraseña</Text>
        <InputView />
        <ButtonView />
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    height: 300,
  },
  container: {
    flex: 1, // Fondo semitransparente para mejor legibilidad
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  container1: {
    color: 'white',
    textAlign: 'left',
    marginVertical: 10,

  },
});

export default LoginView;
