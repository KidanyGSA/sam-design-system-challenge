import { Component, OnInit, AfterViewInit, ViewChild, ChangeDetectorRef, OnChanges, ChangeDetectionStrategy } from '@angular/core';

import { FormlyFieldConfig } from '@ngx-formly/core';

import { filter, map } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

import { workspaceMenuData } from '../../common/sam-workspace-menu/sam-workspace-menu.data';
import { IntegrityWsFiltersService } from './integrity-ws-filters/integrity-ws-filters.service';
import { IntegrityInfoService } from '../integrity-info-service/integrity-info.service';

@Component({
  selector: 'integrity-info-workspace',
  templateUrl: './integrity-info-workspace.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [IntegrityInfoService, IntegrityWsFiltersService]
})
export class IntegrityInfoWorkspaceComponent implements OnInit, AfterViewInit {

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

  constructor(private change: ChangeDetectorRef, public service: IntegrityInfoService, public filterService: IntegrityWsFiltersService) { }

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

