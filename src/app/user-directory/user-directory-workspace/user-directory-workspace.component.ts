
import { Component, OnInit, AfterViewInit, ViewChild, ChangeDetectorRef, OnChanges, ChangeDetectionStrategy } from '@angular/core';

import { FormlyFieldConfig } from '@ngx-formly/core';

import { filter, map } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

import { workspaceMenuData } from '../../common/sam-workspace-menu/user-directory-menu.data';
import { UserDirectoryService } from '../user-directory-service/user-directory.service';
import { UserDirectoryWsFiltersService } from './user-directory-ws-filters/user-directory-ws-filters.service';

@Component({
  selector: 'app-user-directory-workspace',
  templateUrl: './user-directory-workspace.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UserDirectoryService, UserDirectoryWsFiltersService]
})
export class UserDirectoryWorkspaceComponent implements OnInit {

  @ViewChild('resultList', { static: true }) resultList;

  form = new FormGroup({});

  showFilters: boolean = true;

  public filterChange$ = new BehaviorSubject<object>(null);

  subheader = {
    actions: [
      { id: 'downloadAction', icon: 'download', text: 'Download' }
    ]
  };

  navigationModel = workspaceMenuData;

  constructor(private change: ChangeDetectorRef,
              public service: UserDirectoryService, 
              public filterService: UserDirectoryWsFiltersService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.change.detectChanges();
  }

  subheaderActionClicked(action) {

  }

  newAccount(event) {
    console.log(`%cLog: Creating new account`, 'color: blue; font-weight: bold');
  }

  newSearch(event) {
    console.log(`%cLog: Searching accounts`, 'color: blue; font-weight: bold');
  }

}
