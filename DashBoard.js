import React from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

const parkingData = [
  {
    id: 1,
    name: 'ParkWay Solutions',
    logo: 'https://via.placeholder.com/50?text=P',
    address: '58 Mangga Street, Barangay Tandang Sora, Quezon City, Metro Manila, 1116',
    description: 'Gravel Parking Lot',
    slots: 27,
  },
  {
    id: 2,
    name: 'PrimePark Management',
    logo: 'https://via.placeholder.com/50?text=P',
    address: '21-A Dahlia Avenue, Barangay Fairview, Quezon City, Metro Manila, 1121',
    description: 'Dirt Parking Lot',
    slots: 35,
  },
];

export default function Dashboard({navigation}) {
  return (
    <View style={styles.container}>
      {/* Fixed Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search your city/municipality"
          placeholderTextColor="#888"
        />
      </View>

      {/* Listings */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {parkingData.map((lot) => (
          <View key={lot.id} style={styles.card}>
            <View style={styles.logoAndDetails}>
              <Image source={{ uri: lot.logo }} style={styles.logo} />
              <View style={styles.details}>
                <Text style={styles.companyName}>{lot.name}</Text>
                <Text style={styles.address}>{lot.address}</Text>
                <Text style={styles.description}>
                  <Text style={styles.label}>Description:</Text> {lot.description}
                </Text>
                <Text style={styles.slots}>
                  <Text style={styles.greenText}>{lot.slots}</Text> Available space
                </Text>
              </View>
            </View>

            <View style={styles.separator} />

            <TouchableOpacity
              style={styles.parkButton}
              onPress={() => navigation.navigate('ParkingDetails')}
            >
             <Text style={styles.parkButtonText}>Park Here</Text>
            </TouchableOpacity>

          </View>
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton}>
          <MaterialIcons name="dashboard" size={24} color="black" />
          <Text style={styles.navLabel}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <MaterialIcons name="directions-car" size={24} color="black" />
          <Text style={styles.navLabel}>Rentals</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <FontAwesome name="user" size={24} color="black" />
          <Text style={styles.navLabel}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    padding: 15,
    backgroundColor: '#fff',
  },
  searchBar: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 20,
    paddingHorizontal: 20,
    height: 40,
    fontSize: 14,
    marginTop: '25',
  },
  scrollContainer: {
    paddingHorizontal: 15,
    paddingBottom: 100,
  },
  card: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    marginBottom: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  logoAndDetails: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 15,
    borderRadius: 10,
  },
  details: {
    flex: 1,
    justifyContent: 'center',
  },
  companyName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 2,
  },
  address: {
    fontSize: 13,
    marginBottom: 4,
  },
  description: {
    fontSize: 13,
    marginBottom: 4,
  },
  label: {
    fontWeight: 'bold',
  },
  slots: {
    fontSize: 13,
  },
  greenText: {
    color: 'green',
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    backgroundColor: '#000',
    marginVertical: 10,
  },
  parkButton: {
    backgroundColor: '#000',
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
  parkButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    paddingVertical: 10,
    justifyContent: 'space-around',
  },
  navButton: {
    alignItems: 'center',
  },
  navLabel: {
    fontSize: 12,
    marginTop: 3,
    fontFamily:'Inter-Medium',
  },
});
