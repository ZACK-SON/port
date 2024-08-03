import { Component, inject, signal } from '@angular/core';

//inteface
import { IProjects } from '../../interface/IProjects.interface';

// Angular Material
import {MatDialog,MatDialogModule} from '@angular/material/dialog';

//enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

//Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/vfull.png',
      alt:'',
      title:'FrontEnd Angular - Primeiro Projeto',
      width:'',
      heigth:'',
      description:'<p>Meu primeiro projeto desenvolvido em Angular hospedado no GitHub Pages.</p>',
      links:[
        {
          name: 'Conheça a página',
          href: 'https://github.com/ZACK-SON/Portfolio.git',
        },
      ],
      
    },

    // {
    //   src: 'assets/img/projects/vfull.png',
    //   alt:'',
    //   title:'Vida FullStack',
    //   width:'',
    //   heigth:'',
    //   description:'<p>Explore o fascinante mundo do desenvolvimento web no meu blog tananan</p>',
    //   links:[
    //     {
    //       name: 'conheça o Blog',
    //       href: 'https://vidafullstack.com.br',
    //     },
    //   ],
      
    // },

    // {
    //   src: 'assets/img/projects/vfull.png',
    //   alt:'',
    //   title:'Vida FullStack',
    //   width:'',
    //   heigth:'',
    //   description:'<p>Explore o fascinante mundo do desenvolvimento web no meu blog tananan</p>',
    //   links:[
    //     {
    //       name: 'conheça o Blog',
    //       href: 'https://vidafullstack.com.br',
    //     },
    //   ],
      
    // },

    // {
    //   src: 'assets/img/projects/vfull.png',
    //   alt:'',
    //   title:'Vida FullStack',
    //   width:'',
    //   heigth:'',
    //   description:'<p>Explore o fascinante mundo do desenvolvimento web no meu blog tananan</p>',
    //   links:[
    //     {
    //       name: 'conheça o Blog',
    //       href: 'https://vidafullstack.com.br',
    //     },
    //   ],
      
    // },

    // {
    //   src: 'assets/img/projects/vfull.png',
    //   alt:'',
    //   title:'Vida FullStack',
    //   width:'',
    //   heigth:'',
    //   description:'<p>Explore o fascinante mundo do desenvolvimento web no meu blog tananan</p>',
    //   links:[
    //     {
    //       name: 'conheça o Blog',
    //       href: 'https://vidafullstack.com.br',
    //     },
    //   ],
      
    // },

    // {
    //   src: 'assets/img/projects/vfull.png',
    //   alt:'',
    //   title:'Vida FullStack',
    //   width:'',
    //   heigth:'',
    //   description:'<p>Explore o fascinante mundo do desenvolvimento web no meu blog tananan</p>',
    //   links:[
    //     {
    //       name: 'conheça o Blog',
    //       href: 'https://vidafullstack.com.br',
    //     },
    //   ],
      
    // },

  ]);

  public openDialog(data: IProjects){
    this.#dialog.open(DialogProjectsComponent,{
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }
}
