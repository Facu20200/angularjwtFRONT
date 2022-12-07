import { Component, OnInit } from '@angular/core';

import { SoftSkill } from 'src/app/models/skill.interface';
import { TokenService } from 'src/app/services/token.service';
import { SoftSkillService } from 'src/app/services/data-services/soft-skill.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-soft-skills',
  templateUrl: './soft-skills.component.html',
  styleUrls: ['./soft-skills.component.css'],
})
export class SoftSkillsComponent implements OnInit {
  skills: SoftSkill[] = [];
  API_URL = 'https://angularjwt-facu20200.koyeb.app/about/';
  addSkill: boolean = false;
  onLogin: boolean = false;
  editMode: boolean = false;

  constructor(private skillService: SoftSkillService, private TokenService: TokenService) {
    this.TokenService.isLoggedIn().subscribe((res) => {
      this.onLogin = res;
    });
  }

  ngOnInit(): void {
    this.getData();
    this.skillService.Refreshrequired.subscribe(() => {
      this.getData();
    });
  }

  getData(): void {
    this.skillService.getSoftSkills().subscribe((data: SoftSkill[]) => {
      this.skills = data;
    });
  }

  onAdd(): boolean {
    return this.addSkill = !this.addSkill;
  }

  onSubmit(data: SoftSkill): void {
    this.skillService.postSoftSkill(data).subscribe((res) => {
      console.log(res);
    });
    this.addSkill = false;
  }

  onEdit(data: SoftSkill) {
    this.skillService.putSoftSkill(data).subscribe((res) => {
      console.log(res);
    });
  }

  onDelete(id: number): void {
    this.skillService.deleteSoftSkill(id).subscribe((res) => {
      console.log(res);
    });
  }
}
