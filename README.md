# DT173Gmoment2 & 3
Gulp &amp; NodeJs & SASS

### Har skapat .scss filer för att använda sass som sedan konverteras till css

## Automatiseringsprocessens syfte
Syftet är att förenkla utvecklingsarbetet genom att en del uppgifter utförs automatiskt.

## Paket & verktyg
Har valt paket från npm.com och utgått ifrån att de som är relativt nyuppdaterade och mycket nedladdade fungerar bra.
* gulp-concat används för att slå samman filer automatiskt
* gulp-uglify används för att minimera filerna
* gulp-concat-css används för att slå samman flera css filer
* gulp-clean-css gör att css filerna minifieras
* gulp-imagemin komprimerar bilder

## Systemet & tasks

Arbetsfilerna finns i mappp src, består av html filer och undermappar för JavaScript, bilder och CSS. Automatiseringsprocessen används för att vid uppdateringar i arbetsfilerna kopieras och uppdateras även automatiskt filer färdiga för publicering till mapp pub. Tasks körs för bearbetning av materialet till pub.
* tasks 
  *  copyhtml - kopierar html filer och placerar dem i mapp för publicering 
  *  convertimages - komprimerar bilder och kopierar dem till pup mapp
  *  convertjs - slår samman js filer och minifierar dem 
  *  convertcss - komprimerar och slår samman css filer
  *  watcher - lyssnar efter ändringar som görs och uppdaterar då 
  ### Starta upp
  Git clone https://github.com/marwile/DT173Gmoment2-3.git och installera gulp lokalt i projektet med npm install gulp, kör gulp.

