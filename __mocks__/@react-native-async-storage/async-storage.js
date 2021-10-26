// export default from '@react-native-async-storage/async-storage/jest/async-storage-mock'
let mockhero = new Map()
let obj = {
    "description":"aeyyo kozou"
}
// mockhero.set("hin",{"description":"gopa"})
export default  {        
            setItem: (key, value) => {
                return new Promise((resolve, reject) => {
                    console.log("aa gya set..")
                  return (typeof key !== 'string')
                    ? reject(new Error('key and value must be string'))
                    : resolve(mockhero.set(key,value));
                });
              },
              getItem: (key) => {
                return new Promise((resolve,reject) => {
                    console.log("aa gya get.. has",mockhero)
                  return key==='language'
                    ? resolve(mockhero.get(key))
                    : reject("arrghhh");
                });
              },
          }