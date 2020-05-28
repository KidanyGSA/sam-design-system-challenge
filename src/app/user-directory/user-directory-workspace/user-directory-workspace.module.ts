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
import { UserDirectoryItemComponent } from './user-directory-item/user-directory-item.component';
import { CommonFiltersModule } from 'src/app/common/sam-filters/common-filters.module';
import { CommonFilterUtilsService } from 'src/app/common/sam-filters/common-filter-utils.service';




@NgModule({
  declarations: [UserDirectoryWorkspaceComponent, UserDirectoryItemComponent],
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
    CommonFiltersModule, 
  ],
  exports: [UserDirectoryWorkspaceComponent],
  providers: [SDSFormlyUpdateComunicationService, CommonFilterUtilsService,
    ]
})
export class UserDirectoryWorkspaceModule { }
