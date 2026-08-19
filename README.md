# Andreu Beltran — Portfolio + mini CRM

Web personal orientada a dos objectius: captar oportunitats laborals de desenvolupament i captar empreses que necessitin automatització, aplicacions web o software a mida.

## Stack

- Next.js 16.3 / App Router
- TypeScript
- React 19
- Neon PostgreSQL
- Route Handlers com a backend
- CSS propi, sense framework UI

## Funcionalitats

- Home comercial i responsive
- Projectes i pàgines de cas
- Serveis
- Formulari de contacte amb captació UTM/referrer
- Consentiment de privacitat
- Honeypot antispam bàsic
- Persistència de leads a PostgreSQL
- Login privat d'administrador
- Mini CRM amb estadístiques, llistat, detall i canvi d'estat
- Sessions signades HMAC en cookie HttpOnly

## 1. Instal·lació

```bash
npm install
```

## 2. Variables d'entorn

Copia `.env.example` a `.env.local` i completa els valors:

```bash
cp .env.example .env.local
```

En Windows PowerShell:

```powershell
Copy-Item .env.example .env.local
```

Genera un secret llarg per `ADMIN_SESSION_SECRET`.

## 3. Base de dades Neon

Crea un projecte PostgreSQL a Neon i copia la cadena de connexió pooled a `DATABASE_URL`.

Executa el contingut de:

```text
database/schema.sql
```

al SQL Editor de Neon.

## 4. Desenvolupament

```bash
npm run dev
```

Obre `http://localhost:3000`.

Zona privada:

```text
http://localhost:3000/admin/login
```

## 5. Producció

Puja el repositori a GitHub, importa'l a Vercel i configura les mateixes variables d'entorn al projecte de Vercel.

## Abans de publicar

1. Substitueix email, LinkedIn i GitHub a `.env.local` i/o components si vols mostrar-los.
2. Revisa el contingut dels projectes i afegeix URLs públiques.
3. Substitueix la plantilla de `/privacitat` per un text legal definitiu adaptat a la teva activitat.
4. Afegeix domini propi.
5. Opcional: captcha/rate limiting si reps spam.
6. Opcional: notificació per email quan entra un nou lead.

## Estructura principal

```text
src/
├── app/
│   ├── api/leads
│   ├── api/admin
│   ├── admin
│   ├── contacte
│   ├── projectes
│   ├── serveis
│   └── privacitat
├── components/
└── lib/
```
