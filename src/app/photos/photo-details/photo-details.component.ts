import { PhotoComment } from './../photo/photo.comment';
import { Observable } from 'rxjs';
import { PhotoService } from '../photo/photo-service';
import {  ActivatedRoute } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import { Photo } from '../photo/photo';

@Component({
    selector: 'app-photoDetails',
    templateUrl: './photo-details.component.html',
    styleUrls: ['./photo-details.css']
})

export class PhotoDetailsComponent implements OnInit {

    photoId: any
    photo$?: Observable<Photo> | undefined
   

    constructor(private activatedRoute: ActivatedRoute,
                private photoService: PhotoService){}

    
    ngOnInit(): void {
        this.photoId = this.activatedRoute.snapshot.params['photoId']

        this.photo$ = this.photoService.findById(this.photoId)
        

        
    }
}