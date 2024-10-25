import { Component } from '@angular/core';
import { ToggleThemeServiceService } from '../service/toggle-theme-service.service';

@Component({
  selector: 'app-toggle-theme',
  standalone: true,
  imports: [],
  templateUrl: './toggle-theme.component.html',
  styleUrl: './toggle-theme.component.css'
})
export class ToggleThemeComponent {
  // Variable to store the current theme of the application (dark -> true or light -> false) 
  isDarkTheme: boolean = false;

  // Constructor to inject the service ToggleThemeServiceService
  constructor(private toggleTheme: ToggleThemeServiceService) {
    // Subscribe to the theme$ observable to get the current theme of the application
    this.toggleTheme.theme$.subscribe((isDark: boolean) => {
      this.isDarkTheme = isDark;
    });
  }

  // Function to toggle the theme of the application
  public onChangeToggleTheme(): void {
    this.toggleTheme.toggleTheme();
  }
}
