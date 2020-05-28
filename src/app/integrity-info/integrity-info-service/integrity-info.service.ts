import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SearchParameters, SearchResult, SearchListConfiguration } from '@gsa-sam/layouts';

import { integrityData } from './integrity.data';

/**
 *  The integrity service emulates basic sorting and filtering for most of the filters (except keyword).
 */
@Injectable()
export class IntegrityInfoService {

  constructor() { }

  	public model: SearchListConfiguration = {
	  defaultSortValue: "awardeeAscending",
	  pageSize: 25,
	  sortList:
	    [
	      { text: "Awardee Name (A-Z)", value: "awardeeAscending" },
	      { text: "Awardee Name (Z-A)", value: "awardeeDescending" },
	      { text: "Unique Entity ID (Low-High)", value: "ueiAscending" },
	      { text: "Unique Entity ID (High-Low)", value: "ueiDescending" },
	      { text: "Record Date (Newest)", value: "dateDescending" },
	      { text: "Record Date (Oldest)", value: "dateAscending" },
	    ]
	};

    /*
     * Here is the main method that the design system calls
     */
    getData(search: SearchParameters): Observable<SearchResult> {

        let records = integrityData;

        /* Filter */
        if(search && search.filter) {
        	records = integrityData.filter(record => this.filterRecord(record, search.filter))
        }

        /* Sort */
        this.sortRecords(records, search);

        /* Return slice */
        const start = search.page.pageNumber * search.page.pageSize - search.page.pageSize;
        const end = start + search.page.pageSize;
        return of({
            items: records.slice(start, end),
            totalItems: records.length
        });
    }

    filterRecord(record, filter) {
    	if(filter.terminationType) {
    		if(!this.filterTerminationType(record, filter.terminationType)) {
    			return false;
    		}
    	}
    	if(filter.recordType && filter.recordType.length > 0) {
    		if(!this.filterRecordType(record, filter.recordType)) {
    			return false;
    		}
    	}
    	if(filter.awardee) {
    		if(!this.filterAwardee(record, filter.awardee)) {
    			return false;
    		}
    	}
    	return true;
    }

    filterTerminationType(record, terminationType) {
    	if(!terminationType.Complete && !terminationType.Partial && !terminationType.NA) {
    		return true;
    	}
    	if(terminationType.Complete && record.terminationType == 'Complete') {
    		return true
    	}
    	if(terminationType.Partial && record.terminationType == 'Partial') {
    		return true
    	}
    	if(terminationType.NA && record.terminationType == 'N/A') {
    		return true
    	}
    	return false;
    }

    filterRecordType(record, recordTypes) {
    	for(let i=0; i<recordTypes.length; i++) {
    		if(record.recordType == recordTypes[i].label) {
    			return true;
    		}
    	}
    	return false;
    }

    filterAwardee(record, awardee) {
    	for(let i=0; awardee.name && i < awardee.name.length; i++) {
    		if(record.awardeeName == awardee.name[i].AWARDEE) {
    			return true;
    		}
    	}
    	for(let i=0; awardee.ueiduns && i < awardee.ueiduns.length; i++) {
    		if(record.DUNS == awardee.ueiduns[i].DUNS) {
    			return true;
    		}
    	}
    	for(let i=0; awardee.cage && i < awardee.cage.length; i++) {
    		if(record.CAGE == awardee.cage[i].CAGE) {
    			return true;
    		}
    	}
        if((!awardee.name || (awardee.name && awardee.name.length == 0)) && 
        	(!awardee.ueiduns || (awardee.ueiduns && awardee.ueiduns.length == 0)) &&
        	(!awardee.cage || (awardee.cage && awardee.cage.length == 0))) {
        	return true;
        }
    	return false;
    }

    sortRecords(records, search: SearchParameters) {
        records.sort((a, b) => {
            switch (search.sortField) {
            	case 'awardeeAscending':
            		return (a.awardeeName > b.awardeeName) ? 1 : -1;
            	case 'awardeeDescending':
            		return (a.awardeeName > b.awardeeName) ? -1 : 1;
            	case 'ueiAscending':
            		return (a.DUNS > b.DUNS) ? 1 : -1;
            	case 'ueiDescending':
            		return (a.DUNS > b.DUNS) ? -1 : 1;
            	case 'dateAscending':
            		return ((new Date(a.recordDate)) > (new Date(b.recordDate))) ? 1 : -1;
            	case 'dateDescending':
            		return ((new Date(a.recordDate)) > (new Date(b.recordDate))) ? -1 : 1;
            	default: {
            		return (a.awardeeName > b.awardeeName) ? 1 : -1;
            	}
           }
		});
    }
}

