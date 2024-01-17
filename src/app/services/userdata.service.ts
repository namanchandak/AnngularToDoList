import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  users()
  {
    return [
      {name: "naman", id:"123", desc:"hiii"},
      {name: "na", id:"23", desc:"i"},
      {name: "ved", id:"1023", desc:"o"}
    ]
  }
}
