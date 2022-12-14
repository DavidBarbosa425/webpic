import { AlertService } from './../../shared/components/alert/alert.service';
import { PhotoComment } from './../photo/photo.comment';
import { Observable } from 'rxjs';
import { PhotoService } from '../photo/photo-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, ElementRef, OnInit, Renderer2 } from "@angular/core";
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
                private photoService: PhotoService,
                private router:Router,
                private alertService: AlertService,
                private renderer2: Renderer2,
                private elementRef: ElementRef<any>
                ){}

    
    ngOnInit(): void {
        this.photoId = this.activatedRoute.snapshot.params['photoId']
        
        this.photo$ = this.photoService.findById(this.photoId)

        this.photo$.subscribe(()=> {},error =>{
            console.log(error);
            
            this.router.navigate(['not-found'])
        })
        
    }

    delete() {
        this.photoService.deletePhoto(this.photoId)
        .subscribe(()=>{
            this.alertService.success("Photo removed", true)
            this.router.navigate([''])
        },
        error => {
            console.log(error);
            this.alertService.danger("Error to removed photo", true)
            this.router.navigate([''])
        }
        )
    }

    like(photId: number) {
        console.log('cliquei');
        
        this.photoService.like(photId)
        .subscribe(liked => {
            if(liked){
                this.photo$ = this.photoService.findById(photId)
            }
        })
    }
}