import AsyncStorage from "@react-native-async-storage/async-storage";
// import * as Local from "./Localization";
import { getLanguage,setLanguage } from './Localization'
// import * as AsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
// jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

describe("Check Localization",() =>{

    afterEach(() => {
        jest.resetModules();
        jest.unmock('./constants/AllPath');
    })
    
    it("should check getting of language when nothing is initialized",async () => {
        await getLanguage()
        expect(AsyncStorage.getItem).toBeCalledWith('language');
    });
    it("should check setting of language",async () => {
            await setLanguage("hin");
            expect(AsyncStorage.setItem).toBeCalledWith('language','hin');
    });
    it("should check getting of language",async () => {
        await setLanguage("hin");
        await getLanguage()
        expect(AsyncStorage.getItem).toBeCalledWith('language');
    });
    
    it("should return value from a valid key",async () => {
        jest.mock("./constants/AllPath",()=>({
            default:{
                Paths : {
                "en":{
                    "description":"Aeyyo Kozou!!"
                }
            }
            }
        }));
        console.log(AsyncStorage)
        await setLanguage("en")
        console.log("stack--",await getLanguage())
        console.log(await "description".getLocalisedString())
    }); 
    it("should check error",async () => {
        await setLanguage("hinata");
        await getLanguage()
        expect(AsyncStorage.getItem).rejects
    });
    }
    
    
);