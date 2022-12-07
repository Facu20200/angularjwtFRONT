import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { SoftSkill } from 'src/app/models/skill.interface';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-skill-panel',
  templateUrl: './skill-panel.component.html',
  styleUrls: ['./skill-panel.component.css']
})
export class SkillPanelComponent implements OnInit {
  @Output() onDelete = new EventEmitter<number>();
  @Output() onEdit = new EventEmitter<SoftSkill>();
  @Input() data: SoftSkill = {
    id: 0,
    name: '',
    description: '',
    image: '',
  };
  API_URL = 'https://angularjwt-facu20200.koyeb.app/about/';
  onLogin: boolean = false;
  editMode: boolean = false;

  constructor(private TokenService: TokenService) {
    this.TokenService.isLoggedIn().subscribe((res) => {
      this.onLogin = res;
    });
  }

  ngOnInit(): void {
  }


  onEditMode(): void {
    this.editMode = !this.editMode;
  }

  onSubmit(data: SoftSkill): void {
    if (data !== undefined) {
      data.id = this.data.id;
      data.image === undefined || 'undefined'
        ? (data.image = this.data.image)
        : data.image;
      this.onEdit.emit(data);
      this.editMode = false;
    } else {
      this.editMode = false;
    }
  }

}
