import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FetchInfoService {

  constructor(private http: HttpClient) { }

  public fetchInfo(): Observable<any>{
    return this.http.get(`${environment.apiEndPoint}/getAssessmentInfo`);
  }

  public fetchTestInfo(id: number): Observable<any>{
    return this.http.get(`${environment.apiEndPoint}/getTestInfo/${id}`);
  }

  public saveResponses(responseInfo: object):Observable<any>{
    return this.http.post(`${environment.apiEndPoint}/saveResponses`,responseInfo);
  }

  public saveResult(resultInfo: object):Observable<any>{
    return this.http.post(`${environment.apiEndPoint}/saveResult`,resultInfo);
  }

  public fetchCandidateInfo(): Observable<any>{
    return this.http.get(`${environment.apiEndPoint}/getCandidateInfo`);
  }
}
