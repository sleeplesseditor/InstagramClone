import { createStackNavigator } from 'react-navigation';
import Home from '../../views/Home';
import ImageEditor from '../../views/ImageEditor';
import MapContainer from '../../views/MapContainer';

const navigatorConfiguration = {
    headerMode: 'none'
};

const AppNavigator = createStackNavigator({
    Home: {
        screen: Home
    },
    ImageEditor: {
        screen: ImageEditor,
        path: 'imageEditor/:imageData'
    },
    MapContainer: {
        screen: MapContainer,
        path: 'mapContainer/:markers'
    }
}, navigatorConfiguration);

export default AppNavigator;