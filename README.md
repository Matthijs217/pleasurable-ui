# DDA

## Beschrijving
Dit project is een opdracht die we heb ontvangen van het softwarebedrijf De Voorhoede om de website van DDA te maken en te reviseren. Het doel van deze opdracht was om de bestaande website te verbeteren aan de hand van nieuwe designs. Ook is het van belang dat er dynamische data wordt opgehaald vanuit een API of database.

In de huidige sprint 11 wordt de nadruk gelegd op het toepassen van de standaarden die we voorgaarde sprint hebben geleerd, met daarbij het ontwerpen en toepassen van mooie en aantrekkelijke user interfaces en het samenwerken in een repository met branches en pull / merge requests.

## Inhoudsopgave
- [DDA](#dda)
  - [Beschrijving](#beschrijving)
  - [Inhoudsopgave](#inhoudsopgave)
  - [Code conventies](#code-conventies)
  - [Moskou labels op prioriteit](#moskou-labels-op-prioriteit)
  - [Pull requests](#pull-requests)
  - [Mobile first](#mobile-first)
  - [Componenten](#componenten)
  - [Toegepaste standaarden](#toegepaste-standaarden)
    - [Performance enhancement](#performance-enhancement)
      - [Webp en avif format](#webp-en-avif-format)
      - [Width en height toevoegen](#width-en-height-toevoegen)
      - [Responsive images](#responsive-images)
      - [Fonts derde partijen](#fonts-derde-partijen)
  - [Beschrijving](#beschrijving-1)
    - [Mockups van de paginas](#mockups-van-de-paginas)
  - [Gebruik](#gebruik)
    - [Gebruikte technologieën](#gebruikte-technologieën)
  - [Installatie](#installatie)
  - [Bronnen](#bronnen)
  - [Licentie](#licentie)

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

## Ontwerp keuzes

De hele website bestaat uit het
figma design van de opdrachtgever. Wij hebben deze ontwerpkeuzes toegepast op de website wat je kan zien aan de componenten:

<img src="https://github.com/user-attachments/assets/186a04b3-29ca-4b93-8722-fdaf39c738f5" width="400"/>
<img src="https://github.com/user-attachments/assets/a61f7627-6f53-4e6a-b00f-3878381cd214" width="400"/>
<img src="https://github.com/user-attachments/assets/22007d98-9793-4f6d-9dd1-bee50776c9cb" width="400"/>
<img src="https://github.com/user-attachments/assets/cd905596-a412-40de-b572-bd20503213a4" width="400"/>


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

## Toegepaste standaarden
Tijdens dit project hebben we een aantal standaarden aangehouden om een toegankelijke website te maken voor de gebruikers. We hebben de volgende standaarde toegepast:

- Performance enhancement
- Progressive enhancement
- Toegankelijkheid

### Performance enhancement
Om de performance van de website optimaal te houden hebben we tijdens de development verschillende technieken gebruikt om de performance te verbeteren, waaronder:

#### Webp en avif format
Webp en avif is moderne formatting voor images. De bestandsgrootte is kleiner ten opzichte van jpeg of png wat betere performance biedt.

De images uit de Directus API kun je ophalen als format avif of webp. Er zijn ook statische images in de assets folder. In de assets folder bevinden zich ook de webp en de avif format van deze images. En als fallback heb ik de normale format png als de browser van de gebruiker bijvoorbeeld nog geen webp of avif support.

#### Width en height toevoegen
Om layout shifts te voorkomen hebben we een `width` en `height` toegevoegt aan elke image. Bij het renderen van de pagina weet de browser wat de `height` en `width` van de image is waardoor deze ruimte gereserveerd kan worden. Hierdoor zal de gebruiker geen verschuivingen zien waardoor de user experience verbetert.

#### Responsive images
De images zitten nu in een `<picture>` tag. In de picture tag zijn een aantal source's met verschillende width's aangemaakt. Nu gaat de browser zelf uitzoeken welke source het beste past bij de omstandigheden. Het kijkt of de browser avif of webp ondersteunt en het kijkt naar de media query(schermgrootte) (als deze zijn geimplementeerd). Vervolgens kiest het dan een uit dat geschikt is. Zijn er geen van de source's geschikt dat pakt het de fallback en dat is de `<img>`.

De images die uit de Directus API worden opgehaald zijn alle veel te groot. Als je ze zo groot inlaadt terwijl je op de pagina kleiner nodig hebt gaat je performance achteruit. Omdat de hele afbeelding meer geheugen heeft dan een kleinere.

#### Fonts derde partijen
De website gebruikt meerdere fonts die niet standaard in css zitten. In plaats van fonts te laden via een externe `<link>` (Google Fonts), zijn ze in dit project lokaal gedownload en opgeslagen in de /public folder. 

## Beschrijving
<!-- Bij Beschrijving staat kort beschreven wat voor project het is en wat je hebt gemaakt -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->
### Mockups van de paginas
| Home                                                     |Over ons                                           |
| -------------------------------------------------------- | -------------------------------------------------- |
| <img src="./public/img/home-mockup.gif" width="400"> | <img src="./public/img/overons-mockup.gif" width="400"> |

| Publicaties                                            | Leden                                         |
| -------------------------------------------------- | ----------------------------------------------------- |
| <img src="./public/img/publicaties-mockup.gif" width="400"> | <img src="./public/img/leden-mockup.gif" width="400"> |

| Events                                            | Vacatures                                         |
| -------------------------------------------------- | ----------------------------------------------------- |
| <img src="./public/img/events-mockup.gif" width="400"> | <img src="./public/img/vacatures-mockup.gif" width="400"> |



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
