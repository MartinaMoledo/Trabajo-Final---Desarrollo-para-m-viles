import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { Assets } from 'expo-router/build/react-navigation';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
  source={require('../../assets/images/palmar.png')} 
  style={styles.headerImage} 
  resizeMode="cover"
/>

        <Text style={styles.title}>Guía Turística</Text>
        <Text style={styles.subtitle}>Descubrí los mejores lugares y eventos imperdibles.</Text>
      </View>

    
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => router.push('/(tabs)/lugares')}
        >
          <Ionicons name="location" size={24} color="#ffffff" style={styles.icon} />
          <Text style={styles.buttonText}>Explorar lugares</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.buttonSecondary]} 
          onPress={() => router.push('/(tabs)/eventos')}
        >
          <Ionicons name="calendar" size={24} color="#fffffe" style={styles.icon} />
          <Text style={[styles.buttonText, styles.buttonTextSecondary]}>Ver eventos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#ecd87e', 
    justifyContent: 'space-between', 
    padding: 24, 
    paddingTop: 60, 
    paddingBottom: 60 
  },
  header: { 
    alignItems: 'center', 
    marginTop: 40 
  },
  headerImage: {
    width: '100%', 
    height: 200, 
    borderRadius: 16, 
    marginBottom: 24, 
  },
  
  title: { 
    fontSize: 40, 
    fontWeight: 'bold', 
    color: '#1a1a1a', 
    marginTop: 16, 
    textAlign: 'center' 
  },
  subtitle: { 
    fontSize: 16, 
    color: '#666', 
    textAlign: 'center', 
    marginTop: 8, 
    paddingHorizontal: 20 
  },
  buttonContainer: { 
    width: '100%', 
    gap: 16 
  },
  button: { 
    backgroundColor: "#33581d", 
    flexDirection: 'row', 
    height: 56, 
    borderRadius: 14, 
    justifyContent: 'center', 
    alignItems: 'center',
    shadowOpacity: 0.1, 
    shadowRadius: 4, 
    elevation: 3 
  },
  buttonSecondary: { 
    backgroundColor: '#33581d', 
    borderWidth: 1, 
    borderColor: '#d1c1ae' 
  },
  buttonText: { 
    color: '#fff', 
    fontSize: 18, 
    fontWeight: '600' 
  },
  buttonTextSecondary: { 
    color: '#fff4e8' 
  },
  icon: { 
    marginRight: 8 
  }
});