import React, { useEffect, useState } from 'react'
import  axios from "axios";
import {Row} from "react-bootstrap"
import User from './user';

const ListOfUser = () => {

    const [dataHooks,setDataHooks]=useState([])


    const getUser=async()=>{

        try{

            const {data}=await axios.get("https://jsonplaceholder.typicode.com/users")
            setDataHooks(data)


        }
        catch(e){

            console.error(e)


        }

        
    }

    useEffect(()=>{

        getUser()

    },[])

  return (

        
        <Row xs={1} md={2} className="g-4 m-auto">  {dataHooks?.map(el=><User el={el} />)}</Row>
        
       


  )
}
export default ListOfUser