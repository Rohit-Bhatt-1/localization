// import * as Updates from 'expo-updates';

// export const myRestart = () => {
//     Updates.reloadAsync();
// }

export const myRestart = async () => {
    let p = true;
    if(p){
        const updates = await import('expo-updates');
        // console.log("go:",go)
        updates.reloadAsync()
    }else{
        const updates = await import('react-native-restart')
        updates.RNRestart();
    }
}