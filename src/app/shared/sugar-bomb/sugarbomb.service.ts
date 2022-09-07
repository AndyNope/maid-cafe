import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SugarbombService {
  public showSugarBomb = true;
  public visited = false;

  constructor() { }
}
