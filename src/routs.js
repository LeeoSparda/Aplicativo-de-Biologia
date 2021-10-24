import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthContext from './context';

import HomeScreen from './Home';
import Login from './Login'
import StoreScreen from './store';



export default function Routes({ navigation }) {

    const Statenavigator = createNativeStackNavigator();



    React.useEffect(() => {
        const bootstrapAsync = async () => {
            let userToken;
            try {
                userToken = 'fdsafsadfsadf';
            } catch (e) {

            }
            dispatch({ type: 'RESTORE_TOKEN', token: userToken });
        };

        bootstrapAsync();
    }, []);


    const [state, dispatch] = React.useReducer(
        (prevState, action) => {
            switch (action.type) {
                case 'RESTORE_TOKEN':
                    return {
                        ...prevState,
                        userToken: action.token,
                        isLoading: false,
                    };
                case 'SIGN_IN':
                    return {
                        ...prevState,
                        isSignout: false,
                        userToken: action.token,
                    };
                case 'SIGN_OUT':
                    return {
                        ...prevState,
                        isSignout: true,
                        userToken: null,
                    };
            }
        },
        {
            isLoading: true,
            isSignout: false,
            userToken: null,
        }
    );
    const authContext = React.useMemo(
        () => ({
            signIn: async data => {
                const { token } = data;
                dispatch({ type: 'SIGN_IN', token: token });
            },
            signOut: () => dispatch({ type: 'SIGN_OUT' }),
            signUp: async data => {
                dispatch({ type: 'SIGN_IN', token: data.token });
            },
        }),
        []
    );

    return (
        <AuthContext.Provider value={authContext}>
            <Statenavigator.Navigator >
                {state.userToken == null ? (
                    <Statenavigator.Screen
                        name="Login"
                        component={Login}
                        options={{ headerShown: false }}
                    />
                ) : (
                    <>
                        <Statenavigator.Screen
                            name='Home'
                            component={HomeScreen}
                        />
                        <Statenavigator.Screen
                            name='Store'
                            component={StoreScreen}
                        />
                    </>

                )
                }
            </Statenavigator.Navigator>
        </AuthContext.Provider>
    )
}