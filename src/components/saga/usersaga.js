import { put,all,call, takeLatest } from "@redux-saga/core/effects"
import axios from "axios";


function* buymobile(){
    yield put({type:"BUY_MOBILE_SUCCESS"})
}
function* sellmobile(){
    yield put({type:"SELL_MOBILE_SUCCESS"})
}
function* getallusers(){
    try {
        let users = yield call(axios.get,'https://jsonplaceholder.typicode.com/users');
        yield put({type:"GET_ALL_USERS_SUCCESS",data:users.data})
    } catch (error) {
        yield put({type:"GET_ALL_USERS_FAIL",msg:error.msg})        
    }
}

function* getsingleuser({id}){
    try {
        let users = yield call(axios.get,'https://jsonplaceholder.typicode.com/users/'+id);
        yield put({type:"GET_SINGLE_USER_SUCCESS",data:users.data})
    } catch (error) {
        yield put({type:"GET_SINGLE_USER_FAIL",msg:error.msg})        
    }
}

function* adduser({payload}){
    try {
        let users = yield call(axios.post,'https://jsonplaceholder.typicode.com/users',payload);
        yield put({type:"ADD_USER_SUCCESS",data:users.data})
    } catch (error) {
        yield put({type:"ADD_USER_FAIL",msg:error.msg})        
    }
}
function* edituser({payload,id}){
    try {
        let users = yield call(axios.put,'https://jsonplaceholder.typicode.com/users/'+id,payload);
        yield put({type:"EDIT_USER_SUCCESS",data:users.data})
    } catch (error) {
        yield put({type:"EDIT_USER_FAIL",msg:error.msg})        
    }
}

function* deltuser({id}){
    try {
        let users = yield call(axios.put,'https://jsonplaceholder.typicode.com/users/'+id);
        yield put({type:"DELET_USER_SUCCESS",data:id})
    } catch (error) {
        yield put({type:"DELET_USER_FAIL",msg:error.msg})        
    }
}
 export function* watchUser(){
    yield all ([
        takeLatest("BUY_MOBILE",buymobile),
        takeLatest("SELL_MOBILE",sellmobile),
        takeLatest("GET_ALL_USERS",getallusers),
        takeLatest("GET_SINGLE_USER",getsingleuser),
        takeLatest("ADD_USER",adduser),
        takeLatest("EDIT_USER",edituser),
        takeLatest("DELET_USER",deltuser),


          ])
}