import React,{useState,useContext} from 'react'
import {View , Text,TextInput} from 'react-native';
import {CatageoryContext} from '../context/AppContext';


export default function AmountSearch() {
    const [amount, setAmount,amountt] = useState()

    const { setAmountSearch,amountSearch } = useContext(CatageoryContext);


  return (
    <View style={{height: "100%",
    width: "89%",}}>
        <TextInput
            placeholder='Enter Amount'
            value={amountSearch}
            keyboardType='number-pad'
            onChangeText={(value) => {
              //setAmount(value)
              setAmountSearch(value);
             
            }}
            style={{
              paddingHorizontal:10,
              borderColor: 'white',
              borderWidth: 2,
              backgroundColor: 'white',
              borderRadius: 20,
              fontSize: 15,
              color: 'black'
            }}
          />
    </View>
  )
}
