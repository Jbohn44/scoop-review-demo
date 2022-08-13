import { Component, OnInit, ViewChild, ElementRef, HostListener, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, OnChanges {
  constructor(private router: Router) { }

  ngOnInit() {
    let socialUser = localStorage.getItem('socialUser');
    if(socialUser !== 'null'){
      this.router.navigate(['dashboard']);
    }
  }

  ngOnChanges(){
  }

}
