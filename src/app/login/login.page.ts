import { Component, OnInit } from '@angular/core';
import axios from "axios";
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }

  user = {
    name:"",
    password: ""
  };
  ngOnInit() {
  }

  async login(){
    const config = {
      headers: {
          "Content-Type": "application/json"
      }
  };
    console.log(this.user);
    var email = this.user.name;
    var password = this.user.password;
     const body = JSON.stringify({email, password});
   try{
    
    const res = await axios.post("http://localhost:5000/api/auth", body, config);
    console.log("respuesta: ");
    console.log(res);
    // routerLink="/inicio"
    const router = document.querySelector('ion-router');
    const routeRedirect = document.createElement
    if(res != null){
        this.router.navigate(["/desarrolladores"]);
    }
   } catch(err){
    console.log(err);
   }
  }
}
