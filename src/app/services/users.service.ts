import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from '../models/userModel';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private headers: HttpHeaders = new HttpHeaders();
  private token: string;
  private configUrl: string = environment.url;

  constructor(
    private http: HttpClient,
  ) {
    this.token = localStorage.getItem('token');
  }

  getUsers<T>(status: string): Observable<T> {
    const params = status ? `?status=${status}` : '';
    return this.http.get<T>(this.configUrl + `/users${params}`);
  }

  updateUser<T>(user: Partial<IUser>, id: number): Observable<T> {
    return this.http.patch<T>(this.configUrl + '/users/' + id, user);
  }

}
