import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  restroSearchSubject: BehaviorSubject<string>;

  constructor(private http: HttpClient) {
    this.restroSearchSubject =  new BehaviorSubject('');
  }


  getRestaurantsData() {
    return this.http.get('../assets/data.csv', {responseType: 'text'});
  }

  get getRestroSearchSubject() {
    return this.restroSearchSubject;
  }

  set setRestroSearchSubject(query) {
      this.restroSearchSubject.next(query);
  }
}
