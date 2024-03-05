import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { WeatherSearchComponent } from './components/weather-search/weather-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WeatherSearchComponent, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [HttpClient, WeatherService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'previsao-tempo';




}
