import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "./src/components/HomeScreen";
import DetailScreen from "./src/components/DetailScreen";
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
export default function App() {
  const Empty = () => null;
  function HomeStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShadowVisible: false,
            headerTitle: "",
            headerRight: () => (
              <Icon name="magnify" size={26} style={{ paddingRight: 19.5 }} />
            ),
            headerRightContainerStyle: {
              justifyContent: "center",
            },
          }} //TODO: add header content
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{
            headerTitle: "",
            headerShadowVisible: false,
          }} //TODO: add header content
        />
      </Stack.Navigator>
    );
  }
  function HomeTab() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            switch (route.name) {
              case "Home":
                iconName = "home";
                break;
              case "Wishlist":
                iconName = "bookmark";
                break;
              case "My books":
                iconName = "book-open";
                break;
              default:
                "";
                break;
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarInactiveTintColor: "#666666",
          tabBarActiveTintColor: "#6200EE",
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{ headerShown: false, title: "Home" }}
        />
        <Tab.Screen
          name="Wishlist"
          component={Empty}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="My books"
          component={Empty}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: "#FFF",
        },
      }}
    >
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Drawer.Screen
          name="Home"
          options={{ title: "Home" }}
          component={HomeTab}
        />
        <Drawer.Screen name="Account" component={Empty} />
        <Drawer.Screen name="Setting" component={Empty} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
