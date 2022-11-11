import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tourist } from './tourist';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  baseURL:string="http://localhost:8999/api/v1/tourists/";

  httpOptionsPost = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods' : 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers' : 'Origin, Content-Type, Accept, X-Custom-Header, Upgrade-Insecure-Requests',
    })
  };

  constructor(private httpClient:HttpClient) { }

  getAllTourists():Observable<Tourist[]>{
    return this.httpClient.get<Tourist[]>(`${this.baseURL}`);
  }

  addTourist(tourist:Tourist):Observable<any>{
    return this.httpClient.post<any>(`${this.baseURL}`,tourist,this.httpOptionsPost);
  }
  
  getPreviousId():Observable<number>{
    return this.httpClient.get<number>(`${this.baseURL}/prevId`);
  }
}
