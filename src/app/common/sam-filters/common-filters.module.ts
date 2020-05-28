import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentFilterService } from '../public-apis';
import { DomainFilterService } from './domain-filters/domain-filter.service';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers:[   
    DepartmentFilterService,
    DomainFilterService
  ]
})
export class CommonFiltersModule { }

