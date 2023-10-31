import { Routes } from '@angular/router';
import { SearchHomeComponent } from "./shared/components/search-home/search-home.component";

export const routes: Routes = [
  {
    path: '',
    component: SearchHomeComponent,
    children: [
      {
        path: 'result',
        loadComponent: () => import('./shared/components/search-result/search-result.component').then(c => c.SearchResultComponent)
      },
    ]
  },
  {
    path: '**',
    redirectTo: '',
  }
];
