import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

import { SDSAutocompletelConfiguration, SelectionMode } from '@gsa-sam/components';

import { DepartmentFilterService } from '../../../common/public-apis';
import { DomainFilterService } from '../../../common/sam-filters/domain-filters/domain-filter.service';
import { UserSearchService } from './userSearch.service';

/**
 * This service manages the formly filter definitions and model.
 */
@Injectable()
export class FiltersConfigService {

  public model = {};

  constructor(
    private departmentService: DepartmentFilterService,
    private domainService: DomainFilterService,
    private userService: UserSearchService
  ) {}



  public filters: FormlyFieldConfig[] = [
    {
      key: 'userSearch',
      type: 'autocomplete',
      templateOptions: {
        label: 'Users',
        group: 'panel',
        className: 'sds-accordion__title',
        service: this.userService,
        configuration: this.userService.config,
        model: this.userService.model
      },
    },
    {
      key: 'department',
      type: 'autocomplete',
      templateOptions: {
        label: 'Department',
        placeholder: "Type a name or email",
        group: 'accordion',
        className: 'sds-accordion__title',
        service: this.departmentService,
        configuration: this.departmentService.config,
        model: this.departmentService.model
      },
    },
    {
      key: 'role',
      wrappers: ['accordionwrapper'],
      type: 'multicheckbox',
      templateOptions: {
        label: 'Role',
        // group: 'role',
        defaultValue: false,
        options: [
          {
            label: 'AAC User',
            value: 'AAC User',
          },
          {
            label: 'Administrator',
            value: 'Administrator'
          },
          {
            label: 'Administrator All Domains',
            value: 'Administrator All Domains'
          },
          {
            label: 'Assistance Administrator',
            value: 'Assistance Administrator'
          },
          {
            label: 'Assistance User',
            value: 'Assistance User'
          },
          {
            label: 'Content Manager',
            value: 'Content Manager'
          },
          {
            label: 'Contracting Officer',
            value: 'Contracting Officer'
          },
          {
            label: 'Contracting Specialist',
            value: 'Contracting Specialist'
          },
        ]
      }
    },    
    {
      key: 'domain',
      type: 'autocomplete',
      templateOptions: {
        label: 'Domain',
        group: 'accordion',
        className: 'sds-accordion__title',
        service: this.domainService,
        configuration: this.domainService.config,
        model: this.domainService.model
      }
    }
  ];

}// end of class

