import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

import { SDSAutocompletelConfiguration, SelectionMode } from '@gsa-sam/components';

import { DepartmentFilterService } from '../../../common/public-apis';
import { DomainFilterService } from '../../../common/sam-filters/domain-filters/domain-filter.service';

/**
 * This service manages the formly filter definitions and model.
 */
@Injectable()
export class FiltersConfigService { 

  constructor(
    private hierarchyService: DepartmentFilterService,
    private domainService: DomainFilterService
  ) {}


  public model = {};

  public filters: FormlyFieldConfig[] = [
    {
      key: 'keyword',
      type: 'input',
      templateOptions: {
        label: 'Users',
        placeholder: "Type a name or email",
        group: 'panel',
        className: 'sds-accordion__title'
      },
    },
    {
      key: 'department',
      type: 'autocomplete',
      templateOptions: {
        label: 'Department',
        group: 'accordion',
        className: 'sds-accordion__title',
        service: this.hierarchyService,
        configuration: this.hierarchyService.config,
        model: this.hierarchyService.model
      },
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
      },
    }
  ];
}
