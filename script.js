// Analytics Helper
function trackEvent(name, params = {}) {
  if (typeof gtag === 'function') {
    gtag('event', name, params);
  }
}

// Translations
const TRANSLATIONS = {
  nl: {
    lang_toggle: "NL",
    page_title: "AI zonder gedoe.",
    meta_desc: "AI uitgelegd in simpele mensentaal. Ontdek onze sessies over ChatGPT, creativiteit, prompting en meer. Zonder gedoe en voor iedereen.",
    nav_start: "Start",
    nav_sessions: "Sessies",
    nav_about: "Over ons",
    nav_contact: "Contact",
    btn_book: "Boek een sessie",
    hero_h1_1: "AI",
    hero_h1_2: "zonder",
    hero_h1_3: "gedoe.",
    hero_subtitle: "Sessies over AI voor bedrijven of verenigingen op locatie",
    hero_p1: "AI: er is al ongelooflijk veel over gezegd en geschreven. Vaak opgeklopte lucht en broodjeaapverhalen. En altijd wel iemand met een agenda die een of andere mening of product probeert te verkopen.",
    hero_p2: "Onze missie is om in simpele mensentaal uit te leggen hoe het werkt en wat het wel en niet kan. Zonder gedoe en voor iedereen.",
    hero_btn_sessions: "Bekijk sessies",
    sessions_title: "Onze sessies",
    sessions_intro: "Onze sessies worden gegeven bij jou op locatie voor een breed publiek (zowel voor bedrijven als particulieren). Stel zelf je inhoud samen: kies 1 of meerdere sessies aangeduid als hoofdsessie en vul aan naar keuze met een of meerdere sessies aangeduid als aanvulling. Wil je je team(s) inspireren om met AI van start te gaan, de mogelijkheden verder te verkennen of wil je gewoon een leuke sessie over AI voor je vereniging of event? Er is voor elk wat wils.",
    label_core: "Hoofdsessie",
    label_supplement: "Aanvulling",
    btn_more_info: "Meer info",
    session_0_title: "Hoe werkt AI?",
    session_0_intro: "Heb je je ooit al afgevraagd welke magie er verscholen zit onder grote taalmodellen zoals ChatGPT, Claude of Gemini? Net zoals je geen garagist hoeft te zijn om een auto te besturen, helpt het wel om te weten hoe een koppeling werkt. Dat is bij AI net hetzelfde: als je de basisconcepten begrijpt, zal je merken dat je er veel meer mee kan. In deze sessie nemen we je mee onder de motorkap van AI modellen en leggen we uit hoe ze werken, maar dan simpel en zonder gedoe.",
    session_0_detail: "We doorlopen samen de basisconcepten van AI modellen en geven antwoorden op vragen als: Waarom begrijpt zo'n model me soms wel en soms ook weer helemaal niet? Waarom komt er steeds een ander antwoord uit? In hoeverre denkt zo'n model zoals een mens? <br/><br/>De wonden die je lessen wiskunde en biologie hebben achtergelaten op je ziel? Sorry daar gaan we toch nog eens aan krabben. Maar geen zorgen: we houden het licht en luchtig en zorgen dat iedereen mee kan volgen. Een spelletje 'wie is het?' en een handvol minions helpt ons de magie te doorprikken en je de basis te geven om als een echte AI-fluisteraar aan de slag te gaan.",
    session_1_title: "Inspiratie",
    session_1_intro: "In deze sessie nemen we je mee langs de weg die AI heeft afgelegd, vanwaar we komen en waar we vandaag staan. Een ideale sessie om je team of organisatie warm te maken voor AI en de mogelijkheden ervan. Maar ook om er zelf kritisch over na te denken en er een gefundeerde mening over te vormen.",
    session_1_detail: "We tonen wat toepassingen van wat AI vandaag kan, maar proberen ook al een blik op de toekomst te werpen. Zijn we morgen allemaal werkloos, of zal het zo'n vaart niet lopen? Gaan we een doemscenario tegemoet of staat het walhalla voor de deur? Spoiler alert: het antwoord op deze vragen zal je zelf moeten vormen, maar we geven je alvast de juiste context en informatie om dat te kunnen doen. We hebben het over de exponentiële groei van AI en hoe wij als mens lineair denken. Een ideale start om daarna over je eigen AI strategie beginnen na te denken, of gewoon filosofische discussies te voeren aan de toog of op je volgende familiefeest.",
    session_2_title: "Creatief met AI",
    session_2_intro: "Van afbeeldingen tot muziek, de enige grens is je eigen verbeelding. Hoe komt een AI model tot die afbeelding van een kat met een hoedje op een fiets? Is AI écht creatief? We geven je enkele prompting tips mee en laten zien hoe je van jezelf zo'n perfect studio portret kan maken.",
    session_2_detail: "Ook video's en muziek liggen vandaag de dag binnen ieders handbereik. Beter goed gepikt dan slecht gemaakt: we laten zien hoe je een bepaalde stijl kan overnemen op je eigen creaties. Hoe je met 1 welgemikte prompt een professionele headshot bekomt. Hoe kan je met chirurgische precisie een foto aanpassen? Word jij de volgende Mozart, Quentin Tarantino of Rubens? Dat zal bepaald worden door je eigen creativiteit, maar aan de technologie zal de uitkomst alvast niet liggen.",
    session_3_title: "Knutselen met AI",
    session_3_intro: "De meeste mensen gebruiken slechts een fractie van waar AI toe in staat is. Wist je dat je naast een tekst genereren of samenvatten ook echte websites kan maken? Zelfs zonder ooit een programmeercursus gevolgd te hebben of enige technische achtergrond kan je de meest waanzinnige applicaties bouwen. De enige vereiste is in mensentaal kunnen uitleggen wat je wil (en enkele weetjes, maar die tonen we in deze sessie).",
    session_3_detail: "Vibecoden, je hebt er misschien al van gehoord: zelfs door uitsluitend gebruik te maken van gratis tools kom je al een heel eind en maak je met gemak je eigen applicaties. We geven inspiratie met praktische voorbeelden en tonen stap voor stap hoe je daar aan begint zonder enige voorkennis. Een website om je energieverbruik te optimaliseren, een spelletje over je eigen gezin of team, een simulatietool om een business case te maken, Excel-bestanden vergelijken of een tool om afbeeldingen te verkleinen: je kan het zo gek niet bedenken of je laat het zelf bouwen door AI in enkele minuten. We tonen je de tools (je hoeft niets te installeren), leren je hoe je de juiste vragen stelt en hoe je je resultaat kan gebruiken en delen.",
    session_4_title: "Prompting basics",
    session_4_intro: "Prompting: of hoe je opdrachten geeft aan AI modellen. Eenmaal je dit onder de knie hebt haal je veel meer uit een large language model zoals ChatGPT of Copilot. Helemaal niet moeilijk, je moet het gewoon maar weten. In deze sessie geven we praktische tips om AI te laten doen wat je wil.",
    session_4_detail: "Net zoals we met z'n allen hebben leren lezen, fietsen en googelen; is ook dit een kunde die heel simpel wordt eens je het kan. Eens je de truukjes leert zal je merken dat je resultaten beter worden en dat zo'n taalmodel je plots beter begint te verstaan. We tonen je hoe je AI bij de zaak houdt en hoe je het resultaat helemaal naar je hand zet.",
    session_5_title: "Studeren met AI",
    session_5_intro: "Ben je een ouder die elke avond een of meerdere kinderen probeert te leiden door een berg huis- of studeerwerk? Of ben je misschien zelf student of wil je gewoon een nieuw onderwerp onder knie krijgen? AI is de perfecte partner in crime om te studeren of informatie te verwerken. In deze sessie tonen we praktische voorbeelden van hoe AI je studies makkelijker en aangenamer maakt.",
    session_5_detail: "We tonen stap voor stap hoe je uitsluitend met gratis tools aan de slag kunt gaan en welke ongelofelijke resultaten er mee te halen zijn voor school, werk of hobby. Ondervragen, kwissen opzetten, interactieve demo's, samenvattingen, presentaties, podcasts, infographics,... AI kan het allemaal en nog veel meer. We tonen je hoe je het aanpakt, welke tools er zijn en hoe je de resultaten kan gebruiken en delen. Studeren wordt vanaf nu een pak leuker, efficiënter en effectiever. En dat allemaal zonder gedoe.",
    about_title: "Over ons",
    about_desc: "Nico Van Goethem en Sofie Embrechts Podevyn bundelen hun expertise in innovatie en communicatie om AI toegankelijk te maken voor iedereen. Wij geloven dat technologie het sterkst is als ze de menselijke factor versterkt, niet vervangt.",
    founder_click_bio: "Klik voor bio",
    founder_nico_role: "Spreker",
    founder_nico_name: "Nico Van Goethem",
    founder_sofie_role: "Boekingen",
    founder_sofie_name: "Sofie Embrechts Podevyn",
    bio_nico: '<p class="mb-4">Toen ik 12 was kreeg ik m\'n eerste computer. Met m\'n spaargeld fietste ik naar de boekenwinkel om een boek te kopen om te leren programmeren. Daarnaast had ik ook nog een andere hobby: elk toestel uit elkaar halen om te zien wat erin zat.</p><p class="mb-4">Die passies zijn nooit overgegaan: ik ben industrieel ingenieur elektronica geworden en heb heel m\'n loopbaan gespendeerd in functies waar techniek en \'uitvogelen hoe iets werkt\' belangrijk waren. Van developer naar architect tot verantwoordelijk voor digitale strategie en innovatie bij SD Worx. AI is dus vanzelfsprekend een groot stuk van mijn focus.</p><p class="mb-4">Alle invalshoeken gaande van de technologie en de wiskunde tot de impact op onze ecologie en maatschappij probeer ik te volgen. Aan de rotvaart waarin dit topic evolueert: een serieuze uitdaging.</p><p class="mb-4">Mijn missie met deze sessies is om in simpele mensentaal en met veel voorbeelden, interactieve demo\'s en wat humor (ook dad-jokes, ik probeer te minderen maar het is moeilijk) uit te leggen hoe het werkt en wat je ermee kan doen.</p><p class="mb-4">Ik geef context om zelf je mening te vormen en hopelijk ook geïnspireerd te raken om er iets mee te doen (wat dat \'iets\' dan ook mag zijn). Geen verkoopspraatjes van het zoveelste magische product en geen saaie business klap.</p><p class="mb-4">Weet ik alles ? Absoluut niet, en hoe meer ik me er in verdiep hoe meer er op de te-ontdekken-stapel belandt. Verwacht dus geen zelfverklaarde guru, maar gewoon iemand die probeert te volgen en zijn enthousiasme graag wil delen over dit boeiende topic.</p><p>AI in simpele mensentaal, zonder het gedoe dus...</p>',
    bio_sofie: '<p class="mb-4">De passie en interesse voor wetenschap kwam bij mij in het middelbaar. Chemie bleek mijn natuurlijke habitat en ik koos daarom ook voor de studie industrieel ingenieur met een specialisatie in chemie. Zo kwam ik terecht bij Procter & Gamble waar ik met veel passie werk als onderzoeker in het analytisch labo. Ik gebruik AI op dagelijkse basis in mijn werkomgeving. Het maakt mijn werk als onderzoeker zoveel krachtiger.</p><p class="mb-4">Naast mijn passie voor wetenschap en techniek ben ik ook met veel liefde en plezier mama van onze twee zonen. AI is ook daar mijn beste vriend: van het ondersteunen van onze kinderen in hun schoolwerk, tot de optimalisatie van het energiegebruik van onze huishoudapparaten.</p><p>Wil je graag een sessie inboeken of heb je praktische vragen? <br/>Dan kan je bij mij terecht!</p>',
    cta_title: "Klaar om te beginnen?",
    cta_desc: "Kies voor een losse sessie of een op maat gemaakt traject voor jouw team of organisatie. Geen gedoe, gewoon simpele taal, voor iedereen.",
    cta_btn_message: "Stuur een bericht",
    email_subject_booking: "Aanvraag voor een AI sessie",
    email_subject_message: "Vraag over AI zonder gedoe",
    footer_copyright: "© AI zonder gedoe.",
    footer_privacy: "Privacy Policy",
    footer_terms: "Algemene Voorwaarden",
    tally_src_booking:"https://tally.so/embed/Merg6g?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1",
    tally_src_message:"https://tally.so/embed/9q6aBX?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1",
    tally_height_booking:"713px",
    tally_height_message:"713px",
    success_title: "Bedankt!",
    success_message: "Bedankt voor je bericht, we nemen zo snel mogelijk contact met je op."
  },
  en: {
    lang_toggle: "EN",
    page_title: "AI without the hype.",
    meta_desc: "AI explained in plain language. Discover our sessions on ChatGPT, creativity, prompting, and more. Without the hype and for everyone.",
    nav_start: "Home",
    nav_sessions: "Sessions",
    nav_about: "About Us",
    nav_contact: "Contact",
    btn_book: "Book a session",
    hero_h1_1: "AI",
    hero_h1_2: "without",
    hero_h1_3: "the hype.",
    hero_subtitle: "AI sessions for companies or organisations at your location",
    hero_p1: "AI: a lot has been said and written about it already. Often hyped up air and tall tales. And always someone with an agenda trying to sell some opinion or product.",
    hero_p2: "Our mission is to explain in plain language how it works and what it can and cannot do. Without the hype and for everyone.",
    hero_btn_sessions: "View sessions",
    sessions_title: "Our sessions",
    sessions_intro: "Our sessions are held at your location for a wide audience (both for businesses and individuals). Compose your own content: choose one or more sessions designated as a core session and complement them as you wish with one or more sessions designated as a supplement. Whether you want to inspire your team(s) to get started with AI, explore its possibilities further, or simply want an engaging session about AI for your association or event; there is something for everyone.",
    label_core: "Core Session",
    label_supplement: "Supplement",
    btn_more_info: "More info",
    session_0_title: "How it works, the basics",
    session_0_intro: "Have you ever wondered what magic is hidden under large language models like ChatGPT, Claude or Gemini? Just like you don't have to be a mechanic to drive a car, it helps to know how a clutch works. It's the same with AI: if you understand the basic concepts, you'll find you can do much more with it. In this session, we take a peek under the hood of AI models and explain how they work, but in plain language and without the hype.",
    session_0_detail: "Together we walk through the basic concepts of AI models and provide answers to questions like: Why do these models sometimes understand me and sometimes not at all? Why does it spit out a different answer every time I use it? Do AI models think like humans do? <br/><br/>The scars that your math and biology lessons left on your soul? Sorry, we're going to scratch those again. But don't worry: we keep it light and airy and ensure everyone can follow along. A game of 'Guess Who?' and a handful of minions help us puncture the magic and give you the basics to get started as a true AI whisperer.",
    session_1_title: "Inspiration",
    session_1_intro: "In this session, we take you along the path AI has traveled, where we come from and where we are today. An ideal session to get your team or organization excited about AI and its possibilities. But also to think critically about it yourself and form a well-founded opinion.",
    session_1_detail: "We show some applications of what AI can do today, but also try to cast a glance at the future. Will we all be unemployed tomorrow, or will we be just fine? Are we heading for a doom scenario or is utopia around the corner? Spoiler alert: you'll have to form the answer to these questions yourself, but we'll give you the right context and information to do so. We talk about the exponential growth of AI and how we as humans think linearly. An ideal start to then begin thinking about your own AI strategy, or just to have philosophical discussions at the bar or at your next family dinner.",
    session_2_title: "Creative with AI",
    session_2_intro: "From images to music, the only limit is your own imagination. How does an AI model arrive at that image of a cat with a hat on a bicycle? Is AI truly creative? We'll give you some prompting tips and show you how to make a perfect studio portrait of yourself.",
    session_2_detail: "Videos and music are also within everyone's reach today. Steal with pride: we show you how you can adopt a certain style for your own creations. How to obtain a professional headshot with 1 well-aimed prompt. How can you adjust a photo with surgical precision? Will you be the next Mozart, Quentin Tarantino or Rubens? That will be determined by your own creativity, but the outcome certainly won't depend on the technology.",
    session_3_title: "Tinkering with AI",
    session_3_intro: "Most people only use a fraction of what AI is capable of. Did you know that besides generating or summarizing text, you can also build real websites? Even without ever having taken a programming course or having any technical background, you can build the most amazing applications. The only requirement is being able to explain what you want in human language (and some tips, which we'll show in this session).",
    session_3_detail: "Vibecoding, you might have heard of it: even by exclusively using free tools you can get a long way and easily create your own applications. We provide inspiration with practical examples and show step by step how to start without any prior knowledge. A website to optimize your energy consumption, a game about your own family or team, a simulation tool to make a business case, comparing Excel files or a tool to resize images: you name it and you can have AI build it yourself in a few minutes. We show you the tools (you don't need to install anything), teach you how to ask the right questions and how to use and share your result.",
    session_4_title: "Prompting basics",
    session_4_intro: "Prompting: or how you give commands to AI models. Once you master this, you'll get much more out of a large language model like ChatGPT or Copilot. Not difficult at all, you just need to know it. In this session, we provide practical tips to make AI do what you want.",
    session_4_detail: "Just as we all learned to read, ride a bike, and google; this is also a skill that becomes very simple once you know it. Once you learn the tricks, you will notice that your results improve and that such a language model suddenly starts to understand you better. We show you how to keep AI focused and how to completely bend the result to your will.",
    session_5_title: "Studying with AI",
    session_5_intro: "Are you a parent who tries to guide one or more children through a mountain of homework or study work every evening? Or perhaps you are a student yourself or you just want to master a new subject? AI is the perfect partner in crime for studying or processing information. In this session, we show practical examples of how AI makes your studies easier and more enjoyable.",
    session_5_detail: "We show step by step how you can get started using exclusively free tools and what incredible results can be achieved for school, work, or hobbies. Questioning, setting up quizzes, interactive demos, summaries, presentations, podcasts, infographics,... AI can do it all and much more. We show you how to handle it, which tools are available and how to use and share the results. Studying will from now on be much more fun, efficient and effective. And all that without the hype.",
    about_title: "About Us",
    founder_click_bio: "Click for bio",
    founder_nico_name: "Nico Van Goethem",
    founder_nico_role: "Speaker",
    founder_sofie_name: "Sofie Embrechts Podevyn",
    founder_sofie_role: "Bookings",
    bio_nico: '<p class="mb-4">When I was 12, I got my first computer. With my savings, I drove my bike to the bookstore to buy a book on programming. Besides that, I had another hobby: taking every device apart to see what was inside.</p><p class="mb-4">Those passions never went away: I became an industrial engineer in electronics and spent my entire career in positions where technology and \'figuring out how something works\' were important. From developer to architect to being responsible for digital strategy and innovation at SD Worx. AI is therefore naturally a big part of my focus.</p><p class="mb-4">I try to follow all perspectives, from technology and mathematics to the impact on our ecology and society. At the high speed this topic evolves: a serious challenge.</p><p class="mb-4">My mission with these sessions is to explain in simple human language and with many examples, interactive demos, and some humor (also dad jokes, I\'m trying to cut back but it\'s hard) how it works and what you can do with it.</p><p class="mb-4">I provide context for you to form your own opinion and hopefully also get inspired to do something with it (whatever that \'something\' may be). No sales pitches for the umpteenth magic product and no boring business talk.</p><p class="mb-4">Do I know everything? Absolutely not, and the more I delve into it, the more ends up on the to-be-discovered pile. So don\'t expect a self-proclaimed guru, but just someone who is trying to keep track and wants to share his enthusiasm about this fascinating topic.</p><p>AI in plain language, without the hype...</p>',
    bio_sofie: '<p class="mb-4">The passion and interest in science came to me in secondary school. Chemistry turned out to be my natural habitat, and I therefore chose to study industrial engineering with a specialization in chemistry. That\'s how I ended up at Procter & Gamble, where I work with great passion as a researcher in the analytical lab. I use AI on a daily basis in my work environment. It makes my work as a researcher so much more powerful.</p><p class="mb-4">In addition to my passion for science and technology, I am also the mother of our two sons with much love and pleasure. AI is also my best friend there: from supporting our children in their schoolwork to optimizing the energy use of our household appliances.</p><p>Would you like to book a session or do you have practical questions? <br/>I\'m here to help!</p>',
    cta_title: "Ready to start?",
    cta_desc: "Choose a single session or a tailor-made trajectory for your team or organization. No fuss, just plain language, for everyone.",
    cta_btn_message: "Send a message",
    email_subject_booking: "Inquiry for an AI session",
    email_subject_message: "Question about AI without the hype",
    footer_copyright: "© AI without the hype.",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms and Conditions",
    tally_src_booking:"https://tally.so/embed/b52D4o?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1",
    tally_src_message:"https://tally.so/embed/RGZgvp?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1",
    tally_height_booking:"713px",
    tally_height_message:"713px",
    success_title: "Thank you!",
    success_message: "Thank you for your message, we'll get back to you as soon as possible."
  }
};

let currentLang = localStorage.getItem('lang') || 'nl';

window.toggleLanguage = function() {
  currentLang = currentLang === 'nl' ? 'en' : 'nl';
  localStorage.setItem('lang', currentLang);
  updateLanguage();
  trackEvent('change_language', { language: currentLang });
};

function updateLanguage() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TRANSLATIONS[currentLang][key]) {
      // Use innerHTML for bios/details which contain markup
      if (key.includes('bio') || key.includes('detail') || key.includes('hero_p')) {
        el.innerHTML = TRANSLATIONS[currentLang][key];
      } else {
        el.textContent = TRANSLATIONS[currentLang][key];
      }
    }
  });
  document.querySelectorAll('.lang-label').forEach(el => {
    el.textContent = TRANSLATIONS[currentLang].lang_toggle;
  });
  document.title = TRANSLATIONS[currentLang].page_title;
  
  // Update SEO Meta tags
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', TRANSLATIONS[currentLang].meta_desc);
  document.querySelectorAll('meta[property="og:description"], meta[name="twitter:description"]').forEach(el => el.setAttribute('content', TRANSLATIONS[currentLang].meta_desc));
  document.querySelectorAll('meta[property="og:title"], meta[name="twitter:title"]').forEach(el => el.setAttribute('content', TRANSLATIONS[currentLang].page_title));

  lucide.createIcons();
}

// Initialize Lucide icons
lucide.createIcons();

// Set year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact Logic
window.handleContact = function(type) {
  let tallySrc, title, minHeight;
  if (type === 'message') {
    tallySrc = TRANSLATIONS[currentLang].tally_src_message;
    title = TRANSLATIONS[currentLang].cta_btn_message;
    minHeight = TRANSLATIONS[currentLang].tally_height_message;
  } else if (type === 'booking') {
    tallySrc = TRANSLATIONS[currentLang].tally_src_booking;
    title = TRANSLATIONS[currentLang].btn_book;
    minHeight = TRANSLATIONS[currentLang].tally_height_booking;
  } else {
    console.error('Unknown contact type:', type);
    return;
  }
  trackEvent('contact_initiation', { type: type });
  openTallyModal(tallySrc, title, minHeight);
};

window.openTallyModal = function(tallySrc, title, minHeight = '713px') {
  const modal = document.getElementById('session-modal');
  const modalBody = document.getElementById('modal-content-inner');
  
  modalBody.innerHTML = `
    <div class="flex flex-col h-full bg-white rounded-none md:rounded-[2.5rem] overflow-hidden">
      <!-- Sticky Header -->
      <div class="sticky top-0 bg-white/95 backdrop-blur-md z-30 p-4 md:p-4 md:pl-8 pb-2 border-b border-slate-100/50 flex justify-between items-start gap-4">
        <div class="flex-1 min-w-0">
          <h3 class="text-2xl md:text-3xl font-weight tracking-tight text-slate-900">${title}</h3>
        </div>
        <button onclick="closeSessionModal()" class="md:hidden p-2 -mr-2 text-slate-400 hover:text-slate-600 shrink-0" aria-label="Close">
          <i data-lucide="x" class="w-8 h-8"></i>
        </button>
      </div>
      
      <!-- Tally Embed -->
      <div class="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-12">
        <iframe data-tally-src="${tallySrc}"
                loading="lazy" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0"
                title="${title}" style="min-height: ${minHeight};"></iframe>
      </div>
    </div>
  `;

  document.body.classList.add('modal-open');
  modal.classList.add('active');
  lucide.createIcons();
  if (window.Tally) Tally.loadEmbeds();
};

// Success Screen Logic (called after redirect)
window.showSuccessScreen = function() {
  const title = TRANSLATIONS[currentLang].success_title;
  const message = TRANSLATIONS[currentLang].success_message;
  const modal = document.getElementById('session-modal');
  const modalBody = document.getElementById('modal-content-inner');
  
  modalBody.innerHTML = `
    <div class="flex flex-col h-full bg-white rounded-none md:rounded-[2.5rem] overflow-hidden">
      <!-- Sticky Header -->
      <div class="sticky top-0 bg-white/95 backdrop-blur-md z-30 p-6 md:p-10 pb-4 border-b border-slate-100/50 flex justify-between items-start gap-4">
        <div class="flex-1 min-w-0">
          <h3 class="text-2xl md:text-3xl font-weight tracking-tight text-slate-900">${title}</h3>
        </div>
        <button onclick="closeSessionModal()" class="md:hidden p-2 -mr-2 text-slate-400 hover:text-slate-600 shrink-0" aria-label="Close">
          <i data-lucide="x" class="w-8 h-8"></i>
        </button>
      </div>
      
      <!-- Content Block -->
      <div class="flex-1 flex flex-col items-center justify-center p-8 md:p-14 text-center">
        <div class="mb-8 p-6 bg-primary/10 rounded-full text-primary">
          <i data-lucide="check-circle-2" class="w-16 h-16"></i>
        </div>
        <p class="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-lg mb-12">
          ${message}
        </p>
        <button onclick="closeSessionModal()" class="btn-primary py-4 px-12 text-lg shadow-xl shadow-primary/20">
          OK
        </button>
      </div>
    </div>
  `;

  document.body.classList.add('modal-open');
  modal.classList.add('active');
  lucide.createIcons();
  trackEvent('form_submission_success');
};

function checkUrlParams() {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('submitted') === 'true') {
    showSuccessScreen();
    // Clean up URL without refreshing
    window.history.replaceState({}, document.title, window.location.pathname);
  }
}

// Anti-scrape Footer Email
function initFooterEmail() {
  const container = document.getElementById('footer-email-container');
  if (!container) return;

  const user = 'info';
  const domain = 'aizondergedoe.be';
  const email = user + '@' + domain;
  
  container.innerHTML = `
    <a href="mailto:${email}" class="hover:text-primary transition-colors lowercase font-medium border-b border-transparent hover:border-primary/20 pb-0.5">${email}</a>
  `;
}

// Intro Animation
setTimeout(() => {
  document.getElementById('hero-content')?.classList.remove('opacity-0', 'translate-y-4');
}, 100);

// Modal Logic
window.openSessionModal = function(id) {
  const card = document.getElementById(id);
  const modal = document.getElementById('session-modal');
  const modalBody = document.getElementById('modal-content-inner');
  
  // Clone the header, intro/detail text, and image for the modal
  const header = card.querySelector('.card-header').innerHTML;
  const intro = card.querySelector('.intro-text').innerHTML;
  const detail = card.querySelector('.detail-text').innerHTML;
  const imageSrc = card.querySelector('.card-image').getAttribute('data-detail-image');

  trackEvent('view_session_detail', { session_id: id });
  modalBody.innerHTML = `
    <div class="flex flex-col md:flex-row h-full relative overflow-hidden bg-white rounded-none md:rounded-[2.5rem] min-h-0">
      <!-- Left Column: Text Block (Scrollable) -->
      <div class="flex-1 relative flex flex-col min-w-0 min-h-0">
        <!-- Mobile Background Visual: Blurred image behind text (only for mobile) -->
        <div class="md:hidden absolute inset-0 -z-10 pointer-events-none overflow-hidden">
          <img src="${imageSrc}" class="modal-load-target w-full h-full object-cover scale-150 blur-3xl opacity-30" />
          <div class="absolute inset-0 bg-white/80"></div>
        </div>

        <div id="modal-scroll-area" class="flex-1 overflow-y-auto custom-scrollbar relative">
          <div class="flex flex-col min-h-full">
            <!-- Sticky Header -->
            <div class="sticky top-0 bg-white/95 backdrop-blur-md z-30 p-6 md:p-10 pb-4 border-b border-slate-100/50 flex justify-between items-start gap-4">
              <div class="flex-1 min-w-0">${header}</div>
              <button onclick="closeSessionModal()" class="md:hidden p-2 -mr-2 text-slate-400 hover:text-slate-600 shrink-0" aria-label="Close">
                <i data-lucide="x" class="w-8 h-8"></i>
              </button>
            </div>
            
            <!-- Content Block -->
            <div class="px-8 md:px-14 pt-8 pb-24 text-slate-600 text-lg leading-relaxed relative z-10">
              <div class="font-bold text-slate-900 mb-6 text-xl leading-snug">${intro}</div>
              <div>${detail}</div>
            </div>
          </div>
        </div>

        <!-- Scroll Indicators -->
        <div id="scroll-fade" class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none z-30 transition-opacity duration-300 opacity-0"></div>
        <div id="scroll-arrow" class="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary animate-bounce pointer-events-none opacity-0 transition-opacity duration-300 z-40">
          <i data-lucide="chevron-down" class="w-10 h-10"></i>
        </div>
      </div>

      <!-- Right Column (Desktop): Fixed Image -->
      <div class="hidden md:block w-1/3 flex-none relative overflow-hidden border-l border-slate-100">
        <!-- Subtle fade on the left side of the image -->
        <div class="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
        <img src="${imageSrc}" class="modal-load-target w-full h-full object-cover progressive-img" loading="lazy" decoding="async" />
      </div>
    </div>
  `;

  document.body.classList.add('modal-open');
  modal.classList.add('active');
  lucide.createIcons();

  // Modal Progressive Loading: Load HD version in background and swap
  const hdSrc = imageSrc.replace('small-', '');
  const temp = new Image();
  temp.src = hdSrc;
  temp.onload = () => {
    modal.querySelectorAll('.modal-load-target').forEach(img => {
      img.src = hdSrc;
      img.classList.add('hd-loaded');
    });
  };

  // Scroll Indicator Logic
  const scrollArea = document.getElementById('modal-scroll-area');
  const arrow = document.getElementById('scroll-arrow');
  const fade = document.getElementById('scroll-fade');

  if (scrollArea) {
    const updateArrowVisibility = () => {
      const isScrollable = scrollArea.scrollHeight > scrollArea.clientHeight + 10;
      const isAtBottom = scrollArea.scrollHeight - scrollArea.scrollTop <= scrollArea.clientHeight + 40;
      
      const showIndicators = isScrollable && !isAtBottom;

      if (arrow) {
        if (showIndicators) arrow.classList.remove('opacity-0');
        else arrow.classList.add('opacity-0');
      }
      
      if (fade) {
        if (showIndicators) fade.classList.remove('opacity-0');
        else fade.classList.add('opacity-0');
      }
    };

    scrollArea.addEventListener('scroll', updateArrowVisibility);
    // Execute after a small delay to ensure rendering is complete
    setTimeout(updateArrowVisibility, 150);
  }
};

// Founder Modal Logic
window.openFounderModal = function(id) {
  const modal = document.getElementById('session-modal'); // Reuse the same modal structure
  const modalBody = document.getElementById('modal-content-inner');

  let founderName, founderRole, founderBio, imageSrc, hdImageSrc;

  // Get founder data based on ID and current language
  if (id === 'nico') {
    founderName = TRANSLATIONS[currentLang].founder_nico_name;
    founderRole = TRANSLATIONS[currentLang].founder_nico_role;
    founderBio = TRANSLATIONS[currentLang].bio_nico;
    imageSrc = 'assets/small-nico-donker.png'; // Use small image for initial load
    hdImageSrc = 'assets/nico-donker.png'; // HD image for progressive load
  } else if (id === 'sofie') {
    founderName = TRANSLATIONS[currentLang].founder_sofie_name;
    founderRole = TRANSLATIONS[currentLang].founder_sofie_role;
    founderBio = TRANSLATIONS[currentLang].bio_sofie;
    imageSrc = 'assets/small-sofie-donker2.png'; // Use small image for initial load
    hdImageSrc = 'assets/sofie-donker2.png'; // HD image for progressive load
  } else {
    console.error('Unknown founder ID:', id);
    return;
  }

  trackEvent('view_founder_bio', { founder_id: id });
  modalBody.innerHTML = `
    <div class="flex flex-col md:flex-row h-full relative overflow-hidden bg-white rounded-none md:rounded-[2.5rem] min-h-0">
      <!-- Left Column: Text Block (Scrollable) -->
      <div class="flex-1 relative flex flex-col min-w-0 min-h-0">
        <!-- Mobile Background Visual: Blurred image behind text (only for mobile) -->
        <div class="md:hidden absolute inset-0 -z-10 pointer-events-none overflow-hidden">
          <img src="${imageSrc}" class="modal-load-target w-full h-full object-cover scale-150 blur-3xl opacity-30" />
          <div class="absolute inset-0 bg-white/80"></div>
        </div>

        <div id="modal-scroll-area" class="flex-1 overflow-y-auto custom-scrollbar relative">
          <div class="flex flex-col min-h-full">
            <!-- Sticky Header -->
            <div class="sticky top-0 bg-white/95 backdrop-blur-md z-30 p-6 md:p-10 pb-4 border-b border-slate-100/50 flex justify-between items-start gap-4">
              <div class="flex items-center gap-4 min-w-0">
                <div class="w-14 h-14 rounded-xl overflow-hidden shadow-md"><img src="${imageSrc}" class="modal-load-target w-full h-full object-cover" loading="lazy" /></div>
                <div class="min-w-0">
                  <h4 class="text-lg font-bold leading-tight truncate">${founderName}</h4>
                  <p class="text-primary font-bold text-[9px] uppercase">${founderRole}</p>
                </div>
              </div>
              <button onclick="closeSessionModal()" class="md:hidden p-2 -mr-2 text-slate-400 hover:text-slate-600 shrink-0" aria-label="Close">
                <i data-lucide="x" class="w-8 h-8"></i>
              </button>
            </div>
            
            <!-- Content Block -->
            <div class="px-8 md:px-14 pt-8 pb-24 text-slate-600 text-lg leading-relaxed relative z-10">
              <div>${founderBio}</div>
            </div>
          </div>
        </div>

        <!-- Scroll Indicators -->
        <div id="scroll-fade" class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none z-30 transition-opacity duration-300 opacity-0"></div>
        <div id="scroll-arrow" class="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary animate-bounce pointer-events-none opacity-0 transition-opacity duration-300 z-40">
          <i data-lucide="chevron-down" class="w-10 h-10"></i>
        </div>
      </div>

      <!-- Right Column (Desktop): Fixed Image -->
      <div class="hidden md:block w-1/3 flex-none relative overflow-hidden border-l border-slate-100">
        <!-- Subtle fade on the left side of the image -->
        <div class="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
        <img src="${imageSrc}" class="modal-load-target w-full h-full object-cover progressive-img" loading="lazy" decoding="async" />
      </div>
    </div>
  `;

  document.body.classList.add('modal-open');
  modal.classList.add('active');
  lucide.createIcons();

  // Modal Progressive Loading: Load HD version in background and swap
  const temp = new Image();
  temp.src = hdImageSrc;
  temp.onload = () => {
    modal.querySelectorAll('.modal-load-target').forEach(img => {
      img.src = hdImageSrc;
      img.classList.add('hd-loaded');
    });
  };

  // Scroll Indicator Logic
  const scrollArea = document.getElementById('modal-scroll-area');
  const arrow = document.getElementById('scroll-arrow');
  const fade = document.getElementById('scroll-fade');

  if (scrollArea) {
    const updateArrowVisibility = () => {
      const isScrollable = scrollArea.scrollHeight > scrollArea.clientHeight + 10;
      const isAtBottom = scrollArea.scrollHeight - scrollArea.scrollTop <= scrollArea.clientHeight + 40;
      
      const showIndicators = isScrollable && !isAtBottom;

      if (arrow) {
        if (showIndicators) arrow.classList.remove('opacity-0');
        else arrow.classList.add('opacity-0');
      }
      
      if (fade) {
        if (showIndicators) fade.classList.remove('opacity-0');
        else fade.classList.add('opacity-0');
      }
    };

    scrollArea.addEventListener('scroll', updateArrowVisibility);
    // Execute after a small delay to ensure rendering is complete
    setTimeout(updateArrowVisibility, 150);
  }
};

window.closeSessionModal = function() {
  const modal = document.getElementById('session-modal');
  modal.classList.remove('active');
  document.body.classList.remove('modal-open');
};

// Mobile Menu Logic
window.toggleMobileMenu = function() {
  const menu = document.getElementById('mobile-menu');
  if (!menu) return;
  
  const isOpen = !menu.classList.contains('translate-x-full');
  if (isOpen) {
    menu.classList.add('translate-x-full');
    document.body.classList.remove('overflow-hidden');
  } else {
    menu.classList.remove('translate-x-full');
    document.body.classList.add('overflow-hidden');
    // When opening the menu, update the active state
    updateMobileMenuLinksOnOpen();
  }
};

// Close mobile menu when a link is clicked
document.querySelectorAll('#mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    const menu = document.getElementById('mobile-menu');
    menu.classList.add('translate-x-full');
    document.body.classList.remove('overflow-hidden');
  });
});

// Smooth Scroll and Scroll Spy Logic
const navLinks = document.querySelectorAll('nav .hidden.md\\:flex a[href^="#"]');
const mobileNavLinks = document.querySelectorAll('#mobile-menu nav a[href^="#"]');
const sections = document.querySelectorAll('section[id]');

const activeClasses = ['text-primary', 'border-primary/40'];
const inactiveClasses = ['text-slate-500', 'border-transparent'];

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    // If the target is the start/home section, scroll to the absolute top of the page
    if (targetId === '#start') {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Intersection Observer for Scroll Spy
const observerOptions = {
  root: null,
  rootMargin: '-20% 0px -70% 0px',
  threshold: 0
};

const observerCallback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        const isActive = link.getAttribute('href') === `#${id}`;
        link.classList.toggle('text-primary', isActive);
        link.classList.toggle('border-primary/40', isActive);
        link.classList.toggle('text-slate-500', !isActive);
        link.classList.toggle('border-transparent', !isActive);
      });

  // Update mobile nav links if menu is open
  const mobileMenu = document.getElementById('mobile-menu');
  const isMobileMenuOpen = mobileMenu && !mobileMenu.classList.contains('translate-x-full');
  if (isMobileMenuOpen) {
    mobileNavLinks.forEach(link => {
      const isActive = link.getAttribute('href') === `#${id}`;
      link.classList.toggle('text-slate-400', isActive);
      link.classList.toggle('pointer-events-none', isActive);
      link.classList.toggle('text-slate-900', !isActive);
      link.classList.toggle('pointer-events-auto', !isActive);
    });
  }
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
sections.forEach(section => observer.observe(section));

// Hero Network Background Logic
function initHeroNetwork() {
  const canvas = document.getElementById('hero-network-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const config = {
    hue: 260,
    saturation: 23,
    nodeAlpha: 0.6,
    connAlpha: 0.73,
    count: 127,
    speed: 0.3,
    dist: 382,
    pulseSpeed: 0.015,
    sigFreq: 0.8,
    sigSpeed: 0.038,
    mouseRadius: 180,
    mouseRepel: 0.04,
    blurLeft: 9,
    blurRight: 0
  };

  window.toggleNetworkSettings = function() {
    const panel = document.getElementById('network-settings-panel');
    if (!panel) return;
    
    const isHidden = panel.classList.contains('hidden');
    if (isHidden) {
      panel.classList.remove('hidden');
      setTimeout(() => {
        panel.classList.remove('translate-y-10', 'opacity-0', 'pointer-events-none');
      }, 10);
      lucide.createIcons();
    } else {
      panel.classList.add('translate-y-10', 'opacity-0', 'pointer-events-none');
      setTimeout(() => panel.classList.add('hidden'), 500);
    }
  };

  window.updateNetworkConfig = function(key, val) {
    config[key] = parseFloat(val);
    const label = document.getElementById(`val-${key}`);
    if (label) label.textContent = val;
    if (key === 'count') resize();
    if (key.includes('blur')) applyStyles();
  };

  const applyStyles = () => {
    const base = Math.min(config.blurLeft, config.blurRight);
    const extra = Math.abs(config.blurLeft - config.blurRight);
    
    // Base blur applied to the whole canvas
    canvas.style.filter = `blur(${base}px)`;
    
    const overlay = document.getElementById('hero-blur-overlay');
    if (overlay) {
      // Extra blur applied via backdrop-filter with a gradient mask
      overlay.style.backdropFilter = `blur(${extra}px)`;
      overlay.style.webkitBackdropFilter = `blur(${extra}px)`;
      
      const maskDir = config.blurLeft > config.blurRight ? 'to right' : 'to left';
      const mask = `linear-gradient(${maskDir}, black, transparent)`;
      overlay.style.maskImage = mask;
      overlay.style.webkitMaskImage = mask;
    }
  };

  let nodes = [];
  let signals = [];
  let width, height;
  let isAnimate = true;
  const mouse = { x: null, y: null };

  window.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  class Node {
    constructor() {
      this.init();
    }
    init() {
      this.baseX = Math.random() * window.innerWidth;
      this.baseY = Math.random() * window.innerHeight;
      this.x = this.baseX;
      this.y = this.baseY;
      this.vx = (Math.random() - 0.5);
      this.vy = (Math.random() - 0.5);
      this.radius = Math.random() * 1.5 + 1.5;
      this.pulse = Math.random() * Math.PI * 2;
      this.brightness = 0;
      this.neighbors = [];
      this.offsetX = 0;
      this.offsetY = 0;
    }
    update() {
      this.baseX += this.vx * config.speed;
      this.baseY += this.vy * config.speed;
      if (this.baseX < -50) this.baseX = width + 50;
      if (this.baseX > width + 50) this.baseX = -50;
      if (this.baseY < -50) this.baseY = height + 50;
      if (this.baseY > height + 50) this.baseY = -50;

      if (mouse.x !== null) {
        const dx = mouse.x - this.baseX;
        const dy = mouse.y - this.baseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < config.mouseRadius) {
          const force = (config.mouseRadius - distance) / config.mouseRadius;
          const angle = Math.atan2(dy, dx);
          this.offsetX = -Math.cos(angle) * force * 50 * config.mouseRepel;
          this.offsetY = -Math.sin(angle) * force * 50 * config.mouseRepel;
        } else {
          this.offsetX *= 0.92;
          this.offsetY *= 0.92;
        }
      }
      this.x = this.baseX + this.offsetX;
      this.y = this.baseY + this.offsetY;
      this.pulse += config.pulseSpeed;
      this.brightness = (Math.sin(this.pulse) + 1) / 2;

      if (Math.random() < config.sigFreq * 0.02 && this.neighbors.length > 0) {
        const target = this.neighbors[Math.floor(Math.random() * this.neighbors.length)];
        signals.push(new Signal(this, target));
      }
    }
    draw() {
      const alpha = (0.15 + (this.brightness * 0.45)) * config.nodeAlpha;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius + (this.brightness * 1.2), 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${config.hue}, ${config.saturation}%, 50%, ${alpha})`;
      ctx.fill();
    }
  }

  class Signal {
    constructor(startNode, endNode) {
      this.start = startNode;
      this.end = endNode;
      this.progress = 0;
    }
    update() {
      this.progress += config.sigSpeed;
      return this.progress >= 1;
    }
    draw() {
      const x = this.start.x + (this.end.x - this.start.x) * this.progress;
      const y = this.start.y + (this.end.y - this.start.y) * this.progress;
      const alpha = config.nodeAlpha;
      ctx.beginPath();
      ctx.arc(x, y, 2, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${config.hue}, ${config.saturation}%, 90%, ${alpha})`;
      ctx.fill();
    }
  }

  function resize() {
    const parent = canvas.parentElement;
    const newWidth = parent.offsetWidth;
    const newHeight = parent.offsetHeight;

    if (newWidth === width && newHeight === height && nodes.length === config.count) return;

    // Calculate scale ratios to keep nodes in the same relative position
    const ratioX = width ? newWidth / width : 1;
    const ratioY = height ? newHeight / height : 1;

    width = newWidth;
    height = newHeight;
    canvas.width = width;
    canvas.height = height;

    nodes.forEach(node => {
      node.baseX *= ratioX;
      node.baseY *= ratioY;
    });

    if (nodes.length < config.count) {
      for (let i = nodes.length; i < config.count; i++) nodes.push(new Node());
    } else if (nodes.length > config.count) {
      nodes = nodes.slice(0, config.count);
    }
  }

  function animate() {
    if (!isAnimate) return;
    ctx.clearRect(0, 0, width, height);
    
    // Connections
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].neighbors = [];
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const d2 = dx * dx + dy * dy;
        if (d2 < config.dist * config.dist) {
          nodes[i].neighbors.push(nodes[j]);
          const d = Math.sqrt(d2);
          const opacity = (1 - (d / config.dist)) * config.connAlpha;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = `hsla(${config.hue}, ${config.saturation}%, 70%, ${opacity * 0.3})`;
          ctx.lineWidth = opacity;
          ctx.stroke();
        }
      }
    }

    signals = signals.filter(sig => {
      const finished = sig.update();
      if (!finished) sig.draw();
      return !finished;
    });
    nodes.forEach(n => { n.update(); n.draw(); });
    requestAnimationFrame(animate);
  }

  // Pause animation when not visible to save resources
  const visibilityObserver = new IntersectionObserver((entries) => {
    const wasVisible = isAnimate;
    isAnimate = entries[0].isIntersecting;
    if (isAnimate && !wasVisible) {
      animate(); // Restart animation loop if it was paused
    }
  }, { threshold: 0.05 });

  visibilityObserver.observe(canvas);

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 100);
  });
  resize();
  applyStyles();
  animate();
}

// Initial Render
updateLanguage();
initHeroNetwork();
initFooterEmail();
checkUrlParams();

// Progressive Image Loading System for main page
const progressiveObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      const currentSrc = img.getAttribute('src');
      if (currentSrc && currentSrc.includes('small-')) {
        const hdSrc = currentSrc.replace('small-', '');
        const temp = new Image();
        temp.src = hdSrc;
        temp.onload = () => {
          img.src = hdSrc;
          img.classList.add('hd-loaded');
        };
      }
      progressiveObserver.unobserve(img);
    }
  });
}, { rootMargin: '50px' });

document.querySelectorAll('img[src*="small-"]').forEach(img => {
  img.classList.add('progressive-img');
  progressiveObserver.observe(img);
});