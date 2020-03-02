import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PhotoModel } from '../photo/photoModel';
import { PhotoService } from '../photo/photo.service';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class PhotoListResolver implements Resolve<Observable<PhotoModel[]>>{
   
   constructor(private photoService: PhotoService) {
   }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PhotoModel[]>{
        const userName = route.params.userName;
        return this.photoService.listFromUserPaginated(userName, 1);
    }

}