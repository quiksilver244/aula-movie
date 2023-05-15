import { ImageBackground, Text } from "react-native";
import { StyleSheet} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


const CardFNS = ({imagem,titulo,desc,desctxt,genero,generotxt,avaliacao,avaliacaotxt})=>{
    let estrela = [];
    for(let id = 0; id < avaliacaotxt; id++){
        estrela[id] = <FontAwesome name="star" size={24} color="black" />
    }
    return(
        <ImageBackground
            style={estilo.titulo}
            source={imagem}
            borderRadius={10}
            resizeMode="cover"
        >
            <Text style={estilo.filme_titulo}>{titulo}</Text>
            <Text style={estilo.filme_descricao}>{desc}</Text>
            <Text style={estilo.filme_desctxt}>{desctxt}</Text>
            <Text style={estilo.filme_genero}>{genero}</Text>
            <Text style={estilo.filme_desctxt}>{generotxt}</Text>
            <Text style={estilo.filme_avaliacao}>{avaliacao}</Text>
            <Text style={estilo.filme_avaliacaotxt}>{estrela.map(e => (e))}</Text>
           
        </ImageBackground>
    );
}


const estilo = StyleSheet.create({
    titulo:{
        width: 350,
        height: 500,
        borderRadius: 10,
        justifyContent: "space-between",
        marginBottom:413,

        
        
               
    },
    filme_titulo:{
        fontSize: 18,
        padding:5,       
        backgroundColor:"#2E8B57",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        textAlign: "center",
    },
    filme_descricao:{
        fontSize: 18,
        padding:5,       
        backgroundColor:"#FFFFFF",
        color: "black",
        textAlign: "center",
        marginTop: 465,
        
    },
    filme_desctxt:{
        fontSize: 16,
        padding:5,      
        backgroundColor:"#2E8B57",
        color: "black",
        textAlign: "center",
        
        
    },
    filme_avaliacao:{
        fontSize: 18,
        padding:5,       
        backgroundColor:"#FFFFFF",
        color: "black",
        textAlign: "center",
    },
    filme_avaliacaotxt:{
        fontSize: 16,
        padding:5,       
        backgroundColor:"#2E8B57",
        color: "black",
        textAlign: "center",
    },

    
    
  });
  
  export default CardFNS;