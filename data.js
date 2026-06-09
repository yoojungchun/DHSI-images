/* ============================================================================
   Blue Hours — data
   ----------------------------------------------------------------------------
   To add an artifact, append an object to ARTIFACTS below. Fields:

     id        unique short slug (letters, numbers, hyphens). Used in the URL.
     image     a local filename (e.g. "covers/foo.jpg") OR a full https:// URL
     title     the work's title
     creator   author / director / writers
     type       "Memoir" | "Essay" | "Film" | "Musical" | "Fiction" ...
     year      release / publication year (string or number)
     alt       concise alt text — what the image LOOKS like (for screen readers)
     imageDesc a fuller visual description (shown behind the "Image description" toggle)
     reflection 1–3 short paragraphs on the work's relationship to grief.
                Use "\n\n" to separate paragraphs.
     tags      an array of 3–5 tag names. Any tag you use should also appear in
                TAG_COLORS below so it gets a colour (unlisted tags get a muted
                fallback colour automatically).

   TAG_COLORS maps a tag name to a hex colour. Reuse tags across items so the
   filters stay meaningful. Add new tags + colours here as your library grows.
   ========================================================================== */

window.BLUE_HOURS = {

  /* Site headings — edit these freely; they appear on the library landing page.
     (Each artifact's own title / creator / type are edited per item below.) */
  site: {
    eyebrow:           "A Reading List in the Key of Loss",
    title:             "Blue Hours",
    subtitle:          "Artifacts of Grief",
    searchPlaceholder: "Search titles, creators, descriptions, tags…"
  },

  tagColors: {
    // form
    "Memoir":        "#5b78b3",
    "Essay":         "#6b6fa8",
    "Film":          "#4f7e8c",
    "Musical":       "#8068a0",
    "Fiction":       "#5f7aa0",
    // who / relationship
    "Spouse":        "#a86f7a",
    "Child":         "#9e6f8a",
    "Parent":        "#b3727e",
    "Friend":        "#6f8a7a",
    "Self":          "#8a6f6f",
    // cause
    "Sudden death":  "#707a8f",
    "Suicide":       "#6f7790",
    "Illness":       "#5f8a8b",
    "Accident":      "#5f7a8a",
    // inner experience
    "Mental illness":"#6f8a8a",
    "Memory":        "#8a7f5f",
    "Mortality":     "#6f6f8a",
    "Guilt":         "#7a6a6a",
    "Isolation":     "#6f7787",
    "Heartbreak":    "#a8727e",
    "Longing":       "#8a6f9e",
    "Caregiving":    "#5f7a8a",
    "Adolescence":   "#7f8a5f",
    "Reading":       "#6f8a8a",
    "Magical thinking": "#6b6fa8"
  },

  artifacts: [
    {
      id: "magical-thinking",
      image: "7815.jpg",
      title: "The Year of Magical Thinking",
      creator: "Joan Didion",
      type: "Memoir",
      year: "2005",
      alt: "Book cover on a cream background. The author name JOAN DIDION is set in tall, widely spaced black serif capitals, with a single letter rendered in blue. Below, the title THE YEAR OF MAGICAL THINKING runs in three stacked lines. A gold National Book Award seal sits in the top-right corner.",
      imageDesc: "Cream cover; “JOAN DIDION” in tall spaced black serif caps (one letter blue); title in three stacked lines; gold National Book Award seal, top right.",
      reflection: "Didion's husband died of a heart attack at the dinner table while their daughter lay in a coma. This is the chronicle of the year that followed — and of the irrational certainty, the magical thinking, that if she kept his shoes he would need them to come back.\n\nGrief here is not a feeling but a derangement of logic: the mind bargaining against a fact it cannot hold.",
      tags: ["Memoir", "Spouse", "Sudden death", "Caregiving", "Magical thinking"]
    },
    {
      id: "blue-nights",
      image: "10252302.jpg",
      title: "Blue Nights",
      creator: "Joan Didion",
      type: "Memoir",
      year: "2011",
      alt: "A pale, icy-blue book cover, almost white. The author name JOAN DIDION fills the upper half in large blue serif capitals. A small line reads 'author of THE YEAR OF MAGICAL THINKING.' The title BLUE NIGHTS sits in the lower half in deep navy capitals.",
      imageDesc: "Near-white, icy-blue cover; “JOAN DIDION” large in blue serif caps up top; small “author of The Year of Magical Thinking”; “BLUE NIGHTS” in navy caps below.",
      reflection: "A companion to the loss of her husband: now Didion writes through the death of her daughter, Quintana. The title names the long luminous twilights near the solstice — the blue hours when the light seems endless, just before it fails.\n\nIt is a book about how brightness fades: of children, of memory, of one's own body. Mourning braided with the fear of one's own ending.",
      tags: ["Memoir", "Child", "Mortality", "Memory"]
    },
    {
      id: "bluets",
      image: "6798263.jpg",
      title: "Bluets",
      creator: "Maggie Nelson",
      type: "Essay",
      year: "2009",
      alt: "A deep midnight-blue cover with a cloudy, watery texture flecked with faint pale specks, like a night sky or deep ocean. A solid white square floats slightly above center. Near the lower edge, small blue text reads 'MAGGIE NELSON' on the left and 'BLUETS' on the right.",
      imageDesc: "Midnight-blue cover with a cloudy, star-flecked watery texture; a blank white square floats near center; small text below reads “MAGGIE NELSON” (left) and “BLUETS” (right).",
      reflection: "Two hundred and forty numbered fragments addressed to the color blue — and underneath the devotion, two woundings: the end of a love affair, and a dear friend left paralyzed by a fall.\n\nNelson asks what it means to fall in love with a color, and answers something harder: how we attach ourselves to what cannot be kept, and call that attachment a life.",
      tags: ["Essay", "Heartbreak", "Friend", "Longing", "Accident"]
    },
    {
      id: "dear-friend",
      image: "images-1.jpeg",
      title: "Dear Friend, from My Life I Write to You in Your Life",
      creator: "Yiyun Li",
      type: "Memoir",
      year: "2017",
      alt: "A book cover washed in teal and green watercolor that pools darker toward the bottom edge. The author's name, YIYUN LI, is printed very large in dark serif letters spanning the height of the cover. Interwoven in white italic script is the title: 'Dear Friend, from My Life I Write to You in Your Life.'",
      imageDesc: "Teal-and-green watercolor wash, darker at the foot; “YIYUN LI” very large in dark serif; the title woven through in white italic script.",
      reflection: "Written across two years of hospitalization for suicidal depression, Li turns to the writers she loves — Mansfield, Stefan Zweig — as a way of staying in the world. It is a grief turned inward: the mourning of a self that does not want to remain.\n\nLanguage, here, is not consolation but tether — the thin thread by which one is held to living.",
      tags: ["Memoir", "Mental illness", "Suicide", "Self", "Reading"]
    },
    {
      id: "bibliophobia",
      image: "bibliophobia.jpeg",
      title: "Bibliophobia",
      creator: "Sarah Chihaya",
      type: "Memoir",
      year: "2025",
      alt: "A flat green book cover. The word BIBLIOPHOBIA is repeated several times across the top in pale cream serif type, the lines tilting and tumbling as if falling over. A blurb sits mid-cover. At the bottom, 'SARAH CHIHAYA' appears in pink, and 'A MEMOIR' is printed upside-down at the very bottom edge.",
      imageDesc: "Flat green cover; “BIBLIOPHOBIA” repeated in pale cream serif at the top, lines tilting as if toppling; “SARAH CHIHAYA” in pink near the foot; “A MEMOIR” printed upside-down at the bottom edge.",
      reflection: "A memoir of the books that made Chihaya — and of the breakdown that reading could neither prevent nor explain. She traces a lifelong belief that the right book might finally name her, and the collapse that followed when none did.\n\nGrief for an imagined self: the one the stories promised, who never arrived.",
      tags: ["Memoir", "Mental illness", "Self", "Reading"]
    },
    {
      id: "close",
      image: "images-2.jpeg",
      title: "Close",
      creator: "Lukas Dhont",
      type: "Film",
      year: "2022",
      alt: "A film poster. Two fair-haired boys of about thirteen embrace; one rests his face against the other's shoulder, his pale green eyes turned toward the camera over a red sweater. The mood is tender and close. The word CLOSE is set in thin white spaced capitals across the lower third, above five-star review quotes and a Cannes 2022 laurel in the corner.",
      imageDesc: "Two fair-haired boys (~13) embrace; one rests against the other's shoulder, green eyes to camera over a red sweater. “CLOSE” in thin white spaced caps in the lower third; star-rating quotes and a Cannes 2022 laurel.",
      reflection: "Two thirteen-year-old boys share a friendship of rare tenderness — until the gaze of others makes them flinch from it, and one pulls away. What follows is a sudden, irreversible loss, and the survivor's wordless grief and guilt.\n\nA study of mourning at an age with no language for it: the ache of having drawn back a moment too far.",
      tags: ["Film", "Friend", "Suicide", "Adolescence", "Guilt"]
    },
    {
      id: "dear-evan-hansen",
      image: "images-3.jpeg",
      title: "Dear Evan Hansen",
      creator: "Pasek & Paul / Steven Levenson",
      type: "Musical",
      year: "2016",
      alt: "A musical poster, cropped close on a teenager's torso in a blue horizontally striped polo shirt against a paler blue ground. One forearm is wrapped in a white plaster cast. Bold white block letters across the chest read DEAR EVAN HANSEN.",
      imageDesc: "Cropped close on a teenager's torso in a blue horizontally striped polo against pale blue; one forearm in a white plaster cast; bold white block letters read “DEAR EVAN HANSEN.”",
      reflection: "After a classmate's suicide, an anxious, invisible teenager is mistaken for the dead boy's only friend — and lets the lie grow, because for the first time a grieving family lets him belong.\n\nA story about grief as a thing the living use: how mourning can be borrowed, performed, and ache all the same. The cast on his arm, a signature no one came to write.",
      tags: ["Musical", "Suicide", "Adolescence", "Isolation"]
    }
  ]
};
