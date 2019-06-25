const init = {
    authErr:null,
    created:null,
    updated:null,
    avaliable:{
        name:null,
        type:null
    },
    result:null,
    realUser:null
}
const authReducer = (state = init,action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            return{
                ...state,
                authErr:action.err
            }
           case 'LOGIN_SUCCESS':
           console.log('login success');
           return{
               ...state,
               authErr:null
           }
           case 'USER_CREATED':
           console.log('Created User');
           return{
               ...state,
               created:true
           }
           case 'NOT_CREATED':
           console.log('Error',action.err)
           return{
            ...state,
            created:action.err
        }
        case 'UPDATED_SUCCESS':
        console.log('update Success');
        return{
            ...state,
            updated:true
        }
        case 'UPDATED_ERROR':
        console.log('UPDATe error',action.err);
        return{
            ...state,
            updated:action.err
        }
        case 'SET_NAME':
        return{
            ...state,
            avaliable:{
                name:action.name,
                type:true
            }
            
        }
       
        case 'NAME_NOT_AVALIABLE':
        return{
            ...state,
            avaliable:{
                name:action.name,
                type:false
            }
        }
        case 'USER_NAME_FIELD_REQUIRED':
            return{
                ...state,
                required:true
            } 
        case 'REAL_USER_CREATED' :
            console.log("REAL USER CREATED")    
            return{
                ...state,
                realUser:true
            }
             
        case 'ERROR_CREATING_REAL_USER':
            console.log('Failed',action.err)
            return{
                ...state
            }
        case 'USERNAMENPROFILE':
            console.log('action userb name')
            return{
                ...state,
                userDataaprofile:{
                    photoURL:action.MyURL,
                    userNAmeME:action.user
                }
            }
        case 'LOGOUT':
            return{
                ...state,
                logout:true
            }
        case 'LOGINWITHGOOGLE':
            return{
                ...state,
                result:action.res.additionalUserInfo.isNewUser
            }
        default:
           return state;
    }
}
export default authReducer;