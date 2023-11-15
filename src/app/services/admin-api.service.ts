import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminApiService {

  private apiUrl = `https://pixabay.com/api/?key=${environment.aiKeyPixabay}`;

  constructor(private http: HttpClient) { }

  getDataImages(queryParams: string): Observable<any> {
    return this.http.get<any>(this.apiUrl + queryParams);
  }
}
