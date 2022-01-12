import {Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {

  @Input() id: number= -1;

  @Input()public name: string = "";
  @Output() nameChange: EventEmitter<string> = new EventEmitter<string>();

  @Input()public lastname: string = "";
  @Output() lastnameChange: EventEmitter<string> = new EventEmitter<string>();



  @Input()
  public set age(value: number) {
    if (value >= 0) {
      this._age=value;
    }
  }
  public get age(): number {
    return this._age;
  }
  @Output() ageChange: EventEmitter<number> = new EventEmitter<number>();
  public _age: number = 0;

  @Input()public avatarUrl: string = "";


  @Output('profileClick') clickEmitter: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>()



  public handleAvatarClick(event: MouseEvent) {
    this.clickEmitter.emit(event)
    this.nameChange.emit( "John");
    this.lastnameChange.emit("Wick");
    this.ageChange.emit(50);

  }

  /** hooks **/

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes ['name'] || changes ['lastname']) {
      this.showFullName();
    }
  }

  ngOnInit(): void {
    console.log(`User: ${this.fullname} - Initialized`);
    this,this.showFullName();
  }

  ngOnDestroy(): void {
    console.log ("Destroyed");
  }



  oneSpaceKeyup($event: any) {
    alert("Space Pressed");
  }

  public get fullname(): string {
    return `${this.name} ${this.lastname}`;
  }

  public showFullName(): void {
    console.log (`Здравствуйте ${this.fullname}`);
  }

}



