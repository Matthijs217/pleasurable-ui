// Importeer het npm package Express (uit de door npm aangemaakte node_modules map)
// Deze package is geïnstalleerd via `npm install`, en staat als 'dependency' in package.json
import express from 'express'

// Importeer de Liquid package (ook als dependency via npm geïnstalleerd)
import { Liquid } from 'liquidjs';

// Maak een nieuwe Express applicatie aan, waarin we de server configureren
const app = express()

// Maak werken met data uit formulieren iets prettiger
app.use(express.urlencoded({extended: true}))

// Gebruik de map 'public' voor statische bestanden (resources zoals CSS, JavaScript, afbeeldingen en fonts)
// Bestanden in deze map kunnen dus door de browser gebruikt worden
app.use(express.static('public'))

// Stel Liquid in als 'view engine'
const engine = new Liquid()
app.engine('liquid', engine.express())

// Stel de map met Liquid templates in
// Let op: de browser kan deze bestanden niet rechtstreeks laden (zoals voorheen met HTML bestanden)
app.set('views', './views')

app.get('/', async function (request, response) {
  let vacaturesResponseJSON

  const vacaturesResponse = await fetch(`https://fdnd-agency.directus.app/items/dda_agencies?limit=1&fields=id,title,vacancies.*`)
  vacaturesResponseJSON = await vacaturesResponse.json()

  const apiResponseHeaderEvents = await fetch('https://fdnd-agency.directus.app/items/dda_events?filter[id][_in]=5&fields=*,photo.id,photo.width,photo.height');
  const apiResponseHeaderEventsJSON = await apiResponseHeaderEvents.json()

  response.render('home.liquid', {vacatures: vacaturesResponseJSON.data, headerEvents: apiResponseHeaderEventsJSON.data});
})

app.get('/events', async function (request, response) {
  response.render('events.liquid')
})

app.get('/leden', async function (request, response) {
  response.render('leden.liquid')
})

app.get('/overons', async function (request, response) {
  response.render('overons.liquid')
})

app.get('/publicaties', async function (request, response) {
  response.render('publicaties.liquid')
})

app.get('/vacatures', async function (request, response) {
  response.render('vacatures.liquid')
})

// Stel het poortnummer in waar Express op moet gaan luisteren
// Lokaal is dit poort 8000; als deze applicatie ergens gehost wordt, waarschijnlijk poort 80
app.set('port', process.env.PORT || 8000)

// Start Express op, gebruik daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  console.log(`Project draait via http://localhost:${app.get('port')}/\n\nSucces deze sprint. En maak mooie dingen! 🙂`)
})