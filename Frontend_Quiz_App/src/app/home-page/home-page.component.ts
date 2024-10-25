import { Component } from '@angular/core';
import { GoToQuizPageComponent } from '../go-to-quiz-page/go-to-quiz-page.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [GoToQuizPageComponent, CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  quizElements = [
    {
      title: "HTML",
      icon: 'html'
    },
    {
      title: "CSS",
      icon: 'css'
    },
    {
      title: "Javascript",
      icon: 'js'
    },
    {
      title: "Accessibility",
      icon: 'accessibility'
    },
  ]

}
