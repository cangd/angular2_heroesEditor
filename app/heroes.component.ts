import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css'],
    directives: [HeroDetailComponent]
})

export class HeroesComponent implements OnInit {
    title = 'Tour of Heroes';
    heroes: Hero[];
    selectedHero: Hero;

    constructor(private heroService: HeroService) { }

    getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit() {
    this.getHeroes();
    }

    onSelect(hero:Hero) {this.selectedHero = hero; }
}
