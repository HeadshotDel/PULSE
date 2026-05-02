# Deploy and Share FieldAid

This project is a static PWA. There is no build step: publish the files in this folder as-is.

## Quick Local Share

Use this only for testing with people on the same Wi-Fi network.

```powershell
python -m http.server 8000 --bind 0.0.0.0
```

Open the app on this computer:

```text
http://localhost:8000
```

Open it on a phone in the same Wi-Fi network:

```text
http://192.168.10.217:8000
```

Important: mobile GPS, install-to-home-screen, and the service worker work best on HTTPS. Local HTTP is good for visual testing, but public sharing should use HTTPS.

## Easiest Public Option: Netlify Drop

1. Open `https://app.netlify.com/drop`.
2. Drag this whole project folder into the page.
3. Netlify gives you a public HTTPS link.
4. Open the link on a phone and choose `Add to Home Screen`.

This is the fastest way to share a static prototype.

## GitHub Pages

1. Create a new GitHub repository.
2. Upload these files to the repository root: `index.html`, `styles.css`, `app.js`, `data.js`, `service-worker.js`, `manifest.webmanifest`, `assets/`, `README.md`.
3. In GitHub, open `Settings` -> `Pages`.
4. Set source to `Deploy from a branch`.
5. Choose branch `main` and folder `/root`.
6. Wait for GitHub to publish the URL.

The final URL usually looks like:

```text
https://your-user.github.io/your-repo/
```

## Vercel Static Deploy

1. Create a Vercel account.
2. Import the GitHub repository.
3. Keep framework preset as `Other`.
4. Leave build command empty.
5. Leave output directory empty or set it to `.`.
6. Deploy.

Vercel will give an HTTPS URL and optional custom domain support.

## Before Sharing Publicly

- Verify local emergency numbers, hospitals, shelters, and consular records for every destination you publish.
- Keep `service-worker.js` cache name updated after major changes so phones receive the newest version.
- Use HTTPS for geolocation, PWA install, and offline cache reliability.
- Medical Card data stays on the user's device in `localStorage`; it is not uploaded anywhere by this prototype.
- For production Google Maps, consider adding a proper Google Maps Platform setup and verified place IDs.

