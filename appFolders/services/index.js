import { NavigationContainer } from "@react-navigation/native";
import React from 'react';
import { AuthProvider } from './AuthProvider';
import Routes from '../routes/Routes';

const Providers = () => {
    return (
        <AuthProvider>
            <NavigationContainer>
                <Routes/>
            </NavigationContainer>
        </AuthProvider>
    );
}

export default Providers;