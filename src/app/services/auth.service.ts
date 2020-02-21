import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from 'src/app/models/userModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private configUrl: string = environment.url;

  constructor(
    private http: HttpClient
  ) {
  }

  login<T>(user: IUser): Observable<T> {
    return this.http.post<T>(this.configUrl + '/auth', user, {
      observe: 'response' as 'body'
    });
  }

}
