import React,{useContext} from 'react'

import { View, Text, Image, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Edit1 from '../images/Edit1.png'
import {CatageoryContext} from '../context/AppContext';

import Edit2 from '../images/Edit2.png';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';


export default function BalanceSection({navigation}) {
    const { totalBalance,modalBackGround } = useContext(CatageoryContext);

    return (
        <View style={{
            flex: 1,
            paddingHorizontal: 20,
            backgroundColor: !modalBackGround?'#FDDE83':'#fffdaf',
            marginHorizontal: 15,
            borderRadius: 10,
            marginTop:-5,
        }}>
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <View style={{
                    flexDirection: 'row',
                }}>
                    <Text style={{ 
                        fontSize: 18,
                        fontFamily:'Inter',
                        fontWeight:!modalBackGround?'700':'600', 
                        color: "black",
                        marginTop: -5,
                        elevation:-2 
                    }}>Current Balance</Text>
                    <TouchableOpacity style={{ marginLeft: 50 }} onPress={()=>navigation.navigate("Adding Amount")}>
                        <FontAwesomeIcon icon={faPenToSquare} size={20} color="black" />
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: -60 }}>${totalBalance}</Text>
            </View>
        </View>
    )
}
