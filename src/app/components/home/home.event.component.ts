import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'home-event',
  templateUrl: 'home.event.component.html'
})
export class HomeEventComponent {

  @Output() loggedUserEventEmitter = new EventEmitter();

  public user: string;

  ngOnInit(): void {    
    this.user = sessionStorage.getItem("user");
  }

  ngAfterViewInit(){    
    this.loggedUserEventEmitter.emit({      
      user: this.user
    });
  }

  ngAfterViewChecked(){    
    this.loggedUserEventEmitter.emit({      
      user: this.user
    });
  }
}