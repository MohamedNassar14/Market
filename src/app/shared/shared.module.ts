import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { MinimizePipe } from './minimize.pipe';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectComponent } from './components/select/select.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    NavbarComponent,
    NotfoundComponent,
    MinimizePipe,
    SpinnerComponent,
    SelectComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    NavbarComponent,
    MinimizePipe,
    SpinnerComponent,
    SelectComponent,
    RouterModule,
    FormsModule
  ]
})
export class SharedModule { }
