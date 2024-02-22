export class BomModel {
  modelName;

  id;
  constructor(obj: any) {
    this.modelName = obj.modelName || '';
    this.id = obj.id || '';
    return obj;
  }
}
