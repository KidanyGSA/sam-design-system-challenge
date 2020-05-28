import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

import { SDSAutocompletelConfiguration, SelectionMode } from '@gsa-sam/components';

import {
  IntegrityTypeFilter,
  AwardeeNameFilterService,
  AwardeeCageFilterService,
  AwardeeUeidunsFilterService,
  HierarchyFilterService,
} from '../../../common/public-apis';

/**
 * This service manages the formly filter definitions and model.
 */
@Injectable()
export class IntegrityWsFiltersService {

  recordTypeSettings: SDSAutocompletelConfiguration = new SDSAutocompletelConfiguration();
  ueiDunsSettings: SDSAutocompletelConfiguration = new SDSAutocompletelConfiguration();
  cageSettings: SDSAutocompletelConfiguration = new SDSAutocompletelConfiguration();
  awardeeNameSettings: SDSAutocompletelConfiguration = new SDSAutocompletelConfiguration();

  constructor(
    private recordTypeFilter: IntegrityTypeFilter,
    private awardeeNameService: AwardeeNameFilterService,
    private awardeeUeidunsService: AwardeeUeidunsFilterService,
    private awardeeCageService: AwardeeCageFilterService,
    private hierarchyService: HierarchyFilterService
  ) {

 		this.recordTypeSettings.id = 'recordType';
		this.recordTypeSettings.primaryKeyField = 'label';
		this.recordTypeSettings.primaryTextField = 'label';
		this.recordTypeSettings.secondaryTextField = '';
		this.recordTypeSettings.labelText = 'label';
		this.recordTypeSettings.selectionMode = SelectionMode.MULTIPLE;
		this.recordTypeSettings.autocompletePlaceHolderText = 'Select...';
		this.recordTypeSettings.debounceTime = 100;

  		this.ueiDunsSettings.id = 'ueiduns';
		this.ueiDunsSettings.primaryKeyField = 'DUNS';
		this.ueiDunsSettings.primaryTextField = 'AWARDEE';
		this.ueiDunsSettings.secondaryTextField = 'DUNS';
		this.ueiDunsSettings.labelText = 'Awardee Duns';
		this.ueiDunsSettings.selectionMode = SelectionMode.MULTIPLE;
		this.ueiDunsSettings.autocompletePlaceHolderText = 'Ex: 123456789';
		this.ueiDunsSettings.debounceTime = 100;

  		this.cageSettings.id = 'cageCode';
		this.cageSettings.primaryKeyField = 'CAGE';
		this.cageSettings.primaryTextField = 'AWARDEE';
		this.cageSettings.secondaryTextField = 'CAGE';
		this.cageSettings.labelText = 'Awardee CAGE';
		this.cageSettings.selectionMode = SelectionMode.MULTIPLE;
		this.cageSettings.autocompletePlaceHolderText = 'Ex: N5940';
		this.cageSettings.debounceTime = 100;

  		this.awardeeNameSettings.id = 'awardeeName';
		this.awardeeNameSettings.primaryKeyField = 'AWARDEE';
		this.awardeeNameSettings.primaryTextField = 'AWARDEE';
		this.awardeeNameSettings.secondaryTextField = 'DUNS';
		this.awardeeNameSettings.labelText = 'Awardee Name';
		this.awardeeNameSettings.selectionMode = SelectionMode.MULTIPLE;
		this.awardeeNameSettings.autocompletePlaceHolderText = 'Legal Business Name';
		this.awardeeNameSettings.debounceTime = 100;
  }

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
    {
      key: 'awardee',
      templateOptions: { label: 'Awardee', group: 'accordion' },
      fieldGroup: [
        {
          key: 'name',
          type: 'autocomplete',
          templateOptions: {
            label: 'Awardee Name',
            hideOptional: true,
            service: this.awardeeNameService,
            configuration: this.awardeeNameSettings,
            model: this.awardeeNameService.model,
          },
        },
        {
          key: 'ueiduns',
          type: 'autocomplete',
          templateOptions: {
            label: 'Unique Entity ID',
            hideOptional: true,
            service: this.awardeeUeidunsService,
            configuration: this.ueiDunsSettings,
            model: this.awardeeUeidunsService.model,
          },
        },
        {
          key: 'cage',
          type: 'autocomplete',
          templateOptions: {
            label: 'CAGE / NCAGE',
            hideOptional: true,
            service: this.awardeeCageService,
            configuration: this.cageSettings,
            model: this.awardeeCageService.model,
          },
        },
      ],
    },
    {
      key: 'recordType',
      type: 'autocomplete',
      templateOptions: {
        label: 'Record Type',
        hideOptional: true,
        service: this.recordTypeFilter,
        configuration: this.recordTypeSettings,
        model: this.recordTypeFilter.model,
        group: 'accordion',
      },
    },
    {
      key: 'terminationType',
      type: 'multicheckbox',
      templateOptions: {
        label: 'Termination Type',
            hideOptional: true,
        group: 'accordion',
        options: [
          {
            label: 'Complete',
            value: 'Complete',
          },
          {
            label: 'Partial',
            value: 'Partial',
          },
          {
            label: 'N/A',
            value: 'NA',
          },
        ],
      },
    }
  ];
}
