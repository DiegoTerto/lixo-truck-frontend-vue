import IUser from './User';

export default class RequestUser implements IUser {
  name: string;

  username: string;

  email: string;

  password: string;

  cnh: string;

  constructor(obj: any = {}) {
    this.name = obj.name || null;
    this.username = obj.username || null;
    this.email = obj.email || null;
    this.password = obj.password || null;
    this.cnh = obj.cnh || null;
  }
}
