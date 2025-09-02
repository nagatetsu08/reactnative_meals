import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useLayoutEffect } from 'react';

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import SubTitle from "../components/MealDetail/SubTitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";

function MealDetailScreen({route, navigation}) {

    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    function headerButtonPressHandler() {
        console.log("Pressed!");
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton
                        icon="star"
                        onPress={headerButtonPressHandler}
                        color="white"
                    />
                );
            }
        });
    }, [navigation, headerButtonPressHandler])

    return (
        <ScrollView style={styles.rootContainer}>
            <Image
                source={{ uri: selectedMeal.imageUrl }} 
                style={styles.image}
            />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails 
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={styles.detailText}
            />
            {/* 
                外側の枠に親と同じ幅を与えて、中のコンテナでその範囲内で自由に調整できるようにしている。 
                画面内に幾つかのブロックを分けて実装するとき一番の大枠、それぞれのブロックのOuter、それぞれのブロックのInnerとあるといじりやすい
                また後から追加する時もOuterで囲ってあげれば既存のスタイルをいじらなくてもいい
            */}
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <SubTitle>Ingredients</SubTitle>
                    <List
                        data={selectedMeal.ingredients}
                    />
                    <SubTitle>Steps</SubTitle>
                    <List
                        data={selectedMeal.steps}
                    />
                </View>
            </View>
        </ScrollView>
    );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 24,
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white',
    },
    detailText: {
        color: 'white',
    },
    listOuterContainer: {
        alignItems: 'center',
    },
    listContainer: {
        width: '80%',

    }
});