import { Routes } from '@angular/router';
import { Home } from './screens/home/home';
import { Contador } from './screens/contador/contador';
import { Tarefas } from './screens/tarefas/tarefas';
import { LandingPage } from './screens/landing-page/landing-page';
import { Login } from './screens/login/login';
import { Register } from './screens/register/register';
import { Page } from './components/shared/page/page';

export const routes: Routes = [
    {
        path: '',
        component: LandingPage,
        
    },
    { path: 'login', component: Login },
    { path: 'register', component: Register },
    {
        path: 'app',
        component: Page,
        children: [
            { path: '', component: Home },
            { path: 'contador', component: Contador },
            { path: 'tarefas', component: Tarefas }
        ]
    }

];
