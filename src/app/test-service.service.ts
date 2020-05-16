import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Test } from './test';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TestServiceService {
  getAllTests() {
    throw new Error("Method not implemented.");
  }
  private testsUrl: string;

  constructor(private http:HttpClient) { 
    this.testsUrl="http://localhost:8500/test/tests"
  }
  public findAll(): Observable<Test[]> {
    return this.http.get<Test[]>(this.testsUrl);
  }
  public save(test: Test) {
    return this.http.post<Test[]>(this.testsUrl, test);
  }
  
}
