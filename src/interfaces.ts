export interface ICollectionImpl<T> {
  total: number;
  collection: Array<T>;
}

interface IUserImpl {
  surname: string;
  name: string;
  middleName: string;
  birthday: Date;
  birthPlace: string;
  email: string;
  phoneNumber: string;
  registerDate: Date;
  lastUpdate: Date;
}

export interface IUserRequestBody extends IUserImpl {
  roleId: string;
}

export interface IUserViewModel extends IUserImpl {
  id: string;
  role: IUserRoleImpl
}

export interface IUserRoleImpl {
  id: string;
  title: string;
}
