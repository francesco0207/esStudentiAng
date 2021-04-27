import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Student } from "./shared/student";

@Injectable({
  providedIn: 'root'
})

export class RestAPIService {
  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }

  constructor(private http : HttpClient) { }

  getStudent(apiURL : string) : Observable<Student> {
    return this.http.get<Student>(apiURL).pipe()
  }

  deleteStudent(apiURL : string) {
    return this.http.delete(apiURL).pipe()
  }

  postStudent(apiURL : string, student : Student) : Observable<Student> {
    return this.http.post<Student>(apiURL, JSON.stringify(student), this.httpOptions).pipe()
  }

  putStudent(apiURL : string, student : Student) {
    return this.http.put(apiURL, JSON.stringify(student), this.httpOptions).pipe()
  }
}

