import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import Ionicons from "@expo/vector-icons/Ionicons";
import COLORS from '../config/COLORS';
import SPACING from '../config/SPACING';
import Constants from "expo-constants";

const TourDetailScreen = ({ tour }) => {
    return (
        <>
            <ScrollView>
                <ImageBackground
                    source={tour.image}
                    style={{ width: "100%", height: 500 }}
                >
                    <SafeAreaView style={{ paddingTop: Constants.statusBarHeight, flex: 1 }}>
                        <View style={{
                            paddingHorizontal: SPACING * 2,
                            justifyContent: "space-between",
                            flexDirection: "row",
                            height: "100%",

                        }}>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: COLORS.white,
                                    width: SPACING * 4,
                                    height: SPACING * 4,
                                    borderRadius: SPACING * 2,
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                <Ionicons name='chevron-back'
                                    color={COLORS.primary}
                                    size={SPACING * 4}
                                />
                            </TouchableOpacity>
                            <View style={{ 
                                alignItems: "flex-end", 
                                justifyContent: "space-between",
                                paddingBottom: SPACING * 8,
                                }}>
                                <TouchableOpacity
                                    style={{
                                        backgroundColor: COLORS.white,
                                        width: SPACING * 4,
                                        height: SPACING * 4,
                                        borderRadius: SPACING * 2,
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}>
                                    <Ionicons name='heart-outline'
                                        color={COLORS.primary}
                                        size={SPACING * 4}
                                    />
                                </TouchableOpacity>
                                <View>
                                    {tour.images.map((gallery, index) => (
                                        <TouchableOpacity style={{
                                            width: SPACING*6, 
                                            height: SPACING*6, 
                                            padding: SPACING/2,
                                            backgroundColor: COLORS.white,
                                            borderRadius: SPACING,
                                            marginBottom: SPACING,
                                            }} 
                                            key={index}>
                                            <Image 
                                            source={gallery.image} 
                                            style={{width: "100%", height: "100%"}} />
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            </View>
                        </View>
                    </SafeAreaView>
                </ImageBackground>
            </ScrollView>
        </>
    )
}

export default TourDetailScreen

const styles = StyleSheet.create({})