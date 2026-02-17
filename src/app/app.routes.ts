import { Routes } from '@angular/router';
import { Home } from './screens/home/home';
import { Contador } from './screens/contador/contador';
import { Tarefas } from './screens/tarefas/tarefas';

export const routes: Routes = [
    {
        path: '',
        component: Home,
    },
    {
        path: 'contador',
        component: Contador
    },
    {
        path: 'tarefas',
        component: Tarefas
    }

];
