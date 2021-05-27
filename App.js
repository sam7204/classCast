import React, {useState,useCallback}from 'react';
import {StyleSheet, View,Text,Image,ScrollView,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { List } from 'react-native-paper';
function app(){
const [textShown, setTextShown] = useState(false); //To show ur remaining Text
const [lengthMore,setLengthMore] = useState(false); //to show the "Read more & Less Line"
const [getText,setText]=useState('The Indian Administrative Service (IAS) is the administrative arm of the All India Services and a All India civil service.[3] Considered the premier civil service of India,[3][4] the IAS is one of the three arms of the All India Services along with the Indian Police Service and the Indian Forest Service. Members of these three services serve the Government of India as well as the individual states. IAS officers may also be deployed to various public sector undertakings.As with other countries following the parliamentary system of government, the IAS is a part of the permanent bureaucracy of the nation,[5] and is an inseparable part of the executive of the Government of India. As such, the bureaucracy remains');
const toggleNumberOfLines = () => { //To toggle the show text or hide it
    setTextShown(!textShown);
}
const onTextLayout = useCallback(e =>{
    setLengthMore(e.nativeEvent.lines.length >=4); //to check the text is more than 4 lines or not
},[]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);
  const [open1, setOpen1] = useState(false);
  const [value1, setValue1] = useState(null);
  const [items1, setItems1] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);
  return(
   <View style={styles.container}>
   <View style={styles.head}>
   <Image
        style={styles.img}
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
    />
    <View style={{flex:1}}>
    <Text
    style={styles.text}>How to clear FRA without coaching vision IAS</Text>
    <View style={{
            paddingHorizontal: 10,
            flexDirection: "row",
            alignItems: "center"
        }}>
      <Icon
      style={{padding:10}}
    name='play'
    size={20}
    color='red'/>
    <Text>10 videos</Text>
    </View >
    </View>
    </View>
    <View style={{ height: 1, width: '100%', backgroundColor: '#b0aea9',}}/>
    <View style={{height:180}}>
    <ScrollView> 
      <Text style={{fontSize:22,fontWeight:'bold',paddingTop:10}}>Introduction</Text>
      <Text 
              onTextLayout={onTextLayout}
              numberOfLines={textShown ? undefined : 4}
              style={{ lineHeight: 21 ,textAlign:'justify'}}>{getText}</Text>
              {
                 lengthMore ? <Text
                  onPress={toggleNumberOfLines}
                  style={{ lineHeight: 21,color:'red' }}>{textShown ? 'Read less...' : 'Read more...'}</Text>
                  :null
              }
    </ScrollView>
    </View>
    <View style={{paddingBottom:15}}>
<List.Accordion  title="Fundamental Theorem of Arithmetic" style={styles.list} id="1" description="3 test">
      <List.Item title="Prime factorization Exercise" 
      left={props => <List.Icon {...props} icon="lock-open" color='green'/>}/>
      <List.Item title='Fill in the blanks'  left={props => <List.Icon {...props} icon="lock-open" color='green'/>}/>
      <List.Item title='Match the following' description=" starts 14 March"
       left={props => <List.Icon {...props} icon="lock" color="red"/>}
      />
    </List.Accordion>
    </View>
    <View>
    <List.Accordion title="HCF and LCM" id="2" description="10 test" 
    style={styles.list}
    >
     <List.Item title="Prime factorization Exercise" 
      left={props => <List.Icon {...props} icon="lock-open" color='green'/>}/>
      <List.Item title='Fill in the blanks'  left={props => <List.Icon {...props} icon="lock-open" color='green'/>}/>
      <List.Item title='Match the following' description=" starts 14 March"
       left={props => <List.Icon {...props} icon="lock" color="red"/>}
      />
    </List.Accordion>
    </View>
     </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:20,
    backgroundColor:'white',
    justifyContent:'flex-start',

  },
  head:{
    flexDirection:'row',
    height:160,
    width:'100%'
  },
  img:{
    padding:5,
    width:140,
    height:140
  },
  text:{
    padding:10,
    fontSize:22, 
    fontFamily: "Cochin",
  },
  list:{
    backgroundColor: '#ffff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowRadius: 20,
    shadowOpacity: 1.0,
  elevation: 5,
  overflow: 'hidden'
}
});
export default app;