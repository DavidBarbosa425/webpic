import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PhotoService } from '../../photo/photo-service';
import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subject, switchMap, tap } from 'rxjs';
import { PhotoComment } from '../../photo/photo.comment';

@Component({
    selector: 'app-photoComments',
    templateUrl: './photo-comments.component.html',
    styleUrls: ['./photo-comments.css']
})

export class PhotoCommentsComponent implements OnInit {

    comments$!: Observable<PhotoComment[]> 
    @Input() photoId!: number
    commentForm!: FormGroup

    constructor( private photoService: PhotoService,
                private formBuilder: FormBuilder) {}

    ngOnInit(): void {

        this.comments$ =  this.photoService.getComment(this.photoId)

        this.commentForm = this.formBuilder.group({
            comment: ['', Validators.maxLength(150)]
        })
    }

    save(){
        const comment: string = this.commentForm.get('comment')?.value as string

        this.comments$ =  this.photoService
            .postComment(this.photoId, comment)
            .pipe(switchMap(() => this.photoService.getComment(this.photoId)))
            .pipe(tap(()=>{
                this.commentForm.reset()
                alert("ga")
            }))
       
    }

}