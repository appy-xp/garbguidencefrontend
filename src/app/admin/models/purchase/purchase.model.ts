export class PurchaseModel {
  itemname;

  id;
  constructor(obj: any) {
    this.itemname = obj.itemname || '';
    this.id = obj.id || '';
    return obj;
  }
}
