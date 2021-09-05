import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { icons, images, COLORS, FONTS, SIZES } from '../constants'

const Home = ({ navigation }) => {

    const [newPlants, setNewPlants] = useState(
        [
            {
                id: 0,
                name: "Plant 1",
                img: images.plant1,
                favourite: false,
            },
            {
                id: 1,
                name: "Plant 2",
                img: images.plant2,
                favourite: true,
            },
            {
                id: 2,
                name: "Plant 3",
                img: images.plant3,
                favourite: false,
            },
            {
                id: 3,
                name: "Plant 4",
                img: images.plant4,
                favourite: false,
            },
        ]
    )

    const [FriendList, setFriendList] = useState(
        [
            {
                id: 0,
                img: images.profile1,
            },
            {
                id: 1,
                img: images.profile2,
            },
            {
                id: 2,
                img: images.profile3,
            },
            {
                id: 3,
                img: images.profile4,
            },
            {
                id: 4,
                img: images.profile5,
            },
        ]
    )

    const renderItem = ({ item }) => {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', marginHorizontal: SIZES.base }}>
                <Image
                    source={item.img}
                    resizeMode='cover'
                    style={{
                        height: '82%',
                        width: SIZES.width * 0.23,
                        borderRadius: 15
                    }}
                />
                <View
                    style={{
                        position: 'absolute',
                        backgroundColor: COLORS.primary,
                        right: 0,
                        borderTopLeftRadius: 10,
                        borderBottomLeftRadius: 10,
                        paddingHorizontal: SIZES.base,
                        bottom: '17%'
                    }}
                >
                    <Text style={{ color: COLORS.white, ...FONTS.body4 }}>{item.name}</Text>
                </View>
                <TouchableOpacity
                    style={{
                        position: 'absolute',
                        top: '15%',
                        left: 7
                    }}
                    onPress={() => console.log('Pressed on the heart icon')}
                >
                    <Image
                        source={item.favourite ? icons.heartRed : icons.heartGreenOutline}
                        resizeMode='contain'
                        style={{
                            width: 20,
                            height: 20
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    const renderFriendsComponent = () => {
        if (FriendList.length == 0) {
            return (
                <View></View>
            )
        } else if (FriendList.length <= 3) {
            return (
                FriendList.map((item, index) => (
                    <View
                        key={`friend-${index}`}
                        style={index == 0 ? { flexDirection: 'row' } : { flexDirection: 'row', marginLeft: -20 }}
                    >
                        <Image
                            source={item.img}
                            resizeMode='cover'
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 25,
                                borderWidth: 3,
                                borderColor: COLORS.primary
                            }}
                        />
                    </View>
                ))
            )
        } else {
            return (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {
                        FriendList.map((item, index) => {
                            if (index <= 2) {
                                return (
                                    <View
                                        key={`friend-${index}`}
                                        style={index == 0 ? { flexDirection: 'row' } : { flexDirection: 'row', marginLeft: -20 }}
                                    >
                                        <Image
                                            source={item.img}
                                            resizeMode='cover'
                                            style={{
                                                width: 50,
                                                height: 50,
                                                borderRadius: 25,
                                                borderWidth: 3,
                                                borderColor: COLORS.primary
                                            }}
                                        />
                                    </View>
                                )
                            }
                        })
                    }
                    <Text style={{ marginLeft: 5, color: COLORS.secondary, ...FONTS.body3 }}>+{FriendList.length - 3} More</Text>
                </View>
            )
        }
    }

    return (
        <View style={{ flex: 1 }}>
            {/* {New Plants} */}
            <View style={{
                height: '30%',
                backgroundColor: COLORS.white
            }}>
                <View style={{
                    flex: 1,
                    borderBottomLeftRadius: 50,
                    borderBottomRightRadius: 50,
                    backgroundColor: COLORS.primary
                }}>
                    <View style={{
                        marginTop: SIZES.padding * 2,
                        marginHorizontal: SIZES.padding
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <Text style={{ color: COLORS.white, ...FONTS.h2 }}>New Plants</Text>
                            <TouchableOpacity
                                onPress={() => console.log('Focus on Pressed')}
                            >
                                <Image
                                    source={icons.focus}
                                    resizeMode='contain'
                                    style={{
                                        width: 20,
                                        height: 20
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: SIZES.base }}>
                            <FlatList
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                data={newPlants}
                                keyExtractor={(item) => `${item.id}`}
                                renderItem={renderItem}
                            />
                        </View>
                    </View>
                </View>
            </View>

            {/* {Today's Share} */}
            <View style={{ height: '45%', backgroundColor: COLORS.lightGray }}>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: COLORS.white,
                        borderBottomLeftRadius: 50,
                        borderBottomRightRadius: 50
                    }}
                >
                    <View style={{ marginTop: SIZES.font, marginHorizontal: SIZES.padding }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{ color: COLORS.secondary, ...FONTS.h2 }}>Today's Share</Text>
                            <TouchableOpacity
                                onPress={() => console.log('See All on pressed')}
                            >
                                <Text style={{ color: COLORS.secondary, ...FONTS.body3 }}>See All</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', height: '88%', marginTop: SIZES.base }}>
                            <View style={{ flex: 1 }}>
                                <TouchableOpacity
                                    style={{
                                        flex: 1
                                    }}
                                    onPress={() => navigation.navigate('PlantDetail')}
                                >
                                    <Image
                                        source={images.plant5}
                                        resizeMode='cover'
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            borderRadius: 20
                                        }}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{
                                        flex: 1,
                                        marginTop: SIZES.font
                                    }}
                                    onPress={() => navigation.navigate('PlantDetail')}
                                >
                                    <Image
                                        source={images.plant6}
                                        resizeMode='cover'
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            borderRadius: 20
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 1.3 }}>
                                <TouchableOpacity
                                    style={{ flex: 1, marginLeft: SIZES.font }}
                                    onPress={() => navigation.navigate('PlantDetail')}
                                >
                                    <Image
                                        source={images.plant7}
                                        resizeMode='cover'
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            borderRadius: 20
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            {/* {Added Friend} */}
            <View style={{ flex: 1, height: '25%', backgroundColor: COLORS.lightGray }}>
                <View style={{ marginTop: SIZES.radius / 4, paddingHorizontal: SIZES.padding, marginBottom: SIZES.radius * 2 }}>
                    <Text style={{ color: COLORS.secondary, ...FONTS.h2 }}>Added Friends</Text>
                    <Text style={{ color: COLORS.secondary, ...FONTS.body3 }}>{FriendList.length} total</Text>
                    <View style={{ flexDirection: 'row', height: '60%' }}>
                        {/* {Friends} */}
                        <View style={{ flex: 1.5, flexDirection: 'row', alignItems: 'center' }}>
                            {renderFriendsComponent()}
                        </View>

                        {/* {Add Friend} */}
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                            <Text style={{ color: COLORS.secondary, ...FONTS.body3 }}>Add New</Text>
                            <TouchableOpacity
                                style={{
                                    marginLeft: SIZES.base,
                                    width: 40,
                                    height: 40,
                                    borderRadius: 10,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: COLORS.gray
                                }}
                                onPress={() => console.log('Add Friend On Pressed')}
                            >
                                <Image
                                    source={icons.plus}
                                    resizeMode='contain'
                                    style={{
                                        width: 20,
                                        height: 20
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Home;