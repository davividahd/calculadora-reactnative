import { TouchableOpacity, TextInput, Text, View, Image, ScrollView } from 'react-native';
import {useState} from 'react'
import  styles  from './style/style.js';
export default function App() {
 
  const [numero1,setnumero1] = useState([]);
  const [numero2,setnumero2] = useState([]);
  const [resultado,setResultado] = useState([])

  function somarNumeros(){
setResultado(parseFloat(numero1) + (numero2));

}
function subtrairNumeros(){
  setResultado(parseFloat(numero1) - parseFloat(numero2));
}
function multiplicarNumeros(){
  setResultado(parseFloat(numero1) * parseFloat(numero2));
}     

function dividirNumeros(){
  setResultado(parseFloat(numero1) / parseFloat(numero2));
}
  return(

  <View style ={styles.Container} >
   
   <View>
   
   <TextInput style = {styles.Entrada } placeholder='digite o numero 1 ' onChangeText={texto => setnumero1(texto)}> </TextInput>
   <TextInput style = {styles.Entrada}  placeholder='digite o numero 2' onChangeText={texto => setnumero2(texto)}></TextInput>
   
   <TouchableOpacity style={styles.botao} onPress={()=>{somarNumeros()}}>
   

          <Text style={styles.botao}>Somar</Text>
   </TouchableOpacity>

   
    <TouchableOpacity style={styles.botao} onPress={()=>{subtrairNumeros()}}>'
    <Text style={styles.botao}></Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.botao} onPress={()=>{multiplicarNumeros()}}>
    <Text style={styles.botao}>Multiplicar</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.botao} onPress={()=>{dividirNumeros()}}>
    <Text style={styles.botao}>Dividir</Text>
    </TouchableOpacity>


  
   </View>
  
        <Text style={styles.texto}>{numero1}  </Text>
         <Text style={styles.texto}>{numero2}


         </Text>
       
         {resultado !== null && ( 
          <Text style={styles.resultado}>Resultado: {resultado}</Text>
        )}



  </View>


  );
}
