import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {Regions } from './regions';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegionsService {

  REST_API: string = 'http://127.0.0.1:8000/api/regions';
  httpHeaders=new HttpHeaders().set('Content-Type','application/json');
    constructor(private httpClient: HttpClient) { }
  
    getRegions(){
      return this.httpClient.get(`${this.REST_API}`);
    }
    
    getRegion(id:any): Observable<any> {
        let API_URL = `${this.REST_API}/${id}`;
        return this.httpClient.post(API_URL,{headers:this.httpHeaders})
        .pipe(map((res:any)=>{
          return res || {}
        }),
        catchError(this.handleError));
        }
      
    addRegion(data:Regions): Observable<any> {
      let API_URL = `${this.REST_API}`;
      return this.httpClient.post(API_URL,data)
      .pipe(catchError(this.handleError))
      }

      deleteRegion(id: any ): Observable<any> {
        let API_URL = `${this.REST_API}/${id}`;
        return this.httpClient.delete(API_URL,  
          { headers: this.httpHeaders })
          .pipe(catchError(this.handleError))
      }

      handleError(error:HttpErrorResponse){
        let errorMessage="";
        if(error.error instanceof ErrorEvent){
          errorMessage=error.error.message;}
        else{
          errorMessage=`Error Code: ${error.status}\n Message:${error.message}`
        }
        console.log(errorMessage);
        return throwError(errorMessage)}
        
      
        
        updateRegion(id:any,data:Regions): Observable<any> {
          let API_URL = `${this.REST_API}/${id}`;
          return this.httpClient.put(API_URL,data, {headers:this.httpHeaders})
          .pipe(
          catchError(this.handleError));
          }

        }
