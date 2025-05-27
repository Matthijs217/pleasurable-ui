# DDA

## Beschrijving
Dit project is een opdracht die we heb ontvangen van het softwarebedrijf De Voorhoede om de website van DDA te maken en te reviseren. Het doel van deze opdracht was om de bestaande website te verbeteren aan de hand van nieuwe designs. Ook is het van belang dat er dynamische data wordt opgehaald vanuit een API of database.

In de huidige sprint 11 wordt de nadruk gelegd op het toepassen van de standaarden die we voorgaarde sprint hebben geleerd, met daarbij het ontwerpen en toepassen van mooie en aantrekkelijke user interfaces en het samenwerken in een repository met branches en pull / merge requests.

## Inhoudsopgave
- [DDA](#dda)
  - [Beschrijving](#beschrijving)
  - [Inhoudsopgave](#inhoudsopgave)
  - [Mobile first](#mobile-first)
  - [Componenten](#componenten)
  - [Code conventies](#code-conventies)
  - [Moskou labels op prioriteit](#moskou-labels-op-prioriteit)
  - [Pull requests](#pull-requests)
  - [Beschrijving](#beschrijving-1)
    - [Mockups van de paginas](#mockups-van-de-paginas)
  - [Gebruik](#gebruik)
    - [Gebruikte technologieën](#gebruikte-technologieën)
  - [Installatie](#installatie)
  - [Bronnen](#bronnen)
  - [Licentie](#licentie)

## Mobile first
Bij de ontwikkeling van de pagina is gewerkt volgens het mobile first-principe. Hierbij is ook rekening gehouden met de responsiveness van de typografie voor grotere schermen. Dit is gedaan door middel van CSS clamp(). Deze aanpak is verwerkt in de styleguide van de basic-styling.

## Componenten
De website is gemaakt aan de hand van meerdere componenten. We hebben alle elementen die vaker voorkomen op de website gemaakt als component zodat deze elementen niet steeds overnieuw gemaakt hoeft te worden. Een paar componenten die we hebben gemaakt zijn:

- Buttons
- image cards
- event lists
- labels
- href linkjes
- section headings
- footer
- header

De rest van de componenten / partials zijn te vinden in de "partials" folder in de repository.

## Code conventies
Dit zijn de code conventions die we hebben gebruikt bij de development van dit project:

- Alles engels
- In branches werken
- Conventional commits
- Kebab case voor classes
- Camel case voor JS
- Button -> btn
- Witruimtes
- Nesting (maar niet teveel)


## Moskou labels op prioriteit
Dit is hoe we de prioriteit hebben gelabeld aan een functionaliteit.

- Must have -- PO1
- Should have -- PO2
- Wont have -- PO3

## Pull requests
Voor pull requests gebruiken we de template van fdnd-agency
- https://github.com/fdnd-agency/.github/blob/main/pull_request_template.md?plain=1

## Beschrijving
<!-- Bij Beschrijving staat kort beschreven wat voor project het is en wat je hebt gemaakt -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->
### Mockups van de paginas
| Home                                                     |Over ons                                           |
| -------------------------------------------------------- | -------------------------------------------------- |
| <img src="./public/img/home-mockup.gif" width="300"> | <img src="./public/img/overons-mockup.gif" width="300"> |

| Publicaties                                            | Leden                                         |
| -------------------------------------------------- | ----------------------------------------------------- |
| <img src="./public/img/publicaties-mockup.gif" width="300"> | <img src="./public/img/leden-mockup.gif" width="300"> |

| Events                                            | Vacatures                                         |
| -------------------------------------------------- | ----------------------------------------------------- |
| <img src="./public/img/events-mockup.gif" width="300"> | <img src="./public/img/vacatures-mockup.gif" width="300"> |



## Gebruik
<!-- Bij Gebruik staat de user story, hoe het werkt en wat je er mee kan. -->

### Gebruikte technologieën
- **HTML & CSS**  
  De basisstructuur en styling van de website zijn opgebouwd met HTML en CSS. De huisstijl van de website is in een aparte styleguide verwerkt.

- **Server-side JavaScript**  
  Voor de back-end is gebruik gemaakt van Node.js en Express om een dynamische en efficiënte webserver te creëren. Nodejs zorgt ervoor dat ik Javascript serverside kan gebruiken en Express maakt mogelijk om routes te maken en responses en requests te verwerken.

- **Liquid Templates**  
  De weergave van de pagina’s gebeurt met behulp van Liquid Templates, waardoor dynamische data eenvoudig kan worden ingeladen en eventueel gemanipuleerd met liquid functies.  

- **Directus APi**
  De data die wordt opgehaald kom uit de Directus Api. Doormiddel van API endpoint url's kunnen vervolgens specifieke data worden opgevraagt.

## Installatie
Project lokaal installeren

1. **Fork de repository**  
   Ga naar de [repository pagina](https://github.com/Matthijs217/pleasurable-ui) en klik op de **Fork** knop in de rechterbovenhoek om een kopie van de repository naar je eigen GitHub account te maken.

2. **Clone de repository**  
   Clone je geforkte repository naar je lokale computer door het volgende commando uit te voeren in de terminal: git clone https://github.com/Matthijs217/pleasurable-ui

3. **Installeer de packages**  
   Voer in de terminal de command **npm install** uit om de packages uit de package.JSON te installeren.

4. **Start de server**  
   Voer in de terminal de command **npm start** uit om de server te starten.


## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
