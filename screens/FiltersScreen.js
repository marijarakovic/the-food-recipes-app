import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { Switch } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { setFilters } from '../store/actions/meals';

import Colors from '../constants/Colors';

const FilterSwitch = props => {
    return (
        <View style={styles.filterContainer}>
            <Text>{props.label}</Text>
            <Switch
                value={props.state}
                onValueChange={props.onChange}
                color={Colors.primaryColor} />
        </View>
    );
};

const FiltersScreen = props => {

    const { navigation } = props;

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isForVegan, setIsForVegan] = useState(false);
    const [isForVegeterian, setIsForVegeterian] = useState(false);

    const dispatch = useDispatch();

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isForVegan,
            vegeterian: isForVegeterian
        };
        dispatch(setFilters(appliedFilters));
    }, [isGlutenFree, isLactoseFree, isForVegeterian, isForVegan, dispatch]);

    useEffect(() => {
        navigation.setParams({
            save: saveFilters
        });
    }, [saveFilters]);

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Raspoloživi filteri</Text>
            <FilterSwitch
                label='Bez glutena'
                state={isGlutenFree}
                onChange={newValue => setIsGlutenFree(newValue)} />
            <FilterSwitch
                label='Bez laktoze'
                state={isLactoseFree}
                onChange={newValue => setIsLactoseFree(newValue)} />
            <FilterSwitch
                label='Za vegane'
                state={isForVegan}
                onChange={newValue => setIsForVegan(newValue)} />
            <FilterSwitch
                label='Za vegeterijance'
                state={isForVegeterian}
                onChange={newValue => setIsForVegeterian(newValue)} />
        </View>
    );
};

FiltersScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Filteri',
        headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                title="Menu"
                iconName='menu'
                onPress={() => { navData.navigation.toggleDrawer(); }} />
        </HeaderButtons>,
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                title="Save"
                iconName='save'
                onPress={() => {
                    navData.navigation.getParam('save')();
                }} />
        </HeaderButtons>
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'roboto-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 15
    }
});

export default FiltersScreen;