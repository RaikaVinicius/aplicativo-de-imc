import { StyleSheet, Text, View } from 'react-native';
import Title from './SRC/Components/Title';
import Form from './SRC/Components/Main';

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
     <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b263b',
    paddingTop: 80,
  },
});
