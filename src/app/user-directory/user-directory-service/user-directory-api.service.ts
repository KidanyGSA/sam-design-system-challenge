import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SearchParameters, SearchResult } from '@gsa-sam/layouts';

import { userDirectoryData } from './user.data';

/**
 *  The integrity service emulates basic sorting and filtering for most of the filters (except keyword).
 */
@Injectable()
export class UserDirectoryService {

	constructor() { }

    /*
     * Here is the main method that the design system calls
     */
	getData(search: SearchParameters): Observable<SearchResult> {
		let records = userDirectoryData;

		/* Filter */
		if (search && search.filter) {
			records = userDirectoryData.filter(record => this.filterRecord(record, search.filter))
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

	//Filter records given the filter object containing the formly filter model
	filterRecord(record, filter) {

		if (filter.department && filter.department.length > 0) {
			if (!this.filterDepartment(record, filter.department)) {
				return false;
			}
		}

		if (filter.domain && filter.domain.length > 0) {
			if (!this.filterDomain(record, filter.domain)) {
				return false;
			}
		}

		return true;
	}

	/**
	 * Determines if the records contain the selected departments
	 * @param record 
	 * @param departmentList 
	 */
	filterDepartment(record, departmentList) {
		for (let department of departmentList) {
			if (department.value == record.department) {
				return true;
			}
		}
		return false;
	}

	/**
	 * Determines if the records contains the selected domain
	 * In this case domain is a single select thus the loop is not necessary but it allows for multiple select in the future
	 * @param record 
	 * @param domainList 
	 */
	filterDomain(record, domainList) {
		for (let domain of domainList) {
			if (domain.value == record.domain) {
				return true;
			}
		}
		return false;
	}

	filterTerminationType(record, terminationType) {
		if (!terminationType.Complete && !terminationType.Partial && !terminationType.NA) {
			return true;
		}
		if (terminationType.Complete && record.terminationType == 'Complete') {
			return true
		}
		if (terminationType.Partial && record.terminationType == 'Partial') {
			return true
		}
		if (terminationType.NA && record.terminationType == 'N/A') {
			return true
		}
		return false;
	}

	filterAwardee(record, awardee) {
		for (let i = 0; awardee.name && i < awardee.name.length; i++) {
			if (record.awardeeName == awardee.name[i].AWARDEE) {
				return true;
			}
		}
		for (let i = 0; awardee.ueiduns && i < awardee.ueiduns.length; i++) {
			if (record.DUNS == awardee.ueiduns[i].DUNS) {
				return true;
			}
		}
		for (let i = 0; awardee.cage && i < awardee.cage.length; i++) {
			if (record.CAGE == awardee.cage[i].CAGE) {
				return true;
			}
		}
		if ((!awardee.name || (awardee.name && awardee.name.length == 0)) &&
			(!awardee.ueiduns || (awardee.ueiduns && awardee.ueiduns.length == 0)) &&
			(!awardee.cage || (awardee.cage && awardee.cage.length == 0))) {
			return true;
		}
		return false;
	}

	sortRecords(records, search: SearchParameters) {
		records.sort((a, b) => {
			switch (search.sortField) {
				case 'userAscending':
					return (a.givenName > b.givenName) ? 1 : -1;
				case 'userDescending':
					return (a.givenName > b.givenName) ? -1 : 1;
				default: {
					return (a.givenName > b.givenName) ? 1 : -1;
				}
			}
		});
	}
}

