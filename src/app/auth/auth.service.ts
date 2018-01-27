import * as firebase from 'firebase';
//import {LocalStorageService} from 'angular-2-local-storage';

export class AuthService{
 loggedIn :boolean;
    constructor( ){}//private localStorageService :LocalStorageService){
       //storageType = !!localStorageService.getStorageType('localStorage');

   // }
    signupUser(email:string,password:string){
        firebase.auth().createUserWithEmailAndPassword(email,password)
            .catch(
                error =>console.log(error)
            )

        

    }
    
    signInUser(email:string,password:string){

        
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(
            response =>console.log(response)
        )
        .catch(
            error =>console.log(error)
        )
    }
}
