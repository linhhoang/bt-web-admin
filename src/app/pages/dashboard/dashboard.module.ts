import { NgModule } from '@angular/core';
import { AngularEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import {Ng2SmartTableModule} from "ng2-smart-table";
import {ModalComponent} from "../ui-features/modals/modal/modal.component";

@NgModule({
  imports: [
    ThemeModule,
    AngularEchartsModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    DashboardComponent,
  ],
  entryComponents: [
    // ModalComponent,
  ],
})
export class DashboardModule { }
