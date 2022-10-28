import React,{useContext} from 'react'
import { View, Text,TouchableOpacity,Image } from 'react-native';
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
import {CatageoryContext} from '../context/AppContext';


export default function GoalDetail({navigation}) {
  
  const {catageory}=useContext(CatageoryContext);
  return (
    

      <View style={{

        flex: 1,
        backgroundColor: 'white',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
      }}>
        {/* <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
            height: 50,
            alignItems: 'center',
            borderRadius: 10,
            backgroundColor: 'lightgray'
          }}
        >
          <TouchableOpacity >
            <FontAwesomeIcon icon={faArrowLeft} size={20} color="gray" />
          </TouchableOpacity>
          <View
            style={{ flexDirection: 'row' }}
          >
            <FontAwesomeIcon icon={faPen} size={20} color="gray" />
            <View style={{ marginLeft: 10 }}>
              <FontAwesomeIcon icon={faTrashCan} size={20} color="gray" />
            </View>

          </View>
        </View> */}
        <Text
          style={{ fontSize: 20, fontWeight: '500', paddingHorizontal: 15, color: 'black', marginTop: 40 }}
        >
          {catageory.type}
        </Text>

        {/*Progress Bar */}
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 15,
          marginTop: 20
        }}>
          <Progress.Pie     progress={catageory.progress} size={200} color={catageory.progress === 1 ? "green" : "red"} />
        </View>

        {/* Detail */}
        <View
          style={{
            marginTop: 20,
            paddingHorizontal: 15,
            justifyContent: 'space-between',
            flexDirection: 'row',

          }}
        >
          <Text style={{ fontSize: 18, fontWeight: '600', color: 'black',fontFamily:"Inter" }}>Target Amount</Text>

          <Text style={{ fontSize: 18, color: 'black' }}>{catageory.targetAmount}$</Text>
        </View>
        <View
          style={{
            marginTop: 10,
            paddingHorizontal: 15,
            justifyContent: 'space-between',
            flexDirection: 'row',

          }}
        >
          <Text style={{ fontSize: 18, fontWeight: '600', color: 'black',fontFamily:"Inter" }}>Amount Saved</Text>

          <Text style={{ fontSize: 18, color: 'black' }}>{catageory.savedAmount}$</Text>
        </View>
        <View
          style={{
            marginTop: 10,
            paddingHorizontal: 15,
            justifyContent: 'space-between',
            flexDirection: 'row',

          }}
        >
          <Text style={{ fontSize: 18, fontWeight: '600', color: 'black',fontFamily:"Inter" }}>Remaining Amount</Text>

          <Text style={{ fontSize: 18, color: 'black' }}>{catageory.remainingAmount}$</Text>
        </View>
        <View
          style={{
            marginTop: 10,
            paddingHorizontal: 15,
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: '600', color: 'black',fontFamily:"Inter" }}>Target Date</Text>
          <Text style={{ fontSize: 18, color: 'black' }}>{catageory.date}$</Text>
        </View>

        <View
          style={{

            paddingHorizontal: 20,
            marginTop: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Main")}>
            <View style=
              {{
                height: 50,
                width: 270,
                paddingHorizontal: 10,
                marginTop: 20,
                backgroundColor: "#FF6B6B",
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                borderRadius: 10,
              }}
            >
              <Image source={Below} style={{}} />
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 15,
                  color: 'white',
                }}
              >Withdraw
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
  )
}
