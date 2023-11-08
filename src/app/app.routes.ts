import { Routes } from '@angular/router';
import { SearchViewComponent } from "./views/search-view/search-view.component";

export const routes: Routes = [
  {
    path: '',
    component: SearchViewComponent,
    children: [
      {
        path: 'result',
        loadComponent: () => import('./views/search-result-view/search-result-view.component').then(c => c.SearchResultViewComponent),
      },
      {
        path: 'question',
        loadComponent: () => import('./views/question-view/question-view.component').then(c => c.QuestionViewComponent),
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
  }
];
