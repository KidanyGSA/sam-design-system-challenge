import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'integrity-info-ws-item',
  templateUrl: './integrity-info-ws-item.component.html',
  styleUrls: ['./integrity-info-ws-item.component.scss']
})
export class IntegrityInfoWsItemComponent implements OnInit {

  @Input() model;

  menu = {
    trigger: 'primary',
    actions: [
      { id: 'ViewBtn', icon: 'bars', text: 'View' },
      { id: 'UpdateBtn', icon: 'bars', text: 'Update' },
      { id: 'DeactivateBtn', icon: 'bars', text: 'Deactivate' }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

  menuClicked(action) {
	console.log(`%cLog: clicked action`, 'color: blue; font-weight: bold');
  }


}
