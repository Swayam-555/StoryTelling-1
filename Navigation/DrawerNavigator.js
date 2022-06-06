import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import BottomTabNavigator from '../Navigation/BottomTabNavigator'
import Profile from '../screens/profile'
const Drawer = createDrawerNavigator()
export default class DrawerNavigator extends React.Component {
    render() {
        return (
            <Drawer.Navigator >
                <Drawer.Screen name='Home' component={BottomTabNavigator} />
                <Drawer.Screen name='Profile' component={Profile} />

            </Drawer.Navigator>
        )
    }
}