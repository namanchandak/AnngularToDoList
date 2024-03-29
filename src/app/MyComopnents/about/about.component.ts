import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { UserdataService } from "../../services/userdata.service";
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.css',
    imports: [FooterComponent, NgFor]
})
export class AboutComponent {
    users:any
    constructor(private userdata:UserdataService)
    {
        // console.log("user data", userdata.users())
        this.users = userdata.users()
    }
}
