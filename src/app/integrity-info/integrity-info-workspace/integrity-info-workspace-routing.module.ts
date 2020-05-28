import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntegrityInfoWorkspaceComponent } from './integrity-info-workspace.component';

const routes: Routes = [
	{
		path: '',
		component: IntegrityInfoWorkspaceComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntegrityInfoWorkspaceRoutingModule { }
