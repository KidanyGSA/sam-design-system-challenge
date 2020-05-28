import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
  	path: '',
  	redirectTo: '/workspace/user-directory', pathMatch: 'full'
  },
  {
    path: 'workspace/user-directory',
    loadChildren: () => import('./user-directory/user-directory-workspace/user-directory-workspace.module').then(m => m.UserDirectoryWorkspaceModule)
  },
  {
  	path: '**',
  	redirectTo: '/workspace/user-directory', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
