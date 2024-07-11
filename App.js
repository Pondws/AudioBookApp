// // // import React from 'react'
// // // import { NavigationContainer } from '@react-navigation/native';
// // // import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// // // import Home from './components/Home';
// // // import Favorite from './components/Favorite';
// // // import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// // // import Details from './components/Details';

// // // const Tab = createBottomTabNavigator();

// // // function MyTabs() {
// // //   return (
// // //     <Tab.Navigator
// // //       screenOptions={{
// // //         tabBarStyle: { position: 'absolute', backgroundColor: '#fff', height: 55, },
// // //         tabBarActiveTintColor: '#000',
// // //         tabBarLabelStyle: {
// // //           fontSize: 13,
// // //           fontWeight: 'bold'
// // //         },
// // //         headerStyle: {
// // //           backgroundColor: '#55E775',
// // //         },
// // //         headerTintColor: '#fff',
// // //         headerTitleStyle: {
// // //           fontWeight: 'bold',
// // //         },
// // //         headerTitleAlign: 'center',
// // //       }}

// // //     >
// // //       <Tab.Screen
// // //         name="eBook App"
// // //         component={Home}
// // //         options={{
// // //           tabBarLabel: 'Home',
// // //           tabBarIcon: ({ color, size }) => (
// // //             <MaterialCommunityIcons name="home" color='#000' size={35} />
// // //           ),
// // //         }}
// // //       />
// // //       <Tab.Screen
// // //         name="Favorite"
// // //         component={Favorite}
// // //         options={{
// // //           tabBarLabel: 'Favorite',
// // //           // tabBarActiveBackgroundColor: '#44b85d',
// // //           // tabBarInactiveBackgroundColor: '#55E775',
// // //           tabBarIcon: ({ color, size }) => (
// // //             <MaterialCommunityIcons name="heart" color='#000' size={35} />
// // //           ),
// // //         }}
// // //       />
// // //       <Tab.Screen
// // //         name="Profile"
// // //         component={Favorite}
// // //         options={{
// // //           tabBarLabel: 'Profile',
// // //           tabBarActiveBackgroundColor: '#44b85d',
// // //           // tabBarInactiveBackgroundColor: '#55E775',
// // //           tabBarIcon: ({ color, size }) => (
// // //             <MaterialCommunityIcons name="account" color='#fff' size={35} />
// // //           ),
// // //         }}
// // //       />
// // //       {/* <Tab.Screen name="Details" component={Details} /> */}
// // //     </Tab.Navigator>

// // //   );
// // // }


// // // const App = () => {
// // //   return (
// // //     <NavigationContainer>
// // //       <MyTabs />
// // //     </NavigationContainer>
// // //   )
// // // }

// // // export default App

import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import Favorite from './components/Favorite';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Details from './components/Details';
import Search from './components/Search';
import Mybook from './components/Mybook';
import PDFView from './components/PDFView';
import { View, Text, TouchableOpacity, LogBox } from 'react-native';
import PDFBook from './components/PDFBook';
import AudioList from './components/AudioList';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


LogBox.ignoreAllLogs();

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: '#55E775',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}
      />
      <HomeStack.Screen
        name="Details"
        component={Details}
        options={{
          headerStyle: {
            backgroundColor: '#55E775',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}
      />
      <HomeStack.Screen
        name="PDFView"
        component={PDFView}
        options={{
          headerStyle: {
            backgroundColor: '#55E775',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}
      />
      <HomeStack.Screen
        name="PDFBook"
        component={PDFBook}
        options={{
          headerStyle: {
            backgroundColor: '#55E775',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}
      />
      <HomeStack.Screen
        name="AudioList"
        component={AudioList}
        options={{
          headerStyle: {
            backgroundColor: '#55E775',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}
      />
    </HomeStack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
    
    tabBarOptions={{
      activeTintColor: '#000',
    }}
      screenOptions={{
        headerStyle: {       
          backgroundColor: '#55E775',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
      }}
    >
      <Tab.Screen
        name="eBook App"
        component={HomeStackNavigator}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-outline" color= {color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Seacrh',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" color= {color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarLabel: 'Favorite',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="heart-outline" color= {color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="Mybook"
        component={Mybook}
        options={{
          tabBarLabel: 'My book',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book-plus-multiple-outline" color= {color} size={35} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  )
}

export default App




// import React, { useState } from 'react';
// import { View, Text, FlatList, TouchableOpacity } from 'react-native';
// import Sound from 'react-native-sound';

// const AudioListScreen = () => {
//   const [audioObjects, setAudioObjects] = useState([]);

//   const loadAudio = () => {
    // const audioData = [
    //   {
    //     title: "A Song of Ice and Fire 1 - A Game of Thrones",
    //     source: "https://ia803009.us.archive.org/15/items/ASongOfIceAndFire5ADanceWithDragons/A%20Song%20of%20Ice%20and%20Fire%201%20-%20A%20Game%20of%20Thrones.mp3"
    //   },
    //   {
    //     title: "A Song of Ice and Fire 2 - A Clash of Kings",
    //     source: "https://ia803009.us.archive.org/15/items/ASongOfIceAndFire5ADanceWithDragons/A%20Song%20of%20Ice%20and%20Fire%202%20-%20A%20Clash%20of%20Kings.mp3"
    //   }
    // ];

//     const audioObjects = audioData.map(({ title, source }) => {
//       const sound = new Sound(source, '', (error) => {
//         if (error) {
//           console.log('Failed to load the sound', error);
//         }
//       });
//       return { title, sound };
//     });

//     setAudioObjects(audioObjects);
//   };

//   const playAudio = (audioObject) => {
//     audioObject.sound.play(() => {
//       console.log('Sound has finished playing');
//     });
//   };

//   const stopAudio = (audioObject) => {
//     audioObject.sound.stop();
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <TouchableOpacity onPress={loadAudio}>
//         <Text>Load Audio</Text>
//       </TouchableOpacity>
//       <FlatList
//         data={audioObjects}
//         keyExtractor={(item, index) => `${index}`}
//         renderItem={({ item }) => (
//           <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//             <TouchableOpacity onPress={() => playAudio(item)}>
//               <Text style={{ color: 'blue', marginRight: 10 }}>Play</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => stopAudio(item)}>
//               <Text style={{ color: 'red' }}>Stop</Text>
//             </TouchableOpacity>
//             <Text>{item.title}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// export default AudioListScreen;
