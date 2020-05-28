import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDirectoryWorkspaceComponent } from './user-directory-workspace.component'

const routes: Routes = [
	{
		path: '',
		component: UserDirectoryWorkspaceComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDirectoryWorkspaceRoutingModule { }
