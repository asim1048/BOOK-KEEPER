import React, { useEffect, useRef, useState } from 'react'
import { View, Text, ScrollView, FlatList, TouchableOpacity, Image, Alert, Modal } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendar, faL, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Catageory } from './../constants/data';
import DateTimePickerModal from 'react-native-modal-datetime-picker';


import { CameraRoll } from "@react-native-camera-roll/camera-roll";

import { useToast } from 'native-base';


import { captureScreen } from 'react-native-view-shot';

export default function Stats({ navigation }) {

  const [isDatePickerVisible1, setDatePickerVisibility1] = React.useState(false);
  const [isDatePickerVisible2, setDatePickerVisibility2] = React.useState(false);

  const [limitOut, setLimitOut] = useState(false);
  
  const [offDownload, setOffDownload] = useState(false);
  const [date1, setDate1] = useState();
  const [date2, setDate2] = useState();

  const [imageURI, setImageURI] = useState();

  const ref = useRef();
  const toast = useToast();

  const downloadImage = () => {
    try {
      const image = CameraRoll.save(imageURI,{type:"photo",album:"Book Keeper"});
      if (image) {
        toast.show({
          description: "Statement Saved Successfully in Gallery (Book Keeper) folder",
          duration: 3000,
        })
      }
      setOffDownload(false);
    } catch (error) {
      console.log('error', error);
    }
  };

  const takeScreenShot = () => {
    setOffDownload(true);
    // To capture Screenshot
    captureScreen({
      // Either png or jpg (or webm Android Only), Defaults: png
      format: 'jpg',
      // Quality 0.0 - 1.0 (only available for jpg)
      quality: 1,
    }).then(
      //callback function to get the result URL of the screnshot
      (uri) => {
       // console.log(uri);
        setImageURI(uri);
        setLimitOut(true);
      },
      (error) => console.error('Oops, Something Went Wrong', error),
    );
  };

  const handleButton = () => {
    takeScreenShot();

  }


  const renderItem = ({ item }) => {

    return (
      <View style={{
        marginTop: 5,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: "space-between",
      }}>
        <View>
          <Text style={{ fontSize: 17, fontWeight: '500', color: 'black' }}>{item.name}</Text>
          <Text style={{ fontSize: 15, color: 'gray' }}>{item.date}</Text>
        </View>
        <Text style={{ fontSize: 17, fontWeight: '500', color: 'black' }}>${item.amount}</Text>
      </View>
    )
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: offDownload?"white":'#FFFFF7 ',
      }}
    >
      {/* Total Balance */}
      <View style={{
        backgroundColor: !limitOut ? "white" : 'lightgray',
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

                  flex: 1,
                  marginVertical: 130,
                  marginHorizontal: 50,
                  backgroundColor: 'white',
                  borderRadius: 20,
                  borderWidth: 1,
                  borderColor: 'gray',
                  //shadow
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 80,
                  },
                  shadowOpacity: 0.9,
                  shadowRadius: 10,
                  elevation: 100
                }}>
                  <View style={{
                    marginTop: 5,
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: "flex-end",
                    alignItems: 'center',
                    paddingHorizontal: 15,
                  }}>
                    <View>
                      <TouchableOpacity onPress={() => {
                        setLimitOut(false); setOffDownload(false); //navigation.navigate("Main")
                      }}>
                        <FontAwesomeIcon icon={faXmark} size={25} color="black" />
                      </TouchableOpacity>
                    </View>
                  </View>
                  {
                    imageURI && (
                      <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                        <Image
                          source={{ uri: imageURI }}
                          style={{
                            width: 350,
                            height: 350,
                            marginTop: 10,
                            resizeMode: 'contain',
                            marginTop: 5
                          }}
                        />

                      </View>
                    )
                  }
                  <View style={{
                    alignItems: "center",
                    justifyContent: 'center'
                  }}>
                    <TouchableOpacity onPress={() => {
                      downloadImage();
                      setOffDownload(false);
                      setLimitOut(false);
                      //navigation.navigate("Main");
                    }}>
                      <View style={{
                        height: 40,
                        width: 130,
                        marginTop: 15,
                        alignItems: "center",
                        justifyContent: 'center',
                        backgroundColor: '#FDDE83',
                        borderRadius: 20,
                        marginBottom: 30,
                      }}>

                        <Text style={{
                          fontSize: 20,
                          fontFamily: "Inter",
                          fontWeight: '600',
                          color: "black"
                        }}>Save</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>

            </View>
          )
        }

        <View
          style={{
            flex: 1,
            height: 50,
            alignItems: "center",
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            flexDirection: 'row',
          }}
        >

          <Text style={{
            fontSize: 17,
            fontWeight: '600',
            color: "black",
          }}>
            Total Balance
          </Text>
          <Text style={{
            fontSize: 17,
            fontWeight: '400',
            color: "black",
          }}>

            ${50000}
          </Text>
        </View>
      </View>


      {/* Current Balance */}
      <View style={{
        backgroundColor: !limitOut ? "white" : 'lightgray',
        marginTop: 3,
      }}
      >
        <View
          style={{
            flex: 1,
            height: 50,
            alignItems: "center",
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            flexDirection: 'row',
          }}
        >

          <Text style={{
            fontSize: 17,
            fontWeight: '600',
            color: "black",
          }}>
            Current Balance
          </Text>
          <Text style={{
            fontSize: 17,
            fontWeight: '400',
            color: "black",
          }}>

            ${50000}
          </Text>
        </View>
      </View>

      {/* Total Expense */}
      <View style={{
        backgroundColor: !limitOut ? "white" : 'lightgray',
        marginTop: 3,
      }}
      >
        <View
          style={{
            flex: 1,
            height: 50,
            alignItems: "center",
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            flexDirection: 'row',
          }}
        >

          <Text style={{
            fontSize: 17,
            fontWeight: '600',
            color: "black",
          }}>
            Total Expense
          </Text>
          <Text style={{
            fontSize: 17,
            fontWeight: '400',
            color: "black",
          }}>

            ${30000}
          </Text>
        </View>
      </View>

      {/* Goal Amount */}
      <View style={{
        backgroundColor: !limitOut ? "white" : 'lightgray',
        marginTop: 3,
      }}
      >
        <View
          style={{
            flex: 1,
            height: 50,
            alignItems: "center",
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            flexDirection: 'row',
          }}
        >

          <Text style={{
            fontSize: 17,
            fontWeight: '600',
            color: "black",
          }}>
            Goal Amount
          </Text>
          <Text style={{
            fontSize: 17,
            fontWeight: '400',
            color: "black",
          }}>

            ${40000}
          </Text>
        </View>
      </View>
      {/* Date Section */}
      <View style={{
        marginTop: 10,
        flexDirection: 'row',
        paddingHorizontal: 20,
        justifyContent: 'space-between'
      }}>
        <TouchableOpacity onPress={() => setDatePickerVisibility1(true)}>

          <DateTimePickerModal
            isVisible={isDatePickerVisible1}
            minimumDate={new Date()}
            mode="date"
            onConfirm={(date) => {
              setDate1(date);
              setDatePickerVisibility1(false);
            }}
            onCancel={() => setDatePickerVisibility1(false)}
          />

          <View style={{
            flexDirection: 'row',
            height: 50,
            width: 150,
            borderWidth: 2,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}>
            <FontAwesomeIcon icon={faCalendar} size={20} color="black" />
            <Text style={{
              fontSize: 17,
              color: "black",
              marginLeft: 5,
            }}>{!date1 ? "Mon-July-2025" : date1.toLocaleString('en-us', { day: 'numeric' }) + "-" + date1.toLocaleString('en-us', { month: 'short' }) + "-" + date1.getFullYear()}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setDatePickerVisibility2(true)}>

          <DateTimePickerModal
            isVisible={isDatePickerVisible2}
            minimumDate={new Date()}
            mode="date"
            onConfirm={(date) => {
              setDate2(date);
              setDatePickerVisibility2(false);
            }}
            onCancel={() => setDatePickerVisibility2(false)}
          />
          <View style={{
            flexDirection: 'row',
            height: 50,
            width: 150,
            borderWidth: 2,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}>
            <FontAwesomeIcon icon={faCalendar} size={20} color="black" />
            <Text style={{
              fontSize: 17,
              color: 'black',
              marginLeft: 5,
            }}>{!date2 ? "Mon-July-2025" : date2.toLocaleString('en-us', { day: 'numeric' }) + "-" + date2.toLocaleString('en-us', { month: 'short' }) + "-" + date2.getFullYear()}</Text>
          </View>

        </TouchableOpacity>
      </View>

      {/* Catageroies */}
      <ScrollView
        style={{
          marginTop: 5,
          height: 330,
          backgroundColor: !limitOut ? "white" : 'lightgray',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderTopWidth: 2,
          borderColor: 'gray',
        }}
      >
        <FlatList
          data={Catageory}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />

      </ScrollView>

      {/* Button */}

      {
        !offDownload && (
          <View style={{ backgroundColor: 'white', }}>
            <TouchableOpacity onPress={handleButton}>
              <View style={{
                height: 50,
                marginHorizontal: 15,
                alignItems: "center",
                justifyContent: 'center',
                borderRadius: 20,
                backgroundColor: !limitOut ? '#FDDE83' : '#fffdaf',
              }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: '500',
                    color: "black"
                  }}
                >
                  Download Statement
                </Text>

              </View>
            </TouchableOpacity>
          </View>
        )
      }

      {
        !offDownload && (
          
      <View style={{ backgroundColor: 'white', height: 20 }}></View>
        )
      }



    </ScrollView>
  )
}
