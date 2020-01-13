import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Platform } from 'react-native';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import React from 'react';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import MealDetailsScreen from '../screens/MealDetailScreen';
import FiltersScreen from '../screens/FiltersScreen';

import Colors from '../constants/Colors';
import { createDrawerNavigator } from 'react-navigation-drawer';

const defaultStackNavigationOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTitleStyle: {
        fontFamily: 'roboto-bold'
    },
    headerBackTitleStyle: {
        fontFamily: 'roboto'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
};

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen
    },
    CategoryMeals: {
        screen: CategoryMealsScreen
    },
    MealDetail: MealDetailsScreen
}, {
    defaultNavigationOptions: defaultStackNavigationOptions
}
);


const FavNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailsScreen
}, {
    defaultNavigationOptions: defaultStackNavigationOptions
});

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarLabel: 'Hrana',
            tabBarIcon: (tabInfo) => {
                return <MaterialIcons name={'restaurant'} size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.primaryColor
        }
    },
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarLabel: 'Omiljeno',
            tabBarIcon: (tabInfo) => {
                return <MaterialIcons name='favorite' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.accentColor
        }
    }
};

const MealsFavTabNavigator = Platform.OS === 'android' ?
    createMaterialBottomTabNavigator(
        tabScreenConfig, {
        activeTintColor: 'white',
        shifting: true
    }
    )
    : createBottomTabNavigator(
        tabScreenConfig, {
        tabBarOptions: {
            labelStyle: {
                fontFamily: 'roboto'
            },
            activeTintColor: Colors.accentColor
        }
    });

const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen
}, {
    defaultNavigationOptions: defaultStackNavigationOptions
});

const MainNavigator = createDrawerNavigator({
    MealsFavs: {
        screen: MealsFavTabNavigator,
        navigationOptions: {
            drawerLabel: 'Omiljena hrana'
        }
    },
    Filters: {
        screen: FiltersNavigator,
        navigationOptions: {
            drawerLabel: 'Filteri'
        }
    }
}, {
    contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
            fontFamily: 'roboto'
        }
    }
});

export default createAppContainer(MainNavigator);