import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule,
         MatSortModule,
         MatCardModule,
         MatButtonModule,
         MatIconModule,
         MatDialogModule,
         MatDialog,
         MatInputModule,
         MatSnackBarModule,
         MatTooltipModule
         } from '@angular/material';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DogDialogComponent } from './dogdialog/dogdialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DogDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatSnackBarModule,
    MatTooltipModule
  ],
  entryComponents: [DogDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
