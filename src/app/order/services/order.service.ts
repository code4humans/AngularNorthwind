import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetOrder } from '../models/get-order';
import { Observable } from 'rxjs';
import { OrderList } from '../models/order-list';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient:HttpClient) { }

  getOrders(request : GetOrder):Observable<OrderList>{

  }
}
