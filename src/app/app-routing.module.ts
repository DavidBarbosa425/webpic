import { SignUpComponent } from './home/signup/signup.component';
import { AuthGuard } from './core/auth/auth.guard';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { NotFoundComponent } from './erros/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { SigninComponent } from './home/signin/signin.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  { 
    path:'',
      component: HomeComponent,
      canActivate: [AuthGuard],
      children: [
        {
            path: '',
            component: SigninComponent
        },
        {
            path: 'signup',
            component: SignUpComponent
        }
      ]

  },
  { 
    path:'user/:userName', 
      component: PhotoListComponent,
      resolve: {
      photos: PhotoListResolver
  }
  },
  { 
    path:'p/add',
      component: PhotoFormComponent
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
