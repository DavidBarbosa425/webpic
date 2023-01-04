import { isPlatformBrowser } from '@angular/common';
import { PlatformDetectorService } from './../../../core/platform-detector/platform-detector.service';
import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[immediateClick]'
})

export class ImmediateClickDirective implements OnInit {

    constructor(private elementRef: ElementRef<any>,
                private platFormDetector: PlatformDetectorService) {
        
    }
    ngOnInit(): void {
        this.platFormDetector.isPlatform() &&
        this.elementRef.nativeElement.click()
    }

}   