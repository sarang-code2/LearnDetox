import React from 'react';
import {useSelector} from 'react-redux';
import {View, Text, Image} from 'react-native';
import {styles} from './UserProfileStyle';

const UserProfile = () => {
  const {auth} = useSelector(state => state.auth) || {};
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.userImage}
          source={{
            uri: auth?.picture || 'https://via.placeholder.com/150',
          }}
        />
        <View>
          <Text style={styles.name}>ID: {auth?.user_id}</Text>
          <Text style={styles.name}>{auth?.name}</Text>
          <Text style={styles.email}>{auth?.email}</Text>
        </View>
      </View>
    </View>
  );
};

export default UserProfile;
