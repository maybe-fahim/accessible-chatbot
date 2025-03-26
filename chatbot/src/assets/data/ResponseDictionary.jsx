import SynonymConfig from "./SynonymMap"; // Your synonym mappings

const ResponseDictionary = new Map();

// Define central response arrays
const footballResponses = [
  "Football is a powerful sport enjoyed around the world.",
  "Whether it's the Premier League or a local match, football unites fans.",
  "From strategy to rivalry, football brings people together in remarkable ways."
];

const musicResponses = [
  "Music is the universal language of emotion.",
  "Whether you're into jazz, rock, or lo-fi — music is everywhere.",
  "Melodies can lift spirits, preserve memories, and soothe even the most chaotic days."
];

const weatherResponses = [
  "Weather affects how we live and feel every day.",
  "From rain to sunshine, weather has a major role in our moods and plans.",
  "Understanding weather patterns helps us prepare, travel, and even plan agriculture globally."
];

const mathsResponses = [
  "Maths is the foundation of logic and reason.",
  "From calculating your grocery bill to sending rockets into space, mathematics is behind almost every major and minor decision in our lives. It’s not just about numbers; it’s about problem-solving, patterns, and understanding how the world works at a deeper level.",
  "Equations still haunt me."
];

const scienceResponses = [
  "Science is literally the reason we have smartphones, space travel, and vaccines. It’s wild how far human curiosity can take us.",
  "Experiments are fun until you forget your safety goggles.",
  "Through observation, questioning, and testing, science helps us understand the universe piece by piece."
];

const englishResponses = [
  "English is more than just reading books—it's about learning how to express ideas clearly, think critically, and understand different perspectives.",
  "Why is 'colonel' pronounced like that?",
  "Reading a great story can transport you to another world entirely."
];

const historyResponses = [
  "Those who don't learn from history are doomed to repeat it.",
  "History isn’t just about memorizing dates—it's about understanding the causes, consequences, and stories behind everything that shaped our world.",
  "From ancient empires to modern revolutions, history is full of drama, triumph, failure, and lessons waiting to be uncovered."
];

const geographyResponses = [
  "Geography helps us understand not just where things are, but why they’re there and how they interact with everything else.",
  "Mountains, rivers, cities, borders—it’s all geography, and it’s everywhere you look.",
  "I still remember coloring maps in school like it was an Olympic sport."
];

const computerResponses = [
  "Computers have gone from room-sized machines to powerful tools that fit in our bags—and pockets. They're changing how we live, work, and even think.",
  "Nothing tests your patience like a frozen screen right before a deadline.",
  "A computer is basically just a really fast calculator that also lets you watch cat videos."
];

const artResponses = [
  "Art gives people a voice when words fall short. It’s emotion in form—whether that’s on a canvas, in clay, or through digital design.",
  "I once drew a stick figure and felt like Picasso.",
  "From cave walls to NFTs, art has always found a way to evolve with humanity."
];

const foodResponses = [
  "Food is more than just fuel—it's culture, memory, family, and emotion. The smell of something cooking can transport you to a different time or place, and sharing a meal can say what words sometimes can't.",
  "Honestly, nothing hits quite like your favorite meal after a long day. Instant mood-lifter.",
  "I could talk about food all day, eat it all night, and still wake up thinking about breakfast. It’s a love story."
];

const spanishResponses = [
  "Learning Spanish opens doors to over 20 countries and hundreds of millions of people—it’s one of the most widely spoken languages in the world.",
  "¿Dónde está la biblioteca?",
  "From music and movies to street conversations and travel, Spanish surrounds us more than we realize. It’s rhythmic, expressive, and incredibly useful."
];

const frenchResponses = [
  "French is often called the language of love, but it’s also the language of diplomacy, art, and some seriously good pastries.",
  "Je ne sais quoi—whatever that means, it sounds fancy.",
  "Learning French connects you to a rich cultural history, from philosophy and fashion to cuisine and cinema. Plus, ordering food in Paris just hits different when you say it in fluent French."
];

const italianResponses = [
  "Italian isn’t just a language—it’s music, emotion, and hand gestures all wrapped into one beautiful, expressive package.",
  "Pasta, passion, and perfectly rolled R’s.",
  "From Dante’s poetry to modern cinema, Italian has always had a way of making even the simplest things sound dramatic and beautiful. And let’s be honest—everything just sounds cooler in Italian."
];

const movieResponses = [
  "There’s something magical about sitting in a dark room, surrounded by strangers, all experiencing the same story unfold on a giant screen.",
  "Popcorn, blanket, and a good movie—perfect night in.",
  "Movies let us live a thousand lives, feel emotions we didn’t know we had, and escape reality for a little while. Whether it’s a tearjerker, a comedy, or a mind-bending thriller, there’s always something that sticks with you long after the credits roll."
];

const animeResponses = [
  "Anime isn’t just cartoons—it’s an entire universe of stories, emotions, and art styles that can rival any live-action series or film.",
  "One minute it’s wholesome, next minute you're emotionally wrecked. Classic anime move.",
  "From action-packed shonen battles to slow, emotional slice-of-life moments, anime has something for everyone. It's a global phenomenon that’s inspired millions with its creativity, characters, and unforgettable soundtracks."
];

const oceanResponses = [
  "The ocean covers more than 70% of our planet and we’ve only explored a fraction of it. It’s like a whole other world down there.",
  "Salt in the air, peace in the soul.",
  "From crashing waves to mysterious depths, the ocean holds power, beauty, and secrets we’ve barely begun to understand. It humbles you, heals you, and makes you feel small in the best way possible."
];

const riverResponses = [
  "Rivers have shaped civilizations, carved landscapes, and carried stories for centuries.",
  "Peace is sitting by a quiet river, no phone, just the sound of water.",
  "A river starts as a trickle and grows, winding its way through mountains, valleys, and cities—always moving, always changing, yet somehow timeless in its flow."
];

const mountainResponses = [
  "Mountains remind us how small we are—and how high we can climb.",
  "Snow-capped peaks, fresh air, and views that make the climb totally worth it.",
  "Whether you're scaling one or just staring in awe from below, mountains have this incredible way of grounding you while also inspiring something bigger. They've challenged explorers, shaped weather patterns, and become symbols of strength across cultures."
];

const fruitResponses = [
  "Fruit is nature’s candy—sweet, colorful, and packed with vitamins.",
  "Mangoes are elite. I don’t make the rules.",
  "From crunchy apples to juicy watermelons, fruit brings flavor, nutrition, and refreshment to the table. It’s one of the simplest pleasures that also happens to be ridiculously good for you. Win-win."
];

const vegetableResponses = [
  "Vegetables aren’t just side dishes—they’re full of nutrients, flavor, and color, and they power some of the healthiest diets in the world.",
  "Broccoli is just tiny trees. Still delicious though.",
  "Whether you love them roasted, steamed, or raw, vegetables are the unsung heroes of any meal. They’ve got crunch, fiber, and endless versatility."
];

const desertResponses = [
  "The desert is quiet, vast, and filled with a beauty that reveals itself slowly.",
  "So much sand. Everywhere. Forever.",
  "From scorching days to freezing nights, deserts are extreme and unforgiving—yet full of resilience, hidden wildlife, and skies so clear they don’t even look real."
];

const jungleResponses = [
  "Thick trees, loud creatures, and green everywhere—that’s the jungle.",
  "The jungle breathes with life. Every step is a new sound, a hidden creature, a mystery waiting to be found.",
  "If you’ve ever stood in a jungle, you know it feels like the planet is alive all around you. Humid air, buzzing insects, and the sense that anything could be watching from the trees."
];

const animalResponses = [
  "Animals make the world feel more alive—whether they’re pets at home or wildlife in the wild.",
  "Cute pets? Yes. Always yes.",
  "From the tiniest ants to the largest whales, animals come in all shapes and sizes, each with a role to play in nature. Some become companions, others symbols, and many remain mysterious and untamed."
];

const moneyResponses = [
  "Money doesn’t buy happiness, but it sure helps pay for things that make life easier.",
  "Broke one day, billionaire in my dreams.",
  "From ancient bartering to digital currencies, money has always shaped how we live, trade, and think about value. It drives ambition, causes stress, and fuels nearly everything around us—yet it’s still just paper, metal, or numbers on a screen."
];

const soundResponses = [
  "Sound is energy in motion—vibrations that we turn into language, music, and meaning.",
  "Silence is also a kind of sound, if you really think about it.",
  "Whether it's the crash of waves, a favorite song, or someone calling your name, sound can trigger emotions, memories, or even action. It connects us in powerful ways we don’t always notice."
];

const countriesResponses = [
  "There are nearly 200 countries in the world, each with its own culture, history, and vibe. It’s wild how different—and yet similar—we all are.",
  "Flags, borders, and different snacks.",
  "Traveling to different countries is one of the best ways to learn—about people, language, and yourself. Every place tells a story."
];

const carResponses = [
  "Cars give you freedom—the open road, music up, windows down. It’s a whole vibe.",
  "I still don’t know what half the dashboard lights mean.",
  "From sleek sports cars to beat-up old hatchbacks, every car has a story. It's not just about getting from A to B—it's about how you feel along the way."
];

const gameResponses = [
  "Games bring people together—whether you're competing, cooperating, or just laughing through the chaos.",
  "One more round. Just one. (Five hours later...)",
  "From childhood board games to high-stakes esports, games are how we learn, connect, and sometimes escape. They're part strategy, part fun, and always a bit addictive."
];

const natureResponses = [
  "Nature doesn’t ask anything from us, yet gives us everything—peace, beauty, and balance.",
  "Birds chirping, wind blowing, sun shining. Instant reset.",
  "Whether it’s towering forests, quiet lakes, or star-filled skies, nature has a way of reminding us what really matters. Step outside and it’s like the world exhales."
];

const spaceResponses = [
  "Space is the final frontier—vast, mysterious, and completely mind-blowing.",
  "Black holes are terrifying and cool at the same time.",
  "Every star we see is light from the past. Space stretches beyond imagination, and the more we learn, the more questions we find. It’s both humbling and inspiring."
];

const clothingResponses = [
  "Clothing is how we express who we are without saying a word.",
  "Nothing beats that fresh hoodie feeling.",
  "From casual fits to formal looks, clothing blends comfort, identity, and creativity. What we wear often reflects how we feel—or how we want to feel."
];

const bookResponses = [
  "Books are time machines made of paper and ink.",
  "One more chapter turns into five. Every. Single. Time.",
  "Whether it's fiction that pulls you into another world or non-fiction that opens your mind, books are powerful tools for imagination, learning, and escape. There’s nothing quite like getting lost in a good one."
];

const schoolResponses = [
  "School isn’t just about grades—it’s about growth, discovery, and figuring out who you are.",
  "Forgot my homework again. Classic.",
  "From early morning alarms to group projects and awkward presentations, school is where friendships are made, ideas are sparked, and memories stick for a lifetime."
];

const workResponses = [
  "Work can be exhausting, but there's nothing like that feeling of getting stuff done.",
  "Is it Friday yet?",
  "Whether it's a 9-to-5, freelance hustle, or creative passion, work takes up a huge chunk of our lives. Finding meaning in it—or at least some balance—is the real challenge."
];

const familyResponses = [
  "Family isn’t always perfect, but it’s the foundation we stand on.",
  "Big family dinners hit different.",
  "Family means love, chaos, support, laughter, and sometimes arguments—but at the end of the day, they’re the people who’ve seen us grow and still choose to stick around. That’s something special."
];

const holidayResponses = [
  "Holidays are those magical pauses in life where everything slows down and good memories take center stage.",
  "Sunscreen, snacks, suitcase. Let’s go.",
  "Whether it’s a beach escape, a cozy cabin, or just a few days of sleeping in, holidays give us a much-needed reset. It’s about rest, adventure, or sometimes doing absolutely nothing—and loving it."
];

const beachResponses = [
  "Sand between your toes, waves in your ears, and zero worries—that’s the beach life.",
  "I came for the sun but stayed for the snacks and naps.",
  "Whether you're surfing, swimming, or just staring at the horizon, the beach has this calm, timeless energy that makes everything feel a little lighter."
];

const sportResponses = [
  "Sport builds discipline, strength, and resilience—on and off the field. It teaches you how to lose with grace, win with humility, and push yourself past your limits. Whether you're playing solo or as a team, there's always something deeper than just the score.",
  "Nothing like the adrenaline of a close match and the roar of a crowd.",
  "From pickup games in the park to elite-level championships, sports bring people together and fuel passion like almost nothing else."
];

const religionResponses = [
  "Religion has shaped civilizations, cultures, and personal identities for thousands of years. For many, it's a source of hope, purpose, and belonging—a framework for understanding life, death, and everything in between.",
  "Faith means different things to different people, and that’s okay.",
  "Whether practiced privately or communally, religion often gives people strength in tough times and a moral compass to navigate the world."
];

const forestResponses = [
  "Walking through a forest feels like stepping into a different world—quiet, alive, and full of mystery. Every sound, every scent, every shaft of light filtering through the trees is calming and grounding.",
  "Smells like pine, feels like peace.",
  "Forests are lungs of the Earth, home to countless species, and places where time seems to slow down. Whether you're hiking, camping, or just listening to the wind in the leaves, there's something deeply healing about being surrounded by trees."
];



// Map root keyword to responses
const ResponseTemplates = {
  football: footballResponses,
  music: musicResponses,
  weather: weatherResponses,
  maths: mathsResponses,
  science: scienceResponses,
  english: englishResponses,
  history: historyResponses,
  geography: geographyResponses,
  computer: computerResponses,
  art: artResponses,
  food: foodResponses,
  spanish: spanishResponses,
  french: frenchResponses,
  italian: italianResponses,
  movie: movieResponses,
  anime: animeResponses,
  ocean: oceanResponses,
  river: riverResponses,
  mountain: mountainResponses,
  vegetable: vegetableResponses,
  fruit: fruitResponses,
  desert: desertResponses,
  jungle: jungleResponses,
  animal: animalResponses,
  money: moneyResponses,
  sound: soundResponses,
  countries: countriesResponses,
  car: carResponses,
  game: gameResponses,
  nature: natureResponses,
  space: spaceResponses,
  clothing: clothingResponses,
  book: bookResponses,
  school: schoolResponses,
  work: workResponses,
  family: familyResponses,
  holiday: holidayResponses,
  beach: beachResponses,
  sport: sportResponses,
  religion: religionResponses,
  forest: forestResponses,
};

// Assign each synonym to its respective response array
Object.entries(SynonymConfig).forEach(([rootKeyword, synonyms]) => {
  const responses = ResponseTemplates[rootKeyword]; 

  synonyms.forEach((syn) => {
    ResponseDictionary.set(syn.toLowerCase(), responses);
  });
});

export default ResponseDictionary;
