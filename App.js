import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import ViaCep from './component/ViaCep';

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text style={styles.txt_titulo}>Consulta de CEP</Text>
        <ViaCep />
        <StatusBar style="light" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4a2c6d', // Mudança de cor de fundo
    alignItems: 'center',
    justifyContent: 'flex-start', // Alinhamento para o topo
    padding: 20, // Adiciona um pouco de espaço ao redor
  },
  txt_titulo: {
    color: '#ffffff', // Cor do texto do título
    fontSize: 24, // Tamanho da fonte
    fontWeight: 'bold', // Negrito
    marginBottom: 20, // Espaço abaixo do título
  },
});
