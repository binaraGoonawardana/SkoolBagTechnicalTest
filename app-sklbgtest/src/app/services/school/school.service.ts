import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpResponse, School, Filters } from 'src/app/types';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  getSchools() {
    return this.http.get<HttpResponse>(`${environment.schoolsServiceUrl}/`)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  createSchool(school: School) {
    return this.http.post<HttpResponse>(`${environment.schoolsServiceUrl}/`, school)
      .pipe(
        catchError(this.handleError)
      );
  }

  searchSchools(filters: Filters) {
    return this.http.post<HttpResponse>(`${environment.schoolsServiceUrl}/search`, filters)
      .pipe(
        catchError(this.handleError)
      );
  }
}
