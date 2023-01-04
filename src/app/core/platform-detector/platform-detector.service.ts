import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


@Injectable({
    providedIn: 'root'
})

export class PlatformDetectorService {
    isPlatformBrowser: any;

    constructor(@Inject(PLATFORM_ID) private platformId: string) {}

    isPlatform() {
        return isPlatformBrowser(this.platformId)
    }

}