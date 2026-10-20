import { Component, computed, inject, ViewEncapsulation } from '@angular/core';
import { FdSwitch, FdThemeService } from 'fuda';

@Component({
  selector: 'app-root',
  imports: [FdSwitch],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  encapsulation: ViewEncapsulation.None,
  host: { class: 'app' },
})
export class App {
  private readonly themeService = inject(FdThemeService);

  protected readonly title = 'Site Template';
  protected readonly tagline = 'Modèle de départ pour les nouveaux sites de phamelin.fr.';
  protected readonly isDark = computed(() => this.themeService.theme() === 'dark');

  protected setDark(dark: boolean): void {
    this.themeService.set(dark ? 'dark' : 'light');
  }
}
