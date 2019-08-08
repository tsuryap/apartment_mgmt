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
    this.setUserNameInLocalStorage(userName);
  }

  getUserName(): string {
    return this.userName;
  }

  isAdmin() {
    return this.userName ===  this.adminUserName;
  }

  setUserNameInLocalStorage(userName: string) {
    getWindow().localStorage.setItem('userName' ,  userName);
  }

  getUserNameInLocalStorage() {
    return getWindow().localStorage.getItem('userName');
  }

  clearStorage() {
    getWindow().localStorage.clear();
  }

}

function getWindow() {
  return window;
}
