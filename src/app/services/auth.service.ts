import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IToken, IUser} from "../interfaces";
import {Observable} from "rxjs";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private keyAccess = 'access';

  constructor(private httpClient: HttpClient) {
  }

  register(user: IUser): Observable<IUser> {
    return this.httpClient.post<IUser>(urls.users, user)
  }

  login(user: IUser): Observable<IToken> {
    return this.httpClient.post<IToken>(urls.auth, user)
  }

  setToken(token: IToken): void {
    localStorage.setItem(this.keyAccess, token.access)
  }

  getToken(): string {
    return localStorage.getItem(this.keyAccess) as string
  }

  delToken(): void {
    localStorage.removeItem(this.keyAccess)
  }

  isAuthorization(): boolean {
    return !!localStorage.getItem('access')
  }
}
