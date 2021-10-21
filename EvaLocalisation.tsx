import AsyncStorage from '@react-native-async-storage/async-storage';
import AllPath from './constants/AllPath';


export const setLanguage = (lName:string) => {
    AsyncStorage.setItem('language',lName);
}

export const getLanguage = async () => {
    try{
        const v = await AsyncStorage.getItem('language');
        if(v===null){
            return AllPath.Paths['en']
        }
        return AllPath.Paths[v];
    }catch(err){
        console.log(err)
    }
}

declare global {
  interface String {
    getLocalisedString(): Promise<string>;
  }
}

String.prototype.getLocalisedString = async function(this:string):Promise<string>
{
    try {
        const langObj = await getLanguage();
        let key: string = this;
        return langObj[key];
    } catch (err) {
        console.log(err);
    }
   
} 
