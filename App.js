import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createDrawerNavigator,
  DrawerItemList,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { View, Text, Image, Pressable } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "./src/components/HomeScreen";
import DetailScreen from "./src/components/DetailScreen";
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
export default function App() {
  //this is fine.
  const Empty = () => null;
  //should make a separate file for this but... anyway.
  function HomeStack({ navigation }) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShadowVisible: false,
            title: "", //now that's what we call "ingenious".
            headerLeft: () => (
              <Pressable onPress={navigation.toggleDrawer}>
                <Icon name="menu" size={26} />
              </Pressable>
            ),
            headerRight: () => <Icon name="magnify" size={26} />,
            headerRightContainerStyle: {
              justifyContent: "center",
            },
          }} //TODO: add header content//Done
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{
            headerShadowVisible: false,
            title: "",
            headerLeft: () => (
              <Pressable onPress={navigation.goBack}>
                <Icon name="chevron-left" size={26} />
              </Pressable>
            ),

            headerRightContainerStyle: {
              justifyContent: "center",
            },
          }} //TODO: add header content
        />
      </Stack.Navigator>
    );
  }
  //should make a separate file for this but... anyway.
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
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Wishlist" component={Empty} />
        <Tab.Screen name="My books" component={Empty} />
      </Tab.Navigator>
    );
  }

  function DrawerContent(props) {
    return (
      <DrawerContentScrollView>
        <View
          style={{
            paddingTop: 40,
            paddingBottom: 16,
          }}
        >
          <Image
            source={{
              uri: "https://raw.githubusercontent.com/Tangjiyi0416/app-wk3/main/img/img_avatar.png",
            }}
            style={{ height: 48, width: 48, marginLeft: 16 }}
          />
          <Text
            style={{
              marginTop: 16,
              marginLeft: 16,
              fontSize: 24,
              fontWeight: "500",
            }}
          >
            May
          </Text>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
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
        drawerContent={DrawerContent}
        screenOptions={({ route }) => ({
          headerShown: false, //I know what I'm doing mate. tRUsT mE!
          drawerIcon: ({ focused, size, color }) => {
            let iconName;
            switch (route.name) {
              case "Home":
                iconName = "home";
                break;
              case "Account":
                iconName = "account";
                break;
              case "Setting":
                iconName = "cog";
                break;
              default:
                "";
                break;
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
          drawerActiveBackgroundColor: "#FFF",
          drawerActiveTintColor: "#6022EE",
        })}
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
