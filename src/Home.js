import  React,{useEffect, useState } from "react";
import {TailSpin} from 'react-loader-spinner';
import styled from 'styled-components'

const Home =()=>{
    const [users,setusers]=useState([])
    const [user,setuser]=useState(); 
    const [page,setpage]=useState(1);
    const [isloader,setisloader] = useState(false);
    useEffect(()=>{
        const url=`https://reqres.in/api/users?page=${page}`;
        
        fetch(url)
        .then(res=>res.json()).then((data)=>{
             setusers(data.data)
             console.log(data.data)
             console.log(users);
        }).catch((err)=>console.log(err));

        
    },[page]);
    const HandleClick=(id)=>{
        setisloader(true);
      setTimeout(() => {
        console.log(id);
       const url=`https://reqres.in/api/users/${id}`;
       fetch(url)
       .then(res=>res.json()).then((data)=>{
           
            setuser(data.data)
            console.log(user);
            setisloader(false);
       }).catch((err)=>console.log(err)); 
      }, 500); 
            
};
const Nextpage=()=>{
    console.log(2);
    setpage(2)
};
const Prevpage=()=>{
    setpage(1);
};
return(
    <Wrapper>
        <Userinfo>
    {!isloader ?user?<>
     <span>{user.first_name +''+user.last_name }</span>
     <span>{user.email}</span>
     <img src={user.avatar}/>
     </>
    :<span>Click on any button</span>
:<TailSpin/>
}</Userinfo>
    <ButtonWrapper>
    {users.map((item,count)=>
        <button  onClick={()=>{HandleClick(users[count].id)}}>{page===1?count+1:count+7}</button>
    )
}
</ButtonWrapper>
<Footer><button onClick={()=>{page===1?Nextpage():Prevpage()}}>{page===1 ? "Next Page ->":"<- Previous Page"} </button></Footer>
</Wrapper>   

);
}
const Userinfo=styled.div`
height:300px;
width:300px;
margin:auto;
flex:0.7;
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
font-weight:600;
font-size:24px;

span{
    margin-bottom:10px;
}
img{
    flex:0.9;
    
}`;

const Wrapper=styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
height:80vh;
widht:100vh;`;
const ButtonWrapper=styled.div`
width:90%;
display:flex;
justify-content:space-around;
margin:auto;
button{
    margin-left:10px;
}
@media (min-width:1000px){
width:80%;
}
`;
const Footer=styled.div`
position:relative;
top:60px;
button{
    width:fit-content;
}`;
export default Home;