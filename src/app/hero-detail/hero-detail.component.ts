import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService }  from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
  hero: Hero;
  angForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log('Id :: ', id);
    this.heroService.getHero(id).subscribe((hero) => {
      this.hero = hero;
    })
  }

  goBack(): void {
    this.location.back();
  }

  createForm(): void {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      // mobile: ['', [Validators.required, Validators.maxLength(3)] ]
    });
    console.log('Angular Form :: ', this.angForm);
  }
}
