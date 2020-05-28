import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentFilterService } from '../public-apis';
import { CommonFilterUtilsService } from './common-filter-utils.service';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers:[   
    DepartmentFilterService,
    CommonFilterUtilsService
  ]
})
export class CommonFiltersModule { }

