import { SDSAutocompletelConfiguration, SDSSelectedItemModel, SDSAutocompleteServiceInterface, SelectionMode, SDSHiercarchicalServiceResult } from "@gsa-sam/components";
import { of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserDirectoryWorkspaceModule } from '../user-directory-workspace.module';

@Injectable({ providedIn: UserDirectoryWorkspaceModule})
export class UserSearchService implements SDSAutocompleteServiceInterface {
    public model: SDSSelectedItemModel = new SDSSelectedItemModel();
    public config: SDSAutocompletelConfiguration = new SDSAutocompletelConfiguration();

    constructor() {
        this.config.primaryKeyField = 'key';
        this.config.primaryTextField = 'value';
        this.config.selectionMode = SelectionMode.MULTIPLE;
        this.config.autocompletePlaceHolderText = "Type a name or email";
        this.config.debounceTime = 400;   
        this.config.isFreeTextEnabled = true;
        this.config.id = 'keywordFilter';
    }
    getDataByText(currentItems: number, searchValue?: string): Observable<SDSHiercarchicalServiceResult> {
        return of({
            items: [],
            totalItems: 0
        });
    }     
}