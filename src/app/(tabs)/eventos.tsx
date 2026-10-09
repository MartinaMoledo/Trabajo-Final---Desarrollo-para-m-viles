import { eventosService } from '@/services/eventos';
import { Evento } from '@/tipos/evento';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, BackHandler, FlatList, StyleSheet, Text, View } from 'react-native';

export default function EventosTab() {
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [cargando, setCargando] = useState<boolean>(true);

  useEffect(() => {
    const backAction = () => {
      router.replace('/');
      return true; 
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, []);

  useEffect(() => {
    async function cargar() {
      try {
        const data = await eventosService.getEventos();
        setEventos(data);
      } catch (error) {
        console.error(error);
      } finally {
        setCargando(false);
      }
    }
    cargar();
  }, []);

  if (cargando) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#33581d" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={eventos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.nombre}</Text>
            <Text>{item.descripcion}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#ecd87e' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  card: { backgroundColor: '#e4eee4', padding: 16, marginBottom: 12, borderRadius: 8, elevation: 2 },
  title: { fontSize: 18, fontWeight: 'bold' }
});