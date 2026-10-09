import { lugaresService } from '@/services/lugares';
import { Lugar } from '@/tipos/lugar';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';

export default function LugaresTab() {
  const [lugares, setLugares] = useState<Lugar[]>([]);
  const [cargando, setCargando] = useState<boolean>(true);

  useEffect(() => {
    async function cargar() {
      try {
        const data = await lugaresService.getLugares();
        setLugares(data);
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
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={lugares}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.nombre}</Text>
            <Text>{item.descripcionCorta}</Text>
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