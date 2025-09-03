import { Routes } from '@angular/router';
import { ActionsComponent } from './actions/actions.component'
import { LoginComponent } from './login/login.component';
export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'actions/:userId', component: ActionsComponent },
    { path: '**', redirectTo: '' }
];
