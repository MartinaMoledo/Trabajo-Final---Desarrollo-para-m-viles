import { Tabs, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs 
      screenOptions={{ 
        tabBarActiveTintColor: '#33581d',
        headerLeft: () => (
          <TouchableOpacity 
            onPress={() => router.replace('/')} 
            style={{ marginLeft: 16 }}
          >
            <Ionicons name="arrow-back" size={24} color="#33581d" />
          </TouchableOpacity>
        ),
      }}
    >
      <Tabs.Screen
        name="lugares"
        options={{
          title: 'Lugares',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="location-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="eventos"
        options={{
          title: 'Eventos',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}