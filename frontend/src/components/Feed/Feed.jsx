import React from "react";
import "../../styling/Feed/Feed.css";
import Card from "./Card";
import ButtonsFooter from "./ButtonsFooter";
import {useCookies} from 'react-cookie'
import axios from 'axios'
import { useState , useRef} from "react";
import { useEffect } from "react";

const Feed = () => {
  // console.log("feed run")
  const [cookies,setCookie,removeCookie] = useCookies(['user'])
  const [user,setUser] = useState()
  const [filteredUser,setFilteredUser] = useState()
  const userId = cookies.userId
  const getUser = async () =>
  {
        
        try 
        {
          const response = await axios.get('http://localhost:8000/users',{
          params: {userId}
        })
        setUser(response.data)
        
      }
      catch(err)
      {
        console.log(err)
      }
  }

  const getFilteredUsers = async()=>
  {
        try 
        {
          
          const response = await axios.get('http://localhost:8000/filter-users',{
          params: {gender:user?.pref_gender}
        })
       setFilteredUser(response.data)
       

      }
      catch(err)
      {
        console.log(err)
      }    

  }


  useEffect(() => {
    getUser()

}, [])

useEffect(() => {
    if (user) {
        getFilteredUsers()
    }
}, [user])

console.log('user data from feed',user)
console.log('filtered user data from feed',filteredUser)
  return (
    <>
    {user && 
      <div className="feed">
      {
      filteredUser?.map((fuser)=>
      <Card key={fuser._id} fuser={fuser}/>)} 


    </div>
    }
    
        
    </>
    
  );
};

export default Feed;
