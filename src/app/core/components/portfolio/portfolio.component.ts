import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { HeroComponent } from '../../../features/hero/hero.component';
import { PrinciplesComponent } from '../../../features/principles/principles.component';
import { ShowcaseComponent } from '../../../features/showcase/showcase.component';
import { JourneyComponent } from '../../../features/journey/journey.component';
import { ValuesComponent } from '../../../features/values/values.component';
import { ConnectComponent } from '../../../features/connect/connect.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    HeaderComponent, FooterComponent,
    HeroComponent, PrinciplesComponent,
    ShowcaseComponent, JourneyComponent,
    ValuesComponent, ConnectComponent,
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {}
