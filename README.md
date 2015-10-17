# ReadMe -- Integration
=======================


1. Principe de GULP & NPM
===========================

### SCSS-like
 - PreCSS -> Utilistiaton des utils SCSS suivants, dans notre solution:

  * Les **import**
  		+ @import "modules/base";
  		`chemin_fichier: modules/_base.css`
  * Les **variables**
  		+ exemple: $column: 200px;
  * Les **boucles et contidions**
  		+ @for et @each
  * Les **mixin et les extend**
  		+ @define-mixin et @define-extend
  * L'imbrication des classes

### Sprite System (PNG seulement)

  - Dosser pour les sprites : *"/img/icons/"*

  - Supporte uniquement le : **PNG**

  - Pour utiliser le système de sprite en production,
  vous pouvez utiliser le code sous cette forme là :

  	- CodeEcritParUnDev[code post-css]
  	```
   	 .two { background: url(../img/icons/one.png); }
   	```

  	- GenerateCode[code css final]
  	 ```
  	.two {
    background-image: url(../img/sprite.png); background-position: 0 0;
  	}
  	```

### Rucksack

  - Gestion de la typographie responsive:
  ```
    .foo {
      font-size: responsive;
    }
  ```


2. Utilisation en projet
==========================

> #### 1. Cloner ce starter-pack
> #### 2. taper les commandes suivantes ->
> ##### `cd project-name/`
> ##### `npm i`
> ##### `gulp`


3 Composants du PostCSS
=========================

- https://github.com/jonathantneal/precss
- https://github.com/2createStudio/postcss-sprites
- https://simplaio.github.io/rucksack/
- https://github.com/postcss/autoprefixer
- https://github.com/hail2u/node-css-mqpacker
