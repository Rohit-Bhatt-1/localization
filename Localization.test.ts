import { setLanguage, getLanguage } from "./Localization";

// jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

describe("Check Localization",
    () =>
    {
        it("should check setting of language",
            async () =>
            {
                await setLanguage("hin");
            }
        )      
    }
);