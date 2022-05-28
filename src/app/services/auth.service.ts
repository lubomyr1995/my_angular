import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {urls} from "../constants";
import {IToken, IUser} from "../interfaces";
import {Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private accessKey = 'access';
  private refreshKey = 'refresh';

  constructor(private httpClient: HttpClient) {
  }

  register(user: IUser): Observable<IUser> {
    return this.httpClient.post<IUser>(urls.users, user)
  }

  login(user: IUser): Observable<IToken> {
    return this.httpClient.post<IToken>(urls.auth, user)
  }

  setTokens(token: IToken): void {
    localStorage.setItem(this.accessKey, token.access)
    localStorage.setItem(this.refreshKey, token.refresh)
  }

  getAccessToken(): string {
    return localStorage.getItem(this.accessKey) as string
  }

  getRefreshToken(): string {
    return localStorage.getItem(this.refreshKey) as string
  }

  delTokens(): void {
    localStorage.removeItem(this.accessKey)
    localStorage.removeItem(this.refreshKey)
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.accessKey)
  }

  refresh(): Observable<IToken> {
    let refresh = this.getRefreshToken();
    return this.httpClient.post<IToken>(`${urls.auth}/refresh`, {refresh}).pipe(
      tap((tokens: IToken) => {
        this.setTokens(tokens)
      }) // lesson 5 6m resolve 2
    )
  }
}
