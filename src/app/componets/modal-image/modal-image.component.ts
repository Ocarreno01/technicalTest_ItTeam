import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-image',
  templateUrl: './modal-image.component.html',
  styleUrls: ['./modal-image.component.css']
})
export class ModalImageComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalImageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  closeModal(): void {
    this.dialogRef.close();
  }
}
