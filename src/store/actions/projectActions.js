export const getData = () => {
    return (dispatch, getState, {
        getFirebase,
        getFirestore
    }) => {
        const firestore = getFirestore();

        firestore.collection('post').orderBy('timeStamp', 'desc').limit(5).get()
            .then((data) => {
                dispatch({
                    type: 'GET_DATA',
                    data

                });
            })
            .catch(err => {
                dispatch({
                    type: 'GET_DATA_ERR',
                    err
                })
            })
    }
}
export const getDatas = (document) => {
    return (dispatch, getState, {
        getFirebase,
        getFirestore
    }) => {
        const firestore = getFirestore();

        var lastVisible = document.docs[document.docs.length - 1];
        console.log("last", lastVisible);


        if (lastVisible !== undefined) {
            firestore.collection('post').orderBy('timeStamp', 'desc').limit(5).startAfter(lastVisible).get()
                .then((data) => {
                    dispatch({
                        type: 'GET_DATA',
                        data,
                        push_data: true
                    });
                    data.forEach(da => {
                        console.log(da.data())
                    })
                })
                .catch(err => {
                    dispatch({
                        type: 'GET_DATA_ERR',
                        err
                    })
                })
        } else {
            console.log('This ish the last row')
        }
    }
}

export const AddMessage = (data) => {
    return (dispatch, getState, {
        getFirebase
    }) => {
        const firestore = getFirebase().firestore();
        firestore.collection('post').add({
                uid: data.uid,
                message: data.message,
                timeStamp: new Date()
            })
            .then(() => {
                dispatch({
                    type: 'POST_CREATED'
                })
            })
            .catch((err) => {
                console.error(err)
                dispatch({
                    type: 'POST_ERROR',
                    err
                })
            })
    }
}
export const MessageNPhoto = (data) => {
    return (dispatch, geState, {
        getFirebase
    }) => {
        const firebase = getFirebase();
        if (data.message !== '' && data.photo !== '') {
            console.log('Botn imgaes n caption')
            let file = data.photo;
            let storageRef = firebase.storage().ref('post/' + file.name)
            let task = storageRef.put(file)
            task.on('state_changed', snap => {
                    let percent = (snap.bytesTransferred / snap.totalBytes) * 100;
                    dispatch({
                        type: 'percent',
                        percent
                    })
                    console.log(percent)
                },
                err => {
                    console.error(err)
                },
                () => {
                    storageRef.getDownloadURL().then(url => {
                        let URI = url;
                        firebase.firestore().collection('post').add({
                                uid: data.uid,
                                message: data.message,
                                photoURL: URI,
                                timeStamp: new Date()
                            })
                            .then(() => {
                                console.log('Success in both...')
                                dispatch({
                                    type: 'SUCCESS_IN_BOTH'
                                })
                            })
                            .catch(err => console.error(err))
                    })
                })
        } else {
            console.log('Only photo')
            let file = data.photo;
            let storageRef = firebase.storage().ref('post/' + file.name)
            let task = storageRef.put(file)
            task.on('state_changed', snap => {
                    let percent = (snap.bytesTransferred / snap.totalBytes) * 100;
                    dispatch({
                        type: 'percent',
                        percent
                    })
                    console.log(percent)
                },
                err => {
                    console.error(err)
                },
                () => {
                    storageRef.getDownloadURL().then(url => {
                        let URI = url;
                        firebase.firestore().collection('post').add({
                                uid: data.uid,
                                photoURL: URI,
                                timeStamp: new Date()
                            })
                            .then(() => {
                                console.log('Success in both...')
                                dispatch({
                                    type: 'SUCCESS_IN_BOTH'
                                })
                            })
                            .catch(err => console.error(err))
                    })
                })
        }
    }
}
export const GetUser = (uid) => {
    return (dispatch, getState, {
        getFirebase
    }) => {
        const firestore = getFirebase().firestore();
        firestore.collection('users').doc(uid).get()
            .then((data) => {

                dispatch({
                    type: 'GET_USER_REAL',
                    data
                })
            })
            .catch(err => console.error(err))
    }
}
export const GetUsers = (uid) => {
    return (dispatch, getState, {
        getFirebase
    }) => {
        const firestore = getFirebase().firestore();
        firestore.collection('users').doc(uid).get()
            .then((data) => {

                dispatch({
                    type: 'GET_USER_REAL_ME',
                    data
                })
            })
            .catch(err => console.error(err))
    }
}
export const favorite = (data) => {
    return (dispatch, getState, {
        getFirebase
    }) => {
        const firestore = getFirebase().firestore();
        firestore.collection('posts').doc(data.uid).set({
                likes: data.likes
            }, {
                merge: true
            })
            .then(() => {
                dispatch({
                    type: 'SET_LIKE'
                })
                console.log('success  in post')
                firestore.collection('posts').doc(data.uid).collection('likes').set({
                        user: data.user
                    })
                    .then(() => {
                        console.log('Success in both')
                    })
                    .catch(err => console.error(err))
            })
            .catch(err => console.error(err))
    }
}
export const addStatus = (data) => {
 return(dispatch,getState,{getFirebase}) => {
     const firebase = getFirebase().firestore()
     firebase.collection('status').add({
         text:data.userText,
         backgroundColor : data.userColor,
         timeStamp: new Date(),
         uid:data.uid
     })
     .then(() => dispatch({type:'ADD_STATUS_SUCCESS'}))
     .catch(err => dispatch({type:'ADD_STATUS_ERROR',err}))
 }
}
export const getStatus = () => {
    return (dispatch,getState,{getFirebase}) => {
        const firebase = getFirebase().firestore()
        firebase.collection('status').get()
        .then(data => {

            dispatch({type:'GET_STATUS_SUCCESS',data})
        })
        .catch(err => console.error(err))
    }
}