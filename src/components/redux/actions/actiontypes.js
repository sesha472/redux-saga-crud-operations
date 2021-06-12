const BUY_MOBILE="BUY_MOBILE";
const SELL_MOBILE="SELL_MOBILE";

 export const buymobile=()=>{
     return { type:BUY_MOBILE}
 }


 export const sellmobile=()=>{
    return { type:SELL_MOBILE}
}
export const getallusers=()=>{
    return { type:"GET_ALL_USERS"}
}

export const getsingleuser=(id)=>{
    return { type:"GET_SINGLE_USER",id}
}
export const adduser=(payload)=>{
    return { type:"ADD_USER",payload}
}

export const edituser=(payload,id)=>{
    return { type:"EDIT_USER",payload,id}
}
export const deltuser=(id)=>{
    return { type:"DELET_USER",id}
}

