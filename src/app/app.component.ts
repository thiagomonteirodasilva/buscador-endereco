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

  constructor(public http: HttpClient) {

  }

  //Função que busca e retorna o CEP
  buscaCep() {
    if (this.cep) {
      if (this.cep.length < 8) {
        window.alert('O CEP deve conter oito números!');
      } else {
        return this.http.get('https://viacep.com.br/ws/' + this.cep + '/json/').subscribe((data) => {
          console.log(data);
          if (data['erro']) {
            window.alert('CEP inválido!');
          } else {
            this.bairro = data['bairro'];
            this.localidade = data['localidade'];
            this.logradouro = data['logradouro'];
            this.uf = data['uf'];
          }
        }, err => {
          window.alert('Erro ao buscar cep!');
        });
      }
    } else {
      window.alert('Digite um CEP!');
    }
  }
}
