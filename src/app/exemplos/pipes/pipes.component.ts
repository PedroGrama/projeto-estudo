import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  date = new Date();
  nome = 'Pedro H';
  percentual  = 0.44;
  salario = 3000;
  user = {name:'Joaquim', id: '1'}
  constructor() { }

  ngOnInit(): void {
  }

}
