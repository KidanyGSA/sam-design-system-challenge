
import { Component, OnInit, AfterViewInit, ViewChild, ChangeDetectorRef, OnChanges, ChangeDetectionStrategy } from '@angular/core';

import { FormlyFieldConfig } from '@ngx-formly/core';
import { filter, map } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

import { SearchListConfiguration } from '@gsa-sam/layouts';

import { workspaceMenuData } from '../../common/sam-workspace-menu/user-directory-menu.data';
import { UserDirectoryService } from '../user-directory-service/user-directory-api.service';
import { FiltersConfigService } from './user-directory-filters/filters-config.service';
import { listConfig } from './searchList.config'

@Component({
  selector: 'app-user-directory-workspace',
  templateUrl: './user-directory-workspace.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UserDirectoryService, FiltersConfigService]
})
export class UserDirectoryWorkspaceComponent implements OnInit {

  @ViewChild('resultList', { static: true }) resultList;

  form = new FormGroup({});

  showFilters: boolean = true;

  public filterChange$ = new BehaviorSubject<object>(null);
  public listModel: SearchListConfiguration;

  subheader = {
    actions: [
      { id: 'downloadAction', icon: 'download', text: 'Download' }
    ]
  };

  navigationModel = workspaceMenuData;

  constructor(private change: ChangeDetectorRef,
              public service: UserDirectoryService, 
              public filterService: FiltersConfigService) { }

  ngOnInit() {
    this.listModel = listConfig;
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
