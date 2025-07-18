import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from '../../components';

const Profile = ({ navigation, route }) => {
  const { user } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 20 }}
        source={{ uri: user.picture }}
      />
      <Text style={{ fontSize: 18 }}>{user.name}</Text>
      <Text style={{ fontSize: 14, color: 'gray', marginBottom: 20 }}>
        {user.email}
      </Text>

      <Button
        onPress={() => navigation.replace('Login')}
        style={{ padding: 10, backgroundColor: 'red' }}>
        <Text style={{ color: '#fff' }}>Logout</Text>
      </Button>
    </View>
  );
};

export default Profile;
