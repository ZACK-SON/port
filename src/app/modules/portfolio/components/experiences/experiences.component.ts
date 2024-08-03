import { Component, signal } from '@angular/core';
//interface
import { Iexperiences } from '../../interface/Iexperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<Iexperiences[]>([
    {
      summary: {
        strong: 'Front-end',
        p: 'CAIXA ECONOMICA FEDERAL | Jul 2024 - Present',
      },
      text:'<p>Buscando a oportunidade de experienciar o desenvolvimento frontend.</p>',
    },

    // {
    //   summary: {
    //     strong: 'Front-end 1',
    //     p: '1 CAIXA ECONOMICA FEDERAL | Jul 2024 - Present',
    //   },
    //   text:'<p>Em minha jornada no programa TEIA tive a oportunidade de experienciar o desenvolvimento frontend</p>',
    // },

    // {
    //   summary: {
    //     strong: 'Front-end 2',
    //     p: '2 CAIXA ECONOMICA FEDERAL | Jul 2024 - Present',
    //   },
    //   text:'<p>Em minha jornada no programa TEIA tive a oportunidade de experienciar o desenvolvimento frontend</p>',
    // },

    // {
    //   summary: {
    //     strong: 'Front-end 3',
    //     p: '3 CAIXA ECONOMICA FEDERAL | Jul 2024 - Present',
    //   },
    //   text:'<p>Em minha jornada no programa TEIA tive a oportunidade de experienciar o desenvolvimento frontend</p>',
    // },
  ])
}
