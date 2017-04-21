import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {StudentsComponent} from './students/students.component';
import {ProfileComponent} from './profile/profile.component';
import {MyCanActivateGuard} from './my-can-activate-guard.guard';
import {MyCanDeactiveGuard} from './my-can-deactive.guard';
import {ErrorComponent} from './error/error.component';

/**
 * Created by tonghannteng on 4/20/17.
 */

const MY_ROUTES: Routes = [

  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'students', component: StudentsComponent},
  {
    path: 'profile/:id',
    component: ProfileComponent
    // canActivate: [MyCanActivateGuard],
    // canDeactivate: [MyCanDeactiveGuard]
  },
  {path: 'error', component: ErrorComponent},
  {path: '**', redirectTo: '/error'}

];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);

