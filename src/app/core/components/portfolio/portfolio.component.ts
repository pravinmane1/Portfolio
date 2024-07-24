import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { HeroComponent } from '../../../features/hero/hero.component';
import { AboutComponent } from '../../../features/about/about.component';
import { WorkExperienceComponent } from '../../../features/work-experience/work-experience.component';
import { ProjectsComponent } from '../../../features/projects/projects.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    WorkExperienceComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {}
