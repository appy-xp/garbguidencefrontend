export class BrandsModel {
  brandName;
  id;
  constructor(obj: any) {
    this.brandName = obj.brandName || '';
    this.id = obj.id || '';
    return obj;
  }
}
