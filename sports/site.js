const fixtures = [
  { comp: "league", when: "Sat 12:30", home: "Harbor FC", away: "North End", venue: "Docklands" },
  { comp: "league", when: "Sat 15:00", home: "Red Kiln", away: "Vale Athletic", venue: "The Furnace" },
  { comp: "derby", when: "Sat 17:30", home: "Eastbridge", away: "Westbridge", venue: "River Gate" },
  { comp: "cup", when: "Sun 13:00", home: "Lowtown", away: "Harbor FC", venue: "Mill Street" },
  { comp: "league", when: "Sun 15:00", home: "Cinder City", away: "Portside", venue: "Ash Park" },
  { comp: "cup", when: "Sun 18:00", home: "North End", away: "Red Kiln", venue: "The Cut" },
  { comp: "derby", when: "Mon 20:00", home: "Vale Athletic", away: "Cinder City", venue: "Hill Road" }
];

const formations = {
  "4-3-3": {
    blurb: "Width from the wingers, a single pivot behind two eights, fullbacks who can join or stay.",
    note: "Best when the wingers pin the fullbacks and the eights arrive late into the box. The risk is a lonely pivot if both eights step forward.",
    players: [
      ["GK", 50, 90],
      ["LB", 16, 72], ["CB", 38, 76], ["CB", 62, 76], ["RB", 84, 72],
      ["DM", 50, 58], ["CM", 32, 46], ["CM", 68, 46],
      ["LW", 18, 26], ["ST", 50, 18], ["RW", 82, 26]
    ]
  },
  "4-4-2": {
    blurb: "Two banks of four, two strikers who can pin center backs, and wide midfielders who cover both directions.",
    note: "Compact without the ball and simple to coach. The pair up front must link play, or the midfield four is left hitting long balls.",
    players: [
      ["GK", 50, 90],
      ["LB", 16, 72], ["CB", 38, 76], ["CB", 62, 76], ["RB", 84, 72],
      ["LM", 16, 48], ["CM", 38, 52], ["CM", 62, 52], ["RM", 84, 48],
      ["ST", 38, 22], ["ST", 62, 22]
    ]
  },
  "3-5-2": {
    blurb: "Three center backs, wing-backs as the width, and two strikers who can drop into the hole.",
    note: "The wing-backs are the formation. If they are pinned, the team becomes narrow. If they fly forward, the wide center backs have to cover the channels.",
    players: [
      ["GK", 50, 90],
      ["CB", 28, 76], ["CB", 50, 80], ["CB", 72, 76],
      ["LWB", 12, 50], ["CM", 34, 52], ["CM", 50, 44], ["CM", 66, 52], ["RWB", 88, 50],
      ["ST", 40, 22], ["ST", 60, 22]
    ]
  }
};

function setupNav() {
  const button = document.querySelector(".menu-btn");
  const nav = document.querySelector("#site-nav");
  if (!button || !nav) return;
  button.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    button.setAttribute("aria-expanded", String(open));
  });
}

function setupFixtures() {
  const list = document.querySelector("#fixture-list");
  if (!list) return;
  const chips = document.querySelectorAll("[data-filter]");

  function render(filter) {
    const rows = fixtures.filter((game) => filter === "all" || game.comp === filter);
    list.innerHTML = rows.map((game) => `
      <article class="fixture">
        <div>
          <time>${game.when}</time>
          <div class="comp">${game.comp}</div>
        </div>
        <div class="matchup"><span>${game.home}</span><span>${game.away}</span></div>
        <div class="venue">${game.venue}</div>
      </article>
    `).join("");
  }

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((other) => other.setAttribute("aria-pressed", "false"));
      chip.setAttribute("aria-pressed", "true");
      render(chip.dataset.filter);
    });
  });

  render("all");
}

function setupTactics() {
  const pitch = document.querySelector("#pitch");
  const list = document.querySelector("#formation-list");
  if (!pitch || !list) return;
  const blurb = document.querySelector("#formation-blurb");
  const note = document.querySelector("#formation-note");

  function draw(name) {
    const shape = formations[name];
    blurb.textContent = shape.blurb;
    note.textContent = shape.note;
    pitch.querySelectorAll(".player").forEach((node) => node.remove());
    shape.players.forEach(([role, x, y]) => {
      const player = document.createElement("div");
      player.className = "player";
      player.style.left = `${x}%`;
      player.style.top = `${y}%`;
      player.innerHTML = `<b>${role}</b>`;
      pitch.appendChild(player);
    });
    list.querySelectorAll("button").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.shape === name));
    });
  }

  Object.keys(formations).forEach((name) => {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.shape = name;
    button.innerHTML = `<strong>${name}</strong>`;
    button.addEventListener("click", () => draw(name));
    list.appendChild(button);
  });

  draw("4-3-3");
}

setupNav();
setupFixtures();
setupTactics();
