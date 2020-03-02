import { Component, SimpleChanges, OnChanges, Input } from '@angular/core';
import { PhotoModel } from '../../photo/photoModel';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnChanges {

  @Input() photos: PhotoModel[] = [];
  rows = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.photos) {
      this.rows = this.groupColumns(this.photos)
    }
  }

  groupColumns(photos: PhotoModel[]) {
    const newRows = [];
    for (let i = 0; i < photos.length; i += 3) {
      newRows.push(photos.slice(i, i + 3));
    }
    return newRows;
  }




}
