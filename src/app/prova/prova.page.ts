import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-prova',  
  templateUrl: './prova.page.html',
  styleUrls: ['./prova.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule]
})
export class ProvaPage {
  descricao = "Olá! Eu sou Pedro Henrique, estudante de Análise e Desenvolvimento de Sistema e sou um estudante que busca se aprimorar e crescer em carreira propria e adquirir um futuro estavel e confortavel para mim e minha familia me estabelencendo de forma profunda e duradoura na area de ti.";
  jokeSetup = "";
  jokePunchline = "";

  constructor() {}

  async getJoke() {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await response.json();
    this.jokeSetup = data.setup;
    this.jokePunchline = data.punchline;
  }
}
