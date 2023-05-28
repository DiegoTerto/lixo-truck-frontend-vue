export default class UserAuth {
  email: string;

  password: string;

  constructor(email = '', password = '') {
    this.email = email || '';
    this.password = password || '';
  }
}
