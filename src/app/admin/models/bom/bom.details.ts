export class BomDetailsModel {
  quantity;

  id;
  constructor(obj: any) {
    this.quantity = obj.quantity || '';
    this.id = obj.id || '';
    return obj;
  }
}
