// ============================================================
// Disney Paris May 2026 — in-park reference
// Plan data is the source of truth for the UI. Keep in sync with PLAN.md.
// ============================================================

// Item shape:
//   time, name, land, score (0=logistics, 1-5=ride),
//   desc (one-line), height (cm number or null),
//   loc ("indoor" | "outdoor" | "mixed" | null),
//   reride, slip, verify, notes (extra context)

const PLAN = {
  mon: {
    label: "Monday",
    date: "May 25",
    park: "Disneyland Park",
    sessions: [
      {
        name: "Morning",
        time: "08:30 – 12:00",
        items: [
          { time: "08:30", name: "Peter Pan's Flight", land: "Fantasyland", score: 5, desc: "Suspended dark ride soaring over London and Neverland.", height: null, loc: "indoor", notes: "EMT priority — first ride of trip" },
          { time: "08:50", name: "Dumbo", land: "Fantasyland", score: 3, desc: "Classic spinning elephant ride — kids control the height.", height: null, loc: "outdoor" },
          { time: "09:15", name: "It's a small world", land: "Fantasyland", score: 3, desc: "Indoor boat ride through animatronic global children — A/C, calming.", height: null, loc: "indoor", notes: "A/C, high capacity" },
          { time: "09:50", name: "Big Thunder Mountain", land: "Frontierland", score: 5, desc: "Runaway mine-train coaster around an island in the lake.", height: 102, loc: "outdoor", notes: "PA or Rider Switch. If queue ugly: PA it or skip to Pirates, save BTM for sunset" },
          { time: "10:35", name: "Indiana Jones", land: "Adventureland", score: 2, desc: "Short, intense outdoor coaster with a loop.", height: 140, loc: "outdoor", notes: "Adults only — use Single Rider line, not Rider Switch. Bonus ride, drop without guilt." },
          { time: "11:05", name: "Pirates of the Caribbean", land: "Adventureland", score: 5, desc: "Long indoor boat ride through animatronic pirate scenes — the original.", height: null, loc: "indoor" },
          { time: "11:35", name: "Phantom Manor", land: "Frontierland", score: 2, slip: true, desc: "Indoor haunted-house dark ride in a Western ghost town.", height: null, loc: "indoor", notes: "Designated slip → Wed evening if behind. 6yo judgment call." }
        ]
      },
      {
        name: "Early afternoon",
        time: "13:00 – 14:15",
        items: [
          { time: "13:00", name: "Mickey's PhilharMagic", land: "Fantasyland", score: 5, desc: "Indoor 4D animated film with Donald Duck — strong A/C, ~12 min.", height: null, loc: "indoor", notes: "A/C anchor" },
          { time: "13:35", name: "Buzz Lightyear", land: "Discoveryland", score: 3, desc: "Indoor interactive shooting dark ride — compete on score.", height: null, loc: "indoor" },
          { time: "14:15", name: "Shuttle to hotel", land: "—", score: 0, notes: "Take the free shuttle, not the walk" }
        ]
      },
      {
        name: "Evening",
        time: "18:30 – close",
        items: [
          { time: "~17:30", name: "Disney Stars on Parade", land: "Main St → Fantasyland", score: 3, verify: true, desc: "Daytime parade with a mechanical Maleficent dragon that breathes real fire.", height: null, loc: "outdoor", notes: "VERIFY parade time in app. 15-min duck-in for the dragon. Stand at Hub edge near Discoveryland entrance — decent sightline, easy stroller escape after dragon passes. Don't camp." },
          { time: "19:00", name: "Star Tours", land: "Discoveryland", score: 3, desc: "Indoor flight simulator across Star Wars worlds — multiple variations.", height: 102, loc: "indoor", notes: "Rider Switch" },
          { time: "19:30", name: "Hyperspace Mountain", land: "Discoveryland", score: 3, desc: "Indoor enclosed launched coaster with loops and inversions — intense.", height: 120, loc: "indoor", notes: "Rider Switch — 8yo rides. PA+RS stack candidate." },
          { time: "20:00", name: "Autopia", land: "Discoveryland", score: 3, desc: "Outdoor mini-car circuit — kids drive themselves on a guided track.", height: 132, loc: "outdoor", notes: "8yo drives at 132cm (confirm at gate, passenger fallback pre-loaded). No min height for passenger." },
          { time: "20:30", name: "Big Thunder Mountain", land: "Frontierland", score: 3, reride: true, desc: "Runaway mine-train coaster.", height: 102, loc: "outdoor", notes: "Sunset reride — signature moment" },
          { time: "21:00", name: "Pirates of the Caribbean", land: "Adventureland", score: 1, reride: true, desc: "Indoor boat ride through pirate scenes.", height: null, loc: "indoor" },
          { time: "21:30", name: "Pinocchio or Snow White", land: "Fantasyland", score: 2, desc: "Short indoor classic dark rides — pick whichever has shorter queue.", height: null, loc: "indoor" },
          { time: "21:50", name: "Castle walkthrough + Dragon's Lair", land: "Fantasyland", score: 1, desc: "Self-paced walk through the Castle interior + a dragon animatronic in the basement.", height: null, loc: "indoor" }
        ]
      }
    ]
  },

  tue: {
    label: "Tuesday",
    date: "May 26",
    park: "Disney Adventure World",
    sessions: [
      {
        name: "Morning",
        time: "08:30 – 12:30",
        sessionNote: "PAY-IF-NEEDED DAY. Frozen + Crush are the biggest queue pressure of the trip. Frozen Plan B: if down at 08:30 → A&E meet first → Crush → Ratatouille → retry Frozen via PA.",
        items: [
          { time: "08:30", name: "Frozen Ever After", land: "World of Frozen", score: 5, desc: "Indoor boat ride through Arendelle with full Frozen animatronics — the new marquee ride.", height: null, loc: "indoor", notes: "EMT priority — straight to back of park" },
          { time: "09:00", name: "Anna & Elsa meet", land: "World of Frozen", score: 2, desc: "Indoor character meet-and-greet with the Frozen sisters.", height: null, loc: "indoor", notes: "Conditional on queue" },
          { time: "09:30", name: "Crush's Coaster", land: "Worlds of Pixar", score: 5, desc: "Indoor spinning coaster through the Great Barrier Reef — Finding Nemo theme.", height: 107, loc: "indoor", notes: "BUY PA at 09:25 — do not standby. Single Rider not always open." },
          { time: "10:00", name: "Ratatouille", land: "Worlds of Pixar", score: 4, desc: "Indoor trackless 3D ride — you're rat-sized through Gusteau's restaurant.", height: null, loc: "indoor" },
          { time: "10:50", name: "Cars Road Trip", land: "Worlds of Pixar", score: 2, verify: true, desc: "Outdoor scenic tram tour through Cars-themed Route 66 landscapes.", height: null, loc: "outdoor", notes: "Verify refurb status" },
          { time: "11:25", name: "Toy Soldiers Parachute Drop", land: "Worlds of Pixar", score: 3, verify: true, desc: "Mini drop tower with rope-pull launch — kid-scale thrill.", height: 81, loc: "outdoor", notes: "CLAIMED CLOSED 25–30 May — VERIFY in app. If closed, becomes buffer." },
          { time: "11:45", name: "Slinky Dog Zigzag Spin", land: "Worlds of Pixar", score: 2, desc: "Outdoor family coaster shaped like Slinky Dog from Toy Story.", height: null, loc: "outdoor" },
          { time: "12:10", name: "RC Racer", land: "Worlds of Pixar", score: 2, desc: "U-shaped half-pipe coaster — swings up the sides of a giant ramp.", height: 120, loc: "outdoor", notes: "Rider Switch — 8yo rides. PA+RS stack if queue ugly." }
        ]
      },
      {
        name: "Early afternoon",
        time: "13:30 – 15:00",
        sessionNote: "PA+RS STACKING SESSION. Buy 1 PA for Parent A on AFF → ride → grab Rider Switch pass → Parent B uses RS lane. Repeat on ToT. ~40 min total instead of 80–90.",
        items: [
          { time: "13:30", name: "Spider-Man W.E.B. Adventure", land: "Avengers Campus", score: 5, desc: "Indoor interactive 3D ride — vigorous arm-flailing to 'shoot' webs.", height: null, loc: "indoor", notes: "Whole family. If standby >45 min: PA immediately. Physical — arm workout." },
          { time: "14:00", name: "Avengers Flight Force", land: "Avengers Campus", score: 4, desc: "Indoor launched coaster with inversions — Iron Man + Captain Marvel theme.", height: 120, loc: "indoor", notes: "PA + Rider Switch stack — 8yo rides" },
          { time: "14:35", name: "Tower of Terror", land: "Production Courtyard", score: 2, desc: "Indoor multi-drop tower — themed elevator plunge through The Twilight Zone.", height: 102, loc: "indoor", notes: "LAST in session. 8yo opt-in only if he watched POV at hotel and said yes." },
          { time: "15:00", name: "Shuttle to hotel", land: "—", score: 0 }
        ]
      },
      {
        name: "Evening (hop to Disneyland Park)",
        time: "19:00 – close",
        sessionNote: "EASY MAGIC — wander, don't chase. Lean into ice cream + Main Street + one reride. Not a throughput session.",
        items: [
          { time: "19:15", name: "Meet Mickey Mouse", land: "Fantasyland theater", score: 3, desc: "Indoor character meet in Mickey's dedicated theater — themed setting, more reliable queue than open-air meets.", height: null, loc: "indoor", notes: "Memory-anchor meet for the boys. Queue often 30–60 min — evening lower than midday. PA available if it's bad." },
          { time: "19:30", name: "Le Pays des Contes de Fées", land: "Fantasyland", score: 2, desc: "Outdoor canal-boat tour through detailed fairy-tale miniatures.", height: null, loc: "outdoor" },
          { time: "20:00", name: "Casey Jr.", land: "Fantasyland", score: 2, desc: "Mild outdoor circus-train coaster paired with the fairy-tale miniatures.", height: null, loc: "outdoor", notes: "Cute lit at night" },
          { time: "20:25", name: "Pinocchio or Snow White", land: "Fantasyland", score: 2, desc: "Short indoor classic dark rides.", height: null, loc: "indoor", notes: "Whichever skipped Mon" },
          { time: "20:45", name: "Buzz Lightyear", land: "Discoveryland", score: 1, reride: true, desc: "Indoor shooting dark ride.", height: null, loc: "indoor" }
        ]
      }
    ]
  },

  wed: {
    label: "Wednesday",
    date: "May 27",
    park: "Hybrid — Adventure World → Disneyland Park",
    sessions: [
      {
        name: "Morning (Adventure World)",
        time: "08:30 – 12:00",
        sessionNote: "FLEXIBLE — swap any reride for the boys' emerging favorite from Mon/Tue. Mickey and the Magician 11:10 is the only anchor.",
        items: [
          { time: "08:30", name: "Spider-Man W.E.B. Adventure", land: "Avengers Campus", score: 2, reride: true, desc: "Indoor interactive 3D web-shooter.", height: null, loc: "indoor", notes: "EMT — easy reride" },
          { time: "08:55", name: "Cars Quatre Roues Rallye", land: "Worlds of Pixar", score: 2, desc: "Outdoor spinning ride — junkyard-style cars on a circular track.", height: null, loc: "outdoor" },
          { time: "09:15", name: "Raiponce Tangled Spin", land: "Adventure Way", score: 2, desc: "Outdoor spinning swing ride with Rapunzel theming.", height: null, loc: "outdoor" },
          { time: "09:35", name: "Crush's Coaster", land: "Worlds of Pixar", score: 2, reride: true, desc: "Indoor spinning coaster through the reef.", height: 107, loc: "indoor", notes: "Conditional" },
          { time: "10:00", name: "Ratatouille", land: "Worlds of Pixar", score: 2, reride: true, desc: "Indoor trackless 3D rat's-eye chase.", height: null, loc: "indoor", notes: "Conditional" },
          { time: "10:35", name: "Frozen Ever After", land: "World of Frozen", score: 2, reride: true, desc: "Indoor boat ride through Arendelle.", height: null, loc: "indoor" },
          { time: "11:10", name: "Mickey and the Magician", land: "Production Courtyard", score: 5, desc: "Indoor 30-min live stage show — Mickey as Yen Sid's apprentice.", height: null, loc: "indoor", notes: "45 min including queue — A/C anchor" },
          { time: "12:00", name: "Lunch (Chez Rémy if booked Tue)", land: "—", score: 0 }
        ]
      },
      {
        name: "Early afternoon (TOGETHER → hop)",
        time: "13:00 – 14:30",
        sessionNote: "Recommended: TOGETHER in A/C theater first, then brief hop. Only attempt lower items if energy is unexpectedly high.",
        items: [
          { time: "~13:00", name: "TOGETHER: a Pixar Musical", land: "Studio Theater", score: 4, verify: true, desc: "Indoor live stage show — 12-piece orchestra performing Pixar music across films.", height: null, loc: "indoor", notes: "VERIFY showtime in app. ~35 min, A/C. Only do if not too tired." },
          { time: "13:40", name: "Hop to Disneyland Park", land: "—", score: 0 },
          { time: "14:00", name: "Mickey's PhilharMagic or early hotel", land: "Fantasyland", score: 2, reride: true, desc: "Indoor 4D animated film with Donald Duck.", height: null, loc: "indoor", notes: "If energy holds" },
          { time: "14:10", name: "Alice's Curious Labyrinth", land: "Fantasyland", score: 1, verify: true, desc: "Outdoor topiary maze leading up to the Queen of Hearts' castle.", height: null, loc: "outdoor", notes: "CLAIMED CLOSED 5 May–2 Jul — VERIFY. Even if open: concrete heat trap." },
          { time: "14:20", name: "La Cabane des Robinson", land: "Adventureland", score: 1, desc: "Outdoor giant treehouse climb (Swiss Family Robinson).", height: null, loc: "outdoor", notes: "Stair climb in dead air. Skip unless cool." },
          { time: "14:25", name: "Le Passage Enchanté d'Aladdin", land: "Adventureland", score: 1, desc: "Indoor walk-through diorama telling the Aladdin story.", height: null, loc: "indoor", notes: "Covered, shaded" }
        ]
      },
      {
        name: "Evening (Disneyland Park)",
        time: "18:15 – close",
        items: [
          { time: "18:45", name: "Boys' chosen favorite", land: "TBD", score: 5, desc: "Whatever ride the boys emotionally attached to over Mon/Tue.", height: null, loc: null, notes: "Decide Tue night" },
          { time: "19:30", name: "Phantom Manor", land: "Frontierland", score: 3, desc: "Indoor haunted-house dark ride.", height: null, loc: "indoor", notes: "If slipped from Monday" },
          { time: "20:00", name: "Big Thunder Mountain", land: "Frontierland", score: 3, reride: true, desc: "Runaway mine-train coaster.", height: 102, loc: "outdoor", notes: "Full dark — signature reride" },
          { time: "20:40", name: "Pirates of the Caribbean", land: "Adventureland", score: 1, reride: true, desc: "Indoor pirate boat ride.", height: null, loc: "indoor", notes: "Final reride" },
          { time: "21:10", name: "Fantasyland walk-on", land: "Fantasyland", score: 2, desc: "Whatever short Fantasyland classic still has no queue.", height: null, loc: "indoor", notes: "Whatever's short" },
          { time: "~22:30", name: "Tales of Magic OR Cascade of Lights", land: "Castle / Adventure Bay", score: 3, verify: true, desc: "Pick ONE nighttime show: Castle pyro spectacular, or the new drone show over the lake.", height: null, loc: "outdoor", notes: "VERIFY both showtimes. 21:30 family-state check decides — walking out is not failure. VIEWING SPOTS: Tales of Magic → Hub edge near Discoveryland (trades some frontal view for stroller-friendly escape; avoids Central Plaza crush). Cascade of Lights → entry-side of Adventure Bay (faster exit toward gates after). The show is 360° around the lake so pick the side closest to your exit." }
        ]
      }
    ]
  }
};

// All attractions across both parks — alphabetical reference.
// Rating: 0 skip · 1 bonus · 2 lower · 3 standard · 4 high · 5 must.
const ATTRACTIONS = [
  // ---------- DISNEYLAND PARK ----------
  // Main Street
  { name: "Disneyland Railroad", park: "Disneyland Park", land: "Main Street", height: null, rating: 1, desc: "Steam-train circuit around the park; ~20-min seated semi-shaded break." },
  { name: "Main Street Vehicles", park: "Disneyland Park", land: "Main Street", height: null, rating: 1, desc: "Vintage cars and trams running up and down Main Street — low-capacity novelty." },
  { name: "Horse-Drawn Streetcars", park: "Disneyland Park", land: "Main Street", height: null, rating: 0, desc: "Slow open-air streetcar ride; no payoff over walking the arcades in 35°C." },

  // Frontierland
  { name: "Big Thunder Mountain", park: "Disneyland Park", land: "Frontierland", height: 102, rating: 5, desc: "Runaway mine-train coaster around an island in the lake." },
  { name: "Phantom Manor", park: "Disneyland Park", land: "Frontierland", height: null, rating: 3, desc: "Indoor haunted-house dark ride in a Western ghost town. 6yo judgment call." },
  { name: "Thunder Mesa Riverboat", park: "Disneyland Park", land: "Frontierland", height: null, rating: 2, desc: "Slow ~15-min shaded steamboat loop around Big Thunder; refurbished 2026 with new river scenes — solid heat-break." },
  { name: "Rustler Roundup Shootin' Gallery", park: "Disneyland Park", land: "Frontierland", height: null, rating: 1, desc: "Coin-op shooting gallery (~€2). Not ticket-included. Boys will love it — bring coins." },
  { name: "Pocahontas Indian Village", park: "Disneyland Park", land: "Frontierland", height: null, rating: 1, desc: "Small outdoor playground with totem poles and rope bridges. Heat-exposed." },
  { name: "Frontierland Playground", park: "Disneyland Park", land: "Frontierland", height: null, rating: 1, desc: "Outdoor climb-and-run play area. Heat-exposed — cool morning only." },

  // Adventureland
  { name: "Pirates of the Caribbean", park: "Disneyland Park", land: "Adventureland", height: null, rating: 5, desc: "Long indoor boat ride through animatronic pirate scenes — the original." },
  { name: "Indiana Jones", park: "Disneyland Park", land: "Adventureland", height: 140, rating: 2, desc: "Short, intense outdoor coaster with a loop. Adults only — use Single Rider." },
  { name: "Adventure Isle", park: "Disneyland Park", land: "Adventureland", height: null, rating: 1, desc: "Outdoor island maze of bridges, caves, Skull Rock and Captain Hook's pirate ship. Treasure-hunt overlay added 2025." },
  { name: "La Cabane des Robinson", park: "Disneyland Park", land: "Adventureland", height: null, rating: 1, desc: "Outdoor giant Swiss Family Robinson treehouse climb. Stair climb in dead air — skip unless cool." },
  { name: "Le Passage Enchanté d'Aladdin", park: "Disneyland Park", land: "Adventureland", height: null, rating: 1, desc: "Indoor walk-through diorama telling the Aladdin story. Covered and shaded." },

  // Fantasyland
  { name: "Peter Pan's Flight", park: "Disneyland Park", land: "Fantasyland", height: null, rating: 5, desc: "Suspended dark ride soaring over London and Neverland." },
  { name: "Mickey's PhilharMagic", park: "Disneyland Park", land: "Fantasyland", height: null, rating: 5, desc: "Indoor 4D animated film with Donald Duck — strong A/C, ~12 min." },
  { name: "Meet Mickey Mouse", park: "Disneyland Park", land: "Fantasyland", height: null, rating: 3, desc: "Indoor character meet in Mickey's dedicated theater — themed setting, more reliable than open-air meets." },
  { name: "Dumbo the Flying Elephant", park: "Disneyland Park", land: "Fantasyland", height: null, rating: 3, desc: "Classic spinning elephant ride — kids control the height." },
  { name: "It's a small world", park: "Disneyland Park", land: "Fantasyland", height: null, rating: 3, desc: "Indoor boat ride through animatronic global children — A/C, calming, high capacity." },
  { name: "Pinocchio's Daring Journey", park: "Disneyland Park", land: "Fantasyland", height: null, rating: 2, desc: "Short indoor classic dark ride." },
  { name: "Snow White's Scary Adventures", park: "Disneyland Park", land: "Fantasyland", height: null, rating: 2, desc: "Short indoor classic dark ride." },
  { name: "Le Pays des Contes de Fées", park: "Disneyland Park", land: "Fantasyland", height: null, rating: 2, desc: "Outdoor canal-boat tour through detailed fairy-tale miniatures." },
  { name: "Casey Jr. - Le Petit Train du Cirque", park: "Disneyland Park", land: "Fantasyland", height: null, rating: 2, desc: "Mild outdoor circus-train coaster paired with the fairy-tale miniatures. Cute lit at night." },
  { name: "Sleeping Beauty Castle walkthrough", park: "Disneyland Park", land: "Fantasyland", height: null, rating: 1, desc: "Self-paced walk through the Castle interior with the Dragon's Lair animatronic in the basement." },
  { name: "Sleeping Beauty's Gallery", park: "Disneyland Park", land: "Fantasyland", height: null, rating: 1, desc: "Indoor walk-through on the castle's 2nd floor — stained-glass + tapestries telling the Sleeping Beauty story (~10 min)." },
  { name: "Alice's Curious Labyrinth", park: "Disneyland Park", land: "Fantasyland", height: null, rating: 1, desc: "Outdoor topiary maze leading up to the Queen of Hearts' castle. Claimed closed 5 May – 2 Jul; concrete heat trap regardless." },
  { name: "Mad Hatter's Tea Cups", park: "Disneyland Park", land: "Fantasyland", height: null, rating: 1, desc: "Outdoor spinning tea-cup ride. Nausea risk in heat — cool morning only." },
  { name: "Le Carrousel de Lancelot", park: "Disneyland Park", land: "Fantasyland", height: null, rating: 1, desc: "Classic outdoor carousel with Arthurian theming." },
  { name: "Princess Pavilion", park: "Disneyland Park", land: "Fantasyland", height: null, rating: 0, desc: "2hr+ standby for a single princess meet — never worth it." },

  // Discoveryland
  { name: "Star Tours – The Adventure Continues", park: "Disneyland Park", land: "Discoveryland", height: 102, rating: 3, desc: "Indoor flight simulator across Star Wars worlds — multiple randomized variations." },
  { name: "Hyperspace Mountain", park: "Disneyland Park", land: "Discoveryland", height: 120, rating: 3, desc: "Indoor enclosed launched coaster with loops and inversions — intense." },
  { name: "Buzz Lightyear Laser Blast", park: "Disneyland Park", land: "Discoveryland", height: null, rating: 3, desc: "Indoor interactive shooting dark ride — compete on score." },
  { name: "Autopia", park: "Disneyland Park", land: "Discoveryland", height: 132, rating: 3, desc: "Outdoor mini-car circuit — kids drive themselves on a guided track. 8yo borderline at 132cm; no minimum for passenger." },
  { name: "Les Mystères du Nautilus", park: "Disneyland Park", land: "Discoveryland", height: null, rating: 1, desc: "Indoor walkthrough of Captain Nemo's submarine; freshly refurbished 2023. Brief cool-down — claustrophobic, bail if baby fusses." },
  { name: "Orbitron", park: "Disneyland Park", land: "Discoveryland", height: null, rating: 1, desc: "Da Vinci–themed outdoor spinner above Discoveryland. Dumbo already covers this format." },

  // Shows & parades (DLP)
  { name: "Disney Stars on Parade", park: "Disneyland Park", land: "Main Street → Fantasyland", height: null, rating: 3, desc: "Daytime parade with a mechanical Maleficent dragon that breathes real fire — typically ~17:30." },
  { name: "Disney Tales of Magic", park: "Disneyland Park", land: "Castle", height: null, rating: 3, desc: "Castle nighttime spectacular — pyro-heavy (no fountains during bridge refurb). ~22:30–22:40." },

  // ---------- DISNEY ADVENTURE WORLD ----------
  // World of Frozen
  { name: "Frozen Ever After", park: "Disney Adventure World", land: "World of Frozen", height: null, rating: 5, desc: "Indoor boat ride through Arendelle with full Frozen animatronics — the new marquee ride." },
  { name: "A Celebration in Arendelle", park: "Disney Adventure World", land: "World of Frozen", height: null, rating: 4, desc: "Outdoor daytime show on Arendelle Bay with a life-size robotic Olaf and Frozen songs (~15 min, multiple showings)." },
  { name: "Anna & Elsa meet", park: "Disney Adventure World", land: "World of Frozen", height: null, rating: 2, desc: "Indoor character meet-and-greet with the Frozen sisters." },

  // Worlds of Pixar
  { name: "Crush's Coaster", park: "Disney Adventure World", land: "Worlds of Pixar", height: 107, rating: 5, desc: "Indoor spinning coaster through the Great Barrier Reef — Finding Nemo theme. Single Rider not always open." },
  { name: "Ratatouille: The Adventure", park: "Disney Adventure World", land: "Worlds of Pixar", height: null, rating: 4, desc: "Indoor trackless 3D ride — you're rat-sized through Gusteau's restaurant." },
  { name: "Toy Soldiers Parachute Drop", park: "Disney Adventure World", land: "Worlds of Pixar", height: 81, rating: 3, desc: "Mini drop tower with rope-pull launch — kid-scale thrill. Claimed closed 25–30 May — verify in app." },
  { name: "Cars Road Trip", park: "Disney Adventure World", land: "Worlds of Pixar", height: null, rating: 2, desc: "Outdoor scenic tram tour through Cars-themed Route 66 landscapes." },
  { name: "Cars Quatre Roues Rallye", park: "Disney Adventure World", land: "Worlds of Pixar", height: null, rating: 2, desc: "Outdoor spinning ride — junkyard-style cars on a circular track." },
  { name: "Slinky Dog Zigzag Spin", park: "Disney Adventure World", land: "Worlds of Pixar", height: null, rating: 2, desc: "Outdoor family coaster shaped like Slinky Dog from Toy Story." },
  { name: "RC Racer", park: "Disney Adventure World", land: "Worlds of Pixar", height: 120, rating: 2, desc: "U-shaped half-pipe coaster — swings up the sides of a giant ramp. 8yo only." },
  { name: "Flying Carpets over Agrabah", park: "Disney Adventure World", land: "Worlds of Pixar", height: null, rating: 1, desc: "Standard Aladdin-themed outdoor spinner." },

  // Avengers Campus
  { name: "Spider-Man W.E.B. Adventure", park: "Disney Adventure World", land: "Avengers Campus", height: null, rating: 5, desc: "Indoor interactive 3D ride — vigorous arm-flailing to 'shoot' webs. Physical workout for arms." },
  { name: "Avengers Flight Force", park: "Disney Adventure World", land: "Avengers Campus", height: 120, rating: 4, desc: "Indoor launched coaster with inversions — Iron Man + Captain Marvel theme." },
  { name: "Avengers Campus stunt shows & roaming meets", park: "Disney Adventure World", land: "Avengers Campus", height: null, rating: 1, desc: "Periodic outdoor stunt sequences and roaming Marvel hero meets throughout the day — zero-queue, check app times." },
  { name: "Hero Training Center", park: "Disney Adventure World", land: "Avengers Campus", height: null, rating: 0, desc: "Marvel hero meet via app virtual queue. VQ overhead too high unless boys are Marvel-obsessed." },

  // Production Courtyard
  { name: "The Twilight Zone Tower of Terror", park: "Disney Adventure World", land: "Production Courtyard", height: 102, rating: 2, desc: "Indoor multi-drop tower — themed elevator plunge through The Twilight Zone. 8yo opt-in only after watching POV at hotel." },
  { name: "Mickey and the Magician", park: "Disney Adventure World", land: "Production Courtyard", height: null, rating: 5, desc: "Indoor 30-min live stage show — Mickey as Yen Sid's apprentice. A/C anchor." },
  { name: "Stitch Live!", park: "Disney Adventure World", land: "Production Courtyard", height: null, rating: 0, desc: "Virtual queue friction + technical glitches common — high overhead for one short show." },
  { name: "Minnie's Dream Factory", park: "Disney Adventure World", land: "World Premiere Plaza", height: null, rating: 0, desc: "Musical show with Minnie, Donald, Daisy, Chip 'n Dale (replaced Disney Junior Dream Factory Feb 2026). Designed for under-5s." },

  // Adventure Way
  { name: "Raiponce Tangled Spin", park: "Disney Adventure World", land: "Adventure Way", height: null, rating: 2, desc: "Outdoor spinning swing ride with Rapunzel theming." },

  // Shows (DAW)
  { name: "TOGETHER: a Pixar Musical", park: "Disney Adventure World", land: "Studio Theater", height: null, rating: 4, desc: "Indoor live stage show — 12-piece orchestra performing Pixar music across films (~35 min, A/C)." },
  { name: "Cascade of Lights", park: "Disney Adventure World", land: "Adventure Bay", height: null, rating: 3, desc: "Aquatic drone-fleet nighttime show over the lake — 360° around Adventure Bay." }
];

const SHOWS_LOG = {
  mon: [
    { id: "mon-parade", name: "Disney Stars on Parade", typical: "~17:30", note: "Maleficent dragon — 15-min duck-in" }
  ],
  tue: [],
  wed: [
    { id: "wed-together", name: "TOGETHER: a Pixar Musical", typical: "~13:00", note: "Studio Theater, ~35 min" },
    { id: "wed-magician", name: "Mickey and the Magician", typical: "~11:10", note: "Anchor — 45 min A/C show" },
    { id: "wed-tales", name: "Disney Tales of Magic", typical: "~22:30–22:40", note: "Castle — no fountains, pyro-heavy" },
    { id: "wed-cascade", name: "Cascade of Lights", typical: "~22:30", note: "Adventure Bay — drone show. Alt to Tales of Magic." }
  ]
};

const PRE_TRIP = [
  { id: "pre-tot-pov", text: "Watch Tower of Terror POV with 8yo at hotel — clear yes/no, not in queue" },
  { id: "pre-autopia-pov", text: "Watch Autopia POV with 8yo — preload passenger fallback so a 132cm gate 'no' isn't a meltdown" },
  { id: "pre-park-hopper", text: "Confirm Park Hopper status on tickets" },
  { id: "pre-app", text: "Download Disneyland Paris app" },
  { id: "pre-franprix", text: "Plan Franprix shop on arrival day (Val d'Europe mall, ~15 min shuttle)" }
];

const NIGHT_BEFORE = {
  mon: [
    { id: "nb-mon-emt", text: "Confirm EMT opening Disneyland Park" },
    { id: "nb-mon-weather", text: "Check weather forecast" },
    { id: "nb-mon-parade", text: "Verify Disney Stars on Parade time" },
    { id: "nb-mon-refurbs", text: "Check refurbishment list (Pirates)" }
  ],
  tue: [
    { id: "nb-tue-emt", text: "Confirm EMT opening Adventure World" },
    { id: "nb-tue-weather", text: "Check weather forecast" },
    { id: "nb-tue-refurbs", text: "Check refurbs: Cars Road Trip, Toy Soldiers Parachute Drop" },
    { id: "nb-tue-spiderman", text: "Spider-Man W.E.B. throughput (if >45 min: PA priority)" },
    { id: "nb-tue-frozen", text: "Check Frozen Ever After operational status" }
  ],
  wed: [
    { id: "nb-wed-refurbs", text: "Check refurbs: Pirates, Cars Road Trip, Toy Soldiers, Alice's Curious Labyrinth" },
    { id: "nb-wed-chez-remy", text: "Check Chez Rémy lunch availability for Wed" },
    { id: "nb-wed-together", text: "Verify TOGETHER showtime" },
    { id: "nb-wed-tales", text: "Verify Disney Tales of Magic showtime" },
    { id: "nb-wed-cascade", text: "Verify Cascade of Lights showtime" },
    { id: "nb-wed-decide-show", text: "Decide: Tales of Magic OR Cascade of Lights (pick one)" }
  ]
};

// ============================================================
// State (localStorage-backed)
// ============================================================

const LS = {
  checks: "dp-checks",
  prep: "dp-prep",
  showtimes: "dp-showtimes",
  sort: "dp-sort",
  tab: "dp-tab",
  day: "dp-day"
};

const state = {
  checks: JSON.parse(localStorage.getItem(LS.checks) || "{}"),
  prep: JSON.parse(localStorage.getItem(LS.prep) || "{}"),
  showtimes: JSON.parse(localStorage.getItem(LS.showtimes) || "{}"),
  sortByDrop: JSON.parse(localStorage.getItem(LS.sort) || "{}"),
  tab: localStorage.getItem(LS.tab) || "plan",
  day: localStorage.getItem(LS.day) || autoDay(),
  allSearch: ""
};

function save(key, value) {
  localStorage.setItem(key, typeof value === "string" ? value : JSON.stringify(value));
}

function autoDay() {
  const today = new Date();
  const y = today.getFullYear();
  const m = today.getMonth();
  const d = today.getDate();
  if (y === 2026 && m === 4) { // May
    if (d === 25) return "mon";
    if (d === 26) return "tue";
    if (d === 27) return "wed";
  }
  return "mon";
}

// ============================================================
// Rendering
// ============================================================

function el(tag, props = {}, ...children) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(props)) {
    if (k === "class") node.className = v;
    else if (k === "html") node.innerHTML = v;
    else if (k.startsWith("on")) node.addEventListener(k.slice(2), v);
    else if (k === "checked") node.checked = v;
    else if (k === "value") node.value = v;
    else node.setAttribute(k, v);
  }
  for (const child of children.flat()) {
    if (child == null || child === false) continue;
    node.append(typeof child === "string" ? document.createTextNode(child) : child);
  }
  return node;
}

function scoreChip(score) {
  if (score === 0) return el("span", { class: "chip chip-logistics" }, "—");
  return el("span", { class: `chip chip-${score}` }, String(score));
}

function tagIcons(item) {
  const tags = [];
  if (item.reride) tags.push(el("span", { class: "tag", title: "Reride" }, "🔁"));
  if (item.slip) tags.push(el("span", { class: "tag", title: "Designated slip" }, "🎯"));
  if (item.verify) tags.push(el("span", { class: "tag", title: "Verify in app" }, "⚠️"));
  return tags;
}

function metaBadges(item) {
  const badges = [];
  if (item.height) {
    badges.push(el("span", { class: "badge badge-height", title: `Min height ${item.height}cm` }, `${item.height}cm`));
  } else if (item.score > 0) {
    // explicit "no min" only for rides
    badges.push(el("span", { class: "badge badge-height-none", title: "No height minimum" }, "any"));
  }
  if (item.loc === "indoor") badges.push(el("span", { class: "badge badge-indoor", title: "Indoor / A/C" }, "indoor"));
  if (item.loc === "outdoor") badges.push(el("span", { class: "badge badge-outdoor", title: "Outdoor" }, "outdoor"));
  if (item.loc === "mixed") badges.push(el("span", { class: "badge badge-mixed", title: "Indoor + outdoor" }, "mixed"));
  return badges;
}

function checkKey(dayKey, sessIdx, itemIdx) {
  return `${dayKey}-${sessIdx}-${itemIdx}`;
}

function renderPlan() {
  const container = document.getElementById("plan-content");
  container.innerHTML = "";

  // Day selector
  const daySelect = el("div", { class: "day-selector" });
  for (const dk of ["mon", "tue", "wed"]) {
    const d = PLAN[dk];
    const btn = el("button", {
      class: "day-btn" + (state.day === dk ? " active" : ""),
      onclick: () => { state.day = dk; save(LS.day, dk); renderPlan(); }
    },
      el("span", { class: "day-label" }, d.label),
      el("span", { class: "day-date" }, d.date)
    );
    daySelect.append(btn);
  }
  container.append(daySelect);

  const day = PLAN[state.day];
  container.append(el("div", { class: "park-name" }, day.park));

  // Sessions
  day.sessions.forEach((session, sIdx) => {
    const sortKey = `${state.day}-${sIdx}`;
    const isSorted = !!state.sortByDrop[sortKey];

    let items = session.items.map((item, i) => ({ ...item, _idx: i }));
    if (isSorted) {
      items = [...items].sort((a, b) => {
        if (a.score === 0 && b.score === 0) return a._idx - b._idx;
        if (a.score === 0) return 1;
        if (b.score === 0) return -1;
        return a.score - b.score || a._idx - b._idx;
      });
    }

    const totalReal = session.items.filter(i => i.score > 0).length;
    const checkedReal = session.items.filter((i, idx) =>
      i.score > 0 && state.checks[checkKey(state.day, sIdx, idx)]
    ).length;

    const card = el("section", { class: "session-card" });
    const header = el("header", { class: "session-header" },
      el("div", { class: "session-title" },
        el("h2", {}, session.name),
        el("span", { class: "session-time" }, session.time)
      ),
      el("div", { class: "session-meta" },
        el("span", { class: "session-progress" }, `${checkedReal}/${totalReal}`),
        el("button", {
          class: "sort-btn" + (isSorted ? " active" : ""),
          onclick: () => {
            state.sortByDrop[sortKey] = !isSorted;
            save(LS.sort, state.sortByDrop);
            renderPlan();
          }
        }, isSorted ? "Time order" : "Drop order")
      )
    );
    card.append(header);

    if (session.sessionNote) {
      card.append(el("div", { class: "session-note" }, session.sessionNote));
    }

    const list = el("ul", { class: "item-list" });
    for (const item of items) {
      const key = checkKey(state.day, sIdx, item._idx);
      const checked = !!state.checks[key];
      const isLogistics = item.score === 0;

      const row = el("li", {
        class: "item" + (checked ? " checked" : "") + (isLogistics ? " logistics" : "")
      });

      if (!isLogistics) {
        row.append(el("input", {
          type: "checkbox",
          class: "item-check",
          checked,
          onchange: (e) => {
            state.checks[key] = e.target.checked;
            save(LS.checks, state.checks);
            renderPlan();
          }
        }));
      } else {
        row.append(el("span", { class: "item-spacer" }));
      }

      const body = el("div", { class: "item-body" });
      const top = el("div", { class: "item-top" },
        el("span", { class: "item-time" }, item.time),
        scoreChip(item.score),
        el("span", { class: "item-name" }, item.name),
        ...tagIcons(item)
      );
      body.append(top);

      const badges = metaBadges(item);
      if (badges.length || (item.land && item.land !== "—")) {
        const meta = el("div", { class: "item-meta" });
        if (item.land && item.land !== "—") {
          meta.append(el("span", { class: "item-land" }, item.land));
        }
        badges.forEach(b => meta.append(b));
        body.append(meta);
      }

      if (item.desc) {
        body.append(el("div", { class: "item-desc" }, item.desc));
      }

      if (item.notes) {
        body.append(el("div", { class: "item-notes" }, item.notes));
      }

      row.append(body);
      list.append(row);
    }
    card.append(list);
    container.append(card);
  });

  container.append(
    el("button", {
      class: "reset-btn",
      onclick: () => {
        if (!confirm(`Reset all checks for ${day.label}?`)) return;
        day.sessions.forEach((s, sIdx) => {
          s.items.forEach((_, iIdx) => {
            delete state.checks[checkKey(state.day, sIdx, iIdx)];
          });
        });
        save(LS.checks, state.checks);
        renderPlan();
      }
    }, `Reset ${day.label} checks`)
  );
}

function renderInfo() {
  // Static — nothing dynamic to render
}

// Strip leading articles so "Le Pays..." sorts under P, "The..." under its noun, etc.
function attractionSortKey(name) {
  return name.toLowerCase().replace(/^(le |la |les |l'|the )/, "");
}

function renderAll() {
  const container = document.getElementById("all-content");
  container.innerHTML = "";

  const search = el("input", {
    type: "search",
    class: "all-search",
    placeholder: "Filter attractions…",
    value: state.allSearch
  });
  container.append(search);

  const countEl = el("div", { class: "all-count" });
  container.append(countEl);

  const listEl = el("ul", { class: "all-list" });
  container.append(listEl);

  function renderRows() {
    const term = state.allSearch.trim().toLowerCase();
    const sorted = [...ATTRACTIONS].sort((a, b) =>
      attractionSortKey(a.name).localeCompare(attractionSortKey(b.name))
    );
    const filtered = term
      ? sorted.filter(a =>
          a.name.toLowerCase().includes(term) ||
          a.land.toLowerCase().includes(term) ||
          a.park.toLowerCase().includes(term) ||
          (a.desc && a.desc.toLowerCase().includes(term))
        )
      : sorted;

    countEl.textContent = term
      ? `${filtered.length} of ${ATTRACTIONS.length}`
      : `${ATTRACTIONS.length} attractions`;

    listEl.innerHTML = "";
    if (!filtered.length) {
      listEl.append(el("li", { class: "all-empty" }, "No matches."));
      return;
    }

    for (const a of filtered) {
      const li = el("li", { class: "all-item" });
      const top = el("div", { class: "all-item-top" },
        el("span", { class: `chip chip-${a.rating}` }, String(a.rating)),
        el("span", { class: "all-item-name" }, a.name)
      );
      if (a.height) {
        top.append(el("span", { class: "badge badge-height", title: `Min height ${a.height}cm` }, `${a.height}cm`));
      }
      li.append(top);
      li.append(el("div", { class: "all-item-meta" }, `${a.park} · ${a.land}`));
      if (a.desc) {
        li.append(el("div", { class: "all-item-desc" }, a.desc));
      }
      listEl.append(li);
    }
  }

  search.addEventListener("input", (e) => {
    state.allSearch = e.target.value;
    renderRows();
  });

  renderRows();
}

function renderPrep() {
  const preList = document.getElementById("pre-trip-list");
  preList.innerHTML = "";
  for (const item of PRE_TRIP) {
    const checked = !!state.prep[item.id];
    preList.append(
      el("li", { class: "prep-item" + (checked ? " checked" : "") },
        el("input", {
          type: "checkbox",
          checked,
          onchange: (e) => {
            state.prep[item.id] = e.target.checked;
            save(LS.prep, state.prep);
            renderPrep();
          }
        }),
        el("span", {}, item.text)
      )
    );
  }

  const nbContainer = document.getElementById("night-before-container");
  nbContainer.innerHTML = "";
  for (const dk of ["mon", "tue", "wed"]) {
    const d = PLAN[dk];
    const section = el("section", { class: "nb-day" },
      el("h3", {}, `${d.label} ${d.date} — night before`)
    );
    const list = el("ul", { class: "prep-list" });
    for (const item of NIGHT_BEFORE[dk]) {
      const checked = !!state.prep[item.id];
      list.append(
        el("li", { class: "prep-item" + (checked ? " checked" : "") },
          el("input", {
            type: "checkbox",
            checked,
            onchange: (e) => {
              state.prep[item.id] = e.target.checked;
              save(LS.prep, state.prep);
              renderPrep();
            }
          }),
          el("span", {}, item.text)
        )
      );
    }
    section.append(list);
    nbContainer.append(section);
  }

  const showsContainer = document.getElementById("shows-container");
  showsContainer.innerHTML = "";
  for (const dk of ["mon", "tue", "wed"]) {
    const shows = SHOWS_LOG[dk];
    if (!shows.length) continue;
    const d = PLAN[dk];
    const section = el("section", { class: "nb-day" },
      el("h3", {}, `${d.label} shows`)
    );
    const list = el("ul", { class: "shows-list" });
    for (const show of shows) {
      const value = state.showtimes[show.id] || "";
      list.append(
        el("li", { class: "show-item" },
          el("div", { class: "show-line" },
            el("span", { class: "show-name" }, show.name),
            el("input", {
              type: "text",
              class: "show-time-input",
              placeholder: show.typical,
              value,
              oninput: (e) => {
                state.showtimes[show.id] = e.target.value;
                save(LS.showtimes, state.showtimes);
              }
            })
          ),
          el("div", { class: "show-note" }, show.note)
        )
      );
    }
    section.append(list);
    showsContainer.append(section);
  }
}

// ============================================================
// Tab switching
// ============================================================

function setTab(tab) {
  state.tab = tab;
  save(LS.tab, tab);
  document.querySelectorAll(".tab-content").forEach(s => s.classList.toggle("active", s.id === `tab-${tab}`));
  document.querySelectorAll(".tab-btn").forEach(b => b.classList.toggle("active", b.dataset.tab === tab));
  if (tab === "plan") renderPlan();
  if (tab === "all") renderAll();
  if (tab === "prep") renderPrep();
  window.scrollTo(0, 0);
}

// ============================================================
// Init
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => setTab(btn.dataset.tab));
  });
  setTab(state.tab);
});
