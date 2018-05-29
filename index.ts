import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MarkdownEditorComponent } from './md-editor/md-editor.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatIconModule,
  MatButtonToggleModule,
  MatCheckboxModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

export * from './md-editor/md-editor.component';

@NgModule({
  declarations: [MarkdownEditorComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    HttpClientModule
  ],
  exports: [MarkdownEditorComponent]
})
export class LMarkdownEditorModule {}
