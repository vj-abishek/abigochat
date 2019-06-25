export const signIn = (cred) => {
    return(dispatch,getState,{getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            cred.email,
            cred.password
        ).then(() => {
            dispatch({type:'LOGIN_SUCCESS'})
        }).catch(err => {
            dispatch({type:'LOGIN_ERROR',err})
        })
    }
}

// create user
export const createUser = (cred) => {
    return(dispatch,getState,{getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().createUserWithEmailAndPassword(cred.Email, cred.password)
        .then(() => {
                    let file = cred.avatar
                    let storageRef = firebase.storage().ref('profile/'+cred.avatar.name)
                    let task = storageRef.put(file)
                    console.log(task)                   
                   task.on('state_changed',snap => {
                    let percent = (snap.bytesTransferred / snap.totalBytes) * 100;
                    console.log(percent)
                   },
                   err => {
                    console.error(err)
                   },
                   () => {
                    
                    storageRef.getDownloadURL().then((url) => {
                        let MyURL = url;
                        console.log(cred.userName)
                        dispatch({type:'USERNAMENPROFILE',MyURL,user:cred.userName})
                        var userCurrent = firebase.auth().currentUser;
                        userCurrent.updateProfile({
                            displayName: cred.userName,
                            photoURL : MyURL                                      
                        }).then(() => {
                            userCurrent.sendEmailVerification().then(() => console.log("Email sent"))
                            .catch(err => console.error(err))
                            dispatch({type:'UPDATE_SUCCESS'})
                        })
                        .catch(er => {
                            dispatch({type:'UPDATE_ERROR',er})
                        })

                })
                   }) 

            dispatch({type:'USER_CREATED'})
        })
        .catch(function(error) {
            // Handle Errors here.
           
            var err = error.message;
            dispatch({type:'NOT_CREATED',err})
            // ...
          });
    }
}
export const UniqueName = (name) => {
    return(dispatch,getState,{getFirebase}) => {
        const firestore = getFirebase().firestore().collection('users');
        if(name !== ''){
            firestore.where('abigoID','==',name).get()
        .then((doc) => {
            console.log(doc.empty)
            if(doc.empty){
                console.log('avaliable',name)
                dispatch({type:'SET_NAME',name}) 
            }
            else{
                dispatch({type:'NAME_NOT_AVALIABLE',name}) 
            }
           
            
        })
        .catch(err => {
            console.error(err)
        })
       
        }
        else{
            dispatch({type:'USER_NAME_FIELD_REQUIRED'})
        }
    }
}
export const createRealUser = (data) => {
    return(dispatch,getState,{getFirebase}) => {
        const db = getFirebase().firestore().collection('users');
       if(data.abigoID.type){
        db.doc(data.uid).set({
            displayName:data.displayName,
            email:data.email,
            photoURL:data.photoURL,
            abigoID:data.abigoID.name          
        })
        .then(() => {
            dispatch({type:'REAL_USER_CREATED'})
        })
        .catch(err => {
            dispatch({type:'ERROR_CREATING_REAL_USER',err})
        })
       }
       else{
           console.log('Failed')
       }
    }
}
export const logout = () => {
    return(dispatch,getState,{getFirebase}) => {
        getFirebase().auth().signOut()
        .then(() => {
            dispatch({type:'LOGOUT'})
        })
        .catch(err => console.error(err))
    }
}
export const LoginWithGoogle = () => {
    return(dispatch,getState,{getFirebase}) => {
        const firebase = getFirebase();
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(res => {
            dispatch({type:'LOGINWITHGOOGLE',res})
        })
        .catch(err => console.error(err))
    }
}