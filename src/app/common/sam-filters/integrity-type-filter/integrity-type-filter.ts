import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SDSAutocompleteServiceInterface, 
		 SDSHiercarchicalServiceResult, 
		 SDSSelectedItemModel
         } from '@gsa-sam/components';

/**
 *  This autocomplete service provides the definitive list of record types for integrity information.
 */
@Injectable()
export class IntegrityTypeFilter implements SDSAutocompleteServiceInterface {
	
   	public model: SDSSelectedItemModel = new SDSSelectedItemModel();

    private data = [
        { 'label': 'Administrative Agreement' },
        { 'label': 'DoD Determination of Contractor Fault' },
        { 'label': 'Non-Responsibility Determination' },
        { 'label': 'Subcontractor Payment Issues' },
        { 'label': 'Termination for Cause' },
        { 'label': 'Termination for Default' },
        { 'label': 'Termination for Material Failure to Comply' }
    ];

   	constructor() {
	}

    getDataByText(currentItems: number, searchValue?: string): Observable<SDSHiercarchicalServiceResult> {
        let result = (searchValue) ? this.data.filter(element => element.label.toLowerCase().indexOf(searchValue.toLowerCase()) >=0) : this.data;
        return of({
        	items: result,
        	totalItems: result.length
        });
    }
}
