import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router'
import { DataService } from '../data.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  constructor(private router : Router,
  private route : ActivatedRoute,
  private data: DataService) { }

  datauser : any;

  ngOnInit() {
    this.route.paramMap.subscribe(params =>{
      if(params.has('id')){
        console.log("id seleccionado",params.get('id'));
        this.data.getUser(params.get('id')).subscribe(datauser =>  {
          this.datauser = datauser['result'];
          console.log(this.datauser,'datos del usuario');
        });
      }
    })
  }

}
