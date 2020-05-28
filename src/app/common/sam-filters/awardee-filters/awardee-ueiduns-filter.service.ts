import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SDSAutocompleteServiceInterface, 
		 SDSHiercarchicalServiceResult, 
		 SDSSelectedItemModel
	   } from '@gsa-sam/components';

import { BaseAwardeeFilterService, EntityIDType } from './base-awardee-filter.service';

/**
 *  See the BaseAwardeeFilterService for the implementation.  This is a wrapper that gets awardee information by UEIDuns.
 */
@Injectable()
export class AwardeeUeidunsFilterService implements SDSAutocompleteServiceInterface {

   	public model: SDSSelectedItemModel = new SDSSelectedItemModel();

   	constructor(private service: BaseAwardeeFilterService) {
   	}

    getDataByText(currentItems: number, searchValue?: string): Observable<SDSHiercarchicalServiceResult> {
        return this.service.getDataByText(EntityIDType.UEIDUNS, currentItems, searchValue);
    }
}
