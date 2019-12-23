const init = {
    projects: [{
            id: '1',
            title: 'help me to find peach',
            content: 'blah blah blah'
        },
        {
            id: '2',
            title: 'help me to find peach',
            content: 'blah blah blah'
        },
        {
            id: '4',
            title: 'help me to find peach',
            content: 'blah blah blah'
        }
    ],
    loading: '',
   
};
const projectReducer = (state = init, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('Create Project', action.project)
            return state;
        case 'CREATE_PROJECT_ERR':
            console.log('ErR:', action.err)
            return state;
        case 'GET_DATA':
       
        
        if(action.push_data) {
            return{
                ...state,
                data:[...state.data,...action.data.docs],
                doc:action.data
            } 
        } 
         return {
                ...state,
                data:action.data.docs,
                doc:action.data
            }
          
           
            case 'GET_DATA_ERR':
                console.error("ERR", action.err);
                return state;
            case 'POST_CREATED':
                console.log('Created...')
                return {
                    ...state,
                    createdPost: true
                }
                case 'percent':
                    return {
                        ...state,
                        percent: action.percent,
                            loading: true
                    }
                    case 'SUCCESS_IN_BOTH':
                        return {
                            ...state,
                            uploaded: true
                        }
                        case 'GET_USER_REAL':
                            return {
                                ...state,
                                documentUser: action.data
                            }
                            case 'GET_USER_REAL_ME':
                                return {
                                    ...state,
                                    documentUser_Me: action.data
                                }
                case 'ADD_STATUS_SUCCESS':
                    return{
                        ...state,
                        userAddedStatus:true
                    }
                case 'GET_STATUS_SUCCESS':
                    return{
                        ...state,
                        StatusDocs:action.data.docs
                    }
                                default:
                                   
                                    return state;
    }

};
export default projectReducer;