import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import imagesAssets from '../assets/images';
import ItemUser from '../components/ItemUser';
import sleep from '../utils/sleep';
import coordinate from '../utils/coordinate.json'

export type typeDatauser = {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string,
    latitude: number,
    longitude: number
}
type resFetch = {
    page: number,
    per_page: number,
    total: number,
    total_pages: number,
    data: typeDatauser[]
}


export default function UserHook() {
    const navigation = useNavigation();

    const [modeList, setModeList] = useState<boolean>(true)
    const [loading, setLoading] = useState<boolean>(false)
    const [modalVisible, setModalVisible] = useState(false);
    const [selectUser, setSelectuser] = useState<typeDatauser | null>(null)
    const [dataFetch, setDataFetch] = useState<resFetch>({
        page: 0,
        per_page: 0,
        total: 0,
        total_pages: 0,
        data: []
    });
    const [page, setPage] = useState<number>(1)
    const [refresh, setRefresh] = useState<boolean>(false)


    const addCoordinate = (data: typeDatauser[]): typeDatauser[] => {
        return data.map((item: typeDatauser) => {
            const { lat, lng } = coordinate[Math.floor(Math.random() * 8895) + 1]
            return {
                ...item,
                latitude: parseFloat(lat),
                longitude: parseFloat(lng)
            }
        })
    }
    const fetch = () => {
        setLoading(true)
        axios.get(`https://reqres.in/api/users?page=${page}&per_page=6`)
            .then((ress) => {

                setLoading(false)
                if (page == 1) {
                    setDataFetch({ ...ress.data, data: addCoordinate(ress.data.data) })
                } else {
                    setDataFetch(p => ({
                        ...ress.data,
                        data: [...p.data, ...addCoordinate(ress.data.data)]
                    }))
                }
            }).catch((err) => {
                setLoading(false)
            })
    }
    const onRefresh = React.useCallback(async () => {
        setRefresh(true);
        await sleep(1000).then(() => setRefresh(false));
        setPage(1)
    }, []);

    const _handleLoadMore = () => {
        if (dataFetch.total_pages > page) {
            setPage(p => p + 1);
        }
    };

    useEffect(() => {
        fetch()
        console.log(coordinate)

    }, [page])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => setModeList(!modeList)}>
                    <Image source={modeList ? imagesAssets.show_map : imagesAssets.ic_show_list} style={{ width: 24, height: modeList ? 24 : 18, resizeMode: 'cover' }} />
                </TouchableOpacity>
            ),
        });
    }, [modeList])

    const renderItem = useCallback(({ item }: { item: typeDatauser }) => {
        return <ItemUser onPress={() => showProfile(item)} item={item} />
    }, [])

    const showProfile = (item: typeDatauser) => {
        setSelectuser(item)
        setModalVisible(true)
    }

    return {
        modeList,
        dataFetch,
        renderItem,
        onRefresh,
        refresh,
        _handleLoadMore,
        loading,
        selectUser,
        setModalVisible,
        modalVisible,
        showProfile
    }
}
