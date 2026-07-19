# Fake Store API E-commerce web app

ITA: Questo è un esercizio fatto come Junior Web engineer: una e-commerce web app in **TypeScript** che mostra i prodotti e le categorie prese da **Fake Store API**, con una visualizzazione del dettaglio prodotto e filtraggio delle categorie sincronizzate all'URL

ENG: This is a Junior Web Eng tech exercise:
a TypeScript e-commerce web app that lists products and categories from
Fake Store API
with a product detail view and category filtering sync to the URL

## Tech stack

- Vite + React + TypeScript
- react-router-dom
- **CSS Modules** + CSS custom properties (design tokens)
- Vitest (**unit test**)
- **Fake Store API** (https://fakestoreapi.com/docs) as backend

## Local setup

ITA: Prerequisiti: Node.js >= 20 (https://nodejs.org). Verifica con `node -v`
ENG: Prerequisites: Node.js >= 20 (https://nodejs.org). Check with `node -v`

```
git clone https://github.com/roxyle/ecommerce-qubica-store.git
cd qubica-store
npm install
npm run dev
```

ITA: L'app è disponibile su http://localhost:5173. Per eseguire gli unit test: `npm test`. L'ho anche deployata su Vercel https://ecommerce-qubica-store-sigma.vercel.app/

ENG: The app runs at http://localhost:5173. To run unit tests: `npm test`. I also deployed it on Vercel https://ecommerce-qubica-store-sigma.vercel.app/

ITA: Se si vuole provare la webapp da dispositivo mobile invece di `npm run dev` si può lanciare il comando  `npm run dev -- --host`.
Nel terminale comparirà un indirizzo tipo `Network: http://192.168.x.x:5173/`, usare questo nel browser del proprio device, facendo attenzione che il telefono deve essere connesso alla stessa rete Wi-Fi del computer, altrimenti non si vedranno a vicenda.
Se non si connette al primo tentativo, potrebbe essere il Firewall di Windows che blocca la connessione in entrata: se compare un popup di Windows che chiede se consentire l'accesso alla rete quando si lancia il comando, confermare.

ENG: If you want to test the web app from a mobile device, instead of running npm run dev you can launch the command npm run dev -- --host.
In the terminal you’ll see an address like `Network: http://192.168.x.x:5173/`, use that URL in your phone’s browser, making sure your phone is connected to the same Wi‑Fi network as your computer, otherwise the two devices won’t be able to communicate.
If it doesn’t connect on the first try, Windows Firewall might be blocking incoming connections. If a Windows popup appears asking whether to allow network access when you run the command, make sure to confirm it.

## AI usage disclosure and how I work

ITA: Questo progetto è stato sviluppato con l'assistenza di strumenti AI. Io utilizzo Claude (e altri strumenti AI) in modo diverso a seconda dell'obiettivo, alcuni esempi possono essere:

- Analisi: eseguo prima io il lavoro (es. analisi, checklist dei requisiti, documentazione, ecc..), poi sottopongo lo stesso materiale a Claude e verifico se il suo output contene specifiche che non ho inserito o che mi sono sfuggite.
- Sviluppo: scrivo io il codice su cui ho già un'idea precisa (logiche di stato, funzioni, useEffect, ...) mentre per alcune parti più dispersive (es. alcune sezioni molto verbose di CSS) delego l'AI per generare una bozza, che poi rileggo, verifico e sistemo prima di accettare.
- Validazione: quando Claude propone qualcosa che non conosco o un'affermazione tecnica specifica, la verifico con una fonte primaria (documentazione ufficiale, forum di sviluppo tipo come stack overflow , ecc..), eseguo sempre verifiche diverse, dagli script di sviluppo (es. npm run dev), provo le build (npm run build) faccio dei test (npm test).
- Others: a volte lo uso come paperella di gomma, tools fondamentale per qualsiasi sviluppatore


Ho inoltre dimestichezza quotidiana con **file di contesto .md**, **schedulazione di task ricorrenti** (es. web scraping automatico giornaliero via connettore Apify) e **prompting**.

ENG:  
This project was developed with the assistance of AI tools. I use Claude (and other AI tools) in different ways depending on the goal, some exemple may be: 

- Analysis: I first do the work myself (e.g., analysis, requirement checklists, documentation, etc.), then I submit the same material to Claude and check whether its output contains specifications I didn’t include or that I may have overlooked.
- Development: I write the code myself when I already have a clear idea of the logic (state management, functions, useEffect, ...). For more repetitive or verbose parts (e.g., certain long CSS sections), I let the AI generate a draft, which I then reread, verify, and refine before accepting.
- Validation: qhen Claude suggests something I’m not familiar with or makes a specific technical claim, I verify it using a primary source (official documentation, developer forums like stack overflow, etc.). I always run multiple checks: development scripts (e.g., npm run dev), build tests (npm run build), and unit tests (npm test).
- Others: sometimes I use it like the yellow rubber duck, developers foundamental tool 

I also have daily experience with context .md files, scheduling recurring tasks (e.g., daily automated web scraping via Apify connector), and prompting.

1. ITA: Ho aperto il PDF, ho letto i requisiti, ho redatto una bozza dei punti chiave
   
ENG: I opened and read the PDF containing the requirements, then I drafted a document outlining the key points.
 
![myAnalysis](docs/images/photo_2026-07-13_20-10-19.jpg)

2. ITA: Ho scaffoldato il progetto con React + Next.js (strumenti che sono abituata ad utilizzare).
   
ENG: I set up a project scaffold using React + Next.js (the tools I usually work with).

3. ITA: Ho chiesto a Claude di analizzare il documento per controllare se avessi dimenticato qualche requisito.
   
ENG: I asked Claude to review the document and check if I had missed anything.

ITA: Col senno di poi, avrei dovuto invertire i passaggi 2 e 3: dopo aver verificato che la checklist di Claude non contenesse requisiti in più rispetto alla mia, Claude mi ha suggerito di usare Vite invece di Next.js dal momento che l'app che andremo a costruire è quasi interamente lato client, finendo comunque per scrivere quasi tutto come Client Component ("use client") perdendo il vantaggio di Next, che è quello di ridurre JS lato client con i Server Components, e finendo anche per rischiare errori di hydration (il server dice una cosa, il browser ne dice un'altra e React non sa quale credere) o di suspense (React sta aspettando qualcosa, ma quel "qualcosa" non arriva nel modo giusto).

ENG: In hindsight, I should have swapped steps 2 and 3: after verifying that Claude checklist did not contain more requirements than mine, Claude advised me to use Vite instead of Next.js since the app I'm building is almost entirely client-side, I would have ended up marking almost everything with "use client", and this would defeat the main purpose of Next.js (which is reducing client-side JS through Server Components) also risking hydration errors (where the server says one thing, the browser says another, and React gets confused) or suspense issues (where React is waiting for something that doesn't arrive properly).

ITA: Normalmente, essendo ancora nella fase iniziale, avrei cancellato tutto e riniziato, ma ho preferito lasciare questo 'errore' per mostrare come mi comporto in queste situazioni.
Ho quindi rimosso folders e files generati da create-next-app@latest (che esegue anche un git init, fa un initial commit e crea un gitignore, che ho tenuto e modificato per adattarsi al nuovo progetto in Vite). Infine ho lanciato il comando npm create vite@latest .

ENG: Normally, being at such an early stage, I would have deleted everything and started fresh. However, I preferred to leave this 'mistake' visible to showcase how I handle these situations. Therefore, I removed the folders and files generated by create-next-app@latest (which also runs a git init, an initial commit and creates a .gitignore, which I kept and modified to fit the new Vite project). Then I ran npm create vite@latest .

ITA: Arrivata alla fine del giorno 2, con la parte di dati/tipi/API completata ma senza ancora nessuna UI visibile, percepivo il progetto come "indietro" nonostante le fondamenta fossero solide. Ho chiesto a Claude di aiutarmi a suddividere il lavoro rimanente in **sprint giornalieri**, agganciati agli Acceptance Criteria, per avere uno stato di avanzamento concreto invece di una sensazione vaga di ritardo.

ENG: By the end of day 2, with the data/types/API layer done but no UI yet visible, I felt like the project was "behind" despite having solid foundations in place. I asked Claude to help me break the remaining work into daily sprints, tied to the Acceptance Criteria, so I'd have a concrete progress marker instead of a vague sense of falling behind.

## Development log

ITA: Per poter scrivere il file types/product.ts mi serve sapere com'è strutturato il **payload Json** che arriverà da FakeStoreApi, vado quindi a vedere la documentazione riportata nel sito e imposto di conseguenza le coppie chiave:valore

ENG: Before writing the types/product.ts file, I need to know the structure of the JSON payload returned by the FakeStoreApi, so I checked the official documentation on their website and set up the key:value pairs accordingly
![esempio di response](docs/images/fakeStoreApiResponse.png)

```
export type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string

}
```

ITA: eseguita una chiamata GET (ho utilizzato **ARC**) per prodotto presente che restituisce risposta **200 ok**, e una chiamata GET per prodotto sicuramente non presente, per verificare il tipo di errore da gestire. Al contrario di quel che pensavo, ovvero che restituisse un errore **404 not found**, l'API restituisce comunque status 200 ok però col **body vuoto**.

ENG: I performed a GET request (using ARC) for an existing product, which returned a 200 OK response, and another GET request for a non-existent product to check how errors are handled. Contrary to what I expected, which was a 404 Not Found error, the API still returns a 200 OK status, but with an empty body.
![prodotto presente](docs/images/ArcTest200ok.png) ![prodotto assente](docs/images/ArcTestKO.png)

---

ITA: Completato lo Sprint 1: routing con react-router-dom, Header con categorie fetchate dinamicamente dall'API, Home con griglia prodotti e filtro per categoria sincronizzato con la query string dell'URL, pagina di dettaglio prodotto con stati distinti di caricamento/errore.

ENG: Completed Sprint 1: routing with react-router-dom, Header with categories fetched dynamically from the API, Home with a product grid and category filter synced to the URL query string, product detail page with distinct loading/error states.

ITA: Nota tecnica interessante: React ha segnalato un warning (`react-hooks/set-state-in-effect`) sul reset manuale dello stato dentro un useEffect al cambio di un parametro. Ho chiesto a Claude di spiegarmelo, e la sua spiegazione rimandava alla documentazione ufficiale React sulla gestione dello stato nei componenti. L'ho verificata leggendo la pagina linkata. La soluzione (rimontare il componente tramite una key legata all'id, invece di resettare lo stato a mano) è quella consigliata dalla documentazione stessa.

ENG: An interesting technical note: React flagged a warning (`react-hooks/set-state-in-effect`) about manually resetting state inside a useEffect when a parameter changes. I asked Claude to explain it, and the explanation pointed to React's own official documentation on state handling, which I verified by reading the linked page myself. The fix (remounting the component via a key tied to the id, instead of manually resetting state) is the one recommended by the documentation itself.

![eslint-set-state-warning](docs/images/eslint-set-state-warning.png)

---

ITA: Costruito il design system su CSS custom properties (variables.css): palette verificata con calcoli di contrasto WCAG AA su entrambi i temi (chiaro/scuro), scala di spaziatura, tipografia e breakpoint documentati come riferimento unico per tutti i componenti. Durante la verifica sono emersi e sono stati corretti due problemi di contrasto reali (bottone in dark mode e outline di focus). Ripulito index.css dal boilerplate di Vite rimasto dallo scaffold, che applicava un tema scuro automatico in conflitto col design system. Stilizzati tutti i componenti con CSS Modules: griglia responsive auto-fill, **skeleton loader** con testo visibile per lo stato di caricamento, header con categorie a scorrimento orizzontale (prima di scegliere il pattern ho confrontato come Amazon, Vinted e Arcaplanet gestiscono la navigazione per categorie su mobile, e tutte convergono su una fila di pill scorrevoli), pagina dettaglio con layout colonna/riga su breakpoint 768px. Aggiunta utility formatPrice basata su Intl.NumberFormat per uniformare i prezzi. Layout verificato su **smartphone** e **tablet fisici** oltre che da **DevTools**.

![esempi nav pills altri ecommerce](docs/images/esempiNavpills.png)

ENG: Built the design system on CSS custom properties (variables.css): palette verified with WCAG AA contrast calculations on both themes (light/dark), spacing scale, typography and breakpoints documented as the single reference for all components. The verification surfaced two real contrast issues (dark mode button and focus outline), both fixed. Cleaned index.css from leftover Vite scaffold boilerplate, which applied an automatic dark theme conflicting with the design system. Styled all components with CSS Modules: responsive auto-fill grid, skeleton loader with visible text for the loading state, header with horizontally scrollable categories (before picking the pattern I compared how Amazon, Vinted and Arcaplanet handle category navigation on mobile, and they all converge on a scrollable pill row, so I adopted the same approach), detail page with column/row layout on the 768px breakpoint. Added a formatPrice utility based on Intl.NumberFormat to keep prices consistent. Layout verified on physical smartphone and tablet as well as DevTools.

![LoadingSkeleton E QueryParam](docs/images/loadingSkeletonEQueryParam.png)

---

ITA: Aggiunti **unit test** con **Vitest** sulla utility **formatPrice** (tre casi: prezzo decimale, intero e zero, incluso il non-breaking space che Intl.NumberFormat usa tra numero e simbolo, scoperto verificando l'output reale prima di scrivere gli attesi). Aggiunto testo visibile "Caricamento in corso" accanto agli skeleton, con aria-busy/aria-live: una scelta nata da un'esigenza personale di chiarezza rispetto alle sole animazioni, che si è rivelata essere una pratica di accessibilità raccomandata. Verificata la **navigazione completa da tastiera** (Tab, Shift+Tab, Invio) con focus sempre visibile; corretto il ritaglio dell'anello di focus dentro il contenitore a scroll delle pill (padding interno + margine negativo di compensazione).

ENG: Added unit tests with Vitest on the formatPrice utility (three cases: decimal price, integer, zero — including the non-breaking space Intl.NumberFormat uses between number and symbol, discovered by checking the real output before writing the expected values). Added a visible "Loading" text next to the skeletons, with aria-busy/aria-live: a choice born from a personal need for clarity over animations alone, which turned out to be a recommended accessibility practice. Verified full keyboard navigation (Tab, Shift+Tab, Enter) with always-visible focus; fixed the focus ring clipping inside the pill scroll container (inner padding + compensating negative margin).

ITA: Ho attivato il **tema dark/light**: l'infrastruttura era già pronta da un precedente sprint (blocco [data-theme="dark"] in variables.css, contrasti già verificati), e infatti il collegamento ha richiesto solo uno state in App, un toggle nell'Header e una riga di useEffect che imposta l'attributo, nessuna modifica ai componenti, che usando i design token hanno reagito da soli.

ENG: I enabled the dark/light theme: the infrastructure was already in place by a previous sprint ([data-theme="dark"] block in variables.css, contrasts already verified), and indeed wiring it up only took a state in App, a toggle in the Header and one useEffect line setting the attribute, zero component changes, as they all react on their own through the design tokens.

ITA: Nota su Git: durante la chiusura di una sessione ho eseguito un amend su un commit già pushato (l'ordine corretto sarebbe stato amend prima, push dopo), creando una divergenza tra history locale e remota. Ho valutato due opzioni: scartare la riscrittura riallineandomi al remoto, o forzare l'aggiornamento del branch, e ho scelto un force push con --force-with-lease, la variante che rifiuta l'operazione se il remoto ha ricevuto push da altri nel frattempo, opzione sicura in questo contesto (branch personale, nessun collaboratore). Lezione fissata: prima di ogni amend, verificare con git status che il commit non sia già stato pushato.

ENG: Git note: during a session wrap-up I amended an already-pushed commit (the correct order would have been amend first, push after), creating a divergence between local and remote history. I weighed two options: discarding the rewrite by resetting to the remote, or force-updating the branch, and chose a force push with --force-with-lease, the variant that refuses the operation if the remote received pushes from others in the meantime, a safe option in this context (personal branch, no collaborators). Lesson learned: before any amend, check with git status that the commit hasn't already been pushed.


## Checklist finale

ITA: Lo schema disegnato a mano a inizio progetto (vedi sopra), rivisitato a consegna con lo stato di ogni voce.
ENG: The hand-drawn outline from day 1 (see above), revisited at delivery with each item's status.

**Requisiti obbligatori / Mandatory:** TypeScript, fakestoreapi.com — done

- [x] **GITHUB**
  - [x] Public
  - [x] Readme
    - [x] Local setup instructions
    - [x] Eventuale uso AI / AI usage disclosure
  - [x] Real workflow simulation
    - [x] Main - dev branches
    - [x] Pull request & merge
- [x] **LAYOUT**
  - [x] Header
    - [x] Nome store
    - [x] Logo store
    - [x] Categories fetchate da API
      - [x] Categorie da navbar (click su cat.)
      - [x] Categorie da query param
      - [x] URL update
  - [x] Main
    - [x] Home
      - [x] Grid of cards (product image, name, price)
      - [x] Onclick -> product detail view (image, name, price, description)
  - [x] Mobile first responsive
  - [x] HTML5 markup
  - [x] CSS variables
  - [x] Keyboard navigation
  - [x] Alt attributes
- [x] Unit test (Vitest)
- [ ] State management *(parziale: stato sincronizzato via URL come single source of truth; nessuno store dedicato)*
  - [x] Loaders e transizioni (skeleton)
  - [x] Errors
  - [x] Light/dark theme
  - [ ] Add2cart counter
  - [ ] Login/logout
     
