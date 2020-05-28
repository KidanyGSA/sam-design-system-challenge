import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

import { SDSAutocompletelConfiguration, SelectionMode } from '@gsa-sam/components';

import {
  HierarchyFilterService,
} from '../../../common/public-apis';

/**
 * This service manages the formly filter definitions and model.
 */
@Injectable()
export class FiltersConfigService {

 // recordTypeSettings: SDSAutocompletelConfiguration = new SDSAutocompletelConfiguration();

  constructor(
  ) { }

   filters: FormlyFieldConfig[] = [
    {
      key: 'keyword',
      type: 'input',
      templateOptions: {
        label: 'Keyword',
        group: 'panel',
        className: 'sds-accordion__title'
      },
    },
    { key: 'role',
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
    }

  ];


}// end of class

