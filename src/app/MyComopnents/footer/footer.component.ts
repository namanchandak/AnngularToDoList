import { Component } from '@angular/core';
import { UserdataService } from "../../services/userdata.service";
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgFor],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  users:any
    constructor(private userdata:UserdataService)
    {
        // console.log("user data", userdata.users())
        this.users = userdata.users()
    }
}
