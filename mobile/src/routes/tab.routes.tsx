import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import Search from '../pages/Search';
import Posts from '../pages/PostsPage';
import TabBar from '../components/TabBar';

const Tab = createBottomTabNavigator();

const TabRoutes: React.FC = () => (
  <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Search" component={Search} />
    <Tab.Screen name="Posts" component={Posts} />
  </Tab.Navigator>
);

export default TabRoutes;
