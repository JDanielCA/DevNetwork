import { Component, OnInit } from '@angular/core';
import axios from "axios";
@Component({
  selector: 'app-desarrolladores',
  templateUrl: './desarrolladores.page.html',
  styleUrls: ['./desarrolladores.page.scss'],
})
export class DesarrolladoresPage implements OnInit {

  constructor() { }
  usuarios: any;
  ngOnInit() {
    this.getProfiles();

  }
  async getProfiles(){
    try {
      const res = await axios.get("http://localhost:5000/api/profile");
      this.usuarios = res.data;
      console.log(res);
  } catch (err) {
      console.log(err);
  }
  }


  doRefresh(event) {
    console.log('Begin async operation');
    this.getProfiles();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
