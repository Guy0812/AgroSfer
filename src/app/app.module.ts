import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { ContentComponent } from './pages/content/content.component';
import { HistoriquesComponent } from './pages/content/historiques/historiques.component';
import { CompteComponent } from './pages/content/compte/compte.component';
import { TauxComponent } from './pages/content/taux/taux.component';
import { GrapheComponent } from './pages/content/graphe/graphe.component';
import { ModalComponent } from './pages/content/modal/modal.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { EnvoierapideComponent } from './pages/content/modal/envoierapide/envoierapide.component';
import { EnvoiegrouperComponent } from './pages/content/modal/envoiegrouper/envoiegrouper.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HistoriquesComponent,
    CompteComponent,
    TauxComponent,
    GrapheComponent,
    ModalComponent,
    EnvoiegrouperComponent,
    EnvoierapideComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzBreadCrumbModule,
    NzAvatarModule,
    NzButtonModule,
    NzGridModule,
    NzTableModule,
    NzInputModule,
    NzIconModule ,
    NzDatePickerModule,
    NzSelectModule,
    NzStatisticModule,
    NzModalModule,
    NzTabsModule,
    NzCheckboxModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
