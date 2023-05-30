import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@frontcoding/users';
import { StorageService } from 'libs/users/src/lib/services/storage.service';

@Component({
  selector: 'admin-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent  implements OnInit{

  slimMode = false;

  name : string| null = ''

  constructor(private storageService: StorageService,public router: Router, private auth: AuthService){

  }

  ngOnInit(): void {
    this.storageService.user.subscribe((name:string | null) =>{
      this.name = name;
    } )
  }

  logout(){
    this.auth.logout()
  }


  toggleSlimMode() {
    this.slimMode = !this.slimMode;
  }


 }
