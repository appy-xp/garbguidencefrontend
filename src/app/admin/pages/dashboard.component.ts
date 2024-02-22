import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="dashboard d-flex">
      <div>
        <app-sidebar bgColor="#212121" color="#fff"></app-sidebar>
      </div>
      <div style="flex:1 1 auto; display:flex; flex-flow:column; ">
        <div style="height:100%">
          <div style="height:calc(100%); overflow-y:scroll">
            <router-outlet></router-outlet>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
