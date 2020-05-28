import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
<<<<<<< HEAD
=======
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
>>>>>>> 2d1ad814502b1d39cd2afc2d5ab618d7712b8598
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
