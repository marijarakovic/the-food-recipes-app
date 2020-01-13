import Category from '../models/category';
import Meal from '../models/meal';

import Colors from '../constants/Colors';

export const CATEGORIES = [
  new Category('c1', 'Hladna predjela', Colors.mealCategoryColorOne),
  new Category('c2', 'Topla predjela', Colors.mealCategoryColorTwo),
  new Category('c3', 'Hleb i peciva', Colors.mealCategoryColorThree),
  new Category('c4', 'Supe', Colors.mealCategoryColorFour),
  new Category('c5', 'Salate', Colors.mealCategoryColorOne),
  new Category('c6', 'Glavna jela', Colors.mealCategoryColorTwo),
  new Category('c7', 'Prilozi i variva', Colors.mealCategoryColorThree),
  new Category('c8', 'Dezerti', Colors.mealCategoryColorFour),
  new Category('c9', 'Pića', Colors.mealCategoryColorOne),
  new Category('c10', 'Zimnica', Colors.mealCategoryColorTwo)
];

export const MEALS = [
  new Meal(
    'm1',
    ['c1'],
    'Pita za 10 minuta',
    'pristupačno',
    'jednostavno',
    'https://domacirecepti.net/wp-content/uploads/2019/09/pita-za-10-minuta.jpg',
    60,
    [
      '200 ml jogurta',
      '150 ml ulja',
      '5 celih jaja',
      '5 gr soli',
      '10 gr praška za pecivo',
      '5 kašika ajvara',
      '250 gr brašna',
      '200 gr šunke ili šunkarice',
      '3 kisela krastavčića',
      '150 gr feta ili mladog sira'
    ],
    [
      'Uključiti rernu da se zagreje  na 200 stepeni.',
      'Iseckati na sitne kockice šunkaricu krastavčiće i sir.',
      'Ulupati žicom jaja sa solju pa dodati jogurt i ulje i mešati dok se ulje ne sjedini sa ostatkom smese.',
      'Zatim dodati ajvar, opet promešati i na kraju dodati brašno i prašak za pecivo pa mešati dok se ne dobije glatka smesa.',
      'Toj masi dodati šunkaricu, krastavčiće i sir pa izmešati varjačom ili lopaticom.',
      'Pleh dimenzija 30 x 20 cm obložiti papirom za pečenje pa izliti smesu, proveriti da li se rerna zagrejala pa odneti pleh u pećnicu.',
      'Pitu peći 35 minuta, ili due, zavisno od jačine rerne koju imate.',
      'Pečenu pitu prekriti krpom pa ostaviti da se ohladi ili prohladi.',
      'Kasnije seći na kocke i poslužiti.'
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm2',
    ['c2'],
    'Paprika punjena sirom i jajima',
    'pristupačno',
    'jednostavno',
    'https://domacirecepti.net/wp-content/uploads/2017/08/paprika-punjena-sirom.jpg',
    15,
    [
      '6 babura paprika',
      '6 jaja',
      '500 gr sitnog sira, feta sira i pavlake ili sira po izboru',
      'so',
      'ulje'
    ],
    [
      'Uključiti rernu da se zagreva na 200 stepeni.',
      'Izdubiti paprike i oprati iznutra.',
      'Napuniti paprike do pola.',
      'Pouljiti pleh, najbolje je ako imate onaj uski dugački za hleb, a ukoliko nemate onda neki manji.',
      'Poslažite paprike da stoje uspravno i odgore malo pouljiti.',
      'Peći oko sat vremena, paziti da se nisu izvrnule i sir iscureo.',
      'Pred kraj u svaku papriku istresti jaje i posoliti.',
      'Vratiti u rernu dok se i jaje ne ispeče.'
    ],
    true,
    false,
    true,
    false
  ),

  new Meal(
    'm3',
    ['c3'],
    'Kiflice za 30 minuta',
    'pristupačno',
    'jednostavno',
    'https://i.pinimg.com/originals/b5/53/39/b55339a2a8b2c50cb13200d4a9fedbe4.jpg',
    45,
    [
      '30 gr svežeg kvasca',
      '1 kašika šećera',
      '1 kašičica soli',
      '1 kisela pavlaka',
      '100 ml ulja',
      '200 ml mleka',
      '700 gr mekog brašna',
      '1 prašak za pecivo od 10 gr',
      'punjenje po izboru',
      '1 jaje za premazivanje i po želji nešto za posipanje'
    ],
    [
      'Zagrejati mleko da bude toplo, pa dodati šećer i kvasac i promešati, taman da se aktivira dok pripremite ostalo.',
      'U drugu posudu staviti 600 gr brašna, dodati prašak za pecivo i so, pa rukom promešati.',
      'Dodati kiselu pavlaku i ulje.',
      'Zatim uliti masu sa mlekom i kvascem i umesiti testo.',
      'Možda će vam trebati još jedno posipanje brašnom da biste ga lepo umesiti.',
      'Prebaciti testo na radnu površinu i izmesiti ga do kraja.',
      'Podeliti testo odmah na 2 jednaka dela.',
      'Oklagijom razvući jedan komad testa u krug, prečnika 50 cm, otprilike i iseći zatim na 16 ili više delova.',
      'Na svaki deo staviti punjenje po izboru i uviti u kiflicu.',
      'Poslagati u tepsiju. Jedno testo je jedna tepsija napunjena kiflicama.',
      'Uraditi isto i sa drugim testom i poslagati u drugi pleh.',
      'Umutiti jaje pa premazati kiflice i posuti po želji nekim semenkama ili morskom solju.',
      'Uključiti rernu da se zagreje na 200 stepeni.',
      'Peći dok ne porumene po vašem ukusu.'
    ],
    false,
    false,
    true,
    false
  ),

  new Meal(
    'm4',
    ['c4'],
    'Krem supa',
    'pristupačno',
    'jednostavno',
    'http://domacirecepti.net/wp-content/uploads/2014/12/krem-supa.jpg',
    60,
    [
      '3 šargarepe',
      '1 koren peršuna i list',
      '2 korena paštrnaka',
      '1 crni luk',
      '2 krompira',
      '1/2 pilećeg belog mesa sa kožom ili sitnež od pileta sa kojeg će se kasnije skinuti meso',
      '1 kašika suvog začina',
      'još malo soli po ukusu'
    ],
    [
      'Očistiti šargarepu i belu zelen, očistiti luk i krompir, pa dodati pileće meso koje ste izabrali, staviti u šerpu i naliti vode, otrilike 2l.',
      'Staviti na vatru da se kuva.',
      'Kada provri malos manjiti vatru i ostaviti da se sve zajedno skuva.',
      'Povrće nije potrebno sitniti kao ni luk jer će se posle samleti.',
      'Kada se sve skuvalo skloniti sa vatre pa procediti. Supu sačuvati.',
      'Ostaviti povrće i meso u cediljki da se malo prohladi pa povrće i meso poskidano sa kostiju staviti u blender ili drugu šerpu ako imate štapni mikser i naliti 100 ml supice u kojoj se sve kuvalo.',
      'Izblendirati ili štapnim mikserom usitniti, napraviti kašu.',
      'Istresti kašu u šerpu pa naliti supe koju ste sačuvali koliko želite u zavisnosti da li biste gušće ili redje.',
      'Dodati suvi začin i malo soli, probati i dodati začine po ukusu.',
      'Vratiti na vatru da provri i skloniti.',
      'Poslužiti krem supu toplu.'
    ],
    true,
    false,
    false,
    true
  ),

  new Meal(
    'm5',
    ['c5'],
    'Salata od crvenog kupusa',
    'pristupačno',
    'jednostavno',
    'http://domacirecepti.net/wp-content/uploads/2015/11/salata-od-crvenog-kupusa.jpg',
    15,
    [
      '1 kg crvenog kupusa',
      '2 šargarepe',
      '1/2 praziluka',
      '50 ml maslinovog ulja',
      '1 kašičica peršunovog lista',
      '1/2 kašičice soli',
      '50 ml jabukovog sirćeta',
      '50 ml vode'
    ],
    [
      'Praziluk išeći na kolutove, šargarepu narendati, a šargarepu iseći na rezance.',
      'Pomešati vodu, ulje, sitće, so i peršun i sa tom smesom preliti naseckano povrće.',
      'Možete dodati svež spanać, blitvu, masline, zelenu salatu, kao i paradajz i mladi sir, kukuruz šećerac i pasulj iz konzerve.',
      'Ostaviti kupus da odstoji bar 1h jer je nešto tvrdji od belog kupusa i poslužiti.'
    ],
    true,
    true,
    true,
    true
  ),

  new Meal(
    'm6',
    ['c6'],
    'Makarone sa sirom',
    'pristupačno',
    'jednostavno',
    'https://domacirecepti.net/wp-content/uploads/2018/03/mac-and-cheese.jpg',
    60,
    [
      '900 ml mleka',
      '400 gr testenine',
      '200 gr čedar sira',
      'kašičica soli'
    ],
    [
      'Na vatru staviti mleko pa dodati so i ostaviti da provri.',
      'Kada počne da vri smanjiti temperaturu na srednju pa dodati makarone.',
      'Prvo će biti dosta vodeno ako kako vreme prolazi i makarone se kuvaju tečnosti će biti sve manje i testenina će je upiti.',
      'Kada se makarone skuvaju skoro da neće biti tečnosti.',
      'Dodati narendan sir i mešati dok se ne otopi. Videćete kako se rasteže u sitne trakice.',
      'Probati pa po ukusu još malo dosoliti.',
      'Poslužiti toplo.'
    ],
    false,
    false,
    true,
    false
  ),

  new Meal(
    'm7',
    ['c7'],
    'Varivo sa kobasicom',
    'pristupačno',
    'jednostavno',
    'https://domacirecepti.net/wp-content/uploads/2019/01/varivo-sa-kobasicom-2.jpg',
    60,
    [
      '1 glavica crnog luka',
      '100 ml ulja',
      '1 ravna kašika suvog začina',
      '1 kg krompira',
      '200 – 300 gr brokolija',
      '300 gr kobasice',
      'malo bibera i peršunovog lista',
      '1 kašika brašna'
    ],
    [
      'Iseckati crni luk, dodati ulje i 200 ml vode pa na jačoj vatri prodinstati, pa kada voda ispari još malo luk propržiti.',
      'Dok čekate da se luk izdinsta očistiti krompir i iseći ga na kockice.',
      'Kada je luk ispržio dodati krompir, naliti vode da prelije preko krompira pa dodati suvi začin.',
      'Kuvati 15 minuta pa dodati iseckanu kobasicu i brokoli.',
      'Kuvati još 15 minuta.',
      'Umutiti brašno sa pola čaše hladne vode pa dodati i izmešati.',
      'Smanjiti vatru i kuvati još malo.',
      'Vodu dozirate po želji, da li više volite reše ili gušće.',
      'Začiniti biberom i peršunovim listom.'
    ],
    false,
    false,
    false,
    true
  ),

  new Meal(
    'm8',
    ['c8'],
    'Brownie',
    'pristupačno',
    'jednostavno',
    'https://domacirecepti.net/wp-content/uploads/2019/10/brauni-brownie.jpg',
    35,
    [
      '100 gr maslaca',
      '100 gr čokolade',
      '6 jaja',
      '300 gr šećera',
      '150 gr brašna',
      '30 gr kakaoa',
      '1 prašak za pecivo od 10 gr',
      '200 gr seckane čokolade'
    ],
    [
      'Na pari ili u mikrotalasnoj otopiti maslac i čokoladu i ostaviti da se prohladi.',
      'Uključiti rernu na 180 stepeni.',
      'Jajima dodati šećer i mutiti oko 2 minute, da jaja i šećer zapene.',
      'Zatim sipati čokoladu i maslac i opet mutiti.',
      'Pomešati brašno, kakao i prašak za pecivo pa dodati prethodno umućenoj smesi i sve zajedno izmešati.',
      'U tepsiju staviti papir za pečenje pa istresti pola mase za kolač',
      'Preko posuti 100 gr iseckane čokolade pa preliti ostatak mase i na kraju po površini posuti preostalih 100 gr iseckane čokolade.',
      'Staviti da se peče oko 30 minuta.',
      'Pečen kolač prekriti krpom i ostaviti da se ohladi.',
      'Iseći u kocke i poslužiti.'
    ],
    false,
    false,
    true,
    false
  ),

  new Meal(
    'm9',
    ['c9', 'c10'],
    'Sok od narandže i šargarepe',
    'pristupačno',
    'jednostavno',
    'https://cdn.pixabay.com/photo/2016/08/23/15/52/fresh-orange-juice-1614822_960_720.jpg',
    45,
    [
      '4 narandže',
      '4 šargarepe',
      '500gr šećera',
      '2 limuntusa',
      '800ml vode'
    ],
    [
      '2 narandže skroz očistiti od kore, a na dve ostaviti, odseći samo vrhove.',
      'Šargarepu očistiti.',
      'Staviti u blender i šargarepu i narandže, pa izblendirati skoro u kašu.',
      'Ako nemate blender možete da sameljete na mašini za meso, na sitnu rešetku.',
      'Dodati toplu vodu, šećer i limuntu, sve promešati i ostaviti sat vremena da odstoji.',
      'U toku tih sat vremena mešati.',
      'Topla voda će pomoći šećeru da se što pre rastvori.',
      'Procediti kroz krpuniju rešetku prvo, usput stiskati da sav sok izadje.',
      'Drugi put procediti kroz sitnu rešetku, pa usuti u flašu i držati u frižideru jer nema konzervans.'
    ],
    true,
    true,
    true,
    true
  ),
  new Meal(
    'm10',
    ['c8', 'c10'],
    'Pekmez od smokvi',
    'pristupačno',
    'jednostavno',
    'https://cdn.pixabay.com/photo/2018/10/27/08/45/fig-jam-3776031_960_720.jpg',
    60,
    [
      '5 kg smokvi',
      '1 kg šećera',
      'pola konzervansa'
    ],
    [
      'Smokve operite i odstranite im peteljke.',
      'Sameljite ih.',
      'Koliko sitno ćete da ih meljete odaberite sami, da li više volite kad je sve usitnjeno ili da ima komadića.',
      'Stavite u plitku veliku šerpu i na vatru.',
      'Kuvajte 2h, pa posle tog vremena dodajte šećer.',
      'U prva dva sata možete povremeno mešati ali kad dodate šećer morate češće jer će početi da se zgušnjava.',
      'Tegle stavite u rernu da se stezilizuju pa izvadite i napunite pekmezom i zatvorite.',
      'Čuvajte na suvom mestu.'
    ],
    true,
    true,
    true,
    true
  )
];