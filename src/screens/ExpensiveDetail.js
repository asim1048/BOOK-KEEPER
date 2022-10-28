
import React, { useContext } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native';
import * as Progress from "react-native-progress";

import Below from '../images/Below.png';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
    faArrowLeft,
    faArrowsAlt,
    faArrowsSplitUpAndLeft,
    faCalendar,
    faCog,
    faEllipsisV,
    faList,
    faMosque,
    faPlus,
    faCross,
    faXmark,
    faCircle,
    faCircleCheck,

    faPen,
    faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import { CatageoryContext } from '../context/AppContext';


export default function ExpensiveDetail() {

    const { catageory } = useContext(CatageoryContext);
    return (


        <View style={{

            flex: 1,
            backgroundColor: 'white',
            paddingHorizontal:25,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
        }}>

            <Text
                style={{ fontSize: 20, fontWeight: '500', color: 'black', marginTop: 40 }}
            >
                {catageory.type}
            </Text>
            {/* Detail */}
            <View
                style={{
                    marginTop: 30,
                    justifyContent: 'space-between',
                    flexDirection: 'row',

                }}
            >
                <Text style={{ fontSize: 18, fontWeight: '500', color: 'black' }}>Category </Text>

                <Text style={{ fontSize: 18, color: 'black' }}>{catageory.type}</Text>
            </View>
            <View
                style={{
                    marginTop: 35,
                    justifyContent: 'space-between',
                    flexDirection: 'row',

                }}
            >
                <Text style={{ fontSize: 18, fontWeight: '500', color: 'black' }}>Amount </Text>
                <Text style={{ fontSize: 18, color: 'black' }}>{catageory.savedAmount}$</Text>
                
            </View>
            <View
                style={{
                    marginTop: 35,
                    justifyContent: 'space-between',
                    flexDirection: 'row',

                }}
            >
                <Text style={{ fontSize: 18, fontWeight: '500', color: 'black' }}>Limit </Text>
                <Text style={{ fontSize: 18, color: 'black' }}>{catageory.limit}$</Text>
                
            </View>
        </View>
    )
}

