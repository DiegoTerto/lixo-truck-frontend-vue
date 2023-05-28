import axios from 'axios';
import UserAuth from './UserAuth';

export default class AuthService {
  public static auth(user: UserAuth): Promise<void> {
    return axios.put('https://agile-castle-27628.herokuapp.com/users/authenticate', user);
  }
}
