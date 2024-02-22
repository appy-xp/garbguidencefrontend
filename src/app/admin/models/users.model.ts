export class UsersModel {
  email;
  password;
  username;
  id;
  constructor(obj: any) {
    this.email = obj.email || '';
    this.password = obj.password || '';
    this.username = obj.username || '';
    this.id = obj.id || '';
    return obj;
  }
}
