---
layout: page
title: "Saxony-Anhalt State Election 2026"
permalink: /ltw2026-en/
author_profile: true
---

<div class="ltw-article" markdown="1">

<figure class="ltw-header ltw-hero">
  <img src="/images/ltw26_header.jpg" alt="Photo montage: AfD flag at a party convention (left), market square of Naumburg an der Saale (right)">
  <div class="ltw-hero-shade"></div>
  <h1 class="ltw-hero-title">Saxony-Anhalt's 2026 State Election:<br>Where the AfD Is Strong – and Why</h1>
  <figcaption>Photos: <a href="https://www.ccnull.de/foto/afd-flagge-auf-parteitag-geschwenkt-alternative-fur-deutschland-symbolbild/1129246">Marco Verch/ccnull.de</a> (<a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>, cropped) · <a href="https://pxhere.com/en/photo/1182501">pxhere.com</a> (CC0)</figcaption>
</figure>

<div class="ltw-disclaimer">
Draft / test version — text and figures are partly based on the 2021 state election and a poll-based simulation; they will be replaced with the official results after the election on September 6, 2026. This is the text version of a <a href="https://bsky.app/profile/juliusk.bsky.social">thread on Bluesky</a>. A German version is available <a href="/ltw2026/">here</a>.
</div>

<p class="ltw-lead">On Sunday, Saxony-Anhalt elected a new state parliament. What do the results from the state's 218 municipalities tell us about where the parties draw their support – and which explanations for the AfD's rise actually hold up? A look at the data.</p>

## 1. The AfD wins (almost) everywhere

The AfD has become the strongest party in virtually every municipality in the state. The margin over the second-placed party varies considerably, however: it is narrowest in the major cities and parts of the Altmark, and largest – at times exceeding 30 percentage points – in the south of the state.

<figure class="ltw-fig-narrow">
  <img src="/images/ltw26_karte_afd.png" alt="Map: AfD's margin over the second-placed party">
  <figcaption>AfD's margin over the second-placed party, municipal level.</figcaption>
</figure>

The geography is remarkable: contrary to what the popular left-behind-periphery narrative would suggest, the AfD's strongest regions are not the state's most remote areas, but the comparatively well-connected south between Halle, Mansfeld-Südharz, and the Burgenland district.

## 2. The political center barely holds a majority anywhere

The CDU, SPD, FDP, and Greens combined now exceed 50 percent of the vote in only a handful of municipalities. What remains the norm in western German states has become the rare exception in Saxony-Anhalt.

<figure class="ltw-fig-narrow">
  <img src="/images/ltw26_karte_mitte.png" alt="Map: where the political center holds">
  <figcaption>Municipalities where CDU, SPD, FDP, and Greens jointly exceed 50%.</figcaption>
</figure>

## 3. Who votes where? Party strongholds in structural comparison

Comparing each party's strongest 20 percent of municipalities with the rest of the state reveals distinct profiles: the strongholds of the Greens and the SPD are more urban and more academic, those of the CDU more industrial, those of the FDP more affluent. The AfD's strongholds stand out for one thing above all – a markedly below-average share of university graduates.

<figure>
  <img src="/images/ltw26_spider.png" alt="Spider plots: structural profiles of party strongholds">
  <figcaption>Structural characteristics of party strongholds relative to the state median.</figcaption>
</figure>

## 4. What explains the AfD's result – and what does not?

Correlating the AfD's result with some 30 structural characteristics of the municipalities yields a clear picture – one that contradicts common interpretations. Unemployment, child poverty, and the quality of local public services are essentially unrelated to the AfD's result. Educational variables and homeownership are considerably stronger.

By far the strongest predictor, however, is historical: where the far-right DVU and NPD already performed above average in the 1990s and 2000s, the AfD is particularly strong today. The geography of far-right voting in Saxony-Anhalt is older than the AfD itself.

<figure>
  <img src="/images/ltw26_scatter.png" alt="Scatter plots: AfD result and structural characteristics">
  <figcaption>AfD vote share and selected structural characteristics; point size = eligible voters.</figcaption>
</figure>

## 5. Taking stock

Overall, the patterns point less to acute economic hardship than to entrenched political landscapes: the AfD's result follows the political map of the pre-2016 era far more closely than any single structural variable. This does not mean the economy is irrelevant – but where it matters, it operates through education and milieu structures, not through the simple equation of "poor places vote far right".

<div class="ltw-sources">
Data: <a href="https://www.german-elections.com/">GERDA</a> (election results, harmonized municipal boundaries); INKAR (structural characteristics, 2023); 2022 Census; VG250 © BKG. All analyses at the municipal level (n = 218). Plots: Julius Kölzer. The underlying dataset is available upon request.
</div>

<script>
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".ltw-article figure img").forEach(function (img) {
    img.addEventListener("click", function () {
      var overlay = document.createElement("div");
      overlay.className = "ltw-lightbox";
      var big = document.createElement("img");
      big.src = img.src;
      big.alt = img.alt;
      overlay.appendChild(big);
      function close() {
        overlay.remove();
        document.removeEventListener("keydown", onKey);
      }
      function onKey(e) { if (e.key === "Escape") close(); }
      overlay.addEventListener("click", close);
      document.addEventListener("keydown", onKey);
      document.body.appendChild(overlay);
    });
  });
});
</script>

</div>
