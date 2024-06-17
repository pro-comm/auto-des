import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormElementTypes } from './shared/types/formBuilder';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }

  getFormData() : Observable<any>{
    return this.http.get<any>('assets/formData.json');
  }
}
