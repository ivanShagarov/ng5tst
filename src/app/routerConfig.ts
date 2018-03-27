// routerConfig.ts

import { Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { IndexComponent } from './components/index/index.component';
import { DogsComponent } from './components/dogs/dogs.component';

export const appRoutes: Routes = [
  {
    path: 'dogs/new',
    component: CreateComponent
  },
  {
    path: 'dogs/edit/:id',
    component: EditComponent
  },
  {
    path: 'dogs',
    component: DogsComponent
  },
  {
    path: '**',
    component: IndexComponent
  },
];
