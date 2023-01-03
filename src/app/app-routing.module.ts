import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// utils
import { AuthGuard } from './utils/auth-guard';

// components
import { ErrorComponent } from './pages/error/error.component';
import { SigninComponent } from './pages/signin/signin.component';
import { MainComponent } from './pages/main/main.component';
import { TopComponent } from './pages/main/top/top.component';
import { SampleComponent } from './pages/main/sample/sample.component';

const routes: Routes = [
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: TopComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'sample',
        component: SampleComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
