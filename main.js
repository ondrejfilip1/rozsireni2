console.log("Načteno rozšíření na změnu SPŠMB stránky");

const mladaBoleslav = document.getElementsByClassName("mb");
const tr = document.getElementsByTagName("tr");

const article = document.getElementsByClassName("article");

const articleWrapper = document.getElementsByClassName(
  "col-md-8 col-sm-8 col-md-push-4 col-sm-push-4 upper"
);

const newArticle = `
<div class="article">
            <h2><a href="https://www.spsmb.cz/prijimaci-rizeni/vyhlaseni-prvniho-kola-prijimaciho-rizeni-8/">Brainrot</a></h2>
            <div class="meta">
              <div><span class="material-icons" title="Datum"></span>19.5.2025</div>
              <div><span class="material-icons" title="Autor"></span>Václav Bohata</div>
              <div><span class="material-icons" title="Kategorie"></span><ul class="post-categories">
	<li><a href="https://www.spsmb.cz/prijimaci-rizeni/" rel="category tag">Přijímací řízení</a></li></ul></div>
            </div>
            <div class="text">
              <p>Podle zákona&nbsp;č.561/2004 Sb., o předškolním, základním, středním, vyšším odborném a jiném<br>
vzdělávání (školský zákon) v platném znění, vyhlášky č. 422/2023 Sb., o přijímacím<br>
řízení ke střednímu vzdělávání a vzdělávání v konzervatoři, nařízení vlády č. 211/2010 Sb.<br>
o soustavě oborů vzdělání v základním, středním a vyšším odborném vzdělávání a zákona č.&nbsp;500/2004 Sb., správní řád v platném znění</p>
<p style="text-align: center;">vyhlašuji</p>
<h3 style="text-align: center;"><strong>DRUHÉ KOLO PŘIJÍMACÍHO ŘÍZENÍ PRO ŠKOLNÍ ROK 2025 – 2026<br>
</strong></h3>
<p style="text-align: center;">k dennímu studiu ve Střední průmyslové škole, Mladá Boleslav, Havlíčkova 456 do prvního<br>
ročníku oborů:</p>
<table>
<tbody>
<tr>
<th>Název ŠVP</th>
<th>Název a kód oboru</th>
<th>Počet žáků</th>
</tr>
<tr>
<td><a href="https://www.spsmb.cz/studijni-obory/strojirenstvi/">Strojírenství</a></td>
<td>Strojírenství 23-41-M/01</td>
<td class="center">37</td>
</tr>
<tr>
<td><a href="https://www.spsmb.cz/studijni-obory/informacni-technologie/">Informační technologie</a></td>
<td>Informační technologie 18-20-M/01</td>
<td class="center">11</td>
</tr>
<tr>
<td><a href="https://www.spsmb.cz/studijni-obory/technicke-lyceum/">Technické lyceum</a></td>
<td>Technické lyceum 78-42-M/01</td>
<td class="center">2</td>
</tr>
</tbody>
</table>
<div class="article-more link-more"><a class="more-link" href="https://www.spsmb.cz/prijimaci-rizeni/vyhlaseni-prvniho-kola-prijimaciho-rizeni-8/">Přečíst celý článek »</a></div>
 
            </div>
          </div>
`

window.onload = () => {
  if (mladaBoleslav)
    for (let i = 0; i < mladaBoleslav.length; i++)
      mladaBoleslav[i].innerText = "Stará Boleslav";

  if (window.location.pathname.includes("kontakty")) {
    for (let i = 0; i < tr.length; i++) {
      if (tr[i].innerHTML.includes("Abraham Christian")) tr[i].remove();
    }
  }

  if (article) {
    for (let i = articleWrapper.length; i > 0; i--) {
      articleWrapper[i].innerHTML += newArticle;
    }
  }
};
