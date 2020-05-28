import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntegrityInfoWsItemComponent } from './integrity-info-ws-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { sds } from '@gsa-sam/sam-styles/src/icons/';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { SdsActionsMenuModule } from '@gsa-sam/layouts';

@NgModule({
  declarations: [IntegrityInfoWsItemComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SdsActionsMenuModule
  ],
  exports: [IntegrityInfoWsItemComponent]
})
export class IntegrityInfoWsItemModule { 
  constructor() {
    library.add(fas, sds);
  }
}
