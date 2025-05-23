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

  const apiResponseEvents = await fetch('https://fdnd-agency.directus.app/items/dda_events?filter[id][_in]?limit=6,3,5&fields=*,photo.id,photo.width,photo.height');
  const apiResponseEventsJSON = await apiResponseEvents.json()

  const apiResponseEventsLists = await fetch('https://fdnd-agency.directus.app/items/dda_events?filter[id][_in]=6,3,5,1,7,4&limit=5&fields=id,title,location,date');
  const apiResponseEventsListsJSON = await apiResponseEventsLists.json()

  const apiResponseEventsListCards = await fetch('https://fdnd-agency.directus.app/items/dda_events?filter[id][_eq]=4&fields=*,photo.id,photo.width,photo.height');
  const apiResponseEventsListCardsJSON = await apiResponseEventsListCards.json()
    
  const ledenResponse = await fetch ('https://fdnd-agency.directus.app/items/dda_agencies')
  const ledenResponseJSON = await ledenResponse.json()

  response.render('home.liquid', {vacatures: vacaturesResponseJSON.data, events: apiResponseEventsJSON.data, eventsListCards: apiResponseEventsListCardsJSON.data, eventsLists: apiResponseEventsListsJSON.data, leden: ledenResponseJSON.data });
})









app.get('/events', async function (request, response) {
  
  const apiResponseEventCards = await fetch('https://fdnd-agency.directus.app/items/dda_events?filter[id][_in]=5,3,6&fields=*,photo.id,photo.width,photo.height');
  const apiResponseEventCardsJSON = await apiResponseEventCards.json();

  const { theme, location } = request.query;
  let apiResponse;

  console.log("test", request.query);

  let directusApi = 'https://fdnd-agency.directus.app/items/dda_events';

  // Kijkt of location of theme een waarde hebben. Is dat het geval wordt in de directusapi value de ? toegevoegd. Hiermee kunnen filters toepassen
  if (location || theme) {
    directusApi += '?';

    // Hier kijkt er of theme een waarde heeft en pakt hij de directus filter syntax en zet de waarde van de theme daarin.
    if (theme) {
      directusApi += 'filter[theme][_eq]=' + request.query.theme;
    }

    // Hier kijkt er of de location een waarde heeft en of ook is gefiltert op theme. zo ja, dan wordt de & toegevoegt zodat er nog een filter in de url kan worden toegevoegd
    if (location) {
      if (theme) directusApi += '&';
      directusApi += 'filter[location][_eq]=' + request.query.location;
    }
  }

  console.log(directusApi)
  apiResponse = await fetch(directusApi);
  const apiResponseJSON = await apiResponse.json();

  response.render('events.liquid', { eventCards: apiResponseEventCardsJSON.data, events: apiResponseJSON.data });
});

// details pagina
app.get('/events/detail-event/:id', async function (request, response) {

  const success = request.query.success === 'true';

  // ophalen van data specifieke event door id
  const apiResponseDetails = await fetch('https://fdnd-agency.directus.app/items/dda_events/' + request.params.id + '?fields=*,photo.id,photo.width,photo.height');
  const apiResponseDetailsJSON = await apiResponseDetails.json();

  if (!apiResponseDetailsJSON.data) {
    return response.status(404).render('404.liquid');
  }

  // Voor ophalen alle companies die zijn ingeschreven
  const apiResponseCompany = await fetch('https://fdnd-agency.directus.app/items/dda_signups?fields=company&filter[event][_eq]=' + request.params.id);
  const apiResponseCompanyJSON = await apiResponseCompany.json();

  console.log("Evendid:", request.params.id);
  console.log("Companys:", apiResponseCompanyJSON);

  response.render('detail-event.liquid', { eventDetails: apiResponseDetailsJSON.data, companies: apiResponseCompanyJSON.data, successState: success });
});

app.post('/events/detail-event/:id', async function (request, response) {

  const apiResponseDetails = await fetch('https://fdnd-agency.directus.app/items/dda_events/' + request.params.id);
  const apiResponseDetailsJSON = await apiResponseDetails.json();

  const { title, name, email, phone, company, event,
    company_website, reason, fte } = request.body;
  console.log(request.body)

  const apiResponse = await fetch('https://fdnd-agency.directus.app/items/dda_signups', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',

    },
    body: JSON.stringify({
      title: title,
      name: name,
      email: email,
      phone: phone,
      company: company,
      event: event,
      company_website: company_website,
      reason: reason,
      fte: fte
    })
  });

  console.log(apiResponseDetailsJSON)

  response.redirect(303, '/events/detail-event/' + request.params.id + '?success=true');
});















// leden pagina post/get
app.get('/leden', async function (request, response) {
  // Verkrijg de filters uit de queryparameters
  const { provincie, omvang, sorteren } = request.query;

  // Basis URL voor de API-aanroep
  let apiUrl = 'https://fdnd-agency.directus.app/items/dda_agencies';

  // Als een provincie is opgegeven, voeg die toe aan de filter
  if (provincie && provincie !== '') {
    apiUrl += `?filter[province_string][_eq]=${provincie}`;
  }

  // Als sorteren is opgegeven, voeg dat toe
  if (sorteren && sorteren !== '') {
    const connector = apiUrl.includes('?') ? '&' : '?';
    if (sorteren === 'A-Z') {
      apiUrl += `${connector}sort=title`;
    } else if (sorteren === 'Z-A') {
      apiUrl += `${connector}sort=-title`;
    } else if (sorteren === 'Aantal werknemers') {
      apiUrl += `${connector}sort=colleagues`;
    }
  }

  // Haal de data op van de API
  const apiResponse = await fetch(apiUrl);
  const apiResponseJSON = await apiResponse.json();

  // Render de data naar de view
  response.render('leden.liquid', {leden: apiResponseJSON.data});
});

app.post('/leden/nieuw/toevoegen/', async function (request, response) {
  console.log("ontvangen body:", request.body)
  await fetch('https://fdnd-agency.directus.app/items/dda_agencies', {
        method: 'POST',
        body: JSON.stringify({
          title: request.body.title,
          address: request.body.address,
          colleagues: request.body.colleagues,
        }),
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      });
      response.redirect(303, '/leden?success=Lid is toegevoegd!');
})

app.get('/leden/lid/:id', async function (request, response) {
  
  const apiResponse = await fetch('https://fdnd-agency.directus.app/items/dda_agencies/' + request.params.id)
  const apiResponseJSON = await apiResponse.json() 

  response.render('lid.liquid', { lidDetails: apiResponseJSON.data });
})

app.get('/overons', async function (request, response) {

  const apiResponseTeams = await fetch('https://fdnd-agency.directus.app/items/dda_team?fields=*,photo.id,photo.width,photo.height');
  const apiResponseTeamsJSON = await apiResponseTeams.json()

  const ledenResponse = await fetch ('https://fdnd-agency.directus.app/items/dda_agencies')
  const ledenResponseJSON = await ledenResponse.json()

  response.render('overons.liquid', { leden: ledenResponseJSON.data, teams: apiResponseTeamsJSON.data });
})

app.get('/publicaties', async function (request, response) {
  response.render('publicaties.liquid')
})

app.get('/vacatures', async function (request, response) {
  let vacaturesResponseJSON

  const vacaturesResponse = await fetch(`https://fdnd-agency.directus.app/items/dda_agencies?fields=id,title,vacancies.*`)
  vacaturesResponseJSON = await vacaturesResponse.json()

  response.render('vacatures.liquid', { vacatures: vacaturesResponseJSON.data });
})

// Stel het poortnummer in waar Express op moet gaan luisteren
// Lokaal is dit poort 8000; als deze applicatie ergens gehost wordt, waarschijnlijk poort 80
app.set('port', process.env.PORT || 8000)

// Start Express op, gebruik daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  console.log(`Project draait via http://localhost:${app.get('port')}/\n\nSucces deze sprint. En maak mooie dingen! 🙂`)
})