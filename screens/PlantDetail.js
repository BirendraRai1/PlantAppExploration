import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { icons, COLORS, FONTS, images, SIZES } from '../constants';

const RequirementBar = ({ icon, barPercentage }) => (
    <View style={{ height: 60, alignItems: 'center' }}>
        {/* {Image} */}
        <View
            style={{
                height: 50,
                width: 50,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: COLORS.gray,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Image
                source={icon}
                resizeMode='cover'
                style={{
                    width: 30,
                    height: 30,
                    tintColor: COLORS.secondary
                }}
            />
        </View>

        {/* {Bar} */}
        <View
            style={{
                height: 3,
                width: '100%',
                position: 'absolute',
                bottom: 0,
                left: 0,
                backgroundColor: COLORS.gray
            }}
        ></View>

        <View
            style={{
                height: 3,
                width: barPercentage,
                position: 'absolute',
                backgroundColor: COLORS.primary,
                bottom: 0,
                left: 0
            }}
        ></View>
    </View>
)

const RequirementDetail = ({ icon, label, detail }) => (
    <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
            <Image
                source={icon}
                resizeMode='cover'
                style={{
                    width: 30,
                    height: 30,
                    tintColor: COLORS.secondary
                }}
            />
            <Text style={{ marginLeft: SIZES.base, color: COLORS.secondary, ...FONTS.h2 }}>{label}</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <Text style={{ marginLeft: SIZES.base, color: COLORS.gray, ...FONTS.h2 }}>{detail}</Text>
        </View>
    </View>
)


const PlantDetail = ({ navigation }) => {

    const renderHeader = () => (
        <View style={{ position: 'absolute', top: 50, left: SIZES.padding, right: SIZES.padding }}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                            backgroundColor: 'rgba(255,255,255,0.5)',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onPress={() => navigation.navigate('Home')}
                    >
                        <Image
                            source={icons.back}
                            resizeMode='contain'
                            style={{
                                width: 20,
                                height: 20
                            }}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'flex-end'
                    }}
                    onPress={() => console.log('Focus on Pressed')}
                >
                    <Image
                        source={icons.focus}
                        resizeMode='contain'
                        style={{
                            width: 25,
                            height: 25
                        }}
                    />
                </TouchableOpacity>
            </View>

            <View style={{ marginTop: '10%', flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                    <Text style={{ color: COLORS.white, ...FONTS.largeTitle }}>Glory Mantas</Text>
                </View>
                <View style={{ flex: 0.9 }}></View>
            </View>
        </View>
    )

    const renderRequirementsBar = () => (
        <View style={{ flexDirection: 'row', marginTop: SIZES.padding, justifyContent: 'space-between', paddingHorizontal: SIZES.padding }}>
            <RequirementBar
                icon={icons.sun}
                barPercentage='50%'
            />
            <RequirementBar
                icon={icons.drop}
                barPercentage="25%"
            />
            <RequirementBar
                icon={icons.temperature}
                barPercentage="80%"
            />
            <RequirementBar
                icon={icons.garden}
                barPercentage="30%"
            />
            <RequirementBar
                icon={icons.seed}
                barPercentage="50%"
            />
        </View>
    )

    const renderRequirements = () => (
        <View style={{ flex: 2.5, marginTop: SIZES.padding, paddingHorizontal: SIZES.padding, justifyContent: 'space-around' }}>
            <RequirementDetail
                icon={icons.sun}
                label='Sunlight'
                detail='15°C'
            />
            <RequirementDetail
                icon={icons.drop}
                label="Water"
                detail="250 ML Daily"
            />
            <RequirementDetail
                icon={icons.temperature}
                label="Room Temp"
                detail="25°C"
            />
            <RequirementDetail
                icon={icons.garden}
                label="Soil"
                detail="3 Kg"
            />
            <RequirementDetail
                icon={icons.seed}
                label="Fertilizer"
                detail="150 Mg"
            />
        </View>
    )

    const renderFooter = () => (
        <View style={{ flex: 1, flexDirection: 'row', paddingVertical: SIZES.padding }}>
            <TouchableOpacity
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: COLORS.primary,
                    borderTopRightRadius: 30,
                    borderBottomRightRadius: 30,
                    paddingHorizontal: SIZES.padding
                }}
                onPress={() => console.log('Take Action')}
            >
                <Text style={{ flex: 1, color: COLORS.white, ...FONTS.h2 }}>Take Action</Text>
                <Image
                    source={icons.chevron}
                    resizeMode='contain'
                    style={{
                        width: 20,
                        height: 20,
                        marginLeft: SIZES.base
                    }}
                />
            </TouchableOpacity>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingHorizontal: SIZES.padding }}>
                <Text style={{ flex: 1, color: COLORS.secondary, ...FONTS.h3 }}>Almost 2 week of growing time</Text>
                <Image
                    source={icons.downArrow}
                    resizeMode='contain'
                    style={{
                        width: 20,
                        height: 20,
                        marginLeft: SIZES.base,
                        tintColor: COLORS.secondary
                    }}
                />
            </View>
        </View>
    )

    return (
        <View style={{ flex: 1 }}>
            {/* {Banner Photo} */}
            <View style={{ height: '35%' }}>
                <Image
                    source={images.bannerBg}
                    resizeMode='cover'
                    style={{
                        height: '100%',
                        width: '100%'
                    }}
                />
            </View>
            {/* {Requirements} */}
            <View style={{
                flex: 1,
                marginTop: -40,
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40,
                backgroundColor: COLORS.lightGray,
                paddingVertical: SIZES.padding
            }}>
                <Text style={{ paddingHorizontal: SIZES.padding, color: COLORS.secondary, ...FONTS.h1 }}>Requirements</Text>

                {renderRequirementsBar()}

                {renderRequirements()}

                {renderFooter()}
            </View>
            {renderHeader()}
        </View>
    )
}

export default PlantDetail;