import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Output() abrir = new EventEmitter<boolean>();
  constructor() {}

  handleForm() {
    this.abrir.emit(true);
  }
  handleLista() {
    this.abrir.emit(false);
  }
  ngOnInit(): void {}
}
