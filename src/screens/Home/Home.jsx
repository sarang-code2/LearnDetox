import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '../../components';

const Home = ({ navigation, route }) => {
    const { user } = route.params; // receiving user from login

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 18, marginBottom: 20 }}>
                Welcome {user.name}!
            </Text>
            <Button
                onPress={() => navigation.navigate('Profile', { user })}
                style={{ padding: 10, backgroundColor: 'blue' }}>
                <Text style={{ color: '#fff' }}>Go to Profile</Text>
            </Button>
        </View>
    );
};

export default Home;
