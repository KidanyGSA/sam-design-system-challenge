import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { BaseAwardeeFilterService,  		
  		HierarchyFilterService } from '../../common/public-apis';

import {
  SdsSideNavigationModule,
  SdsToolbarModule,
  SdsAccordionModule,
  SdsPageModule,
  SdsSearchModule
} from '@gsa-sam/components';
import { SdsFiltersModule, SDSFormlyUpdateComunicationService } from '@gsa-sam/sam-formly';
import { SdsSubheaderModule, SearchListServiceModule } from '@gsa-sam/layouts';

import { UserDirectoryWorkspaceComponent } from './user-directory-workspace.component';
import { UserDirectoryWorkspaceRoutingModule } from './user-directory-workspace-routing.module';
import { UserDirectoryWsItemComponent } from './user-directory-ws-item/user-directory-ws-item.component';




@NgModule({
  declarations: [UserDirectoryWorkspaceComponent, UserDirectoryWsItemComponent],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    SdsSideNavigationModule,
    SdsToolbarModule,
    SdsAccordionModule,
    SdsPageModule,
    SdsSearchModule,
    SdsFiltersModule,
    SdsSubheaderModule, 
    SearchListServiceModule,
    UserDirectoryWorkspaceRoutingModule,    
  ],
  exports: [UserDirectoryWorkspaceComponent],
  providers: [SDSFormlyUpdateComunicationService, ]
})
export class UserDirectoryWorkspaceModule { }
