# Hópverkefni 2

## Lýsing

Í Þessu verkefni forrituðum við heimasíðu með titli "Fræðslumyndbandaleigan".
Ekkert var harðkóðað í html (fyrir utan titil á forsíðu til að hægt væri að stjórna hvernig hann brotnaði í mobile með &shy) en í staðinn var notuð blanda af javascript og css til að útfæra útlit.

## Keyrsla

Til þess að keyra verkefnið þarf fyrst að fara í folder í tölvunni sem maður
vill installa verkefninu í. Því næst er git clone https://github.com/Culmenus/Hverk2-vef1 keyrt í CLI. Svo þarf að fara inn í skránna Hverk2-vef1 og keyra npm install.
Það hleður niður dependencies sem þurfa að vera til staðar í verkefninu. Svo er npm run dev til að keyra heimasíðuna.

## Skipulag

Readme.md er í rót verkefnisins. Þar eru einnig json skjöl. Inni í dist er að finna kóðann sem verður til út frá src með rollup og babel. Fyrirmynd er með myndir af því hvernig verkefnið á að líta út og img inniheldur allar myndir sem voru notaðar. Node modules, sem verður til þegar npm install er keyrt, er með allt nauðsynlegt fyrir node. Src mappan inniheldur javascript file-a, þar á meðal index sem býr til forsíðu og videoplayer sem býr til síðu sem byrtist þegar smellt er á myndbönd. Inni í lib eru svo gagnleg javascript file sem eru notuð í index og videoplayer. Í styles eru scss file sem hanna útlit vefsíðunnar. Videos mappan inniheldur svo þau myndbönd sem eru byrt á heimasíðunni.

## Sass

npm run lint keyrir stylelint á sass og npm run test keyrir bæði stylelint og eslint. 

## Upplýsingar

Verkefnið unnu:

Daníel Helgi Ágústsson, hí notendanafn: dha7, github notendanafn: dha7

Oddur Áskell Thoroddsen, hí notendanafn: oat3 github notendanafn: Culmenus

Tristan Freyr Jónsson, hí notendanafn tfj2, github notendanafn: tfj2

## Project status

Finished.
