import React,{useState,useEffect,useRef} from 'react'
import {View , Text, TouchableOpacity,TextInput} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useToast } from 'native-base';



export default function CreateGoal({navigation}) {

  const toast = useToast();

  
  const [goalName,setGoalName]=useState("");
  const [targetAmount,setTargetAmount]=useState(0);
  const [date,setDate]=useState();
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  
  const hanleButton=()=>{
    const Input={
      GoalName:goalName,
      TargetAmount:targetAmount,
      Date:date,
    }
    console.log(Input);

    toast.show({
      description:"Goal Created Successfully.!",
      duration:3000,
  })
    navigation.navigate("Main");
  }
  return (
    <View
      style={{
        flex:1,
        paddingHorizontal:30,
        backgroundColor:"white",
      }}
    >

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
       placeholder='Goal Name'
        
        keyboardType='default'
        autoFocus={false}
        onChangeText={(e)=>setGoalName(e)}
       />


      <Text style={{
        fontSize:17,
        fontWeight:'500',
        marginTop:20,
        color:"black",
      }}>
        Target Amount
      </Text>
      <TextInput style=
       {{
         borderBottomWidth:1,
         fontSize:16,
        }}
       placeholder='$0'
        
        keyboardType='number-pad'
        autoFocus={false}
        onChangeText={(e)=>setTargetAmount(e)}
       />
      <Text style={{
        fontSize:17,
        fontWeight:'500',
        marginTop:20,
        color:"black",
      }}>
         Target Date
      </Text>
      <TouchableOpacity onPress={()=>setDatePickerVisibility(true)}>
        <Text
          style={{
            fontSize:17,
            marginTop:8
          }}
        >{!date?"Select Date": date.toLocaleString('en-us', { day: 'numeric' })+"-"+date.toLocaleString('en-us', { month: 'short' })+"-"+date.getFullYear()}</Text>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        minimumDate={new Date()}
        mode="date"
        onConfirm={(date) => {
          setDate(date);
          setDatePickerVisibility(false);
        }}
        onCancel={() => setDatePickerVisibility(false)}
      />
      
      </TouchableOpacity>

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
