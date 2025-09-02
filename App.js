import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoriteScreen from './screens/FavoriteScreen';

import {Ionicons} from '@expo/vector-icons'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawNavigator () {
  return (
    <Drawer.Navigator
      screenOptions={{
        sceneStyle: { backgroundColor: '#3f2f25' },
        drawerContentStyle: { backgroundColor: '#351401' },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#e4baa1',
      }}
    >
      <Drawer.Screen 
        name="Categories" 
        component={CategoriesScreen}
        options={{ 
          title: 'All Categories',
          drawerIcon: ({color, size}) => (
            <Ionicons 
              name="list"
              color={color}
              size={size}
            />
          )
        }} 
      />
      <Drawer.Screen 
        name="Favorites" 
        component={FavoriteScreen} 
        options={{ title: 'Your Favorites' }} 
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='light'/>
      <NavigationContainer >
        <Stack.Navigator 
          // 全画面共通のデフォルトスタイルを定義可能（上書きしたい場合は個々のスクリーン定義に書く）
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' }
          }}
        >
          <Stack.Screen 
            name="Drawer" 
            component={DrawNavigator} 
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen name="MealsOverview" 
            component={MealsOverviewScreen} 
            // options={({ route, navigation }) => {
            //   const categoryId = route.params.categoryId;
            //   return {
            //     title: categoryId
            //   }
            // }}
          />
          <Stack.Screen name="MealDetail" 
            component={MealDetailScreen} 
            // options={({ route, navigation }) => {
            //   const mealId = route.params.mealId;
            //   return {
            //     title: mealId
            //   }
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#24180f',
  },
});
