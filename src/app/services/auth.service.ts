import {Injectable} from '@angular/core';
import {IToken, IUser} from "../interfaces";
import {HttpClient} from "@angular/common/http";
import {urls} from "../constants";
import {Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private keyAccess = 'access';
  private keyRefresh = 'refresh';

  constructor(private httpClient: HttpClient) {
  }

  register(user: IUser): Observable<IUser> {
    return this.httpClient.post<IUser>(urls.users, user)
  }

  login(user: IUser): Observable<IToken> {
    return this.httpClient.post<IToken>(urls.auth, user)
  }

  refresh(): Observable<IToken> {
    let refresh = this.getRefreshToken();
    return this.httpClient.post<IToken>(`${urls.auth}/refresh`, {refresh}).pipe(
      tap((tokens: IToken) => {
        this.setToken(tokens)
      }) // lesson 5 6m resolve 2
    )
  }

  setToken(token: IToken): void {
    localStorage.setItem(this.keyAccess, token.access)
    localStorage.setItem(this.keyRefresh, token.refresh)
  }

  getAccessToken(): string {
    return localStorage.getItem(this.keyAccess) as string
  }

  getRefreshToken(): string {
    return localStorage.getItem(this.keyRefresh) as string
  }

  delToken(): void {
    localStorage.removeItem(this.keyAccess)
    localStorage.removeItem(this.keyRefresh)
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.keyAccess)
  }
}
