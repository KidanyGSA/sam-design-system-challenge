import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { SDSAutocompleteServiceInterface, 
		 SDSHiercarchicalServiceResult, 
		 SDSSelectedItemModel,
		 SDSAutocompletelConfiguration,
		 SelectionMode
		} from '@gsa-sam/components';

import { domainData } from './domain.data';
import { CommonFilterUtilsService } from 'src/app/common/sam-filters/common-filter-utils.service';

/**
 * This autocomplete service emulates a role based federal hierarchy service.  It is prepoluated with the list of DoD subtiers that have
 * entered integrity records into FAPIIS.  It is not intended to be a full hierarchy.
 */
@Injectable()
export class DomainFilterService implements SDSAutocompleteServiceInterface {

   	public data;

	   public model: SDSSelectedItemModel = new SDSSelectedItemModel();
	   public config: SDSAutocompletelConfiguration = new SDSAutocompletelConfiguration();

   	constructor(private filterUtils: CommonFilterUtilsService) {
	    this.config.id = 'department';
		this.config.primaryKeyField = 'key';
		this.config.primaryTextField = 'value';
		this.config.labelText = 'label';
		this.config.selectionMode = SelectionMode.SINGLE;
		this.config.autocompletePlaceHolderText = 'Select...';
		this.config.debounceTime = 100;
	}

    getDataByText(currentrecords: number, searchValue?: string): Observable<SDSHiercarchicalServiceResult> {
        let result: SDSHiercarchicalServiceResult;
        let _items: any[] = domainData.map(departmentObj => ({ key: departmentObj.id, value: departmentObj.name }))
        try {
            if (searchValue) {
                //Autocomplete filtering     
                let filteredItems = _items
                  .filter((dictionaryItem) => {
                    let itemValue: string = dictionaryItem.value.toLowerCase();                    
                    return itemValue.includes(searchValue.toLowerCase());
                  });
                return of({
                  items: filteredItems,
                  totalItems: filteredItems.length
                });
              }            
            result = { items: _items, totalItems: _items.length }
            return of(this.filterUtils.dontShowIfInModel(result, this.model));   
        }
        catch { console.log("Error: No Department Data"); }             
    }
}