<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Launchcraft</title>

  <link rel="icon" href="./grass-block.png">
  <link rel="stylesheet" href="./style.css">
</head>

<body>

  <aside class="sidebar">

    <div class="edition selected" onclick="changeEdition('web', this)">
      <img src="./grass-block.png">
      <div>
        <strong>LAUNCHCRAFT :</strong>
        <span>Web Edition</span>
      </div>
    </div>

    <div class="edition" onclick="changeEdition('modded', this)">
      <img src="./grass-block.png">
      <div>
        <strong>LAUNCHCRAFT :</strong>
        <span>Modded Editions</span>
      </div>
    </div>

    <div class="edition" onclick="changeEdition('mobile', this)">
      <img src="./grass-block.png">
      <div>
        <strong>LAUNCHCRAFT :</strong>
        <span>Mobile/Controller</span>
      </div>
    </div>

    <div class="edition" onclick="changeEdition('packs', this)">
      <img src="./grass-block.png">
      <div>
        <strong>LAUNCHCRAFT :</strong>
        <span>Resource Packs</span>
      </div>
    </div>

    <div class="sidebar-bottom">

      <div class="side-link" onclick="showPage('credits')">
        <span class="side-icon">📋</span>
        <span>Credits</span>
      </div>

      <div class="side-link" onclick="showPage('settings')">
        <span class="side-icon">🎚️</span>
        <span>Settings</span>
      </div>

      <div class="version-number">
        v1.0.00
      </div>

    </div>

  </aside>

  <main class="main">

    <header class="header">

      <div>
        <h1 id="launcher-title">Launchcraft</h1>
        <p id="launcher-subtitle">Web Edition</p>
      </div>

      <div class="profile">
        <div class="profile-icon">☻</div>
        <div>
          <strong>Joueur invité</strong>
          <span>Profil local</span>
        </div>
      </div>

    </header>

    <nav class="tabs">

      <button class="tab active" onclick="showPage('play', this)">
        Play
      </button>

      <button class="tab" onclick="showPage('faq', this)">
        FAQ
      </button>

      <button class="tab" onclick="showPage('installations', this)">
        Installations
      </button>

      <button class="tab" onclick="showPage('skins', this)">
        Skins
      </button>

      <button class="tab" onclick="showPage('patchnotes', this)">
        Patch Notes
      </button>

    </nav>

    <section id="play" class="page active">

      <div class="hero">

        <div class="hero-overlay"></div>

        <img
          src="./launchcraft-title.png"
          class="game-logo"
          alt="Launchcraft"
        >

      </div>

      <div class="bottom-bar">

        <div class="release">

          <img src="./grass-block.png">

          <div>
            <strong>Latest release</strong>
            <span id="release-version">1.12.2-u2</span>
          </div>

          <select id="version-select">
            <option value="1.12.2">1.12.2-u2</option>
            <option value="1.8.8">1.8.8</option>
            <option value="1.5.2">1.5.2</option>
          </select>

        </div>

        <button class="play-button" onclick="launchGame()">
          PLAY
        </button>

        <div class="creator">
          Launchcraft
        </div>

      </div>

    </section>

    <section id="faq" class="page information">

      <h2>FAQ</h2>

      <div class="info-box">
        <h3>Qu'est-ce que Launchcraft ?</h3>
        <p>
          Launchcraft est un launcher Minecraft Java-like accessible
          directement depuis ton navigateur.
        </p>
      </div>

      <div class="info-box">
        <h3>Le launcher fonctionne-t-il sur iPad ?</h3>
        <p>
          Oui, l'interface est adaptée aux écrans tactiles.
        </p>
      </div>

    </section>

    <section id="installations" class="page information">

      <h2>Installations</h2>

      <div class="info-box">
        <h3>Versions disponibles</h3>
        <p>Minecraft 1.12.2, 1.8.8 et 1.5.2.</p>
      </div>

    </section>

    <section id="skins" class="page information">

      <h2>Skins</h2>

      <div class="info-box">
        <h3>Skins personnalisés</h3>
        <p>La gestion des skins sera disponible prochainement.</p>
      </div>

    </section>

    <section id="patchnotes" class="page information">

      <h2>Patch Notes</h2>

      <div class="info-box">
        <h3>Version 1.0.00</h3>
        <p>
          Nouvelle interface Launchcraft avec navigation,
          sélecteur de versions et bouton Play.
        </p>
      </div>

    </section>

    <section id="credits" class="page information">

      <h2>Credits</h2>

      <div class="info-box">
        <p>
          Launchcraft — Projet communautaire.
        </p>
      </div>

    </section>

    <section id="settings" class="page information">

      <h2>Settings</h2>

      <div class="info-box">
        <label class="setting">
          <span>Animations</span>
          <input type="checkbox" checked onchange="toggleAnimations(this.checked)">
        </label>
      </div>

    </section>

  </main>

  <div id="game-screen">

    <div class="game-header">
      <strong>Launchcraft — Minecraft</strong>

      <button onclick="closeGame()">
        ✕ Quitter
      </button>
    </div>

    <iframe
      id="game-frame"
      title="Minecraft"
      allow="fullscreen; autoplay">
    </iframe>

  </div>

  <script src="./index.js"></script>

</body>
</html>
