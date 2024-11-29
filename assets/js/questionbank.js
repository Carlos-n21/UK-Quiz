const quizQuestions = [
    {
        question: "What is the UK currency?",
        options: {
            a: "Euro",
            b: "Dollar",
            c: "Pound",
            d: "Ruble"
        },
        correctAnswer: "c",
        category: "law",
        imageURL: "assets/images/coins.webp",
        imageAlt: "Some coins and notes",
        incorrectFeedback: "The pound sterling, commonly known as the pound, is the official currency of the United Kingdom and is symbolised by £ with the currency code GBP."
    },
    {
        question: "Where in Scotland is known as the home of golf?",
        options: {
            a: "Glasgow",
            b: "Edinburgh",
            c: "St Andrew's",
            d: "Aberdeen"
        },
        correctAnswer: "c",
        category: "culture",
        imageURL: "assets/images/golf.webp",
        imageAlt: "A golf ball on a green",
        incorrectFeedback: "St Andrews in Scotland is known as the home of golf."
    },
    {
        question: "Where in Scotland is known as the home of golf?",
        options: {
            a: "Glasgow",
            b: "Edinburgh",
            c: "St Andrew's",
            d: "Aberdeen"
        },
        correctAnswer: "c",
        imageURL: "assets/images/golf.webp",
        imageAlt: "A golf ball on a tee",
        incorrectFeedback: "St Andrews in Scotland is known as the home of golf."
    },
    {
        question: "Where in Scotland is known as the home of golf?",
        options: {
            a: "Glasgow",
            b: "Edinburgh",
            c: "St Andrew's",
            d: "Aberdeen"
        },
        correctAnswer: "c",
        imageURL: "assets/images/golf.webp",
        imageAlt: "A golf ball on a tee",
        incorrectFeedback: "St Andrews in Scotland is known as the home of golf."
    },
    {
        question: "What did the “Bill of Rights” confirm?",
        options: {
            a: "Kings can administer justice",
            b: "Parliament's increased power",
            c: "King's increased power",
            d: "Kings can collect taxes"
        },
        correctAnswer: "b",
        category: "history",
        imageURL: "assets/images/questionbank/history1_billOfRight.png",
        imageAlt: "Bill of rights",
        incorrectFeedback: "The Bill of Rights, 1689, confirmed the rights of Parliament and the limits of the king’s power."
    },
    {
        question: "How long did the Romans stay in Britain?",
        options: {
            a: "400 years",
            b: "300 years",
            c: "600 years",
            d: "100 years"
        },
        correctAnswer: "a",
        category: "history",
        imageURL: "assets/images/romanbath.webp",
        imageAlt: "roman bath",
        incorrectFeedback: "The Romans remained in Britain for 400 years."
    },
    {
        question: "Who became Prime Minister during WWII?",
        options: {
            a: "Robert Walpole",
            b: "Margaret Thatcher",
            c: "Winston Churchill",
            d: "Tony Blair"
        },
        correctAnswer: "c",
        category: "history",
        imageURL: "assets/images/questionbank/history3_ww2.jpg",
        imageAlt: "ww2",
        incorrectFeedback: "Hitler invaded Poland and took control of Belgium and the Netherlands. At this time of national crisis, Winston Churchill became Prime Minister."
    },
    {
        question: "Where did the people of the Bronze Age bury their dead?",
        options: {
            a: "Gardens",
            b: "Coffin Houses",
            c: "Graveyards",
            d: "Round barrows"
        },
        correctAnswer: "d",
        category: "history",
        imageURL: "assets/images/questionbank/history4_ bronzAge.png",
        imageAlt: "bronze age",
        incorrectFeedback: "People lived in roundhouses and buried their dead in tombs called round barrows."
    },
    {
        question: "When did the WWI begin?",
        options: {
            a: "1939",
            b: "1941",
            c: "1918",
            d: "1914"
        },
        correctAnswer: "d",
        category: "history",
        imageURL: "assets/images/questionbank/history5_ww1.jpg",
        imageAlt: "ww1",
        incorrectFeedback: "The first World War began in 1914 and ended in 1918."
    },
    {
        question: "What proportion of the population died because of the Black Death?",
        options: {
            a: "One half",
            b: "One third",
            c: "One fourth",
            d: "One fifth"
        },
        correctAnswer: "b",
        category: "history",
        imageURL: "assets/images/questionbank/history6_black.deth.png",
        imageAlt: "black death",
        incorrectFeedback: "One third of the population of England and a similar proportion in Scotland and Wales died because of the Black Death."
    },
    {
        question: "Who became one of the most popular monarchs in the 16th century?",
        options: {
            a: "Henry VIII",
            b: "Mary I",
            c: "Elizabeth I",
            d: "Henry VII"
        },
        correctAnswer: "c",
        category: "history",
        imageURL: "assets/images/questionbank/history7_royal.png",
        imageAlt: "royal",
        incorrectFeedback: "Queen Elizabeth I became one of the most popular monarchs in English history, particularly after 1588, when the English defeated the Spanish Armada."
    },
    {
        question: "When did Ireland split into 2 countries?",
        options: {
            a: "1949",
            b: "1934",
            c: "1925",
            d: "1922"
        },
        correctAnswer: "d",
        category: "history",
        imageURL: "assets/images/questionbank/history8_Ireland.jpg",
        imageAlt: "Ireland",
        incorrectFeedback: "Ireland became two countries in 1922."
    },
    {
        question: "Who defeated Napoleon at the Battle of Waterloo?",
        options: {
            a: "Henry VII",
            b: "Nelson",
            c: "Louis XIV",
            d: "The Duke of Wellington"
        },
        correctAnswer: "d",
        category: "history",
        imageURL: "assets/images/questionbank/history9_waterloo.jpg",
        imageAlt: "waterloo",
        incorrectFeedback: "In 1815, the French Wars ended with the defeat of the Emperor Napoleon by the Duke of Wellington at the Battle of Waterloo."
    },
    {
        question: "What did the first farmers build in Britain?",
        options: {
            a: "Theatres and Houses",
            b: "Houses and Monuments",
            c: "Hospitals and Roads",
            d: "Tombs and Stadiums"
        },
        correctAnswer: "b",
        category: "history",
        imageURL: "assets/images/questionbank/history10_farmer.jpg",
        imageAlt: "",
        incorrectFeedback: "The first farmers built houses, tombs and monuments on the land."
    },


    {
        question: "Where in Scotland is known as the home of golf?",
        options: {
            a: "Glasgow",
            b: "Edinburgh",
            c: "St Andrews",
            d: "Aberdeen"
        },
        correctAnswer: "c",
        category: "geography",
        imageURL: "assets/images/golf.webp",
        imageAlt: "golf",
        incorrectFeedback: "St Andrews in Scotland is known as the home of golf."
    },
    {
        question: "Where does the Fringe take place?",
        options: {
            a: "Edinburgh",
            b: "Newcastle",
            c: "London",
            d: "Liverpool"
        },
        correctAnswer: "a",
        category: "geography",
        imageURL: "assets/images/questionbank/geography2_fringe.jpg",
        imageAlt: "fringe",
        incorrectFeedback: "The Edinburgh Festival takes place in Edinburgh, Scotland, every summer. The most well-known is the Edinburgh Festival Fringe, also known as the Fringe."
    },
    {
        question: "What was the population of the UK in 1901?",
        options: {
            a: "40 million",
            b: "50 million",
            c: "60 million",
            d: "27 million"
        },
        correctAnswer: "a",
        category: "geography",
        imageURL: "assets/images/questionbank/geography3_uk in 1901.jpg",
        imageAlt: "1901",
        incorrectFeedback: "The population of the UK was 40 million in 1901."
    },
    {
        question: "Which of these gardens is located in Wales?",
        options: {
            a: "Sissinghurst",
            b: "Mount Stewart",
            c: "Hidcote",
            d: "Bodnant Garden"
        },
        correctAnswer: "d",
        category: "geography",
        imageURL: "assets/images/questionbank/geography4_Wales.jpg",
        imageAlt: "walse",
        incorrectFeedback: "Bodnant Garden is in Wales."
    },
    {
        question: "Which of these venues is located in Scotland?",
        options: {
            a: "The SECC",
            b: "The O2",
            c: "Wembley Stadium",
            d: "Troxy"
        },
        correctAnswer: "a",
        category: "geography",
        imageURL: "assets/images/questionbank/geography5_scotland.jpg",
        imageAlt: "scotland",
        incorrectFeedback: "The SECC is in Glasgow, Scotland."
    },
    {
        question: "Which countries are in Great Britain?",
        options: {
            a: "England, Wales, Scotland",
            b: "England, Wales, Scotland, Northern Ireland",
            c: "England, Scotland, Ireland",
            d: "Wales, Northern Ireland, Scotland"
        },
        correctAnswer: "a",
        category: "geography",
        imageURL: "assets/images/questionbank/geography6_greatBriten.jpg",
        imageAlt: "great Britain",
        incorrectFeedback: "England and Wales and Scotland are in Great Britain."
    },
    {
        question: "Which of the following is England’s largest national park?",
        options: {
            a: "The Lake District",
            b: "Snowdonia",
            c: "South Downs",
            d: "Loch Lomond and the Trossachs"
        },
        correctAnswer: "a",
        category: "geography",
        imageURL: "assets/images/questionbank/geography7_nationalPark.png",
        imageAlt: "national park",
        incorrectFeedback: "The Lake District is England’s largest national park."
    },
    {
        question: "Which of these are ‘Crown Dependencies’?",
        options: {
            a: "St Helena and Falkland Islands",
            b: "Ireland and the Channel Islands",
            c: "St Helena and Wales",
            d: "The Channel Islands and the Isle of Man"
        },
        correctAnswer: "d",
        category: "geography",
        imageURL: "assets/images/questionbank/geography8_crownDependencies.jpg",
        imageAlt: "crown dependencies",
        incorrectFeedback: "The Channel Islands and the Isle of Man are closely related to the UK but are not part of it. They have their own governments and are called ‘Crown dependencies’."
    },
    {
        question: "Where is Loch Lomond located?",
        options: {
            a: "England",
            b: "Scotland",
            c: "Northern Ireland",
            d: "Wales"
        },
        correctAnswer: "b",
        category: "geography",
        imageURL: "assets/images/questionbank/geography9_lochLomond.jpg",
        imageAlt: "lock lomond",
        incorrectFeedback: "Loch Lomond is the largest expanse of fresh water in mainland Britain and probably the best-known part of the park. It is located in Scotland."
    },
    {
        question: "Where is the city of Swansea located?",
        options: {
            a: "In England",
            b: "In Scotland",
            c: "In Wales",
            d: "In the Isle of Man"
        },
        correctAnswer: "c",
        category: "geography",
        imageURL: "assets/images/questionbank/geography10_swansea.jpg",
        imageAlt: "swansea",
        incorrectFeedback: "Swansea is located in Wales."
    },
    
    
    {
        question: "What does the TV licence money pay for?",
        options: {
            a: "Freeview Channels",
            b: "Electricity",
            c: "The BBC",
            d: "All Free Radio Channels"
        },
        correctAnswer: "c",
        category: "law",
        imageURL: "assets/images/questionbank/l&s1_tvLicence.jpg",
        imageAlt: "tv licence",
        incorrectFeedback: "The money from TV licences is used to pay for the British Broadcasting Corporation also known as the BBC."
    },
    {
        question: "What is the money limit for the small claims procedure in England and Wales?",
        options: {
            a: "£6,000",
            b: "£10,000",
            c: "£5,000",
            d: "£4,000"
        },
        correctAnswer: "b",
        category: "law",
        imageURL: "assets/images/questionbank/l&s2_claims.jpg",
        imageAlt: "claims",
        incorrectFeedback: "The small claims procedure is used for claims of less than £10,000 in England and Wales."
    },
    {
        question: "When do pubs usually open?",
        options: {
            a: "16:00",
            b: "22:00",
            c: "13:00",
            d: "11:00"
        },
        correctAnswer: "d",
        category: "law",
        imageURL: "assets/images/questionbank/l&s3_pub.png",
        imageAlt: "pub",
        incorrectFeedback: "Public Houses, also known as Pubs, usually open at 11:00 AM, 12:00 PM on Sundays."
    },
    {
        question: "What is the system that automatically deducts tax called?",
        options: {
            a: "PAYG",
            b: "PAYE",
            c: "Self-Assessment",
            d: "HMRC"
        },
        correctAnswer: "b",
        category: "law",
        imageURL: "assets/images/questionbank/l&s4_tax.jpg",
        imageAlt: "tax",
        incorrectFeedback: "This system that deducts tax automatically is called ‘Pay As You Earn’, also known as PAYE."
    },
    {
        question: "What is the monarch’s ceremonial role?",
        options: {
            a: "Creating parliamentary policies",
            b: "Opening a parliamentary session",
            c: "Travelling abroad for banquets and to negotiate with foreign dignitaries",
            d: "Travelling in the UK"
        },
        correctAnswer: "b",
        category: "law",
        imageURL: "assets/images/questionbank/l&s5_mornach.png",
        imageAlt: "mornach",
        incorrectFeedback: "The Monarch has important ceremonial roles, such as the opening of the new parliamentary session each year."
    },
    {
        question: "Which country’s flag is not part of the Union Flag?",
        options: {
            a: "Scotland",
            b: "England",
            c: "Ireland",
            d: "Wales"
        },
        correctAnswer: "d",
        category: "law",
        imageURL: "assets/images/questionbank/l&s6_unionJack.jpg",
        imageAlt: "union jack",
        incorrectFeedback: "The small claims procedure is used for claims of less than £10,000 in England and Wales."
    },
    {
        question: "How often are the General Elections held?",
        options: {
            a: "Every year",
            b: "Every 3 years",
            c: "Every 7 years",
            d: "Every 5 years"
        },
        correctAnswer: "d",
        category: "law",
        imageURL: "assets/images/questionbank/l&s7_election.png",
        imageAlt: "election",
        incorrectFeedback: "MPs are elected at a General Election, which is held at least every five years."
    },
    {
        question: "Who is the head of the Church of England?",
        options: {
            a: "The Prime Minister",
            b: "The Pope",
            c: "The Monarch",
            d: "The Monarch"
        },
        correctAnswer: "c",
        category: "law",
        imageURL: "assets/images/questionbank/l&s8_charch.jpg",
        imageAlt: "charch",
        incorrectFeedback: "The monarch is the head of the Church of England. The spiritual leader of the Church of England is the Archbishop of Canterbury."
    },
    {
        question: "Where are the most serious civil cases heard in England and Wales?",
        options: {
            a: "The Court of Session",
            b: "Sheriff Court",
            c: "High Court",
            d: "Crown Court"
        },
        correctAnswer: "c",
        category: "law",
        imageURL: "assets/images/questionbank/l&s2_claims.jpg",
        imageAlt: "claims",
        incorrectFeedback: "More serious civil cases – for example, when a large amount of compensation is being claimed – are dealt with in the High Court in England, Wales and Northern Ireland."
    },
    {
        question: "Which of these charities works with children?",
        options: {
            a: "The National Trust",
            b: "NSPCC",
            c: "Crisis and Shelter",
            d: "PDSA"
        },
        correctAnswer: "b",
        category: "law",
        imageURL: "assets/images/questionbank/l&s10_children.png",
        imageAlt: "children",
        incorrectFeedback: "The National Society for the Prevention of Cruelty to Children (NSPCC) works with children."
    },


    {
        question: "Who was Henry Purcell?",
        options: {
            a: "A gardener",
            b: "A poet",
            c: "A musician",
            d: "An actor"
        },
        correctAnswer: "c",
        category: "culture",
        imageURL: "assets/images/questionbank/culture1_henryPurcell.jpg",
        imageAlt: "Henry Purcell",
        incorrectFeedback: "Henry Purcell (1659–95) was the organist at Westminster Abbey. He wrote church music and operas."
    },
    {
        question: "What is known as Lent?",
        options: {
            a: "The 40 days before Christmas",
            b: "The 40 days after Easter",
            c: "The 40 days before Easter",
            d: "The 40 days after Christmas"
        },
        correctAnswer: "c",
        category: "culture",
        imageURL: "assets/images/questionbank/culture2_lent.jpg",
        imageAlt: "lent",
        incorrectFeedback: "The 40 days before Easter are known as Lent."
    },
    {
        question: "Where does the Prime Minister reside?",
        options: {
            a: "76 Charlotte Street",
            b: "1 Devonshire Terrace",
            c: "The Buckingham palace",
            d: "10 Downing Street"
        },
        correctAnswer: "a",
        category: "culture",
        imageURL: "assets/images/questionbank/culture3_residence.jpg",
        imageAlt: "residence",
        incorrectFeedback: "The official home of the Prime Minister is 10 Downing Street, in central London, near the Houses of Parliament."
    },
    {
        question: "Who mapped the coast of Australia?",
        options: {
            a: "Admiral Nelson",
            b: "Sir Francis Drake",
            c: "Sake Dean Mahomet",
            d: "James Cook"
        },
        correctAnswer: "a",
        category: "culture",
        imageURL: "assets/images/questionbank/culture4_australia.jpg",
        imageAlt: "australia",
        incorrectFeedback: "Captain James Cook mapped the coast of Australia."
    },
    {
        question: "Who invented the World Wide Web?",
        options: {
            a: "Sir Tim Berners-Lee",
            b: "James Goodfellow",
            c: "Alexander Fleming",
            d: "Florence Nightingale"
        },
        correctAnswer: "a",
        category: "culture",
        imageURL: "assets/images/questionbank/culture5_www.png",
        imageAlt: "www",
        incorrectFeedback: "World Wide Web was invented by Sir Tim Berners-Lee (1955–) who is British. Information was successfully transferred via the web for the first time on 25 December 1990."
    },
    {
        question: "Where was Florence Nightingale born?",
        options: {
            a: "Italy",
            b: "England",
            c: "France",
            d: "Scotland"
        },
        correctAnswer: "a",
        category: "culture",
        imageURL: "assets/images/questionbank/culture6_nightingale.jpg",
        imageAlt: "naightingale",
        incorrectFeedback: "Florence Nightingale was born in Italy to English parents in 1820."
    },
    {
        question: "Who won two gold medals for running in the 2004 Olympic Games?",
        options: {
            a: "Dame Ellen MacArthur",
            b: "Christopher Dean",
            c: "Dame Kelly Holmes",
            d: "Jayne Torvill"
        },
        correctAnswer: "",
        category: "culture",
        imageURL: "assets/images/questionbank/culture7_olympic.png",
        imageAlt: "olympic",
        incorrectFeedback: "Dame Kelly Holmes (1970–) won two gold medals for running in the 2004 Olympic Games."
    },
    {
        question: "Who designed the new St Paul Cathedral?",
        options: {
            a: "Samuel Pepys",
            b: "Isaac Newton",
            c: "Sir Christopher Wren",
            d: "Isambard Kingdom Brunel"
        },
        correctAnswer: "c",
        category: "culture",
        imageURL: "assets/images/questionbank/culture8_stPaul.jpg",
        imageAlt: "at Paul",
        incorrectFeedback: "Christopher Wren designed a new St Paul Cathedral after the previous one was destroyed by a great fire in 1666."
    },
    {
        question: "What language did the Iron Age people speak?,
        options: {
            a: "Anglo-Saxon",
            b: "Viking",
            c: "English",
            d: "Celtic"
        },
        correctAnswer: "d",
        category: "culture",
        imageURL: "assets/images/questionbank/culture9_ironage.png",
        imageAlt: "iron age",
        incorrectFeedback: "Their language was part of the Celtic language family."
    },
    {
        question: "What is the National Anthem of the UK?",
        options: {
            a: "United we stand",
            b: "King/Queen reign over the UK",
            c: "God Save the UK,
            d: "God Save the King/Queen"
        },
        correctAnswer: "d",
        category: "culture",
        imageURL: "assets/images/questionbank/culture10_anthem.jpg",
        imageAlt: "anthem",
        incorrectFeedback: "The National Anthem of the UK is ‘God Save the King/Queen’. It is played at important national occasions and at events attended by the King/Queen or the Royal Family. The first verse is: ‘God save our gracious King! Long live our noble King! God save the King! Send him victorious, Happy and glorious, Long to reign over us, God save the King!’."
    },
];