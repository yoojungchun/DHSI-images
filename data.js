/* ============================================================================
   Blue Hours — data
   ----------------------------------------------------------------------------
   To add an artifact, append an object to the artifacts array below. Fields:

     id        unique short slug (letters, numbers, hyphens). Used in the URL.
     image     a local filename (e.g. "covers/foo.jpg") OR a full https:// URL
     title     the work's title
     creator   author / director / writers
     type      display label for the kind of work (e.g. "Memoir", "Novel",
               "Film", "Poetry", "Criticism") — shown above the title
     year      release / publication year (string or number)
     alt       concise alt text — what the image LOOKS like (for screen readers)
     imageDesc a fuller visual description (shown behind the "Image description" toggle)
     reflection 1–3 short paragraphs on the work's relationship to grief.
                Use "\n\n" to separate paragraphs.
     tags      an array of 3–5 tags. The tag vocabulary is grouped below:
                 • GENRE          — Memoir, Essay, Fiction, Poetry, Film,
                                     Musical, Theory
                 • CONDITION      — Suicide, Mental illness
                 • GRIEF (by who died) — Grief: spouse, Grief: child,
                                     Grief: parent, Grief: friend, Grief: sibling
                Reuse these so search/filter stays meaningful. Any new tag should
                be added to tagColors below (unlisted tags fall back to grey-blue).
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
    // GENRE
    "Memoir":          "#5b78b3",
    "Essay":           "#6b6fa8",
    "Fiction":         "#5f7aa0",
    "Poetry":          "#7a6f9e",
    "Film":            "#4f7e8c",
    "Musical":         "#8068a0",
    "Theory":          "#5f6f8a",
    // CONDITION
    "Suicide":         "#6f7790",
    "Mental illness":  "#5f8a8b",
    // GRIEF — qualified by who has died
    "Grief: spouse":   "#a86f7a",
    "Grief: child":    "#9e6f8a",
    "Grief: parent":   "#b3727e",
    "Grief: friend":   "#8a6f9e",
    "Grief: sibling":  "#9e7a86"
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
      tags: ["Memoir", "Grief: spouse"]
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
      tags: ["Memoir", "Grief: child"]
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
      tags: ["Essay", "Mental illness"]
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
      tags: ["Memoir", "Mental illness", "Suicide"]
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
      tags: ["Memoir", "Mental illness"]
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
      tags: ["Film", "Grief: friend", "Suicide"]
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
      tags: ["Musical", "Suicide", "Mental illness"]
    },
    {
      id: "the-friend",
      image: "friend-nunez.jpg",
      title: "The Friend",
      creator: "Sigrid Nunez",
      type: "Novel",
      year: "2018",
      alt: "Book cover built from bold blocks of red, blue, yellow and green that frame a recessed doorway-like space. THE FRIEND is in white caps near the top, 'A NOVEL' beneath it, then SIGRID NUNEZ large in white. A black-and-white spotted Great Dane sits at the bottom centre. A gold National Book Award Winner seal is at the lower left.",
      imageDesc: "Blocks of red, blue, yellow and green frame a doorway; “THE FRIEND / A NOVEL / SIGRID NUNEZ” in white; a spotted Great Dane sits at the foot; gold National Book Award seal, lower left.",
      reflection: "A writer loses her closest friend and mentor to suicide and, against her wishes, inherits his enormous Great Dane. Sharing a small apartment with the grieving animal, she finds that mourning is something the two of them must do together.\n\nA novel about the company of grief — how loss is survived less by understanding it than by the daily, dogged tending of what remains.",
      tags: ["Fiction", "Grief: friend", "Suicide"]
    },
    {
      id: "the-crying-book",
      image: "crying-book.jpg",
      title: "The Crying Book",
      creator: "Heather Christle",
      type: "Essay",
      year: "2019",
      alt: "A pale grey-pink cover. THE CRYING BOOK runs across the top in serif capitals. Below, two large mirrored teardrop shapes — suggesting a face with two dark eyes above — are filled with a deep blue, star-flecked galaxy texture. HEATHER CHRISTLE is in purple capitals at the bottom.",
      imageDesc: "Pale ground; “THE CRYING BOOK” in serif caps up top; two big mirrored teardrops filled with a starry deep-blue galaxy texture, dark eye-shapes above; “HEATHER CHRISTLE” in purple at the foot.",
      reflection: "A book-length essay on weeping — its science, its history, its uses — written in fragments as Christle moves through depression, a pregnancy, and the suicides of fellow poets and friends.\n\nGrief studied through its most ordinary expression: the tear, which explains nothing and relieves nothing, yet keeps arriving.",
      tags: ["Essay", "Mental illness", "Suicide"]
    },
    {
      id: "an-unquiet-mind",
      image: "an-unquiet-mind.jpg",
      title: "An Unquiet Mind",
      creator: "Kay Redfield Jamison",
      type: "Memoir",
      year: "1995",
      alt: "A black cover. 'NATIONAL BESTSELLER' in small type at the top. The title AN UNQUIET MIND is in white, with the word UNQUIET in red. Below: the subtitle 'A Memoir of Moods and Madness' and the author Kay Redfield Jamison. A small black-and-white photograph of a woman resting her head on her hand sits at the lower right, beside a review quote.",
      imageDesc: "Black cover; “AN UNQUIET MIND” (UNQUIET in red); subtitle “A Memoir of Moods and Madness”; Kay Redfield Jamison; a small b/w photo of a woman, head on hand, lower right.",
      reflection: "A psychiatrist who studies manic-depressive illness writes from the other side of the desk, charting her own bipolar disorder — the seductions of mania, the devastations of depression, a near-fatal overdose.\n\nNot grief for the dead but for a self at war with its own mind: the mourning of stability, and the lifelong negotiation simply to stay alive.",
      tags: ["Memoir", "Mental illness", "Suicide"]
    },
    {
      id: "birthday-letters",
      image: "birthday-letters.jpg",
      title: "Birthday Letters",
      creator: "Ted Hughes",
      type: "Poetry",
      year: "1998",
      alt: "A plain dusty-blue cover. 'Ted Hughes' is set large in pale grey serif at the top, and 'Birthday Letters' below it in bright orange serif. The word 'Poetry' appears small at the bottom.",
      imageDesc: "Dusty-blue cover; “Ted Hughes” in pale grey serif; “Birthday Letters” in orange serif beneath; “Poetry” small at the foot.",
      reflection: "Published months before his own death, Hughes broke a thirty-five-year silence with eighty-eight poems addressed to his wife, Sylvia Plath, who took her own life in 1963.\n\nGrief delayed for decades and finally spoken — intimate, unresolved, sent to a 'you' who cannot answer.",
      tags: ["Poetry", "Grief: spouse", "Suicide"]
    },
    {
      id: "camera-lucida",
      image: "camera-lucida.jpg",
      title: "Camera Lucida",
      creator: "Roland Barthes",
      type: "Criticism",
      year: "1980",
      alt: "A mottled blue cover. ROLAND BARTHES in black serif capitals at the top, then 'Camera Lucida' in white. A small line drawing of an old bellows camera on a tripod sits at the right. Below: 'Reflections on Photography' and 'Translated by Richard Howard.'",
      imageDesc: "Mottled blue cover; “ROLAND BARTHES” in black serif caps; “Camera Lucida” in white; a small line drawing of a bellows camera on a tripod; “Reflections on Photography.”",
      reflection: "Barthes's meditation on photography turns, at its heart, on a single picture of his recently dead mother as a child — an image he describes but refuses to reproduce. From it he draws his idea of the photograph as a wound, proof that 'this has been.'\n\nA theory of the image written entirely from inside mourning: the photograph as the place where the dead both return and are confirmed gone.",
      tags: ["Theory", "Grief: parent"]
    },
    {
      id: "kokoro",
      image: "kokoro.jpg",
      title: "Kokoro",
      creator: "Natsume Sōseki",
      type: "Novel",
      year: "1914",
      alt: "A cover showing a traditional Japanese painted screen of green pine trees and scattered autumn leaves on a gold-and-cream ground, bordered in dark green. 'Kokoro' in italic at the top; 'Natsume Soseki' and a translator credit at the foot.",
      imageDesc: "A Japanese painted screen — green pines and falling leaves on gold and cream, dark-green borders; “Kokoro” in italic up top; “Natsume Soseki” below.",
      reflection: "An aging man known only as Sensei carries the secret of a long-ago betrayal: his friend K, in love with the same woman, took his own life. Decades of guilt harden into a withdrawal from the world, passed at last to a young disciple.\n\nA novel about grief as guilt — survival purchased at another's expense, and the slow self-punishment of a conscience that cannot forgive.",
      tags: ["Fiction", "Suicide", "Grief: friend"]
    },
    {
      id: "next-to-normal",
      image: "next-to-normal.jpg",
      title: "Next to Normal",
      creator: "Brian Yorkey & Tom Kitt",
      type: "Musical",
      year: "2009",
      alt: "A purple-toned poster. A pair of wide eyes fills the top, with musical notes and a treble-clef squiggle drawn above them. 'next to normal' is set lowercase in white and orange across the middle, with 'an original musical' beneath. The silhouette of a house roofline runs along the bottom over small credits.",
      imageDesc: "Purple poster; a pair of wide eyes up top with hand-drawn musical notes; “next to normal / an original musical” in white and orange; a house-roofline silhouette and credits below.",
      reflection: "A suburban mother's bipolar disorder proves inseparable from a wound the family won't name: the death of her infant son, whom she still sees and speaks to. The musical follows the treatments — drugs, therapy, electroconvulsive shock — that promise normalcy at the cost of memory.\n\nGrief and mental illness braided together: to be cured here is to forget the child, and the show asks whether that is healing or a second loss.",
      tags: ["Musical", "Grief: child", "Mental illness"]
    },
    {
      id: "say-something-back",
      image: "say-something-back.jpg",
      title: "Say Something Back",
      creator: "Denise Riley",
      type: "Poetry",
      year: "2016",
      alt: "A deep indigo cover. Fine white concentric line-waves ripple across the upper half, like a sound wave or ripples on water. 'Say Something Back' is set in white below, with 'DENISE RILEY' in pale violet capitals beneath.",
      imageDesc: "Deep indigo cover; fine white concentric ripples across the top like a sound wave; “Say Something Back” in white; “DENISE RILEY” in pale violet caps.",
      reflection: "Written after the sudden death of her adult son, Riley's collection refuses the consolations of conventional elegy. Its centrepiece, 'A Part Song,' calls out to the dead and listens for the impossible reply of the title.\n\nGrief as address into silence — speech sent toward someone who can no longer answer, and kept up anyway.",
      tags: ["Poetry", "Grief: child"]
    },
    {
      id: "wednesdays-child",
      image: "wednesdays-child.jpg",
      title: "Wednesday's Child",
      creator: "Yiyun Li",
      type: "Stories",
      year: "2023",
      alt: "A book cover showing an antique landscape painting of a small white poodle by a river under a pale sky, largely obscured by a big soft tan shape entering from the left. 'Wednesday's Child' in handwritten script at the upper right, then 'stories' and 'Yiyun Li, author of The Book of Goose.'",
      imageDesc: "An antique landscape with a small white poodle by a river, partly covered by a large tan shape from the left; “Wednesday's Child / stories / Yiyun Li” in script, upper right.",
      reflection: "Eleven stories written across the years surrounding the suicide of Li's teenage son. Their characters carry losses they cannot set down, tending grief in train stations and foreign cities, in the gaps between what can and cannot be said.\n\nFiction as the place to hold what life made unbearable — mourning dispersed into other lives, other rooms.",
      tags: ["Fiction", "Grief: child", "Suicide"]
    },
    {
      id: "a-grief-observed",
      image: "a-grief-observed.jpg",
      title: "A Grief Observed",
      creator: "C. S. Lewis",
      type: "Memoir",
      year: "1961",
      alt: "A mustard-yellow cover. A black-and-white woodcut of a thorned rose branch with two blooms sits at the top. 'C. S. Lewis' in white handwriting runs across the middle, and 'A GRIEF OBSERVED' in serif capitals at the lower centre.",
      imageDesc: "Mustard-yellow cover; a black-and-white woodcut of a thorny rose branch up top; “C. S. Lewis” in white script; “A GRIEF OBSERVED” in serif caps below.",
      reflection: "Lewis kept these notebooks after the death of his wife, Joy, from cancer — the Christian apologist watching his own faith buckle under loss. 'No one ever told me that grief felt so like fear.'\n\nA raw, doubting record of bereavement, first published under a pseudonym: belief and despair argued out on the page in real time.",
      tags: ["Memoir", "Grief: spouse"]
    },
    {
      id: "subaltern",
      image: "subaltern.jpg",
      title: "Can the Subaltern Speak?",
      creator: "Gayatri Chakravorty Spivak",
      type: "Criticism",
      year: "1988",
      alt: "A dark cover. A figure stands against shadow, the head and shoulders crowned with a dense, tangled nest of bare branches or thorns that hides the face. Small text reads 'Reflections on the History of an Idea,' 'Edited by Rosalind C. Morris,' and the title 'Can the Subaltern Speak?' at the bottom.",
      imageDesc: "Dark cover; a figure whose head is engulfed in a tangle of bare branches and thorns, face hidden; “Reflections on the History of an Idea,” “Edited by Rosalind C. Morris,” title at the foot.",
      reflection: "Spivak's landmark essay asks whether the most marginalised — the colonised, the silenced, the dead — can ever be heard on their own terms, turning on the figure of the widow erased from the record of sati.\n\nIts presence here marks grief's political edge: who is mourned, who is permitted to mourn, and whose losses are left with no voice behind them.",
      tags: ["Theory"]
    },
    {
      id: "gift-of-death",
      image: "gift-of-death.jpg",
      title: "The Gift of Death",
      creator: "Jacques Derrida",
      type: "Philosophy",
      year: "1992",
      alt: "A lavender-purple cover laid over a faint classical engraving of robed figures and an angel. 'JACQUES DERRIDA' in pale capitals at the top, 'THE GIFT OF DEATH' in large white capitals across the lower half, and a translator credit at the bottom.",
      imageDesc: "Lavender cover over a faint classical engraving (robed figures, an angel); “JACQUES DERRIDA” top; “THE GIFT OF DEATH” in white caps below.",
      reflection: "Derrida reads the story of Abraham and Isaac to think about death as the one thing no one can undergo in my place — the gift that singles me out and makes me responsible. Death as what cannot be shared, even by love.\n\nLess elegy than a philosophy of finitude: an inquiry into why my own death, and the deaths of others, place infinite demands on the living.",
      tags: ["Theory"]
    },
    {
      id: "karamazov",
      image: "karamazov.jpg",
      title: "The Brothers Karamazov",
      creator: "Fyodor Dostoevsky",
      type: "Novel",
      year: "1880",
      alt: "A white cover with a portrait of Dostoevsky — bearded and brooding — rendered entirely in scribbled blood-red line, as if drawn in a single tangled thread. 'Fyodor Dostoyevsky' in grey at the top, 'THE BROTHERS KARAMAZOV' in black capitals across the lower half, and a Signet Classics logo.",
      imageDesc: "White cover; a brooding bearded portrait of Dostoevsky drawn in tangled blood-red line; “Fyodor Dostoyevsky” grey at top; “THE BROTHERS KARAMAZOV” black caps below.",
      reflection: "Beneath the murder, the trial, and the arguments over God, Dostoevsky's last novel keeps returning to grief: the death of the boy Ilyusha, whose funeral closes the book with a plea to remember the dead and to love one another.\n\nA vast novel that ends, finally, on the mourning of a child — and on the fragile insistence that tenderness is what survives us.",
      tags: ["Fiction", "Grief: child"]
    },
    {
      id: "one-friday-in-april",
      image: "one-friday-in-april.jpg",
      title: "One Friday in April",
      creator: "Donald Antrim",
      type: "Memoir",
      year: "2021",
      alt: "A pale grey cover whose right half is a mirror image of the left, so the title doubles and reverses down the middle. 'One Friday in April' and 'Donald Antrim' are set in grey serif, with the subtitle 'A Story of Suicide and Survival' in blue script at the foot.",
      imageDesc: "Pale cover split into mirrored halves so the text doubles and reverses; “One Friday in April / Donald Antrim” in grey serif; subtitle “A Story of Suicide and Survival” in blue script.",
      reflection: "Antrim recounts the night he stood on his fire escape, and the hospitalization and recovery that followed, arguing that suicide is not a choice but the terminal stage of an illness — something done to a person, not by them.\n\nA memoir that reframes survival itself: grief for the life nearly lost, written from inside the mind that nearly ended it.",
      tags: ["Memoir", "Mental illness", "Suicide"]
    },
    {
      id: "stay-true",
      image: "stay-true.jpg",
      title: "Stay True",
      creator: "Hua Hsu",
      type: "Memoir",
      year: "2022",
      alt: "An orange cover. STAY TRUE in yellow capitals at the top, HUA HSU in yellow capitals at the bottom. In the centre, a slightly blurred snapshot of a young man photographing the viewer with a film camera, taped to the cover with a paper label reading 'A Memoir.'",
      imageDesc: "Orange cover; “STAY TRUE” yellow caps top, “HUA HSU” yellow caps bottom; a taped, blurred snapshot of a young man aiming a film camera, labelled “A Memoir.”",
      reflection: "A friendship between two college students — different in nearly every way — is cut short when Hsu's friend Ken is murdered in a carjacking. Hsu rebuilds him from memory, mixtapes, and the long argument of their late-night talks.\n\nGrief for a friend, shadowed by a survivor's guilt: an attempt to stay true to someone by getting the record of him exactly right.",
      tags: ["Memoir", "Grief: friend"]
    },
    {
      id: "the-bell-jar",
      image: "the-bell-jar.jpg",
      title: "The Bell Jar",
      creator: "Sylvia Plath",
      type: "Novel",
      year: "1963",
      alt: "A blue-toned cover. The lower legs and feet of a woman in heels stand against shadow. SYLVIA PLATH in pink capitals at the top, THE BELL JAR in large white capitals over the image, and a pink Harper Perennial Modern Classics banner at the foot.",
      imageDesc: "Blue-toned cover; a woman's lower legs and heels against shadow; “SYLVIA PLATH” pink caps top; “THE BELL JAR” large white caps; pink Modern Classics banner.",
      reflection: "Plath's only novel follows Esther Greenwood's descent from a glittering New York internship into depression, a suicide attempt, and electroshock — published a month before Plath's own death.\n\nThe bell jar is her image for depression's airless distortion: the world visible but sealed off, the self slowly suffocating inside it.",
      tags: ["Fiction", "Mental illness", "Suicide"]
    },
    {
      id: "the-furrows",
      image: "the-furrows.jpg",
      title: "The Furrows",
      creator: "Namwali Serpell",
      type: "Novel",
      year: "2022",
      alt: "A cover split into a pale blue sky over deep blue water. THE FURROWS in large red serif capitals, 'AN ELEGY' beneath, and NAMWALI SERPELL in white. A young Black boy's head and shoulders rise from the water at the bottom. A silver award-finalist seal sits at the upper right.",
      imageDesc: "Pale sky over deep-blue water; “THE FURROWS” in red caps, “AN ELEGY,” “NAMWALI SERPELL” in white; a young Black boy emerging from the water at the foot; silver award seal.",
      reflection: "A girl's younger brother vanishes in the ocean when she is twelve; his body is never found. Decades on, she keeps meeting him — or men who might be him — as the novel refuses the closure a recovered body would bring.\n\nAn elegy for ambiguous loss: grief without a body, which loops and recurs because it was never allowed to end.",
      tags: ["Fiction", "Grief: sibling"]
    },
    {
      id: "the-white-album",
      image: "the-white-album.jpg",
      title: "The White Album",
      creator: "Joan Didion",
      type: "Essays",
      year: "1979",
      alt: "A cream cover dominated by overlapping serif type: 'Joan Didion' in deep red and 'The White Album' in blue, the letters interlocking, with two small red dots among them. 'FSG Classics' runs vertically up the left edge.",
      imageDesc: "Cream cover; “Joan Didion” in red and “The White Album” in blue, in large interlocking serif type; “FSG Classics” vertical at the left.",
      reflection: "Didion's essays on California in the late 1960s open with her own psychiatric report — vertigo, nausea, the sense that the stories we tell in order to live had stopped cohering. The private breakdown and the cultural one mirror each other.\n\nNot bereavement but a quieter grief: for narrative itself, for a self and a decade coming apart at once.",
      tags: ["Essay", "Mental illness"]
    },
    {
      id: "the-white-book",
      image: "the-white-book.jpg",
      title: "The White Book",
      creator: "Han Kang",
      type: "Novel",
      year: "2016",
      alt: "A pale grey-white cloth cover. HAN KANG in grey capitals at the top. A small black-and-white photograph in the centre shows a person, face in shadow, holding up a square of white cloth or swaddling. THE WHITE BOOK in grey capitals at the bottom.",
      imageDesc: "Pale grey cloth cover; “HAN KANG” grey caps top; a small b/w photo of a shadowed figure holding up a white cloth or swaddling; “THE WHITE BOOK” grey caps at the foot.",
      reflection: "Built from white things — snow, salt, a baby's gown — Han Kang's meditation circles the older sister who died two hours after birth, the sister whose non-survival made the writer's own life possible.\n\nGrief for someone never met: a mourning conducted in fragments and the colour white, for a life that ended almost before it began.",
      tags: ["Fiction", "Grief: sibling"]
    },
    {
      id: "when-death-takes-something",
      image: "when-death-takes-something.jpg",
      title: "When Death Takes Something from You Give It Back",
      creator: "Naja Marie Aidt",
      type: "Memoir",
      year: "2019",
      alt: "A cream cover scattered with torn fragments of blue watercolour paper, as if a sky had been ripped into pieces. The long title 'WHEN DEATH TAKES SOMETHING FROM YOU GIVE IT BACK' steps down the cover in spaced serif capitals; one small fragment is labelled 'Carl's Book.' NAJA MARIE AIDT and a translator credit sit at the foot.",
      imageDesc: "Cream cover strewn with torn blue watercolour fragments; the title stepping down in serif caps; a fragment marked “Carl's Book”; “NAJA MARIE AIDT” at the foot.",
      reflection: "Aidt's twenty-five-year-old son Carl died after a fall during a psychotic episode. Her book shatters its own form — verse, diary, the elegies of other poets — because ordinary sentences can no longer hold what happened.\n\nGrief for a child that breaks language itself: the title, from a Nordic folk verse, is a bargain struck with death that death will not keep.",
      tags: ["Memoir", "Grief: child"]
    },
    {
      id: "han-malsseum",
      image: "han-malsseum.jpg",
      title: "한 말씀만 하소서 (Say Just One Word)",
      creator: "Park Wan-suh (박완서)",
      type: "Memoir",
      year: "1994",
      alt: "A book cover with a child's crayon-style drawing: a small dark-haired figure crouches at the bottom against scribbled green-blue water, under a yellow-brown sky marked with a faint oval outline. The Korean title 한 말씀만 하소서 is brushed across the top, the author 박완서 runs in dark vertical strokes at the right, and faint handwritten Korean text fills the background.",
      imageDesc: "Crayon-style drawing: a small crouched child against scribbled blue-green water under a yellow-brown sky; Korean title “한 말씀만 하소서” brushed across the top; author “박완서” in dark strokes at the right.",
      reflection: "Park Wan-suh, one of Korea's foremost novelists, wrote this diary in the months after her only son — a young doctor — died suddenly. Its title is a cry flung at God: say just one word, explain this.\n\nA mother's grief that turns to fury at heaven, refusing the pieties offered to the bereaved and demanding an answer that never comes.",
      tags: ["Memoir", "Grief: child"]
    },
    {
      id: "where-reasons-end",
      image: "where-reasons-end.jpg",
      title: "Where Reasons End",
      creator: "Yiyun Li",
      type: "Novel",
      year: "2019",
      alt: "A pale cover printed with faint concentric circles in red and blue that overlap like ripples. YIYUN LI in small red capitals at the top; the title 'Where Reasons End' set in three lines of large blue italic serif.",
      imageDesc: "Pale cover with faint overlapping red-and-blue concentric ripples; “YIYUN LI” small red caps; “Where Reasons End” in large blue italic, three lines.",
      reflection: "Written in the months after her sixteen-year-old son Vincent's suicide, Li's novel stages an impossible conversation: a mother and her dead son talk, argue, and pun across the border between the living and the dead.\n\nGrief as continued dialogue — keeping a child present in language precisely because he is gone from everywhere else.",
      tags: ["Fiction", "Grief: child", "Suicide"]
    },
    {
      id: "mourning-diary",
      image: "mourning-diary.jpg",
      title: "Mourning Diary",
      creator: "Roland Barthes",
      type: "Diary",
      year: "2009",
      alt: "A grey cover. An oversized stylised black 'R' and 'B' (Barthes's initials) sit behind a white band across the middle that reads 'Barthes' in black. 'MOURNING DIARY' in pink capitals below, and 'Translated and with an afterword by Richard Howard' at the foot.",
      imageDesc: "Grey cover; oversized black “R” and “B” behind a white band reading “Barthes”; “MOURNING DIARY” in pink caps below; translator credit at the foot.",
      reflection: "The day after his mother died, Barthes began jotting notes on index cards — some two hundred fragments of raw grief, never meant as a book, gathered and published after his own death.\n\nMourning stripped to its barest notation: not theory now but the diary of a son undone, testing whether sorrow lessens or simply settles in.",
      tags: ["Memoir", "Grief: parent"]
    },
    {
      id: "things-in-nature",
      image: "things-in-nature.jpg",
      title: "Things in Nature Merely Grow",
      creator: "Yiyun Li",
      type: "Memoir",
      year: "2025",
      alt: "A cover that fades from deep green at the top to pale at the bottom. White serif words descend in a single column with small droplet shapes between them — '…in nature merely grow' — ending in one large clear water-drop. YIYUN LI in faint serif at the foot.",
      imageDesc: "Green-to-pale gradient; white serif words falling in a column with droplets between them — “…in nature merely grow” — ending in a large waterdrop; “Yiyun Li” faint at the foot.",
      reflection: "After losing a second child — her son James, to suicide, seven years after Vincent — Li writes from what she calls 'the abyss,' a place from which she refuses both consolation and despair.\n\nGrief past the point where reasons or recovery apply: a mother going on living, clear-eyed, in a world where things in nature merely grow.",
      tags: ["Memoir", "Grief: child", "Suicide"]
    }
  ]
};
