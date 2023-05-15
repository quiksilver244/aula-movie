import {View, ScrollView, FlatList} from 'react-native';
import estilo from './estilo';
import CardTenis from './CardFNS';

export default function Novela() {
  const produtos = [
    {
      id:"1",
      imagem: require("../assets/Novela/avenida.jpg"),
      titulo: "avenida brasil",
      desc: "DESCRIÇÃO",
      desctxt: "Avenida Brasil conta a história de uma jovem que, desde a infância, planeja um acerto de contas com a madrasta. Rita (Mel Maia), órfã de mãe, era criada, com muito amor, pelo pai Genésio (Tony Ramos). Tudo muda quando ele se casa com Carmen Lúcia, a Carminha (Adriana Esteves), uma mulher ambiciosa e dissimulada.",
      avaliacao:"AVALIAÇÃO:",
      avaliacaotxt: 3,
    },
    {
      id:"2",
      imagem: require("../assets/Novela/imperio.jpg"),
      titulo: "imperio",
      desc: "DESCRIÇÃO",
      desctxt: "No final dos anos 1980, o jovem pernambucano José Alfredo (Chay Suede) chegou ao Rio de Janeiro para tentar a vida. Hospedado na casa do irmão Evaldo (Thiago Martins), logo se apaixonou pela mulher dele, Eliane (Vanessa Giácomo), e foi correspondido.",
      avaliacao:"AVALIAÇÃO:",
      avaliacaotxt: 4,
    },
    {
      id:"3",
      imagem: require("../assets/Novela/india.jpg"),
      titulo: "caminho das indias",
      desc: "DESCRIÇÃO",
      desctxt: " A indiana Maya é uma bela jovem, pertencente a uma tradicional família de comerciantes. Ela já chegou à idade de se casar e seus pais, Manu e Kochi, procuram um bom marido para ela, seguindo as tradições. No entanto, a moça conhece o dálite Bahuan e por ele se apaixona.",
      avaliacao:"AVALIAÇÃO:",
      avaliacaotxt: 5,
    },
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
