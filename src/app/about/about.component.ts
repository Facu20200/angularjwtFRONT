import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Profile } from 'src/app/models/profile.interface';
import { ProfileService } from 'src/app/services/data-services/profile.service';
import { ExperienceComponent } from './components/experience/experience.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  profile!: Profile;
  constructor(
    private profServ: ProfileService
  ) {}

  ngOnInit(): void {
    this.profServ.getProfile().subscribe(data => { this.profile = data[0] });
  }
}
