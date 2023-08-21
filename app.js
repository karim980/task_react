import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View ,TextInput,Button , Image ,SafeAreaView} from 'react-native';

export default function App() {
  const [inputText, setInputText] = useState('');
  const [displayText, setDisplayText] = useState('');
  const img = "https://resources.premierleague.com/premierleague/photos/players/250x250/p118748.png"

  const handleInputChange = (text) => {
    setInputText(text);
  };


  const handleDisplayButtonPress = () => {
    setDisplayText("good "+inputText+" is the best player");
  };
  
  return (
    <SafeAreaView style={{flex :20}}> 
    <View style={{flex:20 , padding:16}}>

    <Text style={{ margin: 30 ,fontSize: 20}} >WHO IS THAT PLAYER ?</Text>

    <TextInput
      style={{ height: 40, borderColor: 'black', borderWidth: 2, marginBottom: 20 , marginHorizontal: 5 ,
      borderBottomRightRadius: 10,
       borderBottomLeftRadius:10,
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10
    }}
      onChangeText={handleInputChange}
      value={inputText}
    />
    <Button
      title= " Enter "
      onPress={handleDisplayButtonPress}
    />
    <Text>{displayText}</Text>

    <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
          <Image
            style={{ width: 400, height: 400 }}
            source={{ uri: img }}
          />
        </View>
        
  </View>
</SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
