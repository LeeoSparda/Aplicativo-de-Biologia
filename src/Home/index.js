import React from 'react'
import {View, Text} from 'react-native'
import {Button} from 'react-native-paper'


export default function HomeScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button style={{marginTop: 10}} 

                mode="outolined" 
                onPress={() => navigation.navigate('Store')}>
                    Login
                </Button>
      </View>
    );
  }