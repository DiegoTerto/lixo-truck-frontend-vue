import axios from 'axios';
import RequestUser from './user/RequestUser';

export default class UserService {
  public static list() {
    return axios.get('https://agile-castle-27628.herokuapp.com/users');
  }

  public static create(user: RequestUser) {
    return axios.post('https://agile-castle-27628.herokuapp.com/users', user);
  }
}
