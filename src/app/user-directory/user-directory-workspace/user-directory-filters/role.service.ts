import { Injectable } from '@angular/core';
import { SDSAutocompletelConfiguration, SDSSelectedItemModel, SelectionMode, SDSHiercarchicalServiceResult, SDSAutocompleteServiceInterface } from '@gsa-sam/components';
import { userDirectoryData } from '../../user-directory-service/user.data';
import {CommonFilterUtilsService} from './common-filter-utils.service';
import { of } from 'rxjs';

@Injectable()
export class RoleService implements SDSAutocompleteServiceInterface{

  public config: SDSAutocompletelConfiguration = new SDSAutocompletelConfiguration();
  public model: SDSSelectedItemModel = new SDSSelectedItemModel();
  private serviceResult: SDSHiercarchicalServiceResult;


  constructor(private filterUtils: CommonFilterUtilsService) {
    this.config.primaryKeyField = 'key';
    this.config.primaryTextField = 'value';
    this.config.secondaryTextField = '';
    this.config.labelText = 'Role';
    this.config.selectionMode = SelectionMode.MULTIPLE;
    this.config.autocompletePlaceHolderText = 'select';
    this.config.debounceTime = 300;
    this.config.id = 'user_role';

    const _items = [];
    userDirectoryData.forEach(record => _items.push({ key: record.role, value: record.role }));
    this.serviceResult = ({ items: _items, totalItems: _items.length });
  }

  getDataByText(currentItems: number, searchValue?: string): import("rxjs").Observable<SDSHiercarchicalServiceResult> {
    const updatedList = this.filterUtils.dontShowIfInModel(this.serviceResult, this.model);
    if(searchValue){
      const _items = updatedList.items.filter( (obj) => obj['value'].toLowerCase().includes(searchValue.toLowerCase() ));
      return of({items:_items, totalItems: _items.length });
    }
    return of(updatedList);
  }

}// end of class
