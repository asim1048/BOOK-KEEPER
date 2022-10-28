import React, { useContext, useEffect, useState } from 'react'
import { View, Text, TextInput, Image, TouchableOpacity, FlatList, Modal } from 'react-native';
import * as Progress from "react-native-progress";
import CheckBox from '@react-native-community/checkbox';
import { ScrollPicker } from 'react-native-value-picker';
import { Swipeable } from 'react-native-gesture-handler';


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
  faPenToSquare,
  faCirclePlus,
  faCircle,
  faCircleCheck,
  faPen,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';

import { CatageoryContext } from '../context/AppContext';


import Header from '../components/Header'
import BalanceSection from '../components/BalanceSection'
import ArrowRight from '../images/ArrowRight.png'
import Ellipse from '../images/Ellipse.png'
import Circle from '../images/Circle.png';
import Below from '../images/Below.png';

import Signal from '../images/Signal.png'

import Edit from '../images/Edit.png';
import Delete from '../images/Delete.png';
import AmountSearchh from '../components/AmountSearch';
import Nothing from '../images/nothing.jpeg'

import { Cars, Catageory } from '../constants/data';

export default function Home({ navigation }) {
  const { setCatageory, totalBalance } = useContext(CatageoryContext);
  const [isExpense, setIsExpense] = useState(true);
  const [selectCatageory, setSelectCatageory] = useState(false);
  const [detail, setDetail] = useState(false)
  const [detailItem, setDetailItem] = useState()
  const [isSelected, setisSelected] = useState(false)
  const [amountSearch, setAmountSearch] = useState();

  const [show, setShow] = useState(false);

  const [nothingToShow, setNothingToShow] = useState(false);


  const [selectedCatageory, setSelectedCatageory] = useState("");

  const renderRightActions = (
    progress,
    dragX,
    onClick,
  ) => {
    return (
      <View style={{
        height: 50,
        marginLeft: 10,
        width: 100,
        backgroundColor: "#FDDE83",
        justifyContent:"center",
        flexDirection:'row',
        alignItems:'center'
      }}>
        
          <TouchableOpacity>
            <FontAwesomeIcon icon={faPenToSquare} size={20} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft:10,}}>
            <FontAwesomeIcon icon={faTrashCan} size={20} color="black" />
          </TouchableOpacity>
        </View>
    );
  };

  function onPress() {
    setSelectCatageory(true);
    console.log(selectCatageory)
  }
  //console.log(Cars)
  const renderItemCatageory = ({ item }) => {
    let yes = item.selected;
    setisSelected(yes);
    return (
      <View style={{
        flex: 1,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
      }}>
        <Text
          style={{
            fontSize: 18,
            color: "black",
            fontWeight: '500'
          }}
        >{item.name}</Text>
        <TouchableOpacity onPress={() => setSelectedCatageory(item.name)}>
          <TouchableOpacity onPress={() => console.log("Select")}>
            <CheckBox
              boxType={"circle"}
              value={yes}
              onValueChange={(newValue) => { item.selected = newValue; setisSelected(newValue); yes = newValue; }}
            />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    )
  }
  // const AmountSearch = () => {
  //   return (
  //     <View style={{
  //       flex: 1,
  //       paddingHorizontal: 25,
  //       justifyContent: 'center',
  //       marginTop: -10,
  //     }}>
  //       <View style={{
  //         flexDirection: 'row',
  //       }}>
  //         <AmountSearchh />
  //         <View style={{ height: "100%", width: "11%", marginTop: -15 }}>
  //           <TouchableOpacity
  //             onPress={onPress}
  //           >
  //             <Image source={Ellipse} style={{ marginLeft: -40 }} />
  //             <Image source={ArrowRight} style={{ marginTop: -65 }} />
  //           </TouchableOpacity>
  //         </View>

  //         {
  //           selectCatageory && (
  //             <View style={{


  //             }}>
  //               <Modal
  //                 animationType="slide"
  //                 transparent={true}
  //                 visible={selectCatageory}
  //                 onRequestClose={() => {
  //                   Alert.alert("Modal has been closed.");
  //                   setSelectCatageory(false);
  //                 }}
  //               >
  //                 <View style={{

  //                   flex: 1,
  //                   marginTop: 40,
  //                   margin: 10,
  //                   backgroundColor: 'white',
  //                   borderTopRightRadius: 20,
  //                   borderTopLeftRadius: 20,
  //                 }}>
  //                   <View style={{
  //                     flexDirection: 'row',
  //                     justifyContent: 'space-between',
  //                     paddingHorizontal: 10,
  //                     height: 70,
  //                     alignItems: 'center',
  //                     borderBottomWidth: 1,
  //                     borderBottomColor: 'black'
  //                   }}>
  //                     <Text style={{
  //                       fontSize: 20,
  //                       color: "gray"
  //                     }}>Select Catageory</Text>
  //                     <TouchableOpacity
  //                       onPress={() => setSelectCatageory(false)}
  //                     >
  //                       <FontAwesomeIcon icon={faXmark} size={25} color="gray" />
  //                     </TouchableOpacity>
  //                   </View>
  //                   <FlatList
  //                     data={Catageory}
  //                     renderItem={renderItemCatageory}
  //                     keyExtractor={item => item.id}
  //                     style={{
  //                       marginTop: 20,
  //                     }}
  //                   />
  //                   <View
  //                     style={{
  //                       flexDirection: 'row',
  //                       justifyContent: "space-between",
  //                       marginBottom: 10,

  //                     }}
  //                   >
  //                     <Text></Text>
  //                     <View style={{
  //                       height: 50, width: 100,
  //                       backgroundColor: '#FDDE83', justifyContent: 'center',
  //                       alignItems: 'center',
  //                       borderRadius: 15,
  //                       marginRight: 10
  //                     }}>
  //                       <TouchableOpacity
  //                         onPress={() => setSelectCatageory(false)}
  //                       >
  //                         <Text style={{
  //                           fontSize: 20,
  //                           fontWeight: "bold"

  //                         }}>Done</Text>
  //                       </TouchableOpacity>
  //                     </View>
  //                   </View>
  //                 </View>

  //               </Modal>

  //             </View>
  //           )
  //         }

  //       </View>
  //     </View>
  //   )
  // }
  const Categeory = () => {
    return (
      <View style={{
        flex: 1,
        paddingHorizontal: 35,
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}>
        <View
          style={{
            height: 45,
            width: 100,
            backgroundColor: isExpense === true ? "#FDDE83" : 'white',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 30
          }}

        >
          <TouchableOpacity
            onPress={() => { setIsExpense(!isExpense) }}

          >
            <Text
              style={{
                fontSize: 18,
                color: 'black',
                fontWeight: isExpense ? "500" : "400",

              }}
            >Expense</Text>

          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 45,
            width: 100,
            backgroundColor: isExpense === false ? "#FDDE83" : 'white',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 30
          }}

        >
          <TouchableOpacity
            onPress={() => { setIsExpense(!isExpense) }}

          >
            <Text
              style={{
                fontSize: 18,
                color: 'black',
                fontWeight: !isExpense ? "500" : "400"
              }}
            >Goal</Text>

          </TouchableOpacity>
        </View>
        {/* <View
          style={{
            height: 50,
            width: 110,
            backgroundColor: isExpense === false ? "#FDDE83" : 'white',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 30,
          }}

        >
          <TouchableOpacity
            onPress={() => { setIsExpense(!isExpense) }}

          >
            <Text
              style={{
                fontSize: 20,
                color: 'black'

              }}
            >Goal</Text>

          </TouchableOpacity>
        </View> */}
      </View>
    )
  }

  const RenderCatageory = ({ item }) => {
    return (
      <View style={{
        paddingHorizontal: 30,
        marginTop: 15,
      }}><TouchableOpacity
        onPress={() => {
          setCatageory(item);
          if (isExpense) {

            navigation.navigate("Expense Detail");
          }
          else {
            navigation.navigate("Goal Detail");
          }
        }
        }
      >
          <Swipeable
            renderRightActions={(progress, dragX) =>
              renderRightActions(progress, dragX, onClick => { console.log("Perform") })
            }
            overshootRight={false}
            onSwipeableOpen={() => console.log("Open")}
          >
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',

            }}>
              <Text style={{
                fontSize: 20,
                color: 'black',
                fontFamily: "Inter",
                fontWeight: '500'
              }}>{item.type}</Text>

              <Text style={{
                fontSize: 20,
                color: 'black',
                fontFamily: 'inter',
                fontWeight: '700'
              }}>{item.price}$</Text>

            </View>
            <View style={{ marginTop: 12 }}>



              <Progress.Bar progress={item.progress} borderRadius={10} unfilledColor={"#D9D9D9"} height={9} width={297} color={item.progress === 1 ? "green" : "red"} />



            </View>

          </Swipeable>
        </TouchableOpacity>

        {/* Swippable */}


      </View>
    )

  }

  var count = 0;
  const renderItem = ({ item }) => {

    if (isExpense && item.Catageory == "Expense") {

      if (amountSearch == undefined || amountSearch == '' || amountSearch == undefined) {

        setNothingToShow(false);
        return (
          <View>
            <RenderCatageory item={item} /></View>
        )
      }
      else if (amountSearch != item.price) {
        if (count == 0) {
          setNothingToShow(true);
          count = 0;
          // console.log("Show");
        }
      }
      else if (amountSearch == item.price) {
        //console.log("Not Show");
        setNothingToShow(false);
        count++;
        return (
          <View>
            <RenderCatageory item={item} /></View>
        )
      }
    }
    else if (!isExpense && item.Catageory == "Goal") {
      if (amountSearch == undefined || amountSearch == '' || amountSearch == undefined) {
        setNothingToShow(false);
        return (
          <View>
            <RenderCatageory item={item} /></View>
        )
      }
      else if (amountSearch != item.price) {
        if (count == 0) {
          setNothingToShow(true);
          count = 0;
          // console.log("Show");
        }
      }
      else if (amountSearch == item.price) {
        // console.log("Not Show");
        setNothingToShow(false);
        count++;
        return (
          <View>
            <RenderCatageory item={item} /></View>
        )
      }
    }
  };


  return (
    <View style={{
      flex: 1,
    }}>
      <View style={{
        marginTop: 5,
        height: "5%",
      }}>
        <Header navigation={navigation} />

      </View>
      <View style={{
        height: "20%",
      }}>
        <BalanceSection navigation={navigation} />
      </View>

      {/* Amount Search Section */}
      <View style={{
        height: "5%",
      }}>
        {/*<AmountSearch />*/}
        <View style={{
          flex: 1,
          paddingHorizontal: 25,
          justifyContent: 'center',
          marginTop: -10,
        }}>
          <View style={{
            flexDirection: 'row',
          }}>
            <View style={{
              height: "100%",
              width: "89%",
            }}>
              <TextInput
                placeholder='Enter Amount'
                value={amountSearch}
                keyboardType='number-pad'
                onChangeText={(value) => {
                  //setAmount(value)
                  setAmountSearch(value);

                }}
                style={{
                  paddingHorizontal: 25,
                  borderColor: 'white',
                  borderWidth: 2,
                  backgroundColor: 'white',
                  borderRadius: 10,
                  fontSize: 15,
                  color: 'black'
                }}
              />
            </View>
            <View style={{ height: "100%", width: "11%", marginTop: -15 }}>
              <TouchableOpacity
                onPress={onPress}
              >
                <Image source={Ellipse} style={{ marginLeft: -40 }} />
                <Image source={ArrowRight} style={{ marginTop: -65 }} />
              </TouchableOpacity>
            </View>

            {
              selectCatageory && (
                <View style={{


                }}>
                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={selectCatageory}
                    onRequestClose={() => {
                      Alert.alert("Modal has been closed.");
                      setSelectCatageory(false);
                    }}
                  >
                    <View style={{

                      flex: 1,
                      marginTop: 40,
                      margin: 10,
                      backgroundColor: 'white',
                      borderTopRightRadius: 20,
                      borderTopLeftRadius: 20,
                    }}>
                      <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingHorizontal: 10,
                        height: 70,
                        alignItems: 'center',
                        borderBottomWidth: 1,
                        borderBottomColor: 'black'
                      }}>
                        <Text style={{
                          fontSize: 20,
                          color: "gray"
                        }}>Select Catageory</Text>
                        <TouchableOpacity
                          onPress={() => setSelectCatageory(false)}
                        >
                          <FontAwesomeIcon icon={faXmark} size={25} color="gray" />
                        </TouchableOpacity>
                      </View>
                      <FlatList
                        data={Catageory}
                        renderItem={renderItemCatageory}
                        keyExtractor={item => item.id}
                        style={{
                          marginTop: 20,
                        }}
                      />
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: "space-between",
                          marginBottom: 10,

                        }}
                      >
                        <Text></Text>
                        <View style={{
                          height: 50, width: 100,
                          backgroundColor: '#FDDE83', justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: 15,
                          marginRight: 10
                        }}>
                          <TouchableOpacity
                            onPress={() => setSelectCatageory(false)}
                          >
                            <Text style={{
                              fontSize: 20,
                              fontWeight: "bold"

                            }}>Done</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>

                  </Modal>

                </View>
              )
            }

          </View>
        </View>

      </View>
      <View style={{
        backgroundColor: 'white',
        marginTop: 15,
        borderTopLeftRadius: 25,

        borderTopRightRadius: 25,
        width: "100%",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 80,
        },
        shadowOpacity: 10,
        shadowRadius: 10,
        elevation: 15,

      }}>
        {/* Catageory Section */}
        <View style={{
          height: "8%",
          marginTop: 15,
        }}>
          <Categeory />

          {/* No Search Record found */}
          {
            nothingToShow && (
              <View style={{
                marginTop: 70,
                backgroundColor: "white",
                height: 70,
                alignItems: "center",
                justifyContent: 'center',
                borderRadius: 20,
                borderWidth: 2,
                borderColor: 'gray',
              }}>
                <Text style={{ fontSize: 18, color: 'black', fontWeight: '600' }}>No {isExpense ? "Expense" : "Goal"} Found For Amount {amountSearch}</Text>
              </View>
            )
          }

        </View>

        {/* Cars Details */}
        <FlatList
          data={Cars}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>

      <View style={{
        flex: 1,
        backgroundColor: 'white'
      }}>

      </View>

    </View>
  )
}
