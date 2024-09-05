import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Button, SafeAreaView, Pressable } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5, AntDesign } from '@expo/vector-icons';
import theme from "../assets/theme";
import ListSchedule from "../components/ListSchedule";
import Separator from "../components/Separator";


const HomeScreen = ({ navigation }) => {
    const url = 'https://api.myquran.com/v2/sholat/jadwal/1301/'
    const [data, setData] = useState(null);
    const [today, setToday] = useState(0);

    useEffect(() => {
        fetchTodayData();
    }, []);

    useEffect(() => {
    }, [data, today]);


    const fetchDataByDate = async (date) => {

        try {
            const response = await fetch(url + date);
            const json = await response.json();
            setData(json.data);
        } catch (error) {
            console.error('Error fetching data: ', error)
        }
    }

    const fetchDayData = async (offset) => {
        const now = new Date();
        now.setDate(now.getDate() + offset);
        const targetDate = now.toISOString().split('T')[0];
        await fetchDataByDate(targetDate);
    }

    const fetchTodayData = async () => {
        setToday(prevToday => prevToday - prevToday)
        await fetchDayData(today - today);
    }

    const fetchYesterdayData = async () => {
        setToday(prevToday => prevToday - 1)
        await fetchDayData(today - 1);
    }

    const fetchTomorrowData = async () => {
        setToday(prevToday => prevToday + 1)
        await fetchDayData(today + 1);
    }

    return (
        <View style={[
            styles.container,
            {
                backgroundColor: theme.colors.background
            }]}>
            {/* card */}
            <View style={{
                flexDirection: "column",
                justifyContent: 'space-between',
                backgroundColor: theme.colors.primary,
                height: 180,
                padding: 22,
                borderBottomLeftRadius: 32,
                borderBottomRightRadius: 32,
            }}>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}>
                    <View>
                        <Text style={[{
                            color: theme.colors.white,
                            fontSize: theme.fontSizes.medium,
                        }]}>Welcome,</Text>
                        <Text style={[{
                            color: theme.colors.white,
                            fontSize: theme.fontSizes.large,
                            fontWeight: theme.fontWeights.semibold
                        }]}>Bambang</Text>
                    </View>
                    <View>
                        <Pressable>
                            <FontAwesome5
                                name="user-circle"
                                size={24}
                                color="white" />
                        </Pressable>
                    </View>

                </View>
                <View>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                    }}>
                        <Entypo
                            name="location"
                            size={12}
                            color="white" />
                        <Text style={[{
                            color: theme.colors.white,
                            paddingLeft: 8
                        }]}>{data ? data.lokasi : "--"}</Text>
                    </View>
                    <Text style={[{
                        color: theme.colors.white
                    }]}>GMT +7</Text>
                </View>
            </View>
            {/*  */}
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: theme.colors.white,
                alignItems: "center",
                marginTop: 12,
                paddingHorizontal: 12,
                marginHorizontal: 12,
                height: 58,
                borderRadius: 16
            }}>
                <Pressable onPress={fetchYesterdayData}>
                    <Entypo name="chevron-left" size={24} color="black" />
                </Pressable>
                <View style={{
                    alignItems: "center"
                }}>
                    <Pressable onLongPress={fetchTodayData} style={{
                        fontWeight: theme.fontWeights.semibold
                    }}>
                        <Text>
                            {data ? data.jadwal.tanggal : "--"}
                        </Text>
                    </Pressable>
                    {/* <Text>21 Maret 2024</Text> */}
                </View>
                <Pressable onPressIn={fetchTomorrowData}>
                    <Entypo name="chevron-right" size={24} color="black" />
                </Pressable>
            </View>

            {/* jadwal */}
            <View style={{
                margin: 12,
                backgroundColor: theme.colors.white,
                borderRadius: 20,
                rowGap: 20,
                padding: 24
            }}>

                <ListSchedule jadwal="Imsak" value={data ? data.jadwal.imsak : "--"} />
                <Separator />
                <ListSchedule jadwal="Subuh" value={data ? data.jadwal.subuh : "--"} />
                <Separator />
                <ListSchedule jadwal="Duha" value={data ? data.jadwal.dhuha : "--"} />
                <Separator />
                <ListSchedule jadwal="Duhur" value={data ? data.jadwal.dzuhur : "--"} />
                <Separator />
                <ListSchedule jadwal="Ashar" value={data ? data.jadwal.ashar : "--"} />
                <Separator />
                <ListSchedule jadwal="Magrib" value={data ? data.jadwal.maghrib : "--"} />
                <Separator />
                <ListSchedule jadwal="Isya" value={data ? data.jadwal.isya : "--"} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default HomeScreen;