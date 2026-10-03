# HabityFit Web

Web dashboard for **HabityFit**, an offline-first strength training platform.
Consumes the [HabityFit API](https://github.com/BudzowskiPiotrek/habityfit-api-dotnet) to let users review their training data from the browser.

> 🚧 Early development. No stable release yet.

![Next.js](https://img.shields.io/badge/Next.js-black?style=flat-square&logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)

---

## Goals

- Companion to the Android app: view routines, sessions and progress on a larger screen
- Reuse the existing REST API and JWT authentication
- [Admin tools: manage exercise catalog / muscle groups]

## Planned Features

- [ ] Login (JWT)
- [ ] Routines list and detail
- [ ] Workout history
- [ ] Progress charts (1RM, volume, max weight)
- [ ] Body measurements
- [ ] [Landing page / privacy policy / terms]

## Tech Stack

Next.js • TypeScript • [Tailwind CSS] • [chart library]

## Getting Started

```bash
npm install
cp .env.example .env.local   # set NEXT_PUBLIC_API_URL
npm run dev
```

Open http://localhost:3000

## Related Repositories

| Repo | Visibility |
|---|---|
| habityfit-api-dotnet | Public |
| habityfit-android-compose | Private |