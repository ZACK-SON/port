import { Component, signal } from '@angular/core';

//inteface
import { iknowledge } from '../../interface/iknowledge.interface';

@Component({
  selector: 'app-kwnowledge',
  standalone: true,
  imports: [],
  templateUrl: './kwnowledge.component.html',
  styleUrl: './kwnowledge.component.scss'
})
export class KwnowledgeComponent {
  public arrayKwnowledge = signal<iknowledge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'ícone de conhecimento de html5',
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'ícone de conhecimento de css3',
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'ícone de conhecimento de javascript',
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'ícone de conhecimento de angular',
    },
    {
      src: 'assets/icons/knowledge/nodejs.svg',
      alt: 'ícone de conhecimento de nodejs',
    },
  ]);
}
