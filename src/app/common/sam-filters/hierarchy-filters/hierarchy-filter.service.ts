import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { SDSAutocompleteServiceInterface, 
		 SDSHiercarchicalServiceResult, 
		 SDSSelectedItemModel
		} from '@gsa-sam/components';

import { subtierDataByRole } from './hierarchy.data';

/**
 * This autocomplete service emulates a role based federal hierarchy service.  It is prepoluated with the list of DoD subtiers that have
 * entered integrity records into FAPIIS.  It is not intended to be a full hierarchy.
 */
@Injectable()
export class HierarchyFilterService implements SDSAutocompleteServiceInterface {

   	public data;

   	public model: SDSSelectedItemModel = new SDSSelectedItemModel();

   	constructor() {
	}

	initData() {
		return subtierDataByRole.sort((a, b) => { 
           return (a.subtier > b.subtier) ? 1 : -1; 
		});
	}

	match(record, searchValue) {
	    if(record.subtier && record.subtier.toLowerCase().startsWith(searchValue.toLowerCase())) {
	    	return true;
	    }
	    if(record.agencyCode && record.agencyCode.startWith(searchValue)) {
	    	return true;
	    }
	    return false;
	}

    getDataByText(currentrecords: number, searchValue?: string): Observable<SDSHiercarchicalServiceResult> {
        let result = (searchValue) ? this.data.filter(element => this.match(element, searchValue)) : this.data;
        return of({
        	items: result.slice(0 + currentrecords, ((30 + currentrecords) < result.length) ? 30 + currentrecords : result.length),
        	totalItems: result.length
        });
    }
}