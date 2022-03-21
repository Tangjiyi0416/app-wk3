import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet, Pressable } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "./src/components/HomeScreen";
import DetailScreen from "./src/components/DetailScreen";
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
export default function App() {
  const Empty = () => null;
  function HomeStack({ navigation }) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShadowVisible: false,
            headerTitle: "",
            headerLeft: () => (
              <Pressable onPress={navigation.toggleDrawer}>
                <Icon name="menu" size={26} style={{ paddingLeft: 16 }} />
              </Pressable>
            ),
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
          }} //TODO: add header content//Done
        />
      </Stack.Navigator>
    );
  }
  function HomeTab() {
    //
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
          headerShown: false,
          tabBarStyle: {
            elevation: 2,
            shadowOffset: { width: 0, height: -1 },
            shadowOpacity: 0.2,
            shadowRadius: 5,
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Wishlist" component={Empty} />
        <Tab.Screen name="My books" component={Empty} />
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
          headerShown: false, //I know what I'm doing mate. tRUsT mE!
        }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeTab}
          options={{ title: "Home" }}
        />
        <Drawer.Screen
          name="Account"
          component={Empty}
          options={{ headerShown: true }} //header problems require head-er solution(X
        />
        <Drawer.Screen
          name="Setting"
          component={Empty}
          options={{ headerShown: true }} //header problems require head-er solution(X
        />
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
