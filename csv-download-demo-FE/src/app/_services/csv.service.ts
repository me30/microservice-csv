import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class CSVService {
 
  private baseUrl = 'http://localhost:9200';

  constructor(private http: HttpClient) {
  }
 
  downloadFileSystem(filename: string): Observable<HttpResponse<string>> {
    let headers = new HttpHeaders();
    headers = headers.append('Accept', 'text/csv; charset=utf-8');
 
    return this.http.get(this.baseUrl+ '/api/files/system/' + filename, {
      headers: headers,
      observe: 'response',
      responseType: 'text'
    });
  }
 
  downloadClasspathFile(filename: string): Observable<HttpResponse<string>> {
    let headers = new HttpHeaders();
    headers = headers.append('Accept', 'text/csv; charset=utf-8');
 
    return this.http.get(this.baseUrl+ '/api/files/classpath/' + filename, {
      headers: headers,
      observe: 'response',
      responseType: 'text'
    });
  }
}