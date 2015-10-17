# ReadMe -- Integration
-

*	Instal de [styledocco](https://jacobrask.github.io/styledocco/) pour écrire la documentation css du starter-pack
* Front-End Framework : [angular-material](https://material.angularjs.org/latest/)

* ToDo-list:
	* SpriteSystem: Support du JPG
	* task pour les vendors JS/CSS

-
1. COMPOSITION DU GULP
========================

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
  		+ ` body { backgroud-color: red; .container { color: blue; } }`

### Sprite System (PNG seulement)

  - Dosser pour les sprites : *"/img/icons/"*

  - Supporte uniquement le : **PNG**

  - Pour utiliser le système de sprite en production,
  vous pouvez utiliser le code sous cette forme là :

  	- [css]
  	`.two { background: url(../img/icons/one.png); } `

  	- [css final]
  	 `.two { background-image: url(../img/sprite.png); background-position: 0 0; }`

### Rucksack

  - Gestion de la typographie responsive:
  `.foo { font-size: responsive; }`

## mqpacker (mediaqueries-packer)

	- Rassemble dans un même bloc de code toutes les déclarations
	media-queries

-
2. UTILISATION EN PROJET
==========================

> #### 1. Cloner ce starter-pack
> #### 2. taper les commandes suivantes ->
> ##### `cd project-name/`
> ##### `npm i`
> ##### `gulp`

-
3. GRID SYSTEM
================

	* [GridSystem de angular-material](https://material.angularjs.org/latest/layout/grid)

-
4. DOCUMENTATION
==================

	* `**sudo** npm install -g styledocco`
	* `gulp docs`
	* `cd docs/`
	* Open index.html

-
5. ANNEXES
============

- https://github.com/jonathantneal/precss
- https://github.com/2createStudio/postcss-sprites
- https://simplaio.github.io/rucksack/
- https://github.com/postcss/autoprefixer
- https://github.com/hail2u/node-css-mqpacker
- https://github.com/jedmao/postcss-center
