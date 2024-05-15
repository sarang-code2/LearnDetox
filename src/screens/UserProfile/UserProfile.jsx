import React from 'react';
import {useSelector} from 'react-redux';
import {View, Text, Image} from 'react-native';
import {styles} from './UserProfileStyle';

const UserProfile = () => {
  const {user} = useSelector(state => state.auth) || {};
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.userImage}
          source={{
            uri: user?.picture || 'https://via.placeholder.com/150',
          }}
        />
        <View>
          <Text style={styles.name}>ID: {user?.user_id}</Text>
          <Text style={styles.name}>{user?.name}</Text>
          <Text style={styles.email}>{user?.email}</Text>
        </View>
      </View>
    </View>
  );
};

export default UserProfile;
