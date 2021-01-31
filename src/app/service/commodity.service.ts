import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Commodity } from '../models/commodity';

@Injectable({
  providedIn: 'root'
})
export class CommodityService {

  constructor(private http: HttpClient) { }
  public getCommodity(): Observable<Array<Commodity>> {
    return this.http.get<Array<Commodity>>('https://pp-interview-backend.herokuapp.com/commodity_prices');
  }
}

