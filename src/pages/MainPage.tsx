import React, {FC, useEffect} from 'react'
import {getAxiosInstance} from "../api";
import {Table} from "@blocks/Table";
import {useDispatch} from "react-redux";
import {saveUserData} from "@store/actions";

const MainPage: FC = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    getAxiosInstance().get('users').then(({data}) => {
      dispatch(saveUserData({users: data.collection}))
    })
  }, []);

  return (
    <div>
      <Table/>
    </div>
  )
};

export default MainPage
