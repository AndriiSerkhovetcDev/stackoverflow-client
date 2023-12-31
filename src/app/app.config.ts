import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { provideAnimations } from '@angular/platform-browser/animations';
import { loadingInterceptor } from "@core/interseptors/loading/loading.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([loadingInterceptor])
    ),
    provideAnimations(),
    provideAnimations()
]
};
