import React, {FC, useCallback, useEffect, useState} from 'react'
import {Table} from "@blocks/Table";
import {useDispatch, useSelector} from "react-redux";
import {
  createUserRequest,
  fetchRoles,
  fetchUserData,
  setCurrentUser,
  updateUserData
} from "@store/actions";
import './MainPage.scss'
import {ModalForm} from '@blocks/ModalForm';
import {IUserRequestBody, IUserViewModel} from "../interfaces";
import {getAxiosInstance} from "../api";
import {ModalConfirmation} from "@blocks/ModalConfirmation";
import {getCurrentUserSelector} from "@store/selectors";
import {Header} from "@blocks/Header";

const MainPage: FC = () => {

  const dispatch = useDispatch();

  const currentUser = useSelector(getCurrentUserSelector);

  const [isModalFormHidden, setIsModalFormHidden] = useState<boolean>(true);
  const [isModalDeleteUserHidden, setIsModalDeleteUserHidden] = useState<boolean>(true);

  const handleSubmit = (data: IUserRequestBody) => {
    if (currentUser) {
      dispatch(updateUserData(currentUser.id, data));
      setIsModalFormHidden(true);
      return
    }
    dispatch(createUserRequest(data));
    setIsModalFormHidden(true)
  };

  const onAddUser = () => {
    dispatch(setCurrentUser({currentUser: undefined}));
    setIsModalFormHidden(false)
  };

  const onEditUser = (user: IUserViewModel) => {
    console.log(user);
    dispatch(setCurrentUser({currentUser: user}));
    setIsModalFormHidden(false)
  };

  const onDeleteUser = (user: IUserViewModel) => {
    dispatch(setCurrentUser({currentUser: user}));
    setIsModalDeleteUserHidden(false)
  };

  const onDeleteUserConfirm = useCallback(() => {
    if (currentUser) getAxiosInstance().delete(`/users/${currentUser.id}`).then(() => dispatch(fetchUserData()));
    setIsModalDeleteUserHidden(true)
  }, [currentUser]);

  useEffect(() => {
    dispatch(fetchUserData());
    dispatch(fetchRoles());
  }, []);

  return (
    <div>
      <Header onAddUser={onAddUser}/>
      <main>
        <Table onEdit={onEditUser} onDelete={onDeleteUser}/>
      </main>
      <ModalForm hidden={isModalFormHidden}
                 onCancel={() => setIsModalFormHidden(true)}
                 handleSubmit={handleSubmit}/>
      <ModalConfirmation onAccept={onDeleteUserConfirm}
                         onCancel={() => setIsModalDeleteUserHidden(true)}
                         hidden={isModalDeleteUserHidden}
                         text='Вы действительно хотите удалить пользователя?'>

      </ModalConfirmation>
    </div>
  )
};

export default MainPage
