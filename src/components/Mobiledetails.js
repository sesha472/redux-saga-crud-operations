
import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { adduser, buymobile,deltuser,edituser,getallusers,getsingleuser,sellmobile } from './redux/actions/actiontypes';


function Mobiledetails({
    noofmobiles,
    users,
    buymobile,
    sellmobile,
    adduser,
    getallusers,
    getsingleuser,
    edituser,
    user,
    deltuser,
}) {
    
    const style={
         btn:{
             backgroundColor:"skyblue",
             padding:"8px 15px",
             ouline:"none",
             border:"2px solid blue",
             margin:"5px",
         }
        }
     
    return (
        <div>
            <h1>numbe of mobiles :{noofmobiles} and users length:{users.length} name: {user.name} </h1>
            <button style={style.btn} onClick={() =>  buymobile()}>buy mobile</button>
            <button style={style.btn} onClick={() =>sellmobile()}>sell mobile</button>
            <button style={style.btn} onClick={() =>adduser()}>add user</button>
            <button style={style.btn} onClick={() =>getallusers()}>getallusers</button>
            <button style={style.btn} onClick={() =>getsingleuser(2)}>singleuser</button>
            <button style={style.btn} onClick={() =>edituser({name:"sesha"},3)}>Edit users</button>
            <button style={style.btn} onClick={() =>deltuser(1)}>Delet user</button>
        </div>
    );
};

    const mapStateToProps=(state)=>{
        console.log(state.users);
        return{
               noofmobiles:state.noofmobiles,
               users:state.users,
               user:state.user,
        };
    };

  const mapDispatchToProps=(dispatch)=>{
      return bindActionCreators({
          buymobile,
          sellmobile,
          adduser,
          getallusers,
          getsingleuser,
          edituser,
          deltuser
          },dispatch,
      );
  };    


export default connect(mapStateToProps,mapDispatchToProps) (Mobiledetails);
