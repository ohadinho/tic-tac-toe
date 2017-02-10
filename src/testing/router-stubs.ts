import { Injectable } from '@angular/core';

@Injectable()
export class RouterStub {
  navigateByUrl(url: string) { return url; }
}