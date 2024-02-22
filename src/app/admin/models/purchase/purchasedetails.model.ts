export class PurchaseDetailsModel {
  quantity;
  unit;
  id;
  constructor(obj: any) {
    this.quantity = obj.quantity || 0;
    this.unit = obj.unit || '';
    this.id = obj.id || '';
    return obj;
  }
}
