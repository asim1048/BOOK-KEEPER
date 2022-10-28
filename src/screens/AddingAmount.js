import React, { useState, useContext } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { CatageoryContext } from '../context/AppContext';

import { useToast } from 'native-base';

import { tags } from '../constants/data';


export default function AddingAmount({ navigation }) {
  const toast = useToast();

  const [amount, setAmount] = useState(0);
  const { totalBalance, setTotalBalance } = useContext(CatageoryContext);
  const [tagRender,setTagRender]=useState(true);

  
  let count = 0;

  const hanleButton = () => {
    setTotalBalance(Number(totalBalance) + Number(amount));
    navigation.navigate("Main");
    toast.show({
      description: amount < 0 ? "Balance Subtracted Successfully.!" : "Balance Added Successfully.!",
      duration: 3000,
    })
  }
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 30,
        backgroundColor: "white",
      }}
    >
      <Text style={{
        fontSize: 17,
        fontWeight: '500',
        marginTop: 30,
        color: "black",
      }}>
        Enter Amount
      </Text>
      <Text style={{
        fontSize: 17,
        marginTop: 15,
        color: "black",
      }}>
        Add Cash To Your Current Amount
      </Text>
      <TextInput style=
        {{
          borderBottomWidth: 1,
          fontSize: 16,
          marginTop: 15
        }}
        placeholder='Enter Amount'

        keyboardType='number-pad'
        autoFocus={false}
        onChangeText={(e) => setAmount(e)}
      />

      {/* Tags */}
      <View style={{
        marginTop: 100,
        justifyContent:"space-between"
      }}>
        {/* 1st Row */}
        <View style={{
          flexDirection:'row',
          justifyContent:"space-between",
        }}>
          <View style={{height:40, width:100,backgroundColor:tags[0].selected?"#FDDE83":'lightgray',alignItems:"center",justifyContent:'center',borderRadius:30}}>
            <TouchableOpacity onPress={()=>{tags[0].selected=!tags[0].selected;setTagRender(!tagRender)}}>
            <Text style={{fontSize:15,fontWeight:'400',color:'black'}}>{tags[0].name}</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginLeft:5,height:40, width:100,backgroundColor:tags[1].selected?"#FDDE83":'lightgray',alignItems:"center",justifyContent:'center',borderRadius:30}}>
            <TouchableOpacity onPress={()=>{tags[1].selected=!tags[1].selected;setTagRender(!tagRender)}}>
            <Text style={{fontSize:15,fontWeight:'400',color:'black'}}>{tags[1].name}</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginLeft:5,height:40, width:100,backgroundColor:tags[2].selected?"#FDDE83":'lightgray',alignItems:"center",justifyContent:'center',borderRadius:30}}>
            <TouchableOpacity onPress={()=>{tags[2].selected=!tags[2].selected;setTagRender(!tagRender)}}>
            <Text style={{fontSize:15,fontWeight:'400',color:'black'}}>{tags[2].name}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 2nd Row */}
        <View style={{
          flexDirection:'row',
          justifyContent:"space-between",
          marginTop:10,
        }}>
          <View style={{height:40, width:100,backgroundColor:tags[3].selected?"#FDDE83":'lightgray',alignItems:"center",justifyContent:'center',borderRadius:30}}>
            <TouchableOpacity onPress={()=>{tags[3].selected=!tags[3].selected;setTagRender(!tagRender)}}>
            <Text style={{fontSize:15,fontWeight:'400',color:'black'}}>{tags[3].name}</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginLeft:5,height:40, width:100,backgroundColor:tags[4].selected?"#FDDE83":'lightgray',alignItems:"center",justifyContent:'center',borderRadius:30}}>
            <TouchableOpacity onPress={()=>{tags[4].selected=!tags[4].selected;setTagRender(!tagRender)}}>
            <Text style={{fontSize:15,fontWeight:'400',color:'black'}}>{tags[4].name}</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginLeft:5,height:40, width:100,backgroundColor:tags[5].selected?"#FDDE83":'lightgray',alignItems:"center",justifyContent:'center',borderRadius:30}}>
            <TouchableOpacity onPress={()=>{tags[5].selected=!tags[5].selected;setTagRender(!tagRender)}}>
            <Text style={{fontSize:15,fontWeight:'400',color:'black'}}>{tags[5].name}</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>

      <TouchableOpacity onPress={hanleButton}>
        <View style={{
          marginTop: 50,
          height: 50,
          backgroundColor: '#FDDE83',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
        }}>
          <Text style={{ fontSize: 18, fontWeight: '500', color: "black" }}>Save
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}
