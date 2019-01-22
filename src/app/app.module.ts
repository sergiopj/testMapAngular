import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';


// material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MaterialModule } from './material.module';

// services
import { ClientsService } from './services/clients.service';

// angular maps
import { AgmCoreModule } from '@agm/core';

// pipes
import { FormatCoordinatesPipe } from './pipes/format-coordinates.pipe';


// reactive fomrs module
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  
  declarations: [
    AppComponent,
    MapComponent,
    FormatCoordinatesPipe
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
    ReactiveFormsModule
  ],
  providers: [
    ClientsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
