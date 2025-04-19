import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TemplateformComponent } from './components/templateform/templateform.component';

export const routes: Routes = [
    // {
    //     path: 'home',
    //     component: HomeComponent,
    //     title: 'Home'
    // },
    {
        path: 'forms',
        component: TemplateformComponent,
        title: 'Template Form'
    }
];
