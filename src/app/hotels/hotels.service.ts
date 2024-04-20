import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {Hotels} from './hotels';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  REST_API: string = 'http://127.0.0.1:8000/api/hotels';
  httpHeaders=new HttpHeaders().set('Content-Type','application/json');
    constructor(private httpClient: HttpClient) { }
  
    getHotels(){
      return this.httpClient.get(`${this.REST_API}`);
    }
    
    getHotel(id:any): Observable<any> {
        let API_URL = `${this.REST_API}/${id}`;
        return this.httpClient.post(API_URL,{headers:this.httpHeaders})
        .pipe(map((res:any)=>{
          return res || {}
        }),
        catchError(this.handleError));
        }
      
    addHotel(data:Hotels): Observable<any> {
        let API_URL = `${this.REST_API}`;
        return this.httpClient.post(API_URL,data)
        .pipe(catchError(this.handleError))
      }

      deleteHotel(id: any ): Observable<any> {
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
    
        updateHotel(id:any,data:Hotels): Observable<any> {
          let API_URL = `${this.REST_API}/${id}`;
          return this.httpClient.put(API_URL,data, {headers:this.httpHeaders})
          .pipe(
          catchError(this.handleError));
        }
}
