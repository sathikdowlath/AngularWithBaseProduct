import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule,MatToolbarModule,MatTableModule,MatIconModule, MatTabsModule,MatSidenavModule,MatListModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [  
  ],
  exports:[
    MatMenuModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule
      ]
})
export class MaterialModule { }
