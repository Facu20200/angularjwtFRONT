import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HardSkillsComponent } from './components/hard-skills/hard-skills.component';
import { SoftSkillsComponent } from './components/soft-skills/soft-skills.component';
import { AboutTitlesComponent } from './components/about-titles/about-titles.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { DataCardComponent } from './components/data-card/data-card.component';
import { DataFormComponent } from './components/data-form/data-form.component';
import { SkillFormComponent } from './components/soft-skills/skill-form/skill-form.component';
import { SkillPanelComponent } from './components/soft-skills/skill-panel/skill-panel.component';
import { SkillItemComponent } from './components/hard-skills/skill-item/skill-item.component';
import { HskillFormComponent } from './components/hard-skills/hskill-form/hskill-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AboutComponent,
    ProfileComponent,
    HardSkillsComponent,
    SoftSkillsComponent,
    AboutTitlesComponent,
    ExperienceComponent,
    EducationComponent,
    DataCardComponent,
    DataFormComponent,
    SkillFormComponent,
    SkillPanelComponent,
    SkillItemComponent,
    HskillFormComponent,
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    AboutComponent,
    ProfileComponent,
    HardSkillsComponent,
    SoftSkillsComponent,
    AboutTitlesComponent,
    ExperienceComponent,
    EducationComponent,
    DataCardComponent,
    DataFormComponent,
    SkillFormComponent,
    SkillPanelComponent,
    SkillItemComponent,
    HskillFormComponent
  ],
  exports: [
    AboutComponent,
    ProfileComponent,
    HardSkillsComponent,
    SoftSkillsComponent,
    AboutTitlesComponent,
    ExperienceComponent,
    EducationComponent,
    DataCardComponent,
    DataFormComponent,
    SkillFormComponent,
    SkillPanelComponent,
    SkillItemComponent,
    HskillFormComponent
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AboutModule {

}
