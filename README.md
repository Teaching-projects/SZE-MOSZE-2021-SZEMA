# SZE-MOSZE-2021-SZEMA

<p>
  <h2>Feladat</h2> SZEMA webes alkalmazás fejlesztése modern szoftverfejlesztési eszközökkel
 </p>
 
<h4>Kód védés és prezentációs videó</h4>
https://github.com/Teaching-projects/SZE-MOSZE-2021-SZEMA/tree/master/videos

 
 <p>
 <h4>Rövid feladatleírás</h4>
Webfelület fejlesztése a SZEMA applikációhoz, az oktató felhasználók feladat adatbázishoz való
hozzáférésének megkönnyítése érdekében.
 </p>
 
 <h4>Részfeladatok a fejlesztésben</h4>
 
  * Webes bejelentkező felület létrehozása „Google Sign in” segítségével. Oktatók azonosítása Firebase adatbázisból.
  * Funkció létrehozása az adatbázisban meglévő feladatok listázására, módosítására.
  * Funkció létrehozása új feladatsorok rögzítésére megadott adatformátum alapján.
  * Funkció létrehozása meglévő feladatok tesztekbe rendezésére, melyekhez majd a hallgatók jelszó segítségével férhetnek hozzá az applikáción belül. Ezen tesztek későbbi törlése/archiválása oktatói részről.
  * Extra: Olyan oktatói felület létrehozása, ami képes a hallgatók által elvégzett feladatok
eredményeit összesíteni és a velük kapcsolatos statisztikákat megjeleníteni. 

<h4> Bővebb ismertető </h4>

> Kutatásunk célja a Széchenyi István Egyetemen tanított, Műszaki ábrázolás tantárgy oktatását,
hallgatói részről annak abszolválását kisegítő mobil applikáció fejlesztésének elindítása. A projekt
mobiltelefon alapú platform létrehozásához járul hozzá, ami modularitásából adódóan képes olyan
fejlesztési lehetőségeket biztosítani, melyek lehetővé teszik más műszaki tantárgyak oktatásának és
elsajátításának széles körben való segítését az Egyetemen belül. Ezen túlmutatóan segítséget
jelenthet, a műszaki gyakorlat számára nélkülözhetetlen térlátási képesség kialakításában és
fejlesztésében más oktatási intézményben is.
Jelenleg rendelkezésünkre áll a már elkészített program prototípusa, ami a Flutter fejlesztői környezet
által felkínált megjelenítő eszközökkel képes dolgozni. Az applikáció fejlesztésének kezdete óta
megjelent a Unity grafikai engine Dart kód alapú támogatása. Ez lehetőséget kínál egy újabb,
modernebb megjelenítőkészlet integrálására, ami elősegíti a platform gyorsabb, problémamentesebb
és személyre szabhatóbb futtatását. Az említett új grafikai modul kiterjesztett valóság (AR –
Augmented Reality) támogatással is rendelkezik. Ezen funkció kiaknázása jelentős mértékben képes
hozzájárulni a műszaki tárgyak hallgatóinak térlátásának fejlesztéséhez.
A program elsődleges célja egy olyan mobiltelefonos applikáció létrehozása, amely hatékonyan
hozzájárul az egyetemen folyó műszaki tárgyak oktatásához és tanulásához. Az új platform része, hogy
bővítse az oktatás eszközrendszerét és azt könnyen hozzáférhetővé tegye mindenki részére. Képes lesz
kisegíteni a nappali tagozatos vagy akár távoktatásba jelentkezett hallgatók tanulmányait.
>


<h2>Használt technológiák, eszközök</h2>
  <ul>
    <li>Frontend: JavaScript, HTML, CSS, React front-end keretrendszer</li>
    <li>Backend: Firebase </li>

  </ul>

<h2>Docker</h2>

Workflow-ba épített automatikus image build és push, így tehát a container verzió history-ként is funkcionálhat.

Github actions segítségével a docker imagek automatikusan buildelnek a sikeres hitelesítés után minden master / vagy külön beállított branch push esetén githubon. Verzió növelése esetén újbuli buildelés kerül sor a docker környezetünkbe is, de ha nem állítunk ezen, akkor a docker környezetünkben a régebbi fájlok fognak buildelni és ez elérhetővé válik a containerben. Docker image build csak abban az esetben valósul meg ha, az elozo workflow sikeresen lefutott.


<h2>Doxygen (JSDoc) dokumentáció </h2>

Mivel a frontendként a React keresztrendszert használtuk az alkalmazás fejlesztése során, ezért a dokumentáláshoz megvizsgáltuk a különböző felhasználható alternativákat, mint:
* JSDoc: 
  * A react komponenseit használva készít dokumentációt a kódból.
  * Visual Studio Code-al támogatottság.
  * Az elkészített kódból generál dokumentumot API segítségével.
  * Könnyen konfigurálható, könnyen elérhetők a dokumentumok, amelyek deployolhatók automatikusan workflow segítségével gh-pages-re.

<h2>Unit tesztelés </h2>
Hogyan unit tesztelhetünk react komponenseket?

* Ellenőrizhetők az egyes függvények, meghívódnak-e a bizonyos események bekövetkezésekor.
* Megkaphatjuk a render függvények eredményének ellenőrzései, hogy egyeznek  a komponensek előre definiált státuszaival.
* Komponens gyerekeinek a számának ellenőrzése a kívánt értékekkel.

React komponensek unit teszteléséhez:
### JEST
* Jest: Nyílt forráskódú tesztelő keresztendszer, Facebook hozta létre. Tesztek futtatása parancssorból akár. Snapshot tesztelés funkció.
* A project során lefedettségi tesztelés is építve lett, amely a ci során sikeres unit tesztek lefutását követően ellenőrzí, hogy a teljes kódrészlet hány százaléka van tesztekkel lefedve.


#### Csapattagok:
* Kamondy Tivadar - ZXCJX6 - https://github.com/tivadark
* Banai Alex - https://github.com/Codename14
* Csiszár Gergő - https://github.com/csiszar197
* Zajovics Eszter - https://github.com/zajovicseszter