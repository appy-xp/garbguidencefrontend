export class paginationModel {
  currentPage;
  lastPage;
  nextPage;
  previousPage;
  hasNextPage;
  hasPreviousPage;
  constructor(obj: any) {
    this.currentPage = obj.currentPage || '';
    this.lastPage = obj.lastPage || '';
    this.nextPage = obj.nextPage || '';
    this.previousPage = obj.previousPage || '';
    this.hasNextPage = obj.hasNextPage || '';
    this.hasPreviousPage = obj.hasPreviousPage || '';
    return obj;
  }
}
