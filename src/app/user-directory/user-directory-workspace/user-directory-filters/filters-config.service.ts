import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

import { SDSAutocompletelConfiguration, SelectionMode } from '@gsa-sam/components';

import {
  DepartmentFilterService,
} from '../../../common/public-apis';

/**
 * This service manages the formly filter definitions and model.
 */
@Injectable()
export class FiltersConfigService { 

  constructor(
    private hierarchyService: DepartmentFilterService
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
        placeholder: "Type a name or email",
        group: 'accordion',
        className: 'sds-accordion__title',
        service: this.hierarchyService,
        configuration: this.hierarchyService.config,
        model: this.hierarchyService.model
      },
    },
    // {
    //   key: 'typeOfNoticeWrapper',
    //   wrappers: ['accordionwrapper'],
    //   templateOptions: { label: 'Type of Notice' },
    //   fieldGroup: [
    //     {
    //       key: 'typeOfNotice',
    //       type: 'autocomplete',
    //       templateOptions: {
    //       service: this.typeOfNoticeService,
    //       configuration: this.typeOfNoticeService.noticeTypeConfig,
    //       model: this.typeOfNoticeService.model
    //       }
    //     }
    //   ]
    // },
  ];
}
