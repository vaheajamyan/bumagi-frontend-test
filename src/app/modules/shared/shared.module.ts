import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {LoaderComponent} from 'src/app/components/loader/loader.component';
import {TabsComponent} from 'src/app/components/tabs/tabs.component';
import {FirstCharacterPipe} from 'src/app/pipes/first-character.pipe';
import {MatDialogModule} from '@angular/material/dialog';
import {SelectComponent} from 'src/app/uikit/select/select.component';
import {DayDiffPipe} from 'src/app/pipes/day-diff.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule
  ],
  declarations: [
    LoaderComponent,
    TabsComponent,
    FirstCharacterPipe,
    DayDiffPipe,
    SelectComponent,
  ],
  exports: [
    TabsComponent,
    LoaderComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatDialogModule,
    FirstCharacterPipe,
    DayDiffPipe,
    SelectComponent,
  ]
})
export class SharedModule {
}
