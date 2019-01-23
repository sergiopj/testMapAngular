import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { FormsModule } from '@angular/forms';

// material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MaterialModule } from './material.module';

// services
import { ClientsService } from './services/clients.service';

// angular maps
import { AgmCoreModule } from '@agm/core';

// reactive fomrs module
import { ReactiveFormsModule } from '@angular/forms';
import { CoordinatesFormatPipe } from './pipes/coordinates-format.pipe';
import { SideBarMenuComponent } from './components/side-bar-menu/side-bar-menu.component';

@NgModule({

  declarations: [
    AppComponent,
    MapComponent,
    CoordinatesFormatPipe,
    SideBarMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA5mjCwx1TRLuBAjwQw84WE6h5ErSe7Uj8'
    }),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    ClientsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
