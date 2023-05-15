
import {View, ScrollView, FlatList} from 'react-native';
import estilo from './estilo';
import CardTenis from './CardFNS';

export default function Serie() {
  const produtos = [
    {
      id:"1",
      imagem: require("../assets/Serie/black.jpg"),
      titulo: "black mirror",
      desc: "DESCRIÇÃO",
      desctxt: "Black Mirror é uma série de televisão britânica ontológica de ficção científica criada por Charlie Brooker e centrada em temas obscuros e satíricos que examinam a sociedade moderna, particularmente a respeito das consequências imprevistas das novas tecnologias.[1] Os episódios são trabalhos autônomos, que geralmente se passam em um presente alternativo ou em um futuro próximo. A série foi transmitida pela primeira vez na emissora Channel 4, no Reino Unido, em dezembro de 2011. ",
      avaliacao:"AVALIAÇÃO:",
      avaliacaotxt: 2,
    },
    {
      id:"2",
      imagem: require("../assets/Serie/kenan.jpg"),
      titulo: "kenan e kel",
      desc: "DESCRIÇÃO",
      desctxt:  "Em Kenan & Kel, a trama se passa em Chicago, Illinois, e gira em torno de Kenan Rockmore (Kenan Thompson), um adolescente esperto e criativo, e seu melhor, e inseparável amigo Kel Kimble (Kel Mitchell), que é atrapalhado, hiperativo, pouco inteligente e obcecadamemte apaixonado por refrigerante sabor laranja.",
      avaliacao:"AVALIAÇÃO:",
      avaliacaotxt: 4,
    },
    {
      id:"3",
      imagem: require("../assets/Serie/stranger.jpg"),
      titulo: "stranger finger",
      desc: "DESCRIÇÃO",
      desctxt:"Quando um garoto desaparece, a cidade toda participa nas buscas. Mas o que encontram são segredos, forças sobrenaturais e uma menina.",
      avaliacao:"AVALIAÇÃO:",
      avaliacaotxt: 4,
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




// "Os paleontólogos Alan Grant, Ellie Sattler e o matemático Ian Malcolm fazem parte de um seleto grupo escolhido para visitar uma ilha habitada por dinossauros criados a partir de DNA pré-histórico. O idealizador do projeto e bilionário John Hammond garante a todos que a instalação é completamente segura. Mas após uma queda de energia, os visitantes descobrem, aos poucos, que vários predadores ferozes estão soltos e à caça."
// "Oliver Queen (Stephen Amell) é um milionário que fica em uma ilha durante 5 anos após um naufrágio do qual ele foi o único sobrevivente. Entre os mortos estava Sara Lance (Caity Lotz), a irmã mais nova de sua namorada, com quem estava tendo um caso, e Robert Queen, seu pai. Ao retornar à Starling City, ele busca reconciliar com sua antiga namorada, Laurel Lance (Katie Cassidy), corrigir os erros da família Queen em Starling City.",

