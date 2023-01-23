import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staffdashboard',
  templateUrl: './staffdashboard.component.html',
  styleUrls: ['./staffdashboard.component.css']
})
export class StaffdashboardComponent implements OnInit {
  user: any;
  constructor(private router: Router) { }
  ngOnInit(): void {
    this.user = localStorage.getItem('username')
  }
  onLogout() {
    localStorage.removeItem('username');
    localStorage.removeItem('dept');
    this.router.navigateByUrl('/')
  }


}