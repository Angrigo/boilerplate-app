import * as React from 'react';
import { View, Text, Button, StyleSheet, Image, FlatList, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';

function DetailsScreen({ navigation }) {
    return (
        <View>
            <Text>Details Screen</Text>
            <Button
                title="Go to Details... again"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}


function HomeScreen({ navigation }) {
    const [isLoading, setLoading] = React.useState(true);
    const [posts, setPosts] = React.useState(null);

    React.useEffect(() => {
        async function fetchData() {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    if (data)
                        setPosts(data);
                })
                .catch((error) => console.error(error))
                .finally(() => setLoading(false));;
        }

        fetchData();
    }, []);
    //console.log(posts)
    return (
        <SafeAreaView>
            <View>
                <Image
                    source={require("./assets/images/logo.png")}
                    resizeMode="contain"
                    style={styles.image}
                ></Image>
                {isLoading ? <Text>CARICAMENTO</Text> :
                    <FlatList
                        data={posts}
                        renderItem={({ index, item }) => {
                            return (
                                <View key={index}>
                                    <Text style={styles.text}>
                                        {item.body}
                                    </Text>
                                </View>
                            );
                        }}
                        keyExtractor={item => item.id}
                    />
                }
            </View>
        </SafeAreaView>
    );
}


const Tab = createBottomTabNavigator();

function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused
                                ? 'ios-information-circle'
                                : 'ios-information-circle-outline';
                        } else if (route.name === 'Details') {
                            iconName = focused ? 'ios-list-box' : 'ios-list';
                        }

                        if (focused)
                            return <Text>{route.name}</Text>
                        else
                            return <Text>{route.name}</Text>
                    },
                })}
                tabBarOptions={{
                    showLabel: false,
                    style: {
                        backgroundColor: "lightgrey"
                    },
                    activeTintColor: 'white',
                    inactiveTintColor: 'black',
                }}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Details" component={DetailsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
export default App;

const styles = StyleSheet.create({
    cupertinoFooter1: {
        height: "9%"
    },
    image: {
        width: "100%",
        height: 120
    },
    text: {
        padding: "5%",
        fontFamily: "roboto-regular"
    }
});
