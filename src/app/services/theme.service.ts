import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


export enum Theme{
  light='light',
  dark='dark'
}


@Injectable({
  providedIn: 'root'
})
export class ThemeService {
 private mode: BehaviorSubject<Theme> = new BehaviorSubject<Theme>(Theme.dark);
 
 constructor() { }

 get mode$(){
   return this.mode.asObservable();
 }

 toggleMode(){
   if(this.mode.value === Theme.dark){
     this.mode.next(Theme.light);
   }
 }

  toggleTheme () {
    if (this.themeMode === 'dark') {
      this.themeMode = 'light';
      document.getElementsByTagName('body')[0].style.backgroundColor = 'white'
    } else {
      this.themeMode = 'dark'
      document.getElementsByTagName('body')[0].style.backgroundColor = '#2b3743'
    }
  }
  themeMode: string = 'light';
}
