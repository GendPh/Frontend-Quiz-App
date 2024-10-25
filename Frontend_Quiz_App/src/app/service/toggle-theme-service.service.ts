import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

const html = document.querySelector('html');

@Injectable({
  providedIn: 'root'
})
export class ToggleThemeServiceService {
  // Default theme is light
  private theme: string = 'light';

  // Observable to check the theme of the application is dark
  private isDark: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public theme$: Observable<boolean> = this.isDark.asObservable();

  // When called the service checks whats the localStorage value of the theme
  constructor() {
    this.setThemeStart();
  }

  // Method to toggle the themes
  public toggleTheme(): void {
    if (this.theme === 'light') {
      this.theme = 'dark';
      html?.classList.add('dark');
      localStorage.setItem('quiz-game-theme', 'dark');
      this.isDark.next(true);
    } else {
      this.theme = 'light';
      html?.classList.remove('dark');
      localStorage.setItem('quiz-game-theme', 'light');
      this.isDark.next(false);
    }
  }

  // Set theme on start of the application based on the local storage
  private setThemeStart(): void {
    const theme = localStorage.getItem('quiz-game-theme');

    if (!theme) {
      localStorage.setItem('quiz-game-theme', 'light');
      this.theme = 'light';
      this.isDark.next(false);
      return;
    }

    if (theme === 'dark') {
      html?.classList.add('dark');
      this.theme = 'dark';
      this.isDark.next(true);
      return;
    }
  }
}
