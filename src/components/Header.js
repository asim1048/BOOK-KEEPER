import React, { useState ,useContext} from 'react'
import { View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import {CatageoryContext} from '../context/AppContext'

import Back from '../images/Back.png'
import Plus from '../images/Plus.png'
import Signal from '../images/Signal.png'
import Vector from '../images/Vector.svg'
import {
    faArrowLeft,
    faSignalGood,
    faXmark,
    faSignalBarsGood,
    faCircle,
    faCircleCheck,
    faPen,
    faTrashCan,
    faCirclePlus,
    faSignal,
    faSignOutAlt,
    faSignIn,
    faSignalPerfect,
    
} from '@fortawesome/free-solid-svg-icons';
export default function Header({ navigation}) {

    const {setModalBackGround}=useContext(CatageoryContext);
    const [show, setShow] = useState(false);
    return (
        <View style={{
            flex: 1,
            paddingHorizontal: 15,
        }}>
            <View style={{
                flex: 1,
                justifyContent: 'space-between',
                flexDirection: 'row',
            }}>
                < View style={{ flexDirection: 'row' }}>
                    <FontAwesomeIcon icon={faArrowLeft} size={25} color="gray" />
                    
                    <Text style={{ marginLeft: 5, fontSize: 20 }}>Book Keeper</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => {setModalBackGround(true);setShow(true); console.log("Here")}}>
                        
                    <FontAwesomeIcon icon={faCirclePlus} size={25} color="gray" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate("Stats")}>
                        <Image source={Signal} style={{marginLeft:20}}/>
                        
                    </TouchableOpacity>
                </View>
            </View>
            {/* Modal */}
            {
                show && (
                    <View style={{
                    }}>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={show}
                            onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                                setModalBackGround(false);
                                setShow(false);
                            }}
                        >
                            <View style={{
                                elevation: 100,
                                flex: 0.28,
                                margin: 10,
                                width: '90%',
                                marginTop: "62%",
                                marginLeft: "5%",
                                backgroundColor: 'white',
                                borderRadius: 20,
                            }}>
                                <View
                                    style={{
                                        paddingHorizontal: 20,
                                        marginTop: 10,
                                    }}
                                >
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 17,
                                                fontWeight: '500',
                                                color: 'black',
                                            }}
                                        >Create A Catageory</Text>
                                        <TouchableOpacity onPress={() => {setModalBackGround(false);setShow(false)}}>

                                            <FontAwesomeIcon icon={faXmark} size={17} color="black" />
                                        </TouchableOpacity>
                                    </View>
                                    <View
                                        style={{
                                            justifyContent: 'space-between',
                                            marginTop: 35,
                                            flexDirection: "row",
                                        }}
                                    >
                                    <TouchableOpacity onPress={()=>{setModalBackGround(false);setShow(false);navigation.navigate("Create Expense")}}>
                                        <View style={{
                                            height:45,
                                            width: 130,
                                            borderRadius: 12,
                                            backgroundColor: '#FDDE83',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                            <Text style={{
                                                color: 'black',
                                                fontSize: 17,
                                                fontWeight: '500',
                                            }}>
                                                Expense
                                            </Text>
                                        </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={()=>{setModalBackGround(false);setShow(false);navigation.navigate("Create Goal")}}>
                                        <View style={{
                                             height:45,
                                             width: 130,
                                            borderRadius: 12,
                                            backgroundColor: '#FDDE83',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                            <Text style={{
                                                color: 'black',
                                                fontSize: 17,
                                                fontWeight: '500',
                                            }}>
                                                Goal
                                            </Text>
                                        </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </Modal>

                    </View>
                )
            }
        </View>
    )
}
