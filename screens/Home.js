import { View, Text, Image, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS,  SIZES, icons, images } from '../constants'
import { ScrollView } from 'react-native';
import { keywordsData, placesData, placesFeaturedData } from '../constants/data'


const Home = ({ navigation }) => {

  function renderHeader() {
    return (
      <View style={{
        marginVertical: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <View>
          <Text style={{
            fontSize: 12,
            color: COLORS.secondary,
            fontFamily: "regular"
          }}>Hello Hazar</Text>
          <Text style={{
            fontSize: 24,
            color: COLORS.white,
            fontFamily: "semiBold"
          }}>Let's Travel</Text>
        </View>
        
          <TouchableOpacity>
            <Image
              source={images.avatar2}
              resizeMode='contain'
              style={{
                height: 50,
                width: 50,
                borderRadius: 25
              }}
            />
          </TouchableOpacity>
        
      </View>
    )
  }

  function renderContent(){
    const [search, setSearch] = useState("");
    const [selectedKeywords, setSelectedKeywords] = useState([]);
    const handleKeywordPress = (id) => {
      setSelectedKeywords((prevSelectedKeywords) => {
        if (prevSelectedKeywords.includes(id)) {
          // Remove keyword from the selection if already selected
          return prevSelectedKeywords.filter((keywordId) => keywordId !== id);
        } else {
          // Add keyword to the selection if not already selected
          return [...prevSelectedKeywords, id];
        }
      });
    };
    const KeywordItem = ({ item, onPress, selected }) => {
      const itemStyle = {
        ...{
          padding: 14,
          marginHorizontal: 5,
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
        },
        backgroundColor: selected ? COLORS.primary : COLORS.tertiary , // Change color based on selection
      };
    
      return (
        <TouchableOpacity style={itemStyle} onPress={() => onPress(item.id)}>
          <Text style={{ color: selected ? COLORS.background : '#fff' }}>{item.keyword}</Text>
        </TouchableOpacity>
      );
    };

    return (
      <View style={{
        marginTop: 8
      }}>
         <View style={{
          height: 55,
          justifyContent: 'center',
          alignItems: "center",
          width: "100%",
          backgroundColor: COLORS.tertiary,
          flexDirection: "row",
          borderRadius:8,
          marginBottom: 16
         }}>
          <TextInput
            placeholder="Temukan Liburan Anda"
            placeholderTextColor={COLORS.secondary}
            value={search}
            onChangeText={(text) =>setSearch(text)}
            style={{
              fontSize: 14,
              paddingHorizontal: 12,
              flex: 1
            }}
          />
          <TouchableOpacity
            onPress={() => console.log("Search")}
          >
            <Image
              source={icons.search}
              resizeMode='contain'
              style={{
                height: 24,
                height: 24,
                tintColor: COLORS.secondary
              }}
            />
          </TouchableOpacity>
         </View>
         <FlatList
          data={keywordsData}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <KeywordItem
              item={item}
              onPress={handleKeywordPress}
              selected={selectedKeywords.includes(item.id)}
            /> 
        )}
      />

      <View style={{
        marginVertical: 18
      }}>
         <Text style={{
           fontSize: 16,
           fontFamily: "medium",
           color: COLORS.white,
           marginBottom: 8
         }}>Popular Experience</Text>

         <FlatList
           data={placesData}
           horizontal
           keyExtractor={(item) => item.id}
           renderItem={({item})=>(
            <View style={{
              height: 180,
              width: 124,
              marginHorizontal: 6
            }}>
              <Image
                source={item.image}
                resizeMode='cover'
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: 16
                }}
              />
              <View style={{
                position: "absolute",
                bottom: 12,
                left: 6
              }}>
                <Text style={{
                  fontSize: 12,
                  fontFamily: "medium",
                  color: COLORS.white
                }}>{item.name}</Text>
                <Text style={{
                  fontSize: 12,
                  fontFamily: 'regular',
                  color: COLORS.white
                }}>{item.distance} km away</Text>
              </View>
            </View>
           )}
         />
      </View>
      <View style={{
        marginVertical: 18
      }}>
         <Text style={{
           fontSize: 16,
           fontFamily: "medium",
           color: COLORS.white,
           marginBottom: 8
         }}>Featured</Text>

         <FlatList
           data={placesFeaturedData}
           keyExtractor={(item) => item.id}
           renderItem={({item})=>(
            <TouchableOpacity 
            onPress={() =>navigation.navigate("Detail")}
            style={{
              height: 130, width: "100%",
              marginHorizontal: 6, marginBottom: 16 }}>
              <Image
                source={item.image}
                resizeMode='cover'
                style={{
                  height: "100%", width: "100%", borderRadius: 16
                }}/>
              <View style={{
                position: "absolute",
                bottom: 12,
                left: 6 }}>
                <View style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: SIZES.width - ( 16 * 2 + 6 * 2 ) }}>
                  <View>
                  <Text style={{
                  fontSize: 12,
                  fontFamily: "medium",
                  color: COLORS.white
                }}>{item.name}</Text>
                <Text style={{
                  fontSize: 12,
                  fontFamily: 'regular',
                  color: COLORS.white
                }}>{item.distance} km away</Text>
                  </View>
                  <View style={{
                    flexDirection: "row",
                    marginRight: 12 }}>
                    <Image
                      source={icons.star}
                      style={{
                        height: 20,
                        width: 20,
                        tintColor: "#E58F3F"}}/>
                    <Text style={{
                       fontSize: 16,
                       fontFamily: "medium",
                       color: COLORS.white,
                       marginHorizontal: 4
                       }}>{item.star}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
           )}
         />
      </View> 
      </View>
    )
  }
  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: COLORS.background
    }}>
      <View style={{
        flex: 1,
        marginHorizontal: 16
      }}>
        {renderHeader()}
        <ScrollView>
        {renderContent()}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}



export default Home