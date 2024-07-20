import MyHousesPage from './pages/MyHousesPage';
import HomePage from './pages/HomePage';
import NewHousePage from './pages/NewHousePage';

import { Menu, MenuItem, View } from '@aws-amplify/ui-react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useNavigate
} from 'react-router-dom';

function NavigationMenu() {
    const navigate = useNavigate(); 

    const goHome = () => {
        navigate("/"); 
    };
    const goMyHouses = () => {
        navigate("/my-houses");
    };

    return (
        <View width="4rem">
            <Menu>
                <MenuItem onClick={goHome}>
                    Home
                </MenuItem>
                <MenuItem onClick={goMyHouses}>
                    Mis casas
                </MenuItem>
                <MenuItem onClick={() => alert("No se puede, pero se podrá :)")}>
                    Mi perfil
                </MenuItem>
                <MenuItem onClick={() => alert("No se puede, pero se podrá :)")}>
                    Cerrar sesión
                </MenuItem>
            </Menu>
        </View>
    );
}

function App() {
    return(
        <Router>
            <NavigationMenu/>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/my-houses" element={<MyHousesPage />} />
                <Route path="/new-house" element={<NewHousePage />} />
            </Routes>
        </Router>
    );
};

export default App;
