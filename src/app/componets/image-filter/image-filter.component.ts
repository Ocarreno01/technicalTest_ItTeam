import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalImageComponent } from '../modal-image/modal-image.component';
import { AdminApiService } from 'src/app/services/admin-api.service';

@Component({
  selector: 'app-image-filter',
  templateUrl: './image-filter.component.html',
  styleUrls: ['./image-filter.component.css']
})

export class ImageFilterComponent implements OnInit {
  keyWord: string = '';
  category: any = '';
  result: any[] = [];
  submitted: boolean = false;
  loading: boolean = false;
  categories: { name: string, id: string }[] = [
    { name: "Ciencia", id: "science" },
    { name: "Educación", id: "education" },
    { name: "Personas", id: "people" },
    { name: "Sentimientos", id: "feelings" },
    { name: "Computadores", id: "computer" },
    { name: "Edificios", id: "buildings" }
  ];

  constructor(public dialog: MatDialog, private adminApi: AdminApiService) { }

  ngOnInit(): void { }

  public searchImages() {
    if (this.keyWord && this.keyWord.length <= 100) {
      this.submitted = true;
      this.loading = true;
      let queryParams = `&lang=es&q=${this.keyWord}`;
      if (this.category) {
        queryParams += `&category=${this.category}`;
      }
      this.adminApi.getDataImages(queryParams).subscribe(
        (data) => {
          this.loading = false;
          this.result = data?.hits || null;
        },
        (error) => {
          this.loading = false;
          console.error('Error al obtener datos:', error);
          this.result = [];
        }
      );
    }
  }

  public imageOnClick(selectedImage: any) {
    this.dialog.open(ModalImageComponent, {
      width: '1000px',
      data: selectedImage,
    });
  }

}


