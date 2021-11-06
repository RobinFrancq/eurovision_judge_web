import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class AppInitService {

  constructor(private translate: TranslateService) { }

  init(): Promise<any> {
    return new Promise<void>((resolve) => {
      this.initTranslations();
      resolve();
    });
  }

  private initTranslations(): void {
    this.translate.addLangs(['nl']);
    this.translate.setDefaultLang('nl');
  }
}
