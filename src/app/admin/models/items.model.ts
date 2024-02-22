export class ItemModel {
  modelName;
  itemName;
  quantity;
  id;
  constructor(obj: any) {
    this.modelName = obj.modelName || '';
    this.itemName = obj.itemName || '';
    this.quantity = obj.quantity || '';
    this.id = obj.id || '';
    return obj;
  }
}
