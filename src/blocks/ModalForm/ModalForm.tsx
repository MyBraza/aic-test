import React, {FC, useEffect} from 'react'
import {ModalBackdrop} from "@blocks/ModalBackdrop";
import './ModalForm.scss'
import {FormikErrors, FormikValues, useFormik} from 'formik';
import {Button} from "@blocks/Button";
import ModalFormInput from "@blocks/ModalForm/ModalFormInput/ModalFormInput";
import {IUserRequestBody, IUserViewModel} from "../../interfaces";
import ModalFormSelect from "@blocks/ModalForm/ModalFormSelect/ModalFormSelect";
import {useSelector} from "react-redux";
import {getCurrentUserSelector, getRolesSelector} from "@store/selectors";

type TModalFormProps = {
  hidden?: boolean
  onCancel: () => void
  handleSubmit?: (values: IUserRequestBody) => void
}

const ModalForm: FC<TModalFormProps> = ({hidden, onCancel, handleSubmit}: TModalFormProps) => {

  const isValidEmail = (email: string) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

  const roles = useSelector(getRolesSelector).map((role) => ({value: role.id, label: role.title}));
  const currentUser = useSelector(getCurrentUserSelector);


  const formik = useFormik({
    initialValues: {
      surname: '',
      name: '',
      middleName: '',
      birthday: '',
      birthPlace: '',
      email: '',
      roleId: '',
      phoneNumber: ''
    },
    validate: (values) => {
      const errors: FormikErrors<FormikValues> = {};

      if (!values.email) {
        errors.email = 'Required';
      } else if (!isValidEmail(values.email)) {
        errors.email = 'Invalid email address';
      }

      if (!values.surname) {
        errors.firstName = 'Required';
      } else if (values.surname.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
      }

      if (!values.name) {
        errors.name = 'Required';
      } else if (values.name.length > 15) {
        errors.name = 'Must be 15 characters or less';
      }

      if (!values.middleName) {
        errors.middleName = 'Required';
      } else if (values.middleName.length > 15) {
        errors.middleName = 'Must be 15 characters or less';
      }

      if (!values.birthday) {
        errors.birthday = 'Required';
      }

      if (!values.roleId) {
        errors.roleId = 'Required';
      }

      return errors
    },
    onSubmit: (values) => {
      const data = {
        ...values,
        birthday: new Date(values.birthday),
        lastUpdate: new Date(),
        registerDate: currentUser ? currentUser.registerDate : new Date()
      };
      handleSubmit?.(data);
    }
  });

  useEffect(() => {
    if (currentUser)
      formik.setValues(
        (({
            surname,
            name,
            middleName,
            birthday,
            birthPlace,
            email,
            phoneNumber,
            role
          }: IUserViewModel) =>
          ({
              surname,
              name,
              middleName,
              birthday: birthday.toString(),
              birthPlace,
              email,
              phoneNumber,
              roleId: role.id
            }
          ))(currentUser)
      )
  }, [currentUser]);


  return (
    <ModalBackdrop hidden={hidden}>
      <form onSubmit={formik.handleSubmit} className='modal-form'>
        <div className='modal-form__row'>
          <ModalFormInput name='surname'
                          type='text'
                          onChange={formik.handleChange}
                          value={formik.values.surname}>
            Фамилия
          </ModalFormInput>
          {formik.errors.surname
            ? <div className='modal-form__error-notification'>{formik.errors.surname}</div>
            : null}
        </div>
        <div className='modal-form__row'>
          <ModalFormInput name='name'
                          type='text'
                          onChange={formik.handleChange}
                          value={formik.values.name}>
            Имя
          </ModalFormInput>
          {formik.errors.name
            ? <div className='modal-form__error-notification'>{formik.errors.name}</div>
            : null}
        </div>
        <div className='modal-form__row'>
          <ModalFormInput name='middleName'
                          type='text'
                          onChange={formik.handleChange}
                          value={formik.values.middleName}>
            Отчество
          </ModalFormInput>
          {formik.errors.middleName
            ? <div className='modal-form__error-notification'>{formik.errors.middleName}</div>
            : null}
        </div>
        <div className='modal-form__row'>
          <ModalFormSelect name='roleId'
                           value={formik.values.roleId}
                           placeholder='Выберите роль'
                           onChange={formik.handleChange}
                           options={roles}>
            Выберите роль
          </ModalFormSelect>
          {formik.errors.roleId
            ? <div className='modal-form__error-notification'>{formik.errors.roleId}</div>
            : null}
        </div>
        <div className='modal-form__row'>
          <ModalFormInput name='birthday'
                          type='date'
                          onChange={formik.handleChange}
                          value={formik.values.birthday}>
            Дата рождения
          </ModalFormInput>
          {formik.errors.birthday ?
            <div className='modal-form__error-notification'>{formik.errors.birthday}</div> : null}
        </div>
        <div className='modal-form__row'>
          <ModalFormInput name='birthPlace'
                          type='text'
                          onChange={formik.handleChange}
                          value={formik.values.birthPlace}>
            Место рождения
          </ModalFormInput>
        </div>
        <div className='modal-form__row'>
          <ModalFormInput name='email'
                          type='email'
                          onChange={formik.handleChange}
                          value={formik.values.email}>
            Электронная почта
          </ModalFormInput>
          {formik.errors.email
            ? <div className='modal-form__error-notification'>{formik.errors.email}</div>
            : null}
        </div>
        <div className='modal-form__row'>
          <ModalFormInput name='phoneNumber'
                          type='tel'
                          onChange={formik.handleChange}
                          value={formik.values.phoneNumber}>
            Номер телефона
          </ModalFormInput>
        </div>
        <div className='modal-form__row'>
          <Button type="submit">Отправить</Button>
          <Button type="button" onClick={onCancel}>Отменить</Button>
        </div>
      </form>
    </ModalBackdrop>
  )
};

ModalForm.displayName = 'ModalForm';

export default ModalForm
