import { Component } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
    'h2 { color: #262729; font-weight: 600  }',
    'hr { background-color: #262729 }',
    '.list-group-item { background-color:#e6e4e5; border-color: #262729; font-weight: 600  }',
    '.active { background-color:#262729 }',
  ]
})
export class SidebarComponent {

}
