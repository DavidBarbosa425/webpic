import { AuthGuard } from './core/auth/auth.guard';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { NotFoundComponent } from './erros/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoDetailsComponent } from './photos/photo-details/photo-details.component';

const routes: Routes = [
  {
      path: '',
      pathMatch: 'full',
      redirectTo: 'home'
  },
  { 
    path:'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  { 
    path:'user/:userName', 
      component: PhotoListComponent,
      resolve: {
      photos: PhotoListResolver
    },
      data: {
      title: 'Timeline'
    },
  },
  { 
    path:'p/add',
      component: PhotoFormComponent,
      canActivate: [AuthGuard],
      data: {
      title: 'Photo upload'
    },
  },
  { 
    path:'p/:photoId',
      component: PhotoDetailsComponent,
      data: {
      title: 'Photo detail'
    },
  },
  {
     path:'not-found', 
      component: NotFoundComponent,
      data: {
      title: 'Not found'
    },

  },
  {
     path:'**', 
      component: NotFoundComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
