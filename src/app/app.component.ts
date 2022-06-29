import { Component } from '@angular/core';

type Alumnos = Array<{ edad: number; name: string; genero: string; }>;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ListaCerrudo';
  
    alumnos: Alumnos= [
      {edad: 20, name: "Ariel", genero:"Masculino" },
      {edad: 22, name: "Alma",genero:"Femenino"  },
      {edad: 30, name: "German",genero:"Masculino"  },
      {edad: 24, name: "Claudia",genero:"Femenino"  },
      {edad: 34, name: "Mariana",genero:"Femenino"  },
      {edad: 27, name: "Martin",genero:"No Binario"  },
    ];
    constructor() {}
    ngOnInit() {}
  
}
