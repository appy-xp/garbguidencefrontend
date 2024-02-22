export class StaffModel {
  firstName;
  lastName;
  contactNo;
  id;
  constructor(obj: any) {
    this.firstName = obj.firstName || '';
    this.lastName = obj.lastName || '';
    this.contactNo = obj.contactNo || '';
    this.id = obj.id || '';
    return obj;
  }
}
