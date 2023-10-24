import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/home";
import { Passwords } from "../screens/passwords";

import {Ionicons} from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export const Routes = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={() => ({
            tabBarShowLabel:false,
            headerShown: false,
            tabBarIcon: ({ focused, size, color }) => {
              // Use um operador ternário para escolher o ícone com base no foco.
              return focused ? (
                <Ionicons size={size} color={color} name="home" />
              ) : (
                <Ionicons size={size} color={color} name="home-outline" />
              );
            },
          })}
        />
  
        <Tab.Screen
          name="Passwords"
          component={Passwords}
          options={{
            tabBarShowLabel:false,
            headerShown: false,
            tabBarIcon: ({ focused, size, color }) => {
                // Use um operador ternário para escolher o ícone com base no foco.
                return focused ? (
                  <Ionicons size={size} color={color} name="lock-closed" />
                ) : (
                  <Ionicons size={size} color={color} name="lock-closed-outline" />
                );
              },
          }}
        />
      </Tab.Navigator>
    );
  };