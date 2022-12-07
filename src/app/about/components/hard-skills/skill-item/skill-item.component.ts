import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HardSkill } from 'src/app/models/skill.interface';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css']
})
export class SkillItemComponent implements OnInit {
  @Output() onDelete = new EventEmitter<number>();
  @Output() onEdit = new EventEmitter<HardSkill>();
  @Input() skill: HardSkill = {
    id: 0,
    name: '',
    type: 'tool',
    url: '',
    image: '',
  };
  API_URL = 'https://angularjwt-facu20200.koyeb.app/about/';
  onLogin: boolean = false;

  constructor(private TokenService: TokenService) {
    this.TokenService.isLoggedIn().subscribe((res) => {
      this.onLogin = res;
    });
  }

  ngOnInit(): void {
  }

}
