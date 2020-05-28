import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentFilterService } from '../public-apis';
import { CommonFilterUtilsService } from './common-filter-utils.service';
import { DomainFilterService } from './domain-filters/domain-filter.service';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers:[   
    DepartmentFilterService,
    DomainFilterService,
    CommonFilterUtilsService
  ]
})
export class CommonFiltersModule { }

