const launcherTitle = document.getElementById("launcher-title");
const launcherSubtitle = document.getElementById("launcher-subtitle");
const releaseVersion = document.getElementById("release-version");
const versionSelect = document.getElementById("version-select");

function showPage(pageId, clickedTab = null) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  const selectedPage = document.getElementById(pageId);

  if (selectedPage) {
    selectedPage.classList.add("active");
  }

  document.querySelectorAll(".tab").forEach(tab => {
    tab.classList.remove("active");
  });

  if (clickedTab) {
    clickedTab.classList.add("active");
  } else if (pageId === "play") {
    document.querySelector(".tab").classList.add("active");
  }
}

function changeEdition(edition, selectedElement) {
  document.querySelectorAll(".edition").forEach(item => {
    item.classList.remove("selected");
  });

  selectedElement.classList.add("selected");

  if (edition === "web") {
    launcherTitle.textContent = "Launchcraft";
    launcherSubtitle.textContent = "Web Edition";
    releaseVersion.textContent = "1.12.2-u2";
    versionSelect.innerHTML = `
      <option value="1.12.2">1.12.2-u2</option>
      <option value="1.8.8">1.8.8</option>
      <option value="1.5.2">1.5.2</option>
    `;
  }

  if (edition === "modded") {
    launcherTitle.textContent = "Launchcraft";
    launcherSubtitle.textContent = "Modded Editions";
    releaseVersion.textContent = "Modded Edition";
    versionSelect.innerHTML = `
      <option value="modded">Modded Edition</option>
    `;
  }

  if (edition === "mobile") {
    launcherTitle.textContent = "Launchcraft";
    launcherSubtitle.textContent = "Mobile/Controller";
    releaseVersion.textContent = "Mobile Edition";
    versionSelect.innerHTML = `
      <option value="mobile">Mobile Edition</option>
    `;
  }

  if (edition === "packs") {
    launcherTitle.textContent = "Launchcraft";
    launcherSubtitle.textContent = "Resource Packs";
    releaseVersion.textContent = "Resource Packs";
    versionSelect.innerHTML = `
      <option value="packs">Resource Packs</option>
    `;
  }

  showPage("play");
}

versionSelect.addEventListener("change", function () {
  releaseVersion.textContent = this.options[this.selectedIndex].textContent;
});

function launchGame() {
  const gameScreen = document.getElementById("game-screen");
  const gameFrame = document.getElementById("game-frame");

  gameFrame.src = "https://eaglercraft.ir/";
  gameScreen.classList.add("visible");
}

function closeGame() {
  const gameScreen = document.getElementById("game-screen");
  const gameFrame = document.getElementById("game-frame");

  gameFrame.src = "";
  gameScreen.classList.remove("visible");
}

function toggleAnimations(enabled) {
  if (enabled) {
    document.body.classList.remove("no-animations");
  } else {
    document.body.classList.add("no-animations");
  }
}

showPage("play");
