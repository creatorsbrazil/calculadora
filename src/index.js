import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import  App from './App';

AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
    rootTag: document.getElementById('root')
});