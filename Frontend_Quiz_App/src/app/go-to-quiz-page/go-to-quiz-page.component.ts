import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-go-to-quiz-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './go-to-quiz-page.component.html',
  styleUrl: './go-to-quiz-page.component.css'
})
export class GoToQuizPageComponent {
  @Input() Title: string = "HTML";
  @Input() Image: string = "html";
}
