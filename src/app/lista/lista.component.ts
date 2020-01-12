import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {


users: [];
result: any;
user: any;
displayedColumns: string[] = ['gender','id','last_name','website','dob','email','address','phone'];

constructor(private data: DataService, private router : Router) { }

ngOnInit() {
  this.data.getUsers().subscribe(data => {
      this.users = data['result']
      console.log(this.users);
    }
  );
}

/*
findUser(user){
  //console.log(user+'user');
  this.data.getUser(user).subscribe(data => {
    this.user = data
    console.log(this.user);
  }
);
}*/

viewdUser(id){
  console.log(id,'id');
  this.router.navigate(['/perfil',id]);
}

}


