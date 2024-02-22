import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  template: `
    <CDBBtn (click)="modal1.toggleModal()" color="danger">
      <CDBIcon [icon]="buttonName"></CDBIcon>
    </CDBBtn>
    <CDBModal #modal1="cdbModal" [centered]="true">
      <CDBCard>
        <CDBCardBody>
          <CDBCardTitle class="pt-2 pb-1 fontsize-17 poppins text-danger">{{
            title
          }}</CDBCardTitle>
          <hr />
          <CDBCardText class="fontsize-17 poppins pt-2 pb-5">
            {{ buttonMsg }}
          </CDBCardText>
          <div class="d-flex">
            <div class="d-flex justify-content-end" style="flex: 50%">
              <CDBBtn
                color="white"
                [flat]="true"
                (click)="modal1.toggleModal(); confirm(false)"
              >
                Cancel
              </CDBBtn>
              <CDBBtn
                color="dark"
                [flat]="true"
                (click)="modal1.toggleModal(); confirm(true)"
              >
                Done
              </CDBBtn>
            </div>
          </div>
        </CDBCardBody>
      </CDBCard>
    </CDBModal>
  `,
  styles: [],
})
export class ModalComponent {
  @Input() buttonName: string = '';
  @Input() buttonMsg: string = '';
  @Input() title: string = '';
  @Output() confirmation: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  confirm(option: any) {
    this.confirmation.emit(option);
  }
}
