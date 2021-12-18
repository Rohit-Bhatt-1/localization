import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { I18nManager } from "react-native";
import { getLanguage, setLanguage, myDirection } from './Localization'
import { render } from '@testing-library/react-native';
import EvaText from "./tags/tags/EvaText"
import EvaTextInput from "./tags/tags/EvaTextInput"
import EvaImage from "./tags/tags/EvaImage"

describe("Check Localization", () => {

    afterEach(() => {
        jest.resetModules();
        jest.unmock('./constants/AllPath');
    })


    it("should check setting of language", async () => {
        const spy = jest.spyOn(AsyncStorage, 'setItem');
        await setLanguage("hin");
        expect(spy).toBeCalledWith('language', 'hin');
    });

    it("should check getting of language", async () => {
        await setLanguage("hin");
        console.log("rohit", AsyncStorage);

        const spy = jest.spyOn(AsyncStorage, 'getItem');
        await getLanguage();
        expect(spy).toBeCalledWith('language');
    });

    it("should return value from a valid key", async () => {
        jest.mock("./constants/AllPath", () => ({
            default: {
                Paths: {
                    "en": {
                        "description": "Aeyyo Kozou!!"
                    }
                }
            }
        }));
        console.log(AsyncStorage)
        await setLanguage("en")
        console.log("stack--", await getLanguage())
        console.log(await "description".getLocalisedString())
    });

    it("should check error", async () => {
        await setLanguage("hinata");
        await getLanguage()
        expect(AsyncStorage.getItem).rejects
    });

    it("should check direction", async () => {
        expect(myDirection()).toEqual({ start: "left", end: "right" })
        I18nManager.isRTL = true;
        expect(myDirection()).toEqual({ start: "right", end: "left" })

    });

}


);

describe("Checking custom tags", () => {
    it("Should check rendering of EvaText component", () => {
        const { container } = render(<EvaText>Check < /EvaText>)
        expect(container).not.toBeNull();
    });

    it("Should check rendering of EvaTextInput component", () => {
        const { container } = render(<EvaTextInput>Check < /EvaTextInput>)
        expect(container).not.toBeNull();
    });

    it("Should check rendering of EvaImage component", () => {
        const { container } = render(<EvaImage source={{ uri: 'https://reactnative.dev/img/tiny_logo.png', }} />)
        expect(container).not.toBeNull();
});
});