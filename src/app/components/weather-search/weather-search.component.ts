
import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { WeatherService } from '../../services/weather.service';





import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { WeatherData } from '../../models/interfaces/weather-data';
import { Subject } from 'rxjs';

@Component({
  selector: 'weather-search',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterOutlet, MatIconModule, HttpClientModule],
  templateUrl: './weather-search.component.html',
  styleUrl: './weather-search.component.scss'
})
export class WeatherSearchComponent implements OnDestroy{
  form = new FormGroup({
    city: new FormControl('', Validators.required)

  });

  constructor(private weatherService: WeatherService) { }

  public weatherDatas!: WeatherData;
  private destroy$= new Subject<void>();
  search(){


    this.weatherService.getWeather(this.form.value.city as string).subscribe((res) => {
      this.weatherDatas = res;
      console.log(this.weatherDatas);
    });
  }




  submit(){
    console.log(this.form.value);
  }


  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}


