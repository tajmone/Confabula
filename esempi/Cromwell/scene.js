// Vocabolario ed espressioni equivalenti
function vocabolario() {
	predicati("osservo|esamino|entro|esco|leggo|inventario|infilo|introduco|prendo|guardo|apro|chiudo|bevo|strappo");
	Parole.eq = [
		["ovest", "o"], ["nord", "n"], ["est", "e"], ["sud", "s"],
		["", "'"], ["", "il", "lo", "la", "i", "gli", "le", "l", "gl"], ["", "un", "uno", "una"],
		["", "di", "del", "dello", "della", "dei", "degli", "delle", "dell", "d"],
		["", "a", "al", "allo", "alla", "ai", "agli", "alle", "all"],
		["", "da", "dal", "dallo", "dalla", "dai", "dagli", "dalle", "dall"],
		["", "in", "nel", "nello", "nella", "nei", "negli", "nelle", "nell"],
		["", "su", "sul", "sullo", "sulla", "sui", "sugli", "sulle", "sull"],
		["inventario", "i"],
		["", "esamino", "esamina"], ["entro", "entra"], ["esco", "esci"], ["leggo", "leggi"], ["infilo", "infila", "introduco", "introduci"], ["prendo", "prendi"], ["guardo", "guarda"], ["apro", "apri"], ["chiudo", "chiudi"], ["bevo", "bevi"], ["strappo", "strappi"],
		["chiave", "chiavi"], ["rovo", "rovi"], ["scodella", "ciotola"], ["ampolla", "bottiglietta"], ["pugnale", "coltello"], ["ramo", "rametto", "ramoscello", "rami", "rametti", "ramoscelli"], ["fusti", "alberi"], ["tombe", "tumuli"], ["tomba", "lapide"], ["bocca", "fauci"]
	]
}

// Comandi validi in tutte le scene
function baseScene() {
	titolo("Cromwell");
	coloreSfondo("#202020");
	coloreTesto("#B5A594", "#666");
	contenitore("i", "il pugnale", "mio");
	rispondi("inventario", "Hai con te: @i@.");
	uscita("guardo|g", -1, 0);
	rispondi("aiuto", "Scrivi 'istruzioni' per leggere le istruzioni e 'vocabolario' o 'v' per leggere i predicati con cui interagire con gli oggetti.");
	rispondi("nord|sud|ovest|est|giú|su", "Non è possibile procedere in quella direzione.");
	rispondi("istruzioni", "Scrivi in prima persona o usa l'imperativo. Puoi omettere gli articoli. Scrivi 'vocabolario' o 'v' per leggere i predicati disponibili. Il predicato 'esamino' è l'unico che può essere omesso. Raggiungi un luogo già visitato scrivendo 'direzione' o 'd' e 'nome luogo'. I luoghi raggiungibili sono consultabili scrivendo 'direzioni' o 'd'. Diversi luoghi hanno comportamenti speciali. Se non ci sono uscite visibili è vietato usare le direzioni. Rileggi una scena scrivendo 'guardo' o 'g'. Scrivi 'inventario' o 'i' per consultarlo. Scrivi 'istruzioni' se vuoi rileggerle ancora.");
	rispondi("esamino il pugnale", "È un affilato coltello da caccia, lo hai portato con te pensando sarebbe stato utile.");
	_se("il pugnale@i");
	rispondi("esamino il bastone", "È un bastone di prestigio con intarsi metallici che formano rune, forse apparteneva al cadavere da cui hai recuperato la chiave.");
	_se("il bastone@i");
	rispondi("leggo le rune sul bastone|esamino le rune sul bastone", "Non comprendi le rune...");
	_se("il bastone@i");
	rispondi("esamino l'ampolla", "L'ampolla di vetro, ricoperta di polvere, risulta essere ben chiusa da un tappo di sughero. All'interno vi è uno strano liquido di colore azzurro.");
	_se("l'ampolla@i", "!ampolla bevuta");
	rispondi("esamino l'ampolla", "L'ampolla di vetro, ben richiusa con il suo tappo di sughero, è ora vuota.");
	_se("l'ampolla@i", "ampolla bevuta");
	rispondi("esamino il tappo|esamino il tappo di sughero", "Il tappo sigilla perfettamente l'ampolla.");
	_se("l'ampolla@i");
	rispondi("apro l'ampolla|apro il tappo|apro il tappo di sughero", "Togli il tappo dell'ampolla. Da questa fuoriescono dei vapori azzurrognoli e un tanfo pestilenziale pervade l'aria.");
	_se("l'ampolla@i", "!ampolla bevuta");
	rispondi("bevo|bevo l'ampolla|bevo dall'ampolla|bevo il liquido|bevo il liquido azzurrognolo|bevo il liquido azzurro|bevo lo strano liquido", "Porti alle labbra la piccola bottiglia e ne bevi il contenuto. Dopo pochi istanti ti senti strano... provi un senso di nausea, ma passa presto. Senti rinsaldarsi in te un legame con un potere sovrannaturale. Le parole che pensi e pronunci è come se avessero una carica prima sconosciuta...");
	_se("l'ampolla@i", "!ampolla bevuta");
	_variabili("ampolla bevuta");
	rispondi("prendo un ramo", "Puoi trovare ramoscelli flessibili e contorti, non pensi siano di alcuna utilità e non li prendi.");
	rispondi("esamino la chiave", "È una chiave di bronzo con qualche semplice ricamo.");
	_se("la chiave@i");
	rispondi("esamino la gamba|esamino la gamba di sedia", "È legno fragile e un po' scheggiato.");
	_se("la gamba di sedia@i");
	nAzioniRispondi(1, "Avverti un boato cupo e lontano.");
	_se("drekann|!drago morto");
	_variabili("!drekann|drekann2");
	nAzioniRispondi(2, "Il rumore si avvicina, distingui dei colpi ritmici, come ali che sbattono...");
	_se("drekann2|!drago morto");
	_variabili("!drekann2|drekann3");
	nAzioniVai(1, 23);
	_se("drekann3|!drago morto");
	rispondi("esamino il cuore|esamino il cuore di Cromwell|esamino il cuore dell'abate", "Il cuore dell'abate risulta fatto essiccare, è rigido e probabilmente è servito per un rituale.");
	_se("il cuore di cromwell@i");
	rispondi("infilo il pugnale nel cuore|infilo il pugnale nel cuore dell'abate|infilo il pugnale nel cuore di Cromwell", "Trafiggi il cuore con il pugnale e lo ritrai lasciandoci un buco, ma non accade nulla.");
	_se("il pugnale@i|il cuore di cromwell@i");
	rispondi("strappo il cuore|strappo il cuore dell'abate|strappo il cuore di Cromwell", "Inizi a strappare il cuore da un lato, ma ti fermi prima di raggiungere la metà. Nulla accade e preferisci conservarlo in un unico pezzo.");
	_se("il cuore di cromwell@i");
	rispondi("osservo", "Cosa vorresti osservare? Puoi farlo anche da lontano.");
	rispondi("esamino", "Cosa vorresti esaminare? Devono essere oggetti raggiungibili.");
	rispondi("entro", "Dove vorresti entrare?");
	rispondi("esco", "Da dove vorresti uscire?");
	rispondi("leggo", "Cosa vorresti leggere?");
	rispondi("infilo", "Cosa vorresti infilare e dove?");
	rispondi("introduco", "Cosa vorresti introdurre e dove?");
	rispondi("prendo", "Cosa vorresti prendere?");
	rispondi("apro", "Cosa vorresti aprire?");
	rispondi("bevo", "Cosa vorresti bere?");
	rispondi("strappo", "Cosa vorresti strappare?");
}
// Comandi specifici per ciascuna scena
function scena(n) {
	avvia(n);
	switch (n) {
	case 1:
		nomeScena();
		testo("<br /><span style=\"color:#0b0;\">CROMWELL © MMXVI</span><br /><img src=\"drago.png\" style=\"width:468px; height:273px;\" /><br /><span style=\"color:#0b0;\">Poteri arcani per soggiogare la morte</span><br />", "centrato");
		scegliVai("Inizia", 2, "centrato");
		scegliRispondi("Istruzioni", "", "centrato");
		scegliRispondi("Licenza", "CROMWELL © MMXVI è una rivisitazione dell'avventura testuale EXCALIBUR © MCMLXXXVIII pubblicata sulla rivista Amiga Byte n.8 come opera di pubblico dominio, liberamente copiabile e distribuibile senza scopo di lucro. <a href=\"https://github.com/Druido87/Confabula\" target=\"_blank\">Confabula</a> è l'interprete JavaScript per creare ed eseguire avventure testuali, rilasciato da <a href=\"https://github.com/Druido87\" target=\"_blank\">Druido87</a> con licenza <a href=\"https://github.com/Druido87/Confabula/blob/master/LICENSE\" target=\"_blank\">GNU L-GPL</a>. La storia rivisitata è un esempio di utilizzo di Confabula.", "centrato");
		break;
	case 2:
		nomeScena();
		immagine("bosco.png");
		testo("Secoli trascorsi nell'oblio e la regione di Pietranera è stata inghiottita da una folta vegetazione. Si racconta che Cromwell, un abate di origini britanniche, avesse eredidato antiche conoscenze celtiche e se ne fosse servito per sfuggire alla morte. Visse a lungo nell'abbazia eppure venne il giorno della sua sepoltura. In seguito, queste terre divennero lentamente piú silenziose, molte creature morivano o si spostavano altrove. La gente abbandonò del tutto il reggimento, un terribile potere crebbe, rafforzato dalla paura. Pochi audaci avventurieri hanno esplorato questi luoghi senza far ritorno. Un nuovo esploratore è giunto...");
		_variabili("inizio");
		scegliVai("Esplora", 3, "centrato");
		break;
	case 3:
		nomeScena("inizio bosco|inizio del bosco");
		immagine("bosco.png");
		testo("Sei nel bosco di Pietranera. Una fitta vegetazione ti circonda.<br />Puoi vedere: alti fusti e fitti cespugli.");
		testo("Hai portato con te un pugnale.");
		_se("inizio");
		_variabili("!inizio");
		uscita("ovest", 7);
		_se("!dentro cespugli");
		uscita("nord", 4);
		_se("!dentro cespugli");
		uscita("est", 10, 1);
		_se("sentiero visto|!dentro cespugli");
		rispondi("ovest|nord|est|sud|giú|su", "Devi uscire dai cespugli se vuoi proseguire.")
		_se("dentro cespugli");
		rispondi("esamino i fusti|esamino gli alti fusti|osservo i fusti|osservo gli alti fusti", "Sono alberi secolari molto alti.");
		rispondi("esamino i cespugli|esamino i fitti cespugli", "Tra essi intravvedi un sentiero che va verso est.");
		_variabili("sentiero visto");
		rispondi("entro nei cespugli", "Intimorito ti acquatti in mezzo a due grandi cespugli. Hai la sensazione di essere osservato, ma forse è solo la tua immaginazione.");
		_se("!dentro cespugli");
		_variabili("dentro cespugli");
		rispondi("esco dai cespugli|esco", "Sei venuto qui per sconfiggere l'oscurità, non è il caso di nasconderti. Esci dai cespugli e riprendi la tua ricerca.");
		_se("dentro cespugli");
		_variabili("!dentro cespugli");
		rispondi("esamino il sentiero", "Per conoscere un sentiero devi percorrerlo...");
		_variabili("sentiero visto");
		rispondi("strappo i cespugli", "Ci vorrebbe una giornata intera per strappare tutti i cespugli che vedi... Non è il caso di farlo.");
		break;
	case 4:
		nomeScena("rovine|abbazia|antica abbazia|rovine dell'abbazia|rovine di Pietranera|abbazia di Pietranera");
		immagine("rovine.png");
		testo("Ti trovi tra le rovine sulle colline di Pietranera. Il luogo è avvolto da una strana luce crepuscolare.<br />Puoi vedere: le rovine dell'abbazia di Pietranera");
		uscita("nord", 5);
		_se("!abate morto");
		rispondi("nord", "È il luogo dove l'abate Cromwell si è dissolto in una nube di zolfo, meglio non tornarci.");
		_se("abate morto");
		uscita("sud", 3);
		rispondi("osservo la luce|osservo la luce crepuscolare", "Ti sembra di veder qualche luce tremolante, ma appena fissi meglio lo sguardo l'effetto svanisce.");
		rispondi("esamino le rovine|esamino le rovine dell'abbazia", "Sulla collina, le rovine dell'antico maniero sembrano celare arcani misteri. Tra le pietre noti un enorme monolite con delle iscrizioni in caratteri runici.");
		rispondi("esamino il monolite", "Il blocco di pietra è alto circa tre metri e ha uno spessore di quasi due. Sotto l'iscrizione vi è inciso un cerchio con al centro una croce. Lateralmente vi è un foro di piccole dimensioni. Sulla sommità sembrano esservi degli altri simboli.");
		rispondi("esamino l'iscrizione|esamino le iscrizioni|leggo l'iscrizione|leggo le iscrizioni|leggo le rune|esamino le rune|esamino i caratteri runici|leggo i caratteri runici", "Non riesci a comprendere i caratteri runici...");
		rispondi("esamino le pietre", "Sono pietre molto dure e compatte.");
		rispondi("prendo le pietre", "Sono pietre grandi e imponenti, non puoi portarle con te.");
		rispondi("esamino la croce|esamino il cerchio", "È un simbolo celtico, una larga croce dentro un cerchio.");
		rispondi("esamino il foro|esamino il piccolo foro|infilo il dito nel foro|infilo il dito nel piccolo foro", "È un foro realizzato con precisione, comprendi che deve avere un senso. Infili lentamente un dito nel foro... ma non accade nulla, deve essere piuttosto profondo.");
		_se("!monolite aperto");
		rispondi("esamino il foro|esamino il piccolo foro|infilo il dito nel foro|infilo il dito nel piccolo foro", "È un foro realizzato con precisione, dopo averci infilato il bastone di un druido, si è aperta una piccola cavità.");
		_se("monolite aperto");
		rispondi("esamino gli altri simboli|esamino i simboli|leggo i simboli|esamino la sommità", "Pur collocati in alto, riconosci che si tratta di lettere latine. Una sola parola è scritta e sembra essere la trascrizione di una parola celtica: 'YGGWYRD'.");
		rispondi("infilo la gamba di sedia nel foro|infilo la gamba nel foro|infilo la gamba di legno nel foro", "Non succede nulla e dopo poco sfili la gamba della sedia.");
		_se("!monolite aperto", "la gamba di sedia@i");
		rispondi("infilo il bastone nel foro", "Azioni un elementare meccanismo che scopre una cavità all'interno del monolite dentro la quale trovi una ampolla di vetro.");
		_se("!monolite aperto", "il bastone@i");
		_variabili("monolite aperto");
		rispondi("esamino la cavità", "È una piccola cavità che contiene unicamente un'ampolla.");
		_se("monolite aperto", "!l'ampolla@i");
		rispondi("bevo|bevo l'ampolla|bevo dall'ampolla|bevo il liquido|bevo il liquido azzurrognolo|bevo il liquido azzurro|bevo lo strano liquido", "Prima devi prendere l'ampolla.");
		_se("monolite aperto", "!l'ampolla@i");
		rispondi("esamino la cavità", "È una piccola cavità che non contiene piú nulla.");
		_se("monolite aperto", "l'ampolla@i");
		rispondi("prendo l'ampolla|prendo l'ampolla di vetro", "Hai preso la bottiglietta.");
		_se("monolite aperto", "!l'ampolla@i");
		_oggetti("l'ampolla@i");
		rispondi("esamino l'ampolla", "L'ampolla di vetro, ricoperta di polvere, risulta essere ben chiusa da un tappo di sughero. All'interno vi è uno strano liquido di colore azzurro.");
		_se("monolite aperto", "!l'ampolla@i");
		rispondi("esamino il tappo|esamino il tappo di sughero", "Il tappo sigilla perfettamente l'ampolla.");
		_se("monolite aperto", "!l'ampolla@i");
		break;
	case 5:
		nomeScena();
		immagine("abate.png");
		testo("D'un tratto, tra i ruderi, appare Cromwell, l'abate di Pietranera.<br />Puoi vedere: l'abate.");
		nAzioniVai(1, 6);
		_se("!abate morto");
		rispondiVai("yggwyrd", "La parola sospende gli arcani poteri dell'abate, che tra disumane urla di dolore esclama: \"Drekann!!\" e si dissolve in una nube sulfurea.", 4);
		_se("ampolla bevuta");
		_variabili("parole magiche|abate morto|drekann");
		rispondi("yggwyrd", "YGGWYRD");
		_se("!ampolla bevuta");
		_variabili("parole magiche");
		break;
	case 6:
		immagine("abate.png");
		testo("L'espressione dell'abate è tesa e si paralizza qualche istante.");
		_se("parole magiche|!ampolla bevuta");
		testo("\"Stolto! Non osarai mai piú sfidare il mio potere con le tue parole!\" esclama l'abate mentre dalle sue mani, protese verso di te, un fascio di luce ti investe e ti folgora all'istante!");
		_variabili("!parole magiche");
		scegliVai("Risorgi", 4);
		break;
	case 7:
		nomeScena("palude confine bosco|palude dal bosco");
		immagine("palude.png");
		testo("Sei nella palude di Verdefango. Dalle acque palustri si levano densi vapori.<br />Puoi vedere: tetri alberi privi di foglie.");
		uscita("est", 3);
		uscita("sud", 8);
		rispondi("esamino gli alberi|esamino i tetri alberi", "Le piante dai rami contorti ispirano inquietanti immagini.");
		rispondi("osservo le immagini", "Lasci libera la mente di fronte a queste immagini e ti sembra di vedere sguardi minacciosi e gelosi.");
		rispondi("osservo le acque", "Qualcosa di innaturale ha sconvolto questo luogo...");
		rispondi("osservo i vapori", "I vapori fuoriescono come sbuffi irregolari, da varie parti della palude.");
		break;
	case 8:
		nomeScena();
		immagine("palude.png");
		testo("Sei nella zona palustre. Uno strano gorgoglio proviene dall'acqua.<br />Puoi vedere: piante inquietanti, l'acqua che gorgoglia.");
		nAzioniVai(1, 9);
		_se("!abate morto");
		uscita("nord", 7);
		_se("abate morto");
		uscita("sud", 21);
		_se("abate morto");
		rispondi("esamino le piante", "Alcuni grandi rami sono stati spezzati, come se qualcosa di gigante li avesse travolti e strappati.");
		rispondi("esamino l'acqua", "L'acqua emana un odore nauseabondo.");
		break;
	case 9:
		immagine("drago.png");
		testo("D'un tratto dalle acque palustri emerge un gigantesco drago. Il mostro ti si avventa contro con le fauci spalancate e le sue zanne ti dilaniano orribilmente.");
		_variabili("!gorgoglio");
		scegliVai("Risorgi", 7);
		break;
	case 23:
		immagine("drago.png");
		testo("Improvvisamente ti raggiunge un enorme drago, furioso per la morte dell'abate, che ti si avventa contro digrignando le formidabili zanne. Hai pochi istanti per reagire.");
		_variabili("!drekann3");
		nAzioniVai(1, 24);
		_se("!drago morto");
		rispondiVai("introduco il cuore nelle fauci|introduco il cuore nella bocca del drago|introduco il cuore dell'abate nella bocca del drago|introduco il cuore di Cromwell nella bocca del drago|introduco il cuore dell'abate nelle fauci|introduco il cuore di Cromwell nelle fauci", "Lanci il cuore di Cromwell verso la faccia del drago...", 25);
		_se("il cuore di cromwell@i");
		_variabili("drago morto");
		break;
	case 24:
		immagine("drago.png");
		testo("Le zanne del drago ti si avventano contro e ti dilaniano orribilmente.");
		_variabili("drekann");
		scegliVai("Risorgi", 20);
		break;
	case 25:
		intermezzo("Con un'imprevista ingordigia, il drago afferra quel cuore con le sue fauci e inizia a masticarlo. Sembra quasi che aspettasse da tempo questo pasto... dopo circa un minuto lo sguardo del drago si spegne, fissa l'orizzonte e crolla al suolo senza vita.");
		testo("L'abate è definitivamente sconfitto, aveva ingannato la morte rinunciando all'evoluzione verso nuove forme di esistenza. L'estrazione del suo cuore faceva parte del rituale in cui rinunciava alla sua evoluzione per conservare in eterno la forma terrena.");
		testo("Il drago era un servitore dell'abate, obbligato a difendere questo suo regno finché il rituale non fosse stato spezzato. Mangiando il cuore è come se la vita avesse ripreso il suo corso e il servitore è stato liberato anch'esso, morendo.");
		testo("Le terre di Pietranera conosceranno a poco a poco un destino migliore. Congratulazioni.");
		scegliVai("Ricomincia", 1);
		break;
	case 10:
		nomeScena();
		immagine("bosco2.png");
		testo("Ti trovi all'imbocco di uno stretto sentiero. Il camminamento si snoda tra la fitta vegetazione.<br />Puoi vedere: alte e vecchie conifere.");
		uscita("ovest", 3);
		uscita("est", 11, 1);
		_se("sentiero visto 2");
		rispondi("esamino le conifere|esamino le alte conifere|esamino le vecchie conifere|esamino le alte e vecchie conifere", "Tra gli alberi vedi che il sentiero prosegue verso est.");
		_variabili("sentiero visto 2");
		break;
	case 11:
		nomeScena("radura");
		immagine("bosco2.png");
		testo("Sei in una radura, pochi alberi ti circondano e grandi pietre sono presenti in un angolo.<br />Puoi vedere: delle pietre e alcuni alberi.");
		uscita("ovest", 10);
		uscita("sud", 12);
		rispondi("esamino le pietre|esamino le grandi pietre", "Le pietre sono ricoperte di muschio e sembrano molto antiche. Una di questre pietre è una statua.");
		rispondi("esamino la statua", "A prima vista era irriconoscibile, ma ora comprendi che è la statua di un guerriero ed è priva della testa e di un braccio.");
		rispondi("esamino gli alberi|esamino alcuni alberi", "Ai piedi di una quercia trovi il braccio di una statua.");
		rispondi("esamino il braccio|esamino il braccio della statua|esamino il braccio di una statua|esamino il braccio di statua", "Il braccio è parzialmente coperto di muschio.");
		rispondi("prendo il braccio", "È pesante e non sarebbe comodo portarselo dietro. Lo lasci sul terreno.");
		rispondi("prendo la statua", "È impensabile spostarla da lí.");
		break;
	case 12:
		nomeScena();
		immagine("bosco2.png");
		testo("Stai seguendo un sentiero che si snoda tra le erbacce del sottobosco.<br />Puoi vedere: intricati cespugli di rovo.");
		uscita("ovest", 13);
		uscita("nord", 11);
		uscita("sud", 16);
		rispondi("esamino i cespugli|esamino i rovi|esamino i cespugli di rovo", "Scivoli e cadi tra i rovi, procurandoti delle abrasioni.");
		rispondi("entro nei rovi|entro nei cespugli di rovo", "Scivoli e rotoli tra le spine procurandoti brutte ferite lacero-contuse. Non riesci a entrare nei rovi e non ha senso insistere.");
		rispondi("osservo i rovi", "I rovi sono molto contorti e pieni di spine, il terreno su cui si estendono è piuttosto irregolare, meglio starci lontani.");
		break;
	case 13:
		nomeScena("spiazzo con capanna|spiazzo|spiazzo bosco|spiazzo nel bosco");
		immagine("bosco.png");
		testo("Ti trovi in uno spiazzo del bosco. Poco distante vedi una capanna tra la boscaglia.<br />Puoi vedere: una capanna.");
		uscita("est", 12);
		uscita("sud", 15);
		uscita("ovest", 14, 1);
		_se("capanna aperta");
		rispondi("esamino la capanna", "Tra la rigogliosa vegetazione la capanna risulta quasi invisibile. La porta sembra chiusa e le erbacce, sul sentiero che concude ad essa, rivelano il suo stato di abbandono.");
		rispondi("esamino la porta", "È una porta massiccia e ben lavorata, anche volendo non avresti i mezzi per sfondarla.");
		rispondi("apro la porta|entro|entro nella capanna|apro la capanna", "Inutilmente cerchi di aprire la robusta porta. Nonostante l'aspetto fatiscente della costruzione, la porta si rivela molto robusta ed è chiusa a chiave.");
		_se("!capanna aperta");
		rispondiVai("apro la porta|entro|entro nella capanna|apro la capanna|ovest", "Entri nella capanna.", 14);
		_se("capanna aperta");
		rispondi("apro la porta con la chiave|introduco la chiave nella serratura|apro la capanna con la chiave", "Introduci la chiave nella serratura e la giri ripetutamente. Con due scatti metallici la porta si apre facendo cigolare i cardini.");
		_variabili("capanna aperta");
		rispondi("apro la porta con il pugnale", "Potresti giusto arrecargli qualche graffio, ma non c'è modo di aprirla cosí...");
		_se("il pugnale@i");
		rispondi("chiudo la porta|chiudo la porta della capanna", "Per sicurezza eviti di richiudere la porta a chiave: dovesse non riaprirsi...");
		_se("capanna aperta");
		break;
	case 14:
		nomeScena("capanna");
		immagine("capanna.png");
		testo("Ti trovi all'interno della cadente costruzione. Le pareti sono ricoperte di muffa.<br />Puoi vedere: un tavolo, un baule, una sedia e un giaciglio.");
		uscita("est|esco|esco dalla capanna", 13);
		rispondi("osservo le pareti|osservo la muffa", "Alcuni angoli sono piú ricoperti di muffa rispetto ad altri. L'interno è piuttosto umido.");
		rispondi("esamino il tavolo", "È un robusto e massiccio tavolo in rovere scuro. Su di esso vi sono una brocca di terracotta e una scodella di legno.");
		rispondi("esamino la brocca|esamino la terracotta|esamino la brocca di terracotta", "Dentro la brocca vi è un denso liquido rosso cupo.");
		rispondi("prendo la brocca", "La brocca ti renderebbe meno veloce nei movimenti, la lasci qui.");
		rispondi("esamino il liquido|esamino il liquido rosso", "Difficile stabilire di che si tratta... è molto viscoso e non può essere sangue.");
		rispondi("bevo il liquido|bevo il liquido rosso|bevo dalla brocca|bevo dalla terracotta|bevo dalla brocca di terracotta", "A causa della forte viscosità del liquido, a stento cola lungo una parete. Con la lingua riesci giusto ad assaggiarlo: è dolciastro, ma lascia l'amaro dopo il dolce. Forse è stato fatto con delle bacche. Non sembra accaderti nulla.");
		rispondi("esamino la sedia", "Ti siedi e stramazzi a terra. La sedia stava in piedi per miracolo.");
		_se("!sedia rotta");
		_variabili("sedia rotta");
		rispondi("osservo la sedia", "La sedia sembra molto fragile...");
		rispondi("osservo la sedia|esamino la sedia", "La sedia è rotta in tre pezzi.");
		_se("sedia rotta");
		rispondi("esamino i tre pezzi|esamino i pezzi|esamino i pezzi della sedia", "Lo schienale ha una parte della seduta attaccata con sotto una gamba. La seduta è rotta poco oltre la metà e conserva le due gambe frontali. Infine, una gamba è rotolata via da tutto il resto...");
		_se("sedia rotta|!gamba sedia presa");
		rispondi("esamino i tre pezzi|esamino i pezzi|esamino i pezzi della sedia", "Lo schienale ha una parte della seduta attaccata con sotto una gamba. La seduta è rotta poco oltre la metà e conserva le due gambe frontali. La rimanente gamba è stata presa da te.");
		_se("sedia rotta|gamba sedia presa");
		rispondi("esamino lo schienale|esamino la seduta|esamino la gamba|esamino la gamba di sedia", "È legno fragile e un po' scheggiato.");
		rispondi("prendo lo schienale|prendo la seduta", "Troppo ingombrante da portare con te...");
		rispondi("prendo la gamba|prendo la gamba di sedia", "Hai preso la gamba della sedia.");
		_se("!gamba sedia presa");
		_oggetti("la gamba di sedia@i");
		_variabili("gamba sedia presa");
		rispondi("esamino il giaciglio", "È un modesto giaciglio di paglia. Pare che non venga usato da molto tempo. Lí vicino, adagiato ad una parete, trovi un bastone di ottima fattura con intarsi metallici che formano rune.");
		_se("!il bastone@i");
		rispondi("esamino il giaciglio", "È un modesto giaciglio di paglia. Pare che non venga usato da molto tempo.");
		_se("il bastone@i");		
		rispondi("esamino il bastone", "È un bastone di prestigio con intarsi metallici che formano rune, forse apparteneva al cadavere da cui hai recuperato la chiave.");
		_se("!il bastone@i");
		rispondi("leggo le rune|esamino le rune|esamino gli intarsi", "Non riesci a comprendere le rune...");
		_se("!il bastone@i");
		rispondi("prendo il bastone", "Hai preso il bastone.");
		_se("!il bastone@i");
		_oggetti("il bastone@i");
		rispondi("esamino la scodella|esamino la scodella di legno", "La ciotola è vuota.");
		rispondi("prendo la scodella|prendo la scodella di legno", "È solo una ciotola vuota... la lasci dov'è.");
		rispondi("esamino il baule", "Il robusto forziere è dotato di placche metalliche ed è chiuso con un vecchio lucchetto.");
		rispondi("apro il baule", "Non riesci ad aprire il baule. Un vecchio lucchetto lo tiene chiuso.");
		rispondi("introduco il pugnale nel lucchetto|apro il lucchetto con il pugnale", "Non puoi tagliare il lucchetto in questo modo...");
		_se("il pugnale@i");
		rispondi("esamino il lucchetto", "Il vecchio lucchetto risulta insolitamente robusto.");
		break;
	case 15:
		nomeScena("crocevia");
		immagine("bosco2.png");
		testo("Ti trovi ad un crocevia. Il tuo sentiero si interseca con altri e risultano percorribili tutte le direzioni.<br />Puoi vedere: un cartello.");
		uscita("ovest", 20);
		uscita("nord", 13);
		uscita("est", 16);
		uscita("sud", 17);
		rispondi("esamino il cartello|leggo il cartello", "Sul cartello di legno vi sono delle scritte. La prima dice: 'ovest palude del drago', la seconda 'nord abbazia', la terza 'est sentiero del bosco', la quarta è stata bruciata.");
		break;
	case 16:
		nomeScena();
		immagine("bosco2.png");
		testo("Stai percorrendo un sentiero che taglia l'intricata vegetazione.<br />Puoi vedere: alti pini e una staccionata.");
		rispondi("esamino i pini", "Tra i pini noti delle rudimentali croci infisse nel terreno. Si tratta di tombe.");
		rispondi("esamino le tombe|esamino le croci", "Ti avvicini ai tumuli e scopri che vicino ad alcuni di essi vi sono delle armi arrugginite. Sembra che lí vi sia stata una cruenta battaglia molti anni fa.");
		rispondi("esamino le armi", "Sono i resti di pesanti armature. Trovi un elmo, uno scudo, alcune spade, la lama di una lancia ed una alabarda. Tutte le armi sono solo degli inutili pezzi di ferro arrugginito.");
		rispondi("esamino le armi|esamino l'elmo|esamino lo scudo|esamino la spada|esamino le spade|esamino la lama|esamino la lancia|esamino l'alabarda", "Non c'è nulla di rilevante in questo ferro arrugginito.");
		rispondi("prendo le armi|prendo l'elmo|prendo lo scudo|prendo la spada|prendo le spade|prendo la lama|prendo la lancia|prendo l'alabarda", "Oltre all'ingombro, è tutto consumato dalla ruggine. Lasci questi pezzi di ferro dove sono.");
		rispondi("esamino la staccionata", "Poco dietro la staccionata trovi un altro cadavere, consumato dal tempo. Si direbbe sia morto successivamente agli altri sepolti.");
		rispondi("esamino il cadavere", "Tra le spoglie del cadavere trovi una chiave.");
		_se("!la chiave@i");
		rispondi("esamino il cadavere", "Tra le spoglie del cadavere non trovi altro, oltre la chiave che hai preso.");
		_se("la chiave@i");
		rispondi("prendo la chiave", "Hai preso la chiave.");
		_se("!la chiave@i");
		_oggetti("la chiave@i");
		rispondi("esamino la chiave", "È una chiave di bronzo con qualche semplice ricamo.");
		_se("!la chiave@i");
		uscita("ovest", 15);
		uscita("nord", 12);
		break;
	case 17:
		nomeScena();
		immagine("bosco.png");
		testo("Stai seguendo una via tra gli alberi.<br />Puoi vedere: i resti di una costruzione.");
		rispondiVai("esamino i resti|esamino la costruzione", "Ti avvicini alla costruzione...", 19);
		rispondi("osservo i resti|osservo la costruzione", "Da lontano non riesci a capire di che si tratta... è il luogo che avrebbe indicato l'insegna bruciata del cartello nel crocevia.");
		uscita("ovest", 18);
		uscita("nord", 15);
		break;
	case 18:
		nomeScena("cimitero");
		immagine("cimitero.png");
		testo("In una piccola piú solida isola, nella palude di Verdefango, intravvedi alcune lapidi di pietra avvolte dai rampicanti.<br />Puoi vedere: alcuni alberi e delle lapidi.");
		uscita("nord", 20);
		uscita("est", 17);
		rispondi("esamino i rampicanti", "Non sono rampicanti robusti...");
		rispondi("prendo la lapide", "È impensabile portarsela via...");
		rispondi("esamino gli alberi", "Gli alberi, avvolti nella nebbia, incutono timore.");
		rispondi("esamino le lapidi", "Le lapidi, ricoperte di rampicanti, non si riescono a leggere.");
		_se("!rampicanti eliminati");
		rispondi("esamino le lapidi", "Tra le lapidi hai trovato la tomba dell'abate Cromwell.");
		_se("rampicanti eliminati");
		rispondi("strappo i rampicanti", "Elimini le erbacce e leggi le iscrizioni sulle pietre. Su una di esse vi è scritto: 'Qui giace J. T. Cromwell'. La lapide è posta in terra sconsacrata.");
		_se("!rampicanti eliminati");
		_variabili("rampicanti eliminati");
		rispondi("esamino la tomba|esamino la tomba di Cromwell|esamino la tomba dell'abate", "La lapide è posta in terra sconsacrata e la sepoltura potrebbe essere stata la parte di un rito.");
		_se("rampicanti eliminati|!tomba aperta");
		rispondi("apro la tomba|apro la tomba di Cromwell|apro la tomba dell'abate", "Una lastra orizzontale di pietra chiude la tomba, con un notevole sforzo fisico sollevi la lastra da un lato e la fai scorrere via. La tomba è aperta.");
		_se("!tomba aperta|rampicanti eliminati");
		_variabili("tomba aperta");
		rispondi("chiudo la tomba|chiudo la tomba di Cromwell|chiudo la tomba dell'abate", "Ti senti un po' spossato per ripetere lo sforzo precedente. Lasci la tomba aperta.");
		_se("tomba aperta|rampicanti eliminati");
		rispondi("esamino la tomba|esamino la tomba di Cromwell|esamino la tomba dell'abate", "Dentro la tomba non trovi il corpo dell'abate, ma solo un cuore essiccato e rigido.");
		_se("rampicanti eliminati|tomba aperta|!cuore preso");
		rispondi("esamino la tomba|esamino la tomba di Cromwell|esamino la tomba dell'abate", "La tomba dell'abate è vuota, vi hai trovato il suo cuore ed è stato preso da te.");
		_se("rampicanti eliminati|tomba aperta|cuore preso");
		rispondi("prendo il cuore|prendo il cuore di Cromwell|prendo il cuore dell'abate", "Hai preso il cuore dell'abate.");
		_se("rampicanti eliminati|tomba aperta|!cuore preso");
		_variabili("cuore preso");
		_oggetti("il cuore di Cromwell@i");
		rispondi("esamino il cuore|esamino il cuore di Cromwell|esamino il cuore dell'abate", "Il cuore risulta fatto essiccare, è rigido e probabilmente è servito per un rituale.");
		_se("rampicanti eliminati|tomba aperta|!cuore preso");
		break;
	case 19:
		testo("Improvvisamente una botola si apre sotto i tuoi piedi... Precipiti su dei pali acuminati piantati nel terreno. Non c'è via di scampo! Uno schianto secco e vieni trafitto mortalmente.<span class=\"ascii\">,-'\"\"`-.<br />;        :<br />:          :<br />: (_)  (_) ;<br />`   '`   '<br />:`++++';<br />``..''<\span>");
		scegliVai("Risorgi", 17);
		break;
	case 20:
		nomeScena("palude confine sentiero|palude da sentiero");
		immagine("palude.png");
		testo("Una vasta zona acquitrinosa è il luogo ove ti trovi. Odi rieccheggiare i richiami dei corvi.<br />Puoi vedere: scheletriche piante e alcuni corvi.");
		uscita("ovest", 21);
		uscita("est", 15);
		uscita("sud", 18);
		rispondi("esamino le piante|osservo le piante", "Con stupore misto a raccapriccio ti accorgi che dai rami degli alberi pendono dei corpi umani.");
		rispondi("esamino i corpi|esamino i corpi umani|osservo i corpi|osservo i corpi umani", "I corpi orrendamente mutilati risultano irriconoscibili. Probabilmente si tratta di guerrieri o esploratori uccisi dal perfido abate Cromwell.");
		rispondi("esamino i corvi", "Sono troppo lontani per poterli esaminare.");
		rispondi("osservo i corvi", "Gli uccellacci neri volano lenti sulle carogne in putrefazione. Sembrano quasi danzare per un sinistro banchetto.");
		break;
	case 21:
		nomeScena();
		immagine("palude.png");
		testo("Via via che procedi, affondi nel pantano. Una fitta nebbia avvolge la zona.<br />Puoi vedere: una barca capovolta e semiaffondata.");
		uscita("ovest", 22);
		uscita("nord", 8);
		uscita("est", 20);
		rispondi("esamino la barca", "L'imbarcazione semiaffondata è ricoperta quasi interamente da alghe. Il legno marcio è prova dei numerosi anni trascorsi nella palude.");
		break;
	case 22:
		nomeScena();
		immagine("palude.png");
		testo("Hai raggiunto una radura su un'isola nella palude. Intricati rampicanti avvinghiano i tronchi di alcuni alberi.<br />Puoi vedere: cespugli e alte conifere.");
		uscita("est", 21);
		rispondi("esamino i cespugli", "I cespugli celano i resti mortali di tre cavalieri uccisi probabilmente in una imboscata.");
		rispondi("entro nei cespugli", "Ci sono già tre cadaveri, meglio restarne fuori...");
		rispondi("osservo le conifere|esamino le conifere", "Tra gli alberi vedi uno strano bagliore, ma presto svanisce...");
		break;
	}
	concludi();
}