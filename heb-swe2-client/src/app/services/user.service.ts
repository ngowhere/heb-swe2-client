import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private baseUrl = 'http://127.0.0.1:8000/users';

  constructor(private http: HttpClient) {}

  userAuth(userId: number, pin: string): Observable<boolean>{
    return this.http.post<boolean>(`${this.baseUrl}/auth`, {
        user_id: userId,
        pin: pin
    })
  }

  getBalance(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${userId}/balance`);
  }

  updateBalance(userId: number, delta: number): Observable<any> {
    return this.http.patch(`${this.baseUrl}/${userId}/balance`, { delta });
  }

  dailyWithdrawalCount(userId: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${userId}/withdrawals/today`)
  }
}


