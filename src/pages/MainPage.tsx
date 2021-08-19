import React, {FC, useEffect} from 'react'
import {getAxiosInstance} from "../api";
import {Table} from "@blocks/Table";

const MainPage: FC = () => {

  useEffect(()=>{
    getAxiosInstance().get('users').then(({data})=>console.log(data))
  },[]);

  return (
    <div>
      <Table/>
    </div>
  )
};

export default MainPage
