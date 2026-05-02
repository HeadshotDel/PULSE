# FieldAid

Mobile-first offline PWA for tourist first aid, local hazards, emergency access, quick translation, shelters, and travel safety notes.

## Current MVP

- phone-style dark UI with bottom navigation: `SOS`, `Hazards`, `First Aid`, `Map`, `Profile`
- large SOS home screen with tappable emergency numbers, nearest GPS help points, country behavior rules, and offline weather anomaly notes
- general emergency translator panel with speech playback and template phrase popups
- Google Maps embed plus external links for hospitals, shelters or safe points, and embassy or consular access points
- First Aid catalog with 27 situations, visible symptom chips, rapid step cards, YouTube search links, and causes/action/overview blocks
- Medical Card in the profile for blood type, allergies, chronic diseases, and medications
- offline local storage for trusted contacts, notes, incident reports, and custom alert zones
- 30 home countries with primary language data
- 30 tourist destinations with local language, emergency seed profile, 8 local hazards, first-aid guides, and map content
- legacy locale entries removed from the app dataset

## Run locally

Use any static server, for example:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000`. From a phone on the same Wi-Fi network, open the computer LAN address, for example `http://192.168.10.217:8000`.

## Share publicly

See `DEPLOY.md` for Netlify Drop, GitHub Pages, and Vercel instructions. Use HTTPS for public sharing so GPS, install-to-home-screen, and offline caching work reliably.

## PWA behavior

- `manifest.webmanifest` enables install-to-home-screen behavior
- `service-worker.js` caches the app shell for offline access
- after major updates, refresh once to let the new cache version replace the previous one

## Important note

This is still a seed offline prototype. Many emergency, hospital, and consular records outside the previously verified core set are marked as `seed travel directory` and should be verified per destination before production release.
