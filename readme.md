# Hópverkefni 2

## Lýsing

Í Þessu verkefni forrituðum við heimasíðu með titli "Fræðslumyndbandaleigan".
Ekkert var harðkóðað í html en í staðinn var notuð blanda af javascript og css
til að útfæra útlit.

## Keyrsla

Til þess að keyra verkefnið þarf fyrst að fara í folder í tölvunni sem maður
vill installa verkefninu í. Því næst er skrifað git clone https://github.com/Culmenus/Hverk2-vef1 í cmd prompt. Svo þarf að fara inn í folderinn Hverk2-vef1 og keyra npm install.
Það downloadar dependencies sem þurfa að vera til staðar í verkefninu. Svo er npm run dev til að keyra heimasíðuna.

## Skipulag

Readme.md er í rót verkefnisins. Þar eru einnig json skjöl. Inni í dist er bundle, fyrirmynd er með myndir af hvernig verkefnið á að líta út og imd inniheldur allar myndir sem voru notaðar. Node modules er með allt nauðsynlegt fyrir node. Src mappan inniheldur javascript file-a, þar á meðal index sem býr til forsíðu og videoplayer sem býr til síðu sem byrtist þegar smellt er á myndbönd. Inni í lib eru svo gagnleg javascript file sem eru notuð í index og videoplayer. Í styles eru scss file sem hanna útlit vefsíðunnar. Videos mappan inniheldur svo þau myndbönd sem eru byrt á heimasíðunni.

## Sass

npm run lint keyrir stylelint á sass og npm run test keyrir bæði stylelint og eslint. 

## Upplýsingar

Verkefnið unnu:

Daníel Helgi Ágústsson, hí notendanafn: dha7, github notendanafn: dha7
Oddur Áskell Thoroddsen, hí notendanafn: oat3 github notendanafn: Culmenus
Tristan Freyr Jónsson, hí notendanafn tfj2, github notendanafn: tfj2

## Project status

Finished.
