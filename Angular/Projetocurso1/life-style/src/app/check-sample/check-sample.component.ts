import { Component, 
OnInit, 
DoCheck, 
AfterContentChecked,
AfterViewChecked,
AfterViewInit,
OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export default class CheckSampleComponent implements OnInit, 
DoCheck, 
AfterContentChecked,
AfterViewChecked,
AfterViewInit,
OnDestroy {

  quantidade:number = 0;

  constructor() { }
  ngOnDestroy(): void {
    console.log("Good bye, my friend.")
  }

  adicionar() {
    this.quantidade += 1;
    console.log(this.quantidade)
  }

  decrementar() {
    this.quantidade -= 1;
    console.log(this.quantidade)
  }

  // quando o primeiro conteúdo é iniciado
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }

  // depois da inicialização da view
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }

  // após alguma alteração, verifica o conteúdo
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }

  ngDoCheck(): void {
    console.log("ngDocheck")
  }

  ngOnInit(): void {
    console.log("ngOnInit")
  }

}
