import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherData } from '../models/interfaces/weather-data';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '91452ad4faca96368048d3e888e3c56f';
  private apiUrl = 'http://api.openweathermap.org/data/2.5/weather';
  private httpServices = inject (HttpClient);

  getWeather(city: string):Observable<WeatherData> {
    return this.httpServices.get<WeatherData>(`${this.apiUrl}?q=${city}&appid=${this.apiKey}`);
  }
}

