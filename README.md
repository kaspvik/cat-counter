# Cat Counter – Enhets- och Integrationstestning i React

Detta projekt är en liten webbapplikation byggd i React + Vite där syftet är att öva på enhetstester och integrationstester av komponenter.

Applikationen räknar antal katter som användaren hittar och består av flera återanvändbara komponenter.

## Installation

Kör `npm install` för att installera alla paket.

## Utveckling

Kör `npm run dev` för att starta utvecklingsservern.

## Testning

Kör `npm test` för att köra testerna. Kan köras utan att utvecklingsservern är igång.

## Coverage

Kör `npm run coverage` för att se hur stor del av kodbasen som testerna täcker.

Det genereras då en mapp coverage
med en HTML-rapport.
Öppna index.html med Live Server eller i en webbläsare för detaljerad översikt.

# Projektbeskrivning

Cat Counter är en enkel applikation där du kan:

- Lägga till katter (Add Cat)

- Ta bort katter (Remove Cat)

- Nollställa räknaren (Reset)

Antalet katter visas dynamiskt i gränssnittet. När inga katter finns är Remove Cat-knappen inaktiverad.

# Komponenter

## CatCounter

CatCounter fungerar som kontrollpanelen för hela katt-logiken.
CatCounter har tre knappar och en text som visar antalet katter:

- “Add Cat” lägger till en katt.
- “Remove Cat” tar bort en katt, men knappen blir automatiskt avstängd när antalet är noll.
- “Reset” nollställer alltid räknaren.

## CatGallery

CatGallery bestämmer hur många kattbilder som ska visas. Bilderna hämtas och placeras ut med hjälp av koordinater från CAT_LAYOUT, så att varje katt hamnar på en specifik plats. Om antalet katter blir elva eller fler visas ett överlastningsmeddelande med texten “Cat Overload!”.

# Tester

## Enhetstester:

- Att rätt antal katter renderas baserat på count.
- Att antalet uppdateras korrekt.
- Att “Cat Overload!” visas när count är 11 eller mer.
- Att onAdd anropas när man klickar på “Add Cat”.
- Att texten visar rätt räknare.
- Att onRemove anropas när man klickar på “Remove Cat”.
- Att Remove-knappen är disabled vid 0 och enabled vid högre värden.

## Integrationstest:

- Startläget: både räknaren och galleriet visar 0.
- Add: när jag klickar på “Add Cat” ökar räknaren och CatGallery visar lika många katter.
- Remove & Reset: räknaren kan inte gå under 0 och reset nollställer båda delarna.

# Teknologier

React + Vite – ramverk och byggverktyg

TypeScript – typsäkerhet

Vitest – testmiljö

React Testing Library – testning av UI-komponenter
