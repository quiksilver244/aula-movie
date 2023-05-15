import {View, ScrollView, FlatList} from 'react-native';
import estilo from './estilo';
import CardTenis from './CardFNS';

export default function Filme() {

  
  const produtos = [
    

    {
      id:"1",
      imagem: require("../assets/Filme/avatar.jpg"),
      titulo: "avatar",
      desc: "DESCRIÇÃO",
      desctxt: "No exuberante mundo alienígena de Pandora vivem os Na'vi, seres que parecem ser primitivos, mas são altamente evoluídos. Como o ambiente do planeta é tóxico, foram criados os avatares, corpos biológicos controlados pela mente humana que se movimentam livremente em Pandora. Jake Sully, um ex-fuzileiro naval paralítico, volta a andar através de um avatar e se apaixona por uma Na'vi. Esta paixão leva Jake a lutar pela sobrevivência de Pandora.",
      avaliacao:"AVALIAÇÃO:",
      avaliacaotxt: 2,
    },
    {
      id:"2",
      imagem: require("../assets/Filme/homem.jpg"),
      titulo: "até o último homem",
      desc: "DESCRIÇÃO",
      desctxt:  "Desde que o ex-policial Brian O'Conner e Mia Toretto libertaram Dom da prisão, eles viajam pelo mundo para fugir das autoridades. No Rio de Janeiro, eles são obrigados a fazer um último trabalho antes de ganhar sua liberdade definitiva. Brian e Dom montam uma equipe de elite de pilotos de carro para executar a tarefa, mas precisam enfrentar um empresário corrupto e também um obstinado agente federal norte-americano.",
      avaliacao:"AVALIAÇÃO:",
      avaliacaotxt: 4,
    },
    {
      id:"3",
      imagem: require("../assets/Filme/titanic.jpg"),
      titulo: "titanic",
      desc: "DESCRIÇÃO",
      desctxt:"Um artista pobre e uma jovem rica se conhecem e se apaixonam na fatídica jornada do Titanic, em 1912. Embora esteja noiva do arrogante herdeiro de uma siderúrgica, a jovem desafia sua família e amigos em busca do verdadeiro amor.",
      avaliacao:"AVALIAÇÃO:",
      avaliacaotxt: 5,
    }
  ];
 
  return (
    <ScrollView>
  

        <View style={estilo.container2}>
          <FlatList
            data={produtos}
            renderItem={({item})=>
              <CardTenis 
                  imagem={item.imagem}
                  titulo={item.titulo}
                  desc={item.desc}
                  desctxt={item.desctxt}
                  genero={item.genero}
                  generotxt={item.generotxt}
                  avaliacao={item.avaliacao}
                  avaliacaotxt={item.avaliacaotxt}


              />
            }
            keyExtractor={item => item.id}
          />        
        </View>
        
      </ScrollView>


  );
}
