export class StatusModel {
  isAssigned;
  isReceived;
  isSteching;
  isFinishing;
  isPacking;
  isDispatched;

  id;
  constructor(obj: any) {
    this.isAssigned = obj.isAssigned || false;
    this.isReceived = obj.isReceived || false;
    this.isSteching = obj.isSteching || false;
    this.isFinishing = obj.isFinishing || false;
    this.isPacking = obj.isPacking || false;
    this.isDispatched = obj.isDispatched || false;
    this.id = obj.id || '';
    return obj;
  }
}
