import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'buscador-endereco';
  cep: string = '';
  bairro: string = '';
  localidade: string = '';
  logradouro: string = ''
  uf: string = '';

  constructor(public http: HttpClient){

  }

  //Função que busca e retorna o CEP
  buscaCep(){
   return this.http.get('https://viacep.com.br/ws/' + this.cep + '/json/').subscribe((data) => {
    console.log(data);
    this.bairro = data['bairro'];
    this.localidade = data['localidade'];
    this.logradouro = data['logradouro'];
    this.uf = data['uf'];
   })
  }
}
