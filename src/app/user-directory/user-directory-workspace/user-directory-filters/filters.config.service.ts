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
export class FiltersService {

 // recordTypeSettings: SDSAutocompletelConfiguration = new SDSAutocompletelConfiguration();

  // constructor(
  //   private hierarchyService: HierarchyFilterService
  // ) {

 	// 	// this.recordTypeSettings.id = 'recordType';
	// 	// this.recordTypeSettings.primaryKeyField = 'label';
	// 	// this.recordTypeSettings.primaryTextField = 'label';
	// 	// this.recordTypeSettings.secondaryTextField = '';
	// 	// this.recordTypeSettings.labelText = 'label';
	// 	// this.recordTypeSettings.selectionMode = SelectionMode.MULTIPLE;
	// 	// this.recordTypeSettings.autocompletePlaceHolderText = 'Select...';
	// 	// this.recordTypeSettings.debounceTime = 100;

  // }


  public model = {};

  public filters: FormlyFieldConfig[] = [
    {
      key: 'keyword',
      type: 'input',
      templateOptions: {
        label: 'Keyword',
        group: 'panel',
        className: 'sds-accordion__title'
      },
    },
  ];
}
