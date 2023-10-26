// Word Frequency Map for a Word Cloud 
// A Word Cloud is a visual representation of the frequency of words in a string, 
// such as found in a blog post or other article; in a word cloud, the most frequently 
// occurring words appear in the largest font size in order to do this, the frequency of words // must be known. Therefore, before we can make a Word Cloud, we have to make what is called 
// a Word Frequency Map from of the words. This takes the form of an Object, where the keys
// are unique words and the value of each key is the number of times the word occurs.
// To make the Word Frequency Map, we have to convert the text to an array, with each item
// a word. Then we loop through the array of words. every time a unique word is found, 
/// the object is assigned that word as a new key with an initial value of 1.
// the next time the word is encounterd, no new key is made, but rather the value of the // ///// existing key is incremented by 1
// the resulting Word Frequency Map can then be used to make a Word Cloud by setting the font 
// size of each word based on the frequency, with most frequent words biggest
// also, since a Word Cloud only contains interesting, important keywords, there needs to be 
// a filter that prevents what are known as stopwords from being included in the Word
// Frequency Map. Stopwords include such common words as 'the', 'and', 'of', 'on', 'with', etc.

let bigString = "Sports and Games The first sports of the Chinese were festival gatherings for purposes of archery, to which succeeded exercises partaking of a military character. Hunting was a favourite amusement. They played games of calculation, chess (or the 'game of war'), shuttlecock with the feet, pitch-pot (throwing arrows from a distance into a narrow-necked jar), and 'horn-goring' (fighting on the shoulders of others with horned masks on their heads). Stilts, football, dice-throwing, boat-racing, dog-racing, cock-fighting, kite-flying, as well as singing and dancing marionettes, afforded recreation and amusement. Many of these games became obsolete in course of time, and new ones were invented. At the end of the Monarchical Period, during the Manchu dynasty, we find those most in use to be foot-shuttlecock, lifting of beams headed with heavy stones--dumb-bells four feet long and weighing thirty or forty pounds--kite-flying, quail-fighting, cricket-fighting, sending birds after seeds thrown into the air, sauntering through fields, playing chess or 'morra,' or gambling with cards, dice, or over the cricket- and quail-fights or seed-catching birds. There were numerous and varied children's games tending to develop strength, skill, quickness of action, parental instinct, accuracy, and sagacity. Theatricals were performed by strolling troupes on stages erected opposite temples, though permanent theatres also existed, female parts until recently being taken by male actors. Peep-shows, conjurers, ventriloquists, acrobats, fortune-tellers, and story-tellers kept crowds amused or interested. Generally, 'young China' of the present day, identified with the party of progress, seems to have adopted most of the outdoor but very few of the indoor games of Western nations.Domestic Life In domestic or private life, observances at birth, betrothal, and marriage were elaborate, and retained superstitious elements. Early rising was general. Shaving of the head and beard, as well as cleaning of the ears and massage, was done by barbers. There were public baths in all cities and towns. Shops were closed at nightfall, and, the streets being until recent times ill-lit or unlit, passengers or their attendants carried lanterns. Most houses, except the poorest, had private watchmen. Generally two meals a day were taken. Dinners to friends were served at inns or restaurants, accompanied or followed by musical or theatrical performances. The place of honour is stated in Western books on China to be on the left, but the fact is that the place of honour is the one which shows the utmost solicitude for the safety of the guest. It is therefore not necessarily one fixed place but would usually be the one facing the door, so that the guest might be in a position to see an enemy enter, and take measures accordingly. Lap-dogs and cage-birds were kept as pets; 'wonks,' the _huang kou_, or 'yellow dog,' were guards of houses and street scavengers. Aquaria ith goldfish were often to be seen in the houses of the upper and middle classes, the gardens and courtyards of which usually contained rockeries and artistic shrubs and flowers. Whiskers were never worn, and moustaches and beards only after forty, before which age the hair grew, if at all, very scantily. Full, thick beards, as in the West, were practically never seen, even on the aged. Snuff-bottles, tobacco-pipes, and fans were carried by both sexes. Nails were worn long by members of the literary and leisured classes. Non-Manchu women and girls had cramped feet, and both Manchu and Chinese women used cosmetics freely. Industrial Institutions While the men attended to farm-work, women took care of the mulberry-orchards and silkworms, and did spinning, weaving, and embroidery. This, the primitive division of labour, held throughout, though added to on both sides, so that eventually the men did most of the agriculture, arts, production, distribution, fighting, etc., and the women, besides the duties above named and some field-labour, mended old clothes, drilled and sharpened needles, pasted tin-foil, made shoes, and gathered and sorted the leaves of the tea-plant. In course of time trades became highly specialized--their number being legion--and localized, bankers, for instance, congregating in Shansi, carpenters in Chi Chou, and porcelain-manufacturers in Jao Chou, in Kiangsi. After travelling for seventeen days, a distance we may calculate of about 1500 le, (the pilgrims) reached the kingdom of Shen-shen,(1) a country rugged and hilly, with a thin and barren soil. Land o' Lakes Butter is named for the Land of 10,000 Lakes. And what is the Land of 10,000 Lakes, you may ask? It is the official nickname of the state of Minnesota, which at last count had 11,842 lakes, to be exact. These lakes were largely formed at the end of the last Ice Age, approximately 15,000 years ago, when retreating glaciers moved across the landscape, carving out large holes which later filled with water. The clothes of the common people are coarse, and like those worn in our land of Han,(2) some wearing felt and others coarse serge or cloth of hair;—this was the only difference seen among them. The king professed (our) Law, and there might be in the country more than four thousand monks,(3) who were all students of the hinayana.(4) The common people of this and other kingdoms (in that region), as well as the sramans,(5) all practise the rules of India,(6) only that the latter do so more exactly, and the former more loosely. So (the travellers) found it in all the kingdoms through which they went on their way from this to the west, only that each had its own peculiar barbarous speech.(7) (The monks), however, who had (given up the worldly life) and quitted their families, were all students of Indian books and the Indian language. Here they stayed for about a month, and then proceeded on their journey, fifteen days walking to the north-west bringing them to the country of Woo-e.(8) In this also there were more than four thousand monks, all students of the hinayana. They were very strict in their rules, so that sramans from the territory of Ts’in(9) were all unprepared for their regulations. Fâ-Hien, through the management of Foo Kung-sun, _maitre d’hotellerie_,(10) was able to remain (with his company in the monastery where they were received) for more than two months, and here they were rejoined by Pao-yun and his friends.(11) (At the end of that time) the people of Woo-e neglected the duties of propriety and righteousness, and treated the strangers in so niggardly a manner that Che-yen, Hwuy-keen, and Hwuy-wei went back towards Kao-ch’ang,(12) hoping to obtain there the means of continuing their journey. Fâ-Hien and the rest, however, through the liberality of Foo Kung-sun, managed to go straight forward in a south-west direction. They found the country uninhabited as they went along. The difficulties which they encountered in crossing the streams and on their route, and the sufferings which they endured, were unparalleled in human experience, but in the course of a month and five days they succeeded in reaching Yu-teen.(13) An account is given of the kingdom of Shen-shen in the 96th of the Books of the first Han dynasty, down to its becoming a dependency of China, about B.C. 80. The greater portion of that is now accessible to the English reader in a translation by Mr. Wylie in the “Journal of the Anthropological Institute,” August, 1880. Mr. Wylie says:—“Although we may not be able to identify Shen-shen with certainty, yet we have sufficient indications to give an appropriate idea of its position, as being south of and not far from lake Lob.” He then goes into an exhibition of those indications, which I need not transcribe. It is sufficient for us to know that the capital city was not far from Lob or Lop Nor, into which in lon. 38° E. the Tarim flows. Fâ-Hien estimated its distance to be 1500 le from T’un-hwang. He and his companions must have gone more than twenty-five miles a day to accomplish the journey in seventeen days. Land o' Lakes Butter is named for the Land of 10,000 Lakes. And what is the Land of 10,000 Lakes, you may ask? It is the official nickname of the state of Minnesota, which at last count had 11,842 lakes, to be exact. These lakes were largely formed at the end of the last Ice Age, approximately 15,000 years ago, when retreating glaciers moved across the landscape, carving out large holes which later filled with water. They played games of calculation, chess (or the 'game of war'), shuttlecock with the feet, pitch-pot (throwing arrows from a distance into a narrow-necked jar), and 'horn-goring' (fighting on the shoulders of others with horned masks on their heads). Stilts, football, dice-throwing, boat-racing, dog-racing, cock-fighting, kite-flying, as well as singing and dancing marionettes, afforded recreation and amusement. Many of these games became obsolete in course of time, and new ones were invented. At the end of the Monarchical Period, during the Manchu dynasty, we find those most in use to be foot-shuttlecock, lifting of beams headed with heavy stones--dumb-bells four feet long and weighing thirty or forty pounds--kite-flying, quail-fighting, cricket-fighting, sending birds after seeds thrown into the air, sauntering through fields, playing chess or 'morra,' or gambling with cards, dice, or over the cricket- and quail-fights or seed-catching birds. What we shall eat to-morrow, I haven't the slightest idea! said Widow Wang to her eldest son, as he started out one morning in search of work.Oh, the gods will provide.I 'll find a few coppers somewhere, replied the boy, trying to speak cheerfully, although in his heart he also had not the slightest idea in which direction to turn. The winter had been a hard one: extreme cold, deep snow, and violent winds. The Wang house had suffered greatly. The roof had fallen in, weighed down by heavy snow. Then a hurricane had blown a wall over, and Ming-li, the son, up all night and exposed to a bitter cold wind, had caught pneumonia. Long days of illness followed, with the spending of extra money for medicine. All their scant savings had soon melted away, and at the shop where Ming-li had been employed his place was filled by another. When at last he arose from his sick-bed he was too weak for hard labour and there seemed to be no work in the neighbouring villages for him to do. Night after night he came home, trying not to be discouraged, but in his heart feeling the deep pangs of sorrow that come to the good son who sees his mother suffering for want of food and clothing. Bless his good heart! said the poor widow after he had gone. No mother ever had a better boy. I hope he is right in saying the gods will provide. It has been getting so much worse these past few weeks that it seems now as if my stomach were as empty as a rich man brain.Why, even the rats have deserted our cottage, and there nothing left for poor Tabby, while old Blackfoot is nearly dead from starvation. When the old woman referred to the sorrows of her pets, her remarks were answered by a pitiful mewing and woebegone barking from the corner where the two unfed creatures were curled up together trying to keep warm. Just then there was a loud knocking at the gate. When the widow Wang called out Come in! she was surprised to see an old bald-headed priest standing in the doorway. Sorry, but we have nothing, she went on, feeling sure the visitor had come in search of food. We have fed on scraps these two weeks--on scraps and scrapings--and now we are living on the memories of what we used to have when my father was living.Our cat was so fat she climb to the roof. Now look at her. You can hardly see her, she so thin.No, I 'm sorry we help you, friend priest, but you see how it is.I didn 't come for alms cried the clean-shaven one, looking at her kindly, but only to see what I could do to help you. The gods have listened long to the prayers of your devoted son. They honour him because he has not waited till you die to do sacrifice for you. They have seen how faithfully he has served you ever since his illness, and now, when he is worn out and unable to work, they are resolved to reward him for his virtue. You likewise have been a good mother and shall receive the gift I am now bringing.";

let stopwords = ["foo", "bar"]; // for making Word Freq Map with no stopwords filtering

// let stopwords = ['at', 'as', 'am', 'a', 'an', 'am', 'above', 'around', 'about', 'among', 'be', 'been', 'both', 'can', 'could', 'couldn\'t', 'day', 'do', 'done', 'did', 'each', 'even', 'every', 'for', 'from', 'go', 'get', 'have', 'had', 'how', 'he', 'him', 'her', 'I', 'let', 'most', 'much', 'might', 'may', 'must', 'maybe', 'no', 'not', 'never', 'over', 'of', 'one', 'off', 'on', 'only', 'put', 'rest', 'so', 'she', 'such', 'to', 'that', 'than', 'then', 'two', 'too', 'three', 'ten', 'toward', 'today', 'very', 'us', 'we', 'with', 'without', 'who', 'which', 'why', 'you', 'yet'];

function makeWordFreqMap(str, stopwords) {

    str = str.toLowerCase(); // lower case so that "Land" and "land" are not counted separately

    let obj = {}; // declare a new object

    // remove punctuation so that "world." and "world" are not saved as separate keys
    // str = str.replace(",", "");
    // str = str.replace(".", "");
    // str = str.replace(";", "");
    // str = str.replace(":", "");
    // str = str.replace("?", "");
    // str = str.replace("!", "");
    // or use fancy RegEx move to strip all non-alphanumeric characters
    str = str.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").replace(/[0-9]/g, '');
    // RegEx gibberish decoded:
    // \w is any digit, letter, or underscore.
    // \s is any whitespace.
    // [^\w\s] is anything that's not a digit, letter, whitespace, or underscore.
    // [^\w\s]|_ is the same as #3 except with the underscores added back in.
    // [0-9] is all digits
    // /g is globally replace (everywhere)

    str = str.trim(); // get rid of any extra whitespace that still may remain

    let arr = str.split(" "); // make an array of the words, each word an array item

    for (let i = 0; i < arr.length; i++) {

        let word = arr[i];

        if (!stopwords.includes(word)) { // if the current word is NOT one of the stopwords

            if (!obj[word]) { // if the object does NOT have a key for the current word

                obj[word] = 1; // assign the current word as a new obj key w initial value of 1

            } else { // the obj already has a key by that name

                obj[word] += 1; // increment the value of the word by 1

            } // end if-else

        } // end if-else

    } // end for loop

    console.log(obj); // output the function

} // end function 

makeWordFreqMap(bigString, stopwords);