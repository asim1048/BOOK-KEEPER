import React,{useState} from 'react'
import {View , Text, TouchableOpacity,TextInput, Modal, Image} from 'react-native';
//import {Input, ScrollView, Slider} from 'native-base';
import { useToast } from 'native-base';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import limitOUT from './../images/limitOut.png'

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


export default function CreateExpense({navigation}) {
  const toast = useToast();

  const [expenseName,setExpenseName]=useState("");
  const [amount,setAmount]=useState(0);
  const [limit,setLimit]=useState(0);
  const [limitOut,setLimitOut]=useState(false);

  const hanleButton=()=>{
    if(amount>limit){
      setLimitOut(true);
    }
    else{
      const Input={
        ExpenseName:expenseName,
        Amount:amount,
        Limit:limit,
  
      }
      console.log(Input);
  
      toast.show({
        description:"Expense Created Successfully.!",
        duration:3000,
    })
      navigation.navigate("Main");
    }
    
  }
  return (
    <View
      style={{
        flex:1,
        paddingHorizontal:30,
        backgroundColor:!limitOut?"white":"lightgray",
      }}
    >
      {
              limitOut && (
                <View style={{


                }}>
                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={limitOut}
                    onRequestClose={() => {
                      Alert.alert("Modal has been closed.");
                      setLimitOut(false);
                    }}
                  >
                    <View style={{

                      flex: 0.35,
                      marginTop:190,
                      marginHorizontal:"20%",
                      backgroundColor: 'white',
                      borderRadius: 20,
                      borderWidth:1,
                      borderColor:'gray',
                      //shadow
                      shadowColor: "#000",
                      shadowOffset: {
                        width: 0,
                        height: 80,
                      },
                      shadowOpacity:  0.9,
                      shadowRadius: 10,
                      elevation: 100
                    }}>
                      <View style={{
                        marginTop:10,
                        paddingHorizontal:10,
                        flexDirection:'row',
                        justifyContent:'space-between',
                      }}>
                        <View></View>

                        <TouchableOpacity onPress={()=>setLimitOut(false)}>
                          
                        <FontAwesomeIcon icon={faXmark} size={25} color="black" />

                        </TouchableOpacity>
                      </View>
                      <View style={{
                        marginTop:10,
                        alignItems:'center',
                        justifyContent:'center'
                      }}>
                        <Image source={limitOUT}/>
                        <Text style={{
                        marginTop:10,
                        fontFamily:"Inter",
                        fontWeight:'600',
                        fontSize:18,
                        color:"black"
                      }}>
                        Limit Exceeded!
                      </Text>
                      </View>
                     
                    </View>

                  </Modal>

                </View>
              )
            }

      <Text style={{
        fontSize:17,
        fontWeight:'500',
        marginTop:20,
        color:"black",
      }}>
        Name
      </Text>
      <TextInput style=
       {{
         borderBottomWidth:1,
         fontSize:16,
        }}
       placeholder='Expense Name'
        
        keyboardType='default'
        autoFocus={false}
        onChangeText={(e)=>setExpenseName(e)}
       />


      <Text style={{
        fontSize:17,
        fontWeight:'500',
        marginTop:20,
        color:"black",
      }}>
        Amount
      </Text>
      <TextInput style=
       {{
         borderBottomWidth:1,
         fontSize:16,
        }}
       placeholder='$0'
        
        keyboardType='number-pad'
        autoFocus={false}
        onChangeText={(e)=>setAmount(e)}
       />
      <Text style={{
        fontSize:17,
        fontWeight:'500',
        marginTop:20,
        color:"black",
      }}>
        Set Limit
      </Text>
      <TextInput style=
       {{
         borderBottomWidth:1,
         fontSize:16,
        }}
       placeholder='$0'
        
        keyboardType='number-pad'
        autoFocus={false}
        onChangeText={(e)=>setLimit(e)}
       />
      <TouchableOpacity onPress={hanleButton}>
      <View style={{
        marginTop:30,
        height:50,
        backgroundColor: '#FDDE83',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
      }}>
        <Text style={{fontSize:18, fontWeight:'500', color:"black"}}>Save
        </Text>
      </View>
      </TouchableOpacity>
    </View>
  )
}
