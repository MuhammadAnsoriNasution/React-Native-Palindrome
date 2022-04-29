import { useNavigation } from '@react-navigation/native';
import MapboxGL from '@rnmapbox/maps';
import React from 'react';
import { ActivityIndicator, Alert, FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import env from '../../env';
import imagesAssets from '../assets/images';
import ShowProfile from '../components/ShowProfile';
import UserHook, { typeDatauser } from '../hook/UserHook';
import { setProfile } from '../store/userSlice';
import colors from '../utils/color';
import coordinate from '../utils/coordinate.json'

MapboxGL.setAccessToken(env.token_mapbox);

export default function UsersScreen() {
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const { modeList,
        dataFetch,
        onRefresh,
        refresh,
        _handleLoadMore,
        renderItem,
        loading,
        selectUser,
        setModalVisible,
        modalVisible,
        showProfile
    } = UserHook()
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
            {
                modeList ?
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={dataFetch.data}
                        renderItem={renderItem}
                        ListEmptyComponent={() => {
                            return <View>
                                <Text>empty user</Text>
                            </View>
                        }}
                        onRefresh={onRefresh}
                        refreshing={refresh}
                        onEndReached={info => _handleLoadMore()}
                        onEndReachedThreshold={0.5}
                        keyExtractor={(item: typeDatauser) => item.id.toString()}
                        ListFooterComponent={() =>
                            loading ? (
                                <ActivityIndicator size="large" color={colors.primary} />
                            ) : null
                        }
                    />
                    :
                    <MapboxGL.MapView
                        style={styles.map}
                    >
                        <MapboxGL.Camera
                            zoomLevel={4}
                            centerCoordinate={[112.3794103, -1.880788]}
                            allowUpdates={true}
                        />

                        {
                            dataFetch.data.map((item) => {
                                return <MapboxGL.MarkerView
                                    id={item.first_name}
                                    coordinate={[item.longitude, item.latitude]}
                                    anchor={{ x: 0.1, y: 0.1 }}

                                >
                                    <TouchableOpacity onPress={() => showProfile(item)} key={item.first_name}>
                                        <Image source={imagesAssets.pin_point} style={{ width: 30, height: 30, resizeMode: 'contain' }} />
                                    </TouchableOpacity>
                                </MapboxGL.MarkerView>
                            })
                        }

                    </MapboxGL.MapView>
            }
            {
                selectUser ?
                    <ShowProfile
                        setModalVisible={setModalVisible}
                        modalVisible={modalVisible}
                        onSelect={() => {
                            dispatch(setProfile(selectUser))
                            navigation.goBack()
                        }}
                        item={selectUser}
                    />
                    : null
            }
        </View>
    );
}

const styles = StyleSheet.create({
    map: {
        flex: 1,
        marginHorizontal: -20
    },
    container: {
        paddingHorizontal: 20,
        backgroundColor: colors.white,
        flex: 1,
    },
})