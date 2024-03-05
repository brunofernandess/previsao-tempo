import { Routes } from '@angular/router';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';

export const routes: Routes = [
  { path: '', redirectTo: 'weather', pathMatch: 'full' },
  {path:  'weather', component: WeatherCardComponent}

];
