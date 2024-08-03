import { Component } from '@angular/core';

//componentes
import { HeaderComponent } from '../../components/header/header.component';
import { KwnowledgeComponent } from '../../components/kwnowledge/kwnowledge.component';
import { ExperiencesComponent } from '../../components/experiences/experiences.component';
import { ProjectsComponent } from '../../components/projects/projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent, 
    KwnowledgeComponent, 
    ExperiencesComponent, 
    ProjectsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
