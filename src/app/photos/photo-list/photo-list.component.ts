import { Component, OnInit, OnDestroy } from '@angular/core';
import { PhotoModel } from '../photo/photoModel';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit, OnDestroy {

  photos: PhotoModel[] = [];
  filter: string = '';
  debounce: Subject<string> = new Subject<string>();
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: PhotoService
  ) { }

  ngOnInit(): void {
    this.photos = this.activatedRoute.snapshot.data.photos;
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.debounce
      .pipe(debounceTime(300))
      .subscribe(filter => this.filter = filter);
  }

  ngOnDestroy() {
    this.debounce.unsubscribe();
  }
  load() {
    this.service.listFromUserPaginated(this.userName, ++this.currentPage)
      .subscribe(photoResult => {
        this.photos = this.photos.concat(photoResult);
        if (!photoResult.length) this.hasMore = false;
      })
  }
}
