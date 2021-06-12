


const intisalstate={
    noofmobiles:100,
    users:[],
    user:{},
};

export const mobilereducer =(state=intisalstate,action)=>{
    switch(action.type){
    case 'BUY_MOBILE_SUCCESS': 
    return {...state, noofmobiles: state.noofmobiles-1};
    case "SELL_MOBILE_SUCCESS":
        return {...state,noofmobiles:state.noofmobiles+1};
        
    case "GET_ALL_USERS_SUCCESS":
        return {...state,users:action.data}; 
    case "GET_ALL_USERS_FAIL":
           return {...state,msg:action.msg};
     
           case "GET_SINGLE_USER_SUCCESS":
                return {...state,user:action.data}; 
           case "GET_SINGLE_USER_FAIL":
                return {...state,msg:action.msg};

            case "ADD_USER_SUCCESS":{
                let users=[...state.users];
                users.push(action.data)
                return {...state,users}; 
            }
            case "ADD_USER_FAIL":
                return {...state,msg:action.msg};
           
                case "EDIT_USER_SUCCESS":{
                    let users=[...state.users];
                  let findeindex =users.findIndex(user=>user.id===action.data.id)
                  users[findeindex]=action.data;  
                  return {...state,users}; 
                }
                case "EDIT_USER_FAIL":
                    return {...state,msg:action.msg};

                    
                case "DELET_USER_SUCCESS":{
                    let users=[...state.users];
                  let findeindex = users.findIndex(user=>user.id===action.data)
                  console.log(findeindex);
                  users.splice(findeindex,1);  
                  return {...state,users}; 
                }

                case "DELET_USER_FAIL":
                    return {...state,msg:action.msg};
           default :
             return state; 

}
};
