import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userName: string;
  private adminUserName: string = 'suryatumma@yahoo.com' as string;
  constructor() {

  }

  setUserName(userName: string): void {
    this.userName = userName;
  }

  getUserName(): string {
    return this.userName;
  }

  isAdmin() {
    return this.userName ===  this.adminUserName;
  }
}
