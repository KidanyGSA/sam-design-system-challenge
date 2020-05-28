import { Injectable } from '@angular/core';
import { SDSHiercarchicalServiceResult, SDSSelectedItemModel } from '@gsa-sam/components';

@Injectable()
export class CommonFilterUtilsService {

  constructor() { }

  /**
   * Use this method to filer the dictionary list and remove any already selected items in the model
   * requires that list items use ['key']
   * @param list 
   * @param model 
   */
  dontShowIfInModel(resultList: (SDSHiercarchicalServiceResult), filterModel: SDSSelectedItemModel): (SDSHiercarchicalServiceResult) {
    if ( filterModel.items.length < 1 ) { return resultList; }
    const _items = resultList.items.filter(resultObj => !filterModel.items.some(modelObj => resultObj['key'] === modelObj['key']))
    return { items: _items, totalItems: _items.length };
  }

  /**
   * use this to sort a list that may have alpha and numeric keys
   */
  sortAlphaNumeric = (a, b) => {
    // convert to strings and force lowercase
    a = typeof a === 'string' ? a.toLowerCase() : a.toString();
    b = typeof b === 'string' ? b.toLowerCase() : b.toString();

    return a.localeCompare(b);
  };

} // end of class
