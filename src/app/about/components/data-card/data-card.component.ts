import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { DataForm } from 'src/app/models/dataForm.model';
import { environment } from 'src/environments/environment';


import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-data-card',
  templateUrl: './data-card.component.html',
  styleUrls: ['./data-card.component.css'],
})
export class DataCardComponent implements OnInit {
  @Input() data = new DataForm();
  @Output() onDelete = new EventEmitter<number>();
  @Output() onEdit = new EventEmitter<DataForm>();
  API_URL = 'https://angularjwt-facu20200.koyeb.app/about/';
  onLogin: boolean = false;
  editMode: boolean = false;

  constructor(private TokenService: TokenService) {
    this.TokenService.isLoggedIn().subscribe((res) => {
      this.onLogin = res;
    });
  }

  ngOnInit(): void {}

  onEditMode(): void {
    this.editMode = !this.editMode;
  }

  onSubmit(data: DataForm): void {
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
