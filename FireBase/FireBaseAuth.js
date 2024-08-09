import { initializeApp,getApps  } from "firebase/app";
import { initializeAuth,getReactNativePersistence,getAuth} from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyAysMCDpL6t6FlJsQDFWhaZdRy-1xqIfKM",
  authDomain: "e-buzz-7aa0f.firebaseapp.com",
  projectId: "e-buzz-7aa0f",
  storageBucket: "e-buzz-7aa0f.appspot.com",
  messagingSenderId: "1014303821070",
  appId: "1:1014303821070:web:1c15f6bb3bf64c9c18db5f"
};

let auth;
if(getApps().length==0){
    const app = initializeApp(firebaseConfig);
    auth=initializeAuth(app,{
    persistence:getReactNativePersistence(ReactNativeAsyncStorage)
})
}else{
    auth=getAuth();
}

export default auth;