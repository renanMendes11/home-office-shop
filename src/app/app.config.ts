import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import { definePreset} from '@primeng/themes';
import Aura from '@primeng/themes/aura';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';

const MyPreset = definePreset(Aura, {
  semantic: {
      primary: {
          50: '{zinc.50}',
          100: '{zinc.100}',
          200: '{zinc.200}',
          300: '{zinc.300}',
          400: '{zinc.400}',
          500: '{zinc.500}',
          600: '{zinc.600}',
          700: '{zinc.700}',
          800: '{zinc.800}',
          900: '{zinc.900}',
          950: '{zinc.950}'
      },
      colorScheme: {
          light: {
              primary: {
                  color: '{zinc.950}',
                  inverseColor: '#ffffff',
                  hoverColor: '{zinc.900}',
                  activeColor: '{zinc.800}'
              },
              highlight: {
                  background: '{zinc.950}',
                  focusBackground: '{zinc.700}',
                  color: '#ffffff',
                  focusColor: '#ffffff'
              }
          }
      }
  }
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
          preset: MyPreset,
          options: {
            darkModeSelector: false
          }
      }
})]
};
