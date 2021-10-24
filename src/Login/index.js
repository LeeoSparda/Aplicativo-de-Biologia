import * as React from 'react';

import { View, Text } from 'react-native';
import { TextInput, Card, Button } from 'react-native-paper';
import { useState } from 'react';

import AuthContext from '../context';

export default function Login() {

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');


    const {signIn} = React.useContext(AuthContext);

    async function logar(textEmail, textPassword){
        console.log(textPassword)
           await signIn({token: 'TOKEN_VALIDO'}) 
        
    }


    return (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
            <Card style={{ padding: 10, margin: 10 }}>
                <Text style={{textAlign:'center'}}>Login </Text>
                <TextInput
                    mode='outlined'
                    label="Email"
                    value={email}
                    onChangeText={setEmail}
                    style={{marginTop: 10}}
                />
                <TextInput
                    mode='outlined'
                    label="Password"
                    value={password}
                    onChangeText={setPassword}
                    style={{marginTop: 10}}
                />

                <Button style={{marginTop: 10}} 
 
                mode="contained" 
                onPress={() => logar(email, password)}>
                    Login
                </Button>
            </Card>
        </View>
    )
}