export class SizesModel {
  sizeName;
  sizeCode;
  sizeDetail;
  id;
  constructor(obj: any) {
    this.sizeName = obj.sizeName || '';
    this.sizeCode = obj.sizeCode || '';
    this.sizeDetail = obj.sizeDetail || '';
    this.id = obj.id || '';
    return obj;
  }
}
