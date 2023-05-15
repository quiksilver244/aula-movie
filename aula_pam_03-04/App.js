import { NavigationContainer} from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Filme from "./components/Filme";
import Novela from "./Components/Novela";
import Serie from "./Components/Serie";


const Menu = createDrawerNavigator().Navigator;
const ItensMenu = createDrawerNavigator().Screen;

export default function App() {
  return (
    <NavigationContainer>
      
        <Menu screenOptions={{
          drawerLabelStyle: {
            color: "red"    
          },
          drawerLabelStyle: {
            fontSize: 20,
            fontWeight: 'bold',
            
          },
          drawerActiveBackgroundColor: "#2E8B57",
          drawerInactiveTintColor: "gray",
          drawerActiveTintColor: "black",
          drawerLabelPosition: "beside-icon",
          
          

        }}
        >
          <ItensMenu name="Filme" component={Filme}
          options={{
            drawerIcon:({size})=>(<MaterialCommunityIcons name="movie-open" size={size} color={"black"} />),
            
          }}
          />
          <ItensMenu name="Novela" component={Novela}
          options={{
            drawerIcon:({size})=>(<MaterialCommunityIcons name="emoticon-excited" size={size} color={"#FFD700"} />),
            
          }}/>
          <ItensMenu name="Serie" component={Serie}
          options={{
            drawerIcon:({size})=>(<MaterialCommunityIcons name="netflix" size={size} color={"red"} />),
            
          }}
          />
          
        </Menu>
      
    </NavigationContainer>
  );
}

