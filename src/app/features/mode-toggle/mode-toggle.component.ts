import { Component, computed, OnInit, Signal } from '@angular/core';
import { ModeToggleService } from './mode-toggle.service';
import { Mode } from './mode-toggle.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mode-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mode-toggle.component.html',
  styleUrl: './mode-toggle.component.scss',
})
export class ModeToggleComponent implements OnInit {
  private mode!: Signal<Mode>;
  public isLightMode!: Signal<boolean>;
  constructor(private modeToggleService: ModeToggleService) {
    this.mode = toSignal(this.modeToggleService.modeChanged$) as Signal<Mode>;
    this.isLightMode = computed(() => this.mode() === Mode.LIGHT);
  }
  ngOnInit(): void {}
  toggle() {
    this.modeToggleService.toggleMode();
  }
}
