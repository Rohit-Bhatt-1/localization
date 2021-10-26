import AsyncStorage from '@react-native-async-storage/async-storage';

const Path = "./constants/AllPath"
// const AllPath = require("")


export const setLanguage = async(lName:string) => {
    await AsyncStorage.setItem('language',lName);
}

export const getLanguage = async () => {
    
    try{
        let AllPath = require(Path)
        const v = await AsyncStorage.getItem('language');
        console.log("for test v :- ",v)
        if(v===null){
            return AllPath.Paths['en']
        }
        console.log("checking---",AllPath)
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
        console.log("lanobj--",langObj)
        let key: string = this;
        return langObj[key];
    } catch (err) {
        console.log("error: ",err);
        return "error while implementing getLanguage()"
    }
   
} 
