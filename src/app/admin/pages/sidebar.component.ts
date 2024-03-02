import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  template: `
    <div
      class="app"
      style="display: flex; height: 100%; overflow:scroll initial; min-height:100vh"
    >
      <CDBSidebar textColor="#ffffff" backgroundColor="#123468" class="pb-2">
        <CDBSidebarHeader [prefix]="icon">
          <ng-template #icon>
            <i class="fas fa-bars fa-large"></i>
          </ng-template>
          GarbGuidence
        </CDBSidebarHeader>

        <CDBSidebarContent>
          <CDBSidebarMenu class="sidebar-content">
            <CDBSidebarMenuItem link="/adm/mydash" icon="columns">
              Dashboard
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem link="/adm/purchase" icon="bag-shopping">
              Purchase
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem link="/adm/size" icon="cubes">
              Size
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem link="/adm/brand" icon="copyright">
              Brand
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem link="/adm/staffs" icon="user-tie">
              Staffs
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem link="/adm/users" icon="circle-user">
              Users
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem link="/adm/bom" icon="clipboard">
              BOM
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem link="/adm/assign-detail" icon="network-wired">
              Assign Details
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem link="/adm/items" icon="network-wired">
              Items
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem link="/adm/item-progress" icon="network-wired">
              Item Progress
            </CDBSidebarMenuItem>

            <CDBSidebarMenuItem icon="right-from-bracket">
              <button class="btn btn-light btn-sm" (click)="userlogout()">
                Logout
              </button>
            </CDBSidebarMenuItem>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class SidebarComponent implements OnInit {
  @Input() bgColor: String = '';
  @Input() color: String = '';
  constructor(public router: Router) {}
  ngOnInit(): void {}
  userlogout() {
    this.router.navigate(['/authen/login']);
  }
}
