import { HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { AlertService } from './../../shared/components/alert/alert.service';
import { Router } from '@angular/router';
import { PhotoService } from './../photo/photo-service';
import { OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})

export class PhotoFormComponent implements OnInit {

  photoForm!: FormGroup;
  file!: File;
  preview?: string
  percentDone?: number = 0

  constructor(private formBuilder: FormBuilder,
              private photoService: PhotoService,
              private router: Router,
              private alertService: AlertService
              ) {}

  ngOnInit(): void {

    this.photoForm = this.formBuilder.group({
      file: ['',Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true]
    })
  }

  upload(){
    const description = this.photoForm.get('description')?.value
    const allowComments = this.photoForm.get('allowComments')?.value
debugger
    this.photoService.upload(this.file, description, allowComments)
        .subscribe((event: HttpEvent<any>) => {
          if(event.type == HttpEventType.UploadProgress){
            if(event.total){
              this.percentDone = Math.round(100 * event.loaded / event.total )
            }
            console.log(this.percentDone);
            
          } debugger
          if(event instanceof HttpResponse) {

            this.alertService.success("Upload complete", true)
            this.router.navigate([''])
          }
        },
        error => {
          this.alertService.danger("Error to upload photo", true)
          this.router.navigate([''])
      })
    
  }

  cancelUpload(){
    this.photoForm.reset()
  }

  handleFile(file: File){
    this.file = file
    const reader = new FileReader()
    reader.onload = (event: any) => this.preview = event.target?.result
    reader.readAsDataURL(file)
  }
}
