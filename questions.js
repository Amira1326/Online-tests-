// بنك الأسئلة - Grade 1-8
const questionBank = {
    G1: {
        english: {
            modelA: [
                {
                    id: "g1_en_a_q1",
                    type: "image_choice",
                    question: "Choose the correct name for the given pictures:",
                    marks: 12,
                    items: [
                        { image: "https://cdn-icons-png.flaticon.com/512/616/616408.png", options: ["Cat", "Cot"], correct: 0 },
                        { image: "https://cdn-icons-png.flaticon.com/512/2917/2917995.png", options: ["Pan", "Pen"], correct: 0 },
                        { image: "https://cdn-icons-png.flaticon.com/512/616/616430.png", options: ["Dog", "Dug"], correct: 0 },
                        { image: "https://cdn-icons-png.flaticon.com/512/616/616567.png", options: ["Big", "Bag"], correct: 0 }
                    ],
                    needs_manual: false
                },
                {
                    id: "g1_en_a_q2",
                    type: "mcq",
                    question: "Choose the correct ending sound:",
                    marks: 10,
                    subQuestions: [
                        { question: "Man - Pan - Rot - Pit", options: ["Man", "Pan", "Rot", "Pit"], correct: 0 },
                        { question: "Sun - Hub - Sip - Fun", options: ["Sun", "Hub", "Sip", "Fun"], correct: 3 },
                        { question: "Rat - Tin - Hat - Put", options: ["Rat", "Tin", "Hat", "Put"], correct: 2 },
                        { question: "Cod - Cut - Fit - Rod", options: ["Cod", "Cut", "Fit", "Rod"], correct: 3 },
                        { question: "Pin - Sin - Lip - Tag", options: ["Pin", "Sin", "Lip", "Tag"], correct: 2 }
                    ],
                    needs_manual: false
                },
                {
                    id: "g1_en_a_q3",
                    type: "mcq",
                    question: "Choose the correct answers:",
                    marks: 8,
                    subQuestions: [
                        { question: "___ is my rabbit.", options: ["This", "That"], correct: 0 },
                        { question: "___ tree is big.", options: ["This", "That"], correct: 1 }
                    ],
                    needs_manual: false
                }
            ],
            modelB: [
                {
                    id: "g1_en_b_q1",
                    type: "image_choice",
                    question: "Choose the correct name for the given pictures:",
                    marks: 12,
                    items: [
                        { image: "https://cdn-icons-png.flaticon.com/512/2917/2917995.png", options: ["Pin", "Sip"], correct: 0 },
                        { image: "https://cdn-icons-png.flaticon.com/512/888/888847.png", options: ["Sun", "Tan"], correct: 0 },
                        { image: "https://cdn-icons-png.flaticon.com/512/616/616430.png", options: ["Pit", "Hen"], correct: 1 },
                        { image: "https://cdn-icons-png.flaticon.com/512/2917/2917995.png", options: ["Rot", "Pot"], correct: 1 }
                    ],
                    needs_manual: false
                },
                {
                    id: "g1_en_b_q2",
                    type: "mcq",
                    question: "Choose the correct ending sound:",
                    marks: 10,
                    subQuestions: [
                        { question: "Sat - Pan - Rot - Pat", options: ["Sat", "Pan", "Rot", "Pat"], correct: 0 },
                        { question: "Hug - Pug - Sip - Fun", options: ["Hug", "Pug", "Sip", "Fun"], correct: 1 },
                        { question: "Fin - Tin - Hat - Put", options: ["Fin", "Tin", "Hat", "Put"], correct: 1 },
                        { question: "Cut - Tap - Hut - Rod", options: ["Cut", "Tap", "Hut", "Rod"], correct: 2 },
                        { question: "Bag - Sin - Lip - Tag", options: ["Bag", "Sin", "Lip", "Tag"], correct: 3 }
                    ],
                    needs_manual: false
                },
                {
                    id: "g1_en_b_q3",
                    type: "mcq",
                    question: "Choose the correct answers:",
                    marks: 8,
                    subQuestions: [
                        { question: "___ is a yellow duck.", options: ["This", "That"], correct: 0 },
                        { question: "___ is a big aero plane.", options: ["This", "That"], correct: 1 }
                    ],
                    needs_manual: false
                }
            ]
        }
    },
    G2: {
        english: {
            modelA: [
                {
                    id: "g2_en_a_q1",
                    type: "upload",
                    question: "Read the given passage and answer the following questions.",
                    passage: "One misty morning, Jane was looking around her garden. She sat on the grass. She saw a rock with little plants on it. There were flowers. They looked pretty.",
                    subQuestions: ["Who sat on the grass?", "___ were looking pretty."],
                    marks: 10,
                    needs_manual: true
                },
                {
                    id: "g2_en_a_q2",
                    type: "mcq",
                    question: "Use (is - am - are):",
                    marks: 10,
                    subQuestions: [
                        { question: "They ___ happy to see us.", options: ["am", "are"], correct: 1 },
                        { question: "The dog ___ in the backyard.", options: ["are", "is"], correct: 1 },
                        { question: "We ___ ready.", options: ["are", "am"], correct: 0 },
                        { question: "You ___ intelligent.", options: ["are", "is"], correct: 0 },
                        { question: "I ___ writing.", options: ["is", "am"], correct: 1 }
                    ],
                    needs_manual: false
                },
                {
                    id: "g2_en_a_q3",
                    type: "mcq",
                    question: "Use (have / has):",
                    marks: 10,
                    subQuestions: [
                        { question: "I ___ many toys.", options: ["have", "has"], correct: 0 },
                        { question: "You ___ an extra pen.", options: ["have", "has"], correct: 0 },
                        { question: "She ___ one sister.", options: ["have", "has"], correct: 1 },
                        { question: "They ___ a test today.", options: ["have", "has"], correct: 0 },
                        { question: "The rainbow ___ seven colors.", options: ["have", "has"], correct: 1 }
                    ],
                    needs_manual: false
                }
            ],
            modelB: [
                {
                    id: "g2_en_b_q1",
                    type: "upload",
                    question: "Read the given passage and answer the following questions.",
                    passage: "Jane wants to build a birdhouse. She gets some wood, nails and paint. She draws her birdhouse. They hang it up in a tree. A bird goes into it.",
                    subQuestions: ["Who wants to build a birdhouse?", "___ goes into the birdhouse."],
                    marks: 10,
                    needs_manual: true
                },
                {
                    id: "g2_en_b_q2",
                    type: "mcq",
                    question: "Use (is - am - are):",
                    marks: 10,
                    subQuestions: [
                        { question: "I ___ a teacher.", options: ["am", "are"], correct: 0 },
                        { question: "The dress ___ beautiful.", options: ["are", "is"], correct: 1 },
                        { question: "We ___ happy.", options: ["are", "am"], correct: 0 },
                        { question: "She ___ tall.", options: ["am", "is"], correct: 1 },
                        { question: "They ___ learning.", options: ["is", "are"], correct: 1 }
                    ],
                    needs_manual: false
                },
                {
                    id: "g2_en_b_q3",
                    type: "mcq",
                    question: "Use (have / has):",
                    marks: 10,
                    subQuestions: [
                        { question: "She ___ a blue bag.", options: ["have", "has"], correct: 1 },
                        { question: "We ___ a big house.", options: ["have", "has"], correct: 0 },
                        { question: "I ___ some cookies.", options: ["have", "has"], correct: 0 },
                        { question: "They ___ a ball.", options: ["have", "has"], correct: 0 },
                        { question: "You ___ a bicycle.", options: ["have", "has"], correct: 0 }
                    ],
                    needs_manual: false
                }
            ]
        }
    },
    G3: {
        english: {
            modelA: [
                {
                    id: "g3_en_a_q1",
                    type: "mcq",
                    question: "Read the given passage and answer the questions.",
                    passage: "Jana and Ali are going for a trip to Taif. They are waiting for the bus at the bus stop. Jana has a small pink bag and Ali has a big blue backpack. They are taking their dog, Max with them. They are excited for the trip.",
                    marks: 14,
                    subQuestions: [
                        { question: "Where is Ali going?", options: ["Trip", "School"], correct: 0 },
                        { question: "Who is going with him?", options: ["Jana", "Friends"], correct: 0 },
                        { question: "What are they waiting for?", options: ["Bus", "Car"], correct: 0 },
                        { question: "Max:", options: ["Common Noun", "Proper Noun"], correct: 1 },
                        { question: "Bus:", options: ["Common Noun", "Proper Noun"], correct: 0 },
                        { question: "Taif:", options: ["Common Noun", "Proper Noun"], correct: 1 },
                        { question: "Backpack:", options: ["Common Noun", "Proper Noun"], correct: 0 }
                    ],
                    needs_manual: false
                },
                {
                    id: "g3_en_a_q2",
                    type: "mcq",
                    question: "Choose the correct answer:",
                    marks: 16,
                    subQuestions: [
                        { question: "The elephant ___ a long trunk.", options: ["has", "have"], correct: 0 },
                        { question: "You ___ a beautiful dress.", options: ["has", "have"], correct: 1 },
                        { question: "She ___ in the hospital yesterday.", options: ["was", "were"], correct: 0 },
                        { question: "They ___ many trees in their backyard.", options: ["has", "have"], correct: 1 },
                        { question: "You ___ a tall boy.", options: ["is", "are"], correct: 1 },
                        { question: "___ she baking a cake?", options: ["Is", "Are"], correct: 0 },
                        { question: "I ___ eating apples but they ___ eating popcorns.", options: ["am/are", "is/are", "am/is"], correct: 0 }
                    ],
                    needs_manual: false
                }
            ],
            modelB: [
                {
                    id: "g3_en_b_q1",
                    type: "mcq",
                    question: "Read the given passage and answer the questions.",
                    passage: "Alma and her friend Reem are in Hyde Park. They are wearing red dresses. They are looking beautiful. They are eating ice cream. There is a white kitten near the ice cream truck. Alma is playing with it. She is throwing the ball and the kitten is running after it.",
                    marks: 14,
                    subQuestions: [
                        { question: "Where is Alma?", options: ["School", "Park"], correct: 1 },
                        { question: "What is she wearing?", options: ["Dress", "T-shirt"], correct: 0 },
                        { question: "What is the kitten running after?", options: ["Bug", "Ball"], correct: 1 },
                        { question: "Truck:", options: ["Common Noun", "Proper Noun"], correct: 0 },
                        { question: "Reem:", options: ["Common Noun", "Proper Noun"], correct: 1 },
                        { question: "Kitten:", options: ["Common Noun", "Proper Noun"], correct: 0 },
                        { question: "Hyde Park:", options: ["Common Noun", "Proper Noun"], correct: 1 }
                    ],
                    needs_manual: false
                },
                {
                    id: "g3_en_b_q2",
                    type: "mcq",
                    question: "Choose the correct answer:",
                    marks: 16,
                    subQuestions: [
                        { question: "You ___ driving a car.", options: ["was", "were"], correct: 1 },
                        { question: "He ___ playing with me.", options: ["was", "were"], correct: 0 },
                        { question: "Monkeys ___ long tails.", options: ["has", "have"], correct: 1 },
                        { question: "My mother ___ an expensive ring.", options: ["has", "have"], correct: 0 },
                        { question: "You ___ my best friend.", options: ["is", "are"], correct: 1 },
                        { question: "___ he sleeping in the room?", options: ["Is", "Are"], correct: 0 },
                        { question: "I ___ going to Abha but she ___ going to Jeddah.", options: ["am/is", "am/are", "is/are"], correct: 0 }
                    ],
                    needs_manual: false
                }
            ]
        }
    },
    G4: {
        english: {
            modelA: [
                {
                    id: "g4_en_a_q1",
                    type: "mcq",
                    question: "Read the passage and answer the questions.",
                    passage: "Tina saw a hidden path and decided to follow it. The path led her to a lovely garden filled with colorful flowers and friendly animals. Tina spent the whole day playing and laughing with her newfound friends. When it was time to go home, she promised to return to the garden whenever she could.",
                    marks: 12,
                    subQuestions: [
                        { question: "What did Tina find when she followed the hidden path?", options: ["Garden", "Park"], correct: 0 },
                        { question: "What did Tina do with her newfound friends?", options: ["Eat and drink", "Play and laugh"], correct: 1 },
                        { question: "Tina promised that she will never come back.", options: ["True", "False"], correct: 1 },
                        { question: "Choose the proper noun:", options: ["Tina", "Garden"], correct: 0 },
                        { question: "What part of speech is: Spent", options: ["Adverb", "Verb"], correct: 1 },
                        { question: "Which word is an adjective?", options: ["Friendly", "Follow"], correct: 0 }
                    ],
                    needs_manual: false
                },
                {
                    id: "g4_en_a_q2",
                    type: "mcq",
                    question: "Choose the correct answer:",
                    marks: 8,
                    subQuestions: [
                        { question: "I ___ going to Japan and you ___ going to China.", options: ["am/are", "are/is", "am/is"], correct: 0 },
                        { question: "A monkey ___ a long tail but rabbits ___ short tails.", options: ["has/have", "have/has", "has/has"], correct: 0 }
                    ],
                    needs_manual: false
                },
                {
                    id: "g4_en_a_q3",
                    type: "mcq",
                    question: "Identify the tense:",
                    marks: 8,
                    subQuestions: [
                        { question: "She likes to drink coffee in the morning.", options: ["Simple Present", "Present Continuous"], correct: 0 },
                        { question: "My dad is playing football with me.", options: ["Simple Present", "Present Continuous"], correct: 1 },
                        { question: "They were in Canada last year.", options: ["Simple Present", "Simple Past"], correct: 1 },
                        { question: "Who is sitting on the couch?", options: ["Simple Present", "Present Continuous"], correct: 1 }
                    ],
                    needs_manual: false
                }
            ],
            modelB: [
                {
                    id: "g4_en_b_q1",
                    type: "mcq",
                    question: "Read the passage and answer the questions.",
                    passage: "Lily loved plants and flowers. She had a beautiful garden in her backyard. One day, some people visited Lily's garden. They were amazed by the colorful flowers. They wanted to make their own gardens and share the joy of gardening with others.",
                    marks: 12,
                    subQuestions: [
                        { question: "What did Lily like to do?", options: ["Gardening", "Cooking"], correct: 0 },
                        { question: "What did the visitors like about Lily's garden?", options: ["Flowers", "Bugs"], correct: 0 },
                        { question: "What did the visitors want to do?", options: ["Make gardens and share the joy", "Cook food and share it"], correct: 0 },
                        { question: "Choose the proper noun:", options: ["Lily", "Backyard"], correct: 0 },
                        { question: "What part of speech is: Visited", options: ["Adverb", "Verb"], correct: 1 },
                        { question: "Which word is an adjective?", options: ["Colorful", "Share"], correct: 0 }
                    ],
                    needs_manual: false
                },
                {
                    id: "g4_en_b_q2",
                    type: "mcq",
                    question: "Choose the correct answer:",
                    marks: 10,
                    subQuestions: [
                        { question: "We ___ received a letter from the college.", options: ["has", "have"], correct: 1 },
                        { question: "Jana and I ___ eating a pizza. Jana ___ drinking juice too.", options: ["am/are", "are/is", "are/are"], correct: 1 },
                        { question: "You ___ a cat and I ___ a hamster.", options: ["has/have", "have/has", "have/have"], correct: 1 }
                    ],
                    needs_manual: false
                },
                {
                    id: "g4_en_b_q3",
                    type: "mcq",
                    question: "Identify the tense:",
                    marks: 8,
                    subQuestions: [
                        { question: "Ahmad is going on a camping trip.", options: ["Simple Present", "Present Continuous"], correct: 1 },
                        { question: "Sam is an old friend of mine.", options: ["Simple Present", "Simple Past"], correct: 0 },
                        { question: "He was in Abha last week.", options: ["Simple Present", "Simple Past"], correct: 1 },
                        { question: "Why are you crying?", options: ["Simple Present", "Present Continuous"], correct: 1 }
                    ],
                    needs_manual: false
                }
            ]
        }
    },
    G5: {
        english: {
            modelA: [
                {
                    id: "g5_en_a_q1",
                    type: "mcq",
                    question: "Read the passage and answer the questions.",
                    passage: "Alex and his friends were thrilled about their upcoming summer trip to the beach. They packed their swimsuits, sunscreen, and beach towels, ready for days of fun in the sun. As they arrived at the sandy shores, they couldn't wait to dive into the refreshing ocean waves. They spent their days building sandcastles, playing beach volleyball, and enjoying ice cream by the shore. In the evenings, they gathered around a bonfire, roasting marshmallows and sharing stories. It was a memorable summer trip.",
                    marks: 12,
                    subQuestions: [
                        { question: "Where did Alex and his friends go on their summer trip?", options: ["Beach", "Mountains"], correct: 0 },
                        { question: "What items did they pack for their trip?", options: ["Boats", "Sunscreen"], correct: 1 },
                        { question: "What did they do in the evening?", options: ["shared stories", "ate ice cream"], correct: 0 },
                        { question: "What part of speech is: Gathered", options: ["Verb", "Adjective"], correct: 0 },
                        { question: "Refreshing is used as an adjective.", options: ["True", "False"], correct: 0 },
                        { question: "Marshmallow is a proper noun.", options: ["True", "False"], correct: 1 }
                    ],
                    needs_manual: false
                },
                {
                    id: "g5_en_a_q2",
                    type: "mcq",
                    question: "Identify the tense.",
                    marks: 10,
                    subQuestions: [
                        { question: "My dog slept on the couch.", options: ["Simple past", "Simple Present"], correct: 0 },
                        { question: "I read one book every week.", options: ["Simple past", "Simple Present"], correct: 1 },
                        { question: "They are taking an exam.", options: ["Simple present", "Present Continuous"], correct: 1 },
                        { question: "Are you going to Paris?", options: ["Simple Past", "Present Continuous"], correct: 1 },
                        { question: "James bought a new phone.", options: ["Simple Past", "Simple Present"], correct: 0 }
                    ],
                    needs_manual: false
                },
                {
                    id: "g5_en_a_q3",
                    type: "mcq",
                    question: "Choose the correct answer.",
                    marks: 8,
                    subQuestions: [
                        { question: "Nelly is a nurse. She ___ at the hospital.", options: ["works", "working"], correct: 0 },
                        { question: "Ali ___ his breakfast in the kitchen.", options: ["is eats", "is eating"], correct: 1 },
                        { question: "Does your mom ___ her car to the hospital everyday?", options: ["drive", "drives"], correct: 0 },
                        { question: "Tina ___ her room yesterday.", options: ["cleans", "cleaned"], correct: 1 }
                    ],
                    needs_manual: false
                }
            ],
            modelB: [
                {
                    id: "g5_en_b_q1",
                    type: "mcq",
                    question: "Read the passage and answer the questions.",
                    passage: "Maya was excited about using her new pink backpack. First, Maya put her crayons in the backpack. She would use the crayons to draw pictures for her new teacher, Mrs. Smith. Next, she put her scissors in the backpack. She could use the scissors to cut out hearts for her best friend. Next, Maya put in her new princess pencils. She thought of all the stories she would write with them. Finally, Maya put a bottle of glitter glue in her backpack. It would make everything she made sparkle.",
                    marks: 12,
                    subQuestions: [
                        { question: "What did Maya put in her backpack right before she put her glitter glue in?", options: ["pencils", "crayons"], correct: 0 },
                        { question: "What did Maya plan on using her scissors for?", options: ["writing stories", "making hearts"], correct: 1 },
                        { question: "What is the name of Maya's new teacher?", options: ["Ms. Jones", "Mrs. Smith"], correct: 1 },
                        { question: "What part of speech is Pink?", options: ["Noun", "Adjective"], correct: 1 },
                        { question: "Excited is used a verb.", options: ["True", "False"], correct: 1 },
                        { question: "Glitter is a noun.", options: ["True", "False"], correct: 0 }
                    ],
                    needs_manual: false
                },
                {
                    id: "g5_en_b_q2",
                    type: "mcq",
                    question: "Identify the tense.",
                    marks: 8,
                    subQuestions: [
                        { question: "She eats lunch in the afternoon.", options: ["Simple Past", "Simple present"], correct: 1 },
                        { question: "We are watching a movie.", options: ["Present Continuous", "Past Continuous"], correct: 0 },
                        { question: "He played volleyball on the beach.", options: ["Simple Past", "Simple Present"], correct: 0 },
                        { question: "Is he cleaning the room?", options: ["Present Continuous", "Simple Present"], correct: 0 }
                    ],
                    needs_manual: false
                },
                {
                    id: "g5_en_b_q3",
                    type: "mcq",
                    question: "Choose the correct answer.",
                    marks: 10,
                    subQuestions: [
                        { question: "We ___ in the library every night.", options: ["studying", "study"], correct: 1 },
                        { question: "Does she ___ football regularly?", options: ["play", "plays"], correct: 0 },
                        { question: "He ___ movie with his friends.", options: ["is watching", "watch"], correct: 0 },
                        { question: "He ___ his grandma yesterday.", options: ["visits", "visited"], correct: 1 },
                        { question: "The rabbit ___ in the garden.", options: ["is hops", "is hopping"], correct: 1 }
                    ],
                    needs_manual: false
                }
            ]
        }
    },
    G6: {
        english: {
            modelA: [
                {
                    id: "g6_en_a_q1",
                    type: "mcq",
                    question: "Read the passage and choose the correct answer.",
                    passage: "The library was unusually quiet, even for a Thursday afternoon. Sarah sat in the far corner, surrounded by towering shelves. The soft hum of the ceiling fan and the occasional rustle of a turning page were the only sounds. She wasn't reading, though the book lay open in her lap. Instead, she was watching the sunlight pour through the window, drawing golden patterns on the floor. In that quiet moment, Sarah felt a calmness she hadn't known in days. The silence was not empty—it was comforting, full of thought and presence. It was as if the library itself was breathing gently around her.",
                    marks: 10,
                    subQuestions: [
                        { question: "What mood does the writer create in this passage?", options: ["Tense", "Calm and reflective", "Confusing"], correct: 1 },
                        { question: "Where was Sara?", options: ["in a garden", "her room", "library"], correct: 2 },
                        { question: "Choose the correct part of speech for the word 'quiet'.", options: ["Noun", "Verb", "Adjective"], correct: 2 },
                        { question: "Why wasn't Sarah reading the book in her lap?", options: ["She was waiting for someone", "She was daydreaming", "She fell asleep"], correct: 1 },
                        { question: "What does the author suggest about silence?", options: ["It is boring", "It is dangerous", "It can bring peace"], correct: 2 }
                    ],
                    needs_manual: false
                },
                {
                    id: "g6_en_a_q2",
                    type: "mcq",
                    question: "Choose the correct answer for each sentence.",
                    marks: 10,
                    subQuestions: [
                        { question: "Change to present progressive: 'They build roads'", options: ["They built roads.", "They were building roads.", "They are building roads."], correct: 2 },
                        { question: "Identify the tense: 'They have been studying for hours.'", options: ["Simple present", "Present perfect continuous", "Past continuous"], correct: 1 },
                        { question: "What tense: She travelled to Japan last month.", options: ["Past progressive", "Past simple", "Present perfect"], correct: 1 },
                        { question: "Part of speech of 'myself'?", options: ["noun", "pronoun", "adverb"], correct: 1 },
                        { question: "Which sentence is positive?", options: ["He didn't come to school today.", "They never eat vegetables.", "She always completes her homework."], correct: 2 }
                    ],
                    needs_manual: false
                },
                {
                    id: "g6_en_a_q3",
                    type: "upload",
                    question: "Write a paragraph in about 100 words on: Importance of Reading Books.",
                    marks: 10,
                    needs_manual: true
                }
            ],
            modelB: [
                {
                    id: "g6_en_b_q1",
                    type: "mcq",
                    question: "Read the passage and choose the correct answer.",
                    passage: "It was a regular Tuesday morning at Greenhill Middle School. The students were bustling around, preparing for their classes. Among them was Maya, a curious and bright seventh grader who always carried her lunch in a bright red lunchbox. But today, something was wrong. When the lunch bell rang, Maya rushed to her locker, only to find that her lunchbox was missing! Confused and a little upset, she asked her friends if they had seen it. No one had. That's when Maya decided to investigate. She started by checking around her locker for any clues. To her surprise, she noticed a small trail of cookie crumbs leading down the hallway. 'That's strange,' she thought. She followed the crumbs until they ended near the gymnasium. There, she found Max, the class hamster, outside his cage with a half-eaten sandwich next to him. The janitor, Mr. Benson, explained that Max had escaped earlier that day when someone accidentally left his cage open. Maya smiled. It seemed that Max had gone on a mini adventure—and her lunch had been a part of it.",
                    marks: 10,
                    subQuestions: [
                        { question: "Which of the following describe Maya?", options: ["Curious", "Lazy", "Responsible"], correct: 0 },
                        { question: "What clues helped Maya?", options: ["A trail of cookie crumbs", "A torn note", "Max found outside his cage"], correct: 0 },
                        { question: "What do we know about Max?", options: ["He escaped from his cage", "He ate some of Maya's lunch", "He always stays in his cage"], correct: 0 },
                        { question: "What actions show Maya's problem-solving skills?", options: ["Asking her friends", "Following the crumbs", "Going home early"], correct: 1 },
                        { question: "What lessons can be learned?", options: ["Small clues can solve big mysteries", "Hamsters should not be kept in schools", "It's good to stay calm and think"], correct: 0 }
                    ],
                    needs_manual: false
                },
                {
                    id: "g6_en_b_q2",
                    type: "mcq",
                    question: "Identify the part of speech and tense.",
                    marks: 10,
                    subQuestions: [
                        { question: "Part of speech: She quickly finished her homework.", options: ["Verb", "Adverb", "Adjective"], correct: 1 },
                        { question: "Which sentence is in present perfect tense?", options: ["She writes a letter every week.", "She wrote a letter yesterday.", "She has written a letter to her friend."], correct: 2 },
                        { question: "Type of present tense: He is reading a novel.", options: ["Present simple", "Present perfect continuous", "Present continuous"], correct: 2 },
                        { question: "Which sentence is in past perfect tense?", options: ["They had left before the rain started.", "They left early in the morning.", "They were leaving when I arrived."], correct: 0 },
                        { question: "Part of speech: The blue butterfly landed.", options: ["Noun", "Verb", "Adjective"], correct: 2 }
                    ],
                    needs_manual: false
                },
                {
                    id: "g6_en_b_q3",
                    type: "upload",
                    question: "Write a paragraph in about 100 words on: 'The Activity I like to do in my Freetime'",
                    marks: 10,
                    needs_manual: true
                }
            ]
        }
    },
    G7: {
        english: {
            modelA: [
                {
                    id: "g7_en_a_q1",
                    type: "mcq",
                    question: "Read the passage and choose the correct answer.",
                    passage: "In life, setbacks are inevitable. Whether it's failing a test, losing a game, or facing personal challenges, it's easy to become discouraged. However, the difference between those who succeed and those who give up is resilience—the ability to bounce back after facing difficulties. Resilience isn't about avoiding challenges; it's about facing them head-on and learning from them. Take Thomas Edison, for example. He failed countless times before finally inventing the light bulb. In fact, he famously said, 'I have not failed. I've just found 10,000 ways that won't work.' His resilience allowed him to keep going, no matter how many times he failed.",
                    marks: 10,
                    subQuestions: [
                        { question: "What is the main idea of the passage?", options: ["Success is only for those who don't face challenges.", "Resilience helps people overcome challenges and succeed.", "Failure should be avoided at all costs."], correct: 1 },
                        { question: "What does the author mean by 'resilience'?", options: ["The ability to ignore challenges.", "The ability to face difficulties and recover from them.", "The ability to avoid setbacks."], correct: 1 },
                        { question: "Which best describes Thomas Edison's attitude toward failure?", options: ["He saw failure as a reason to quit.", "He believed that failure was part of the process of success.", "He didn't care about failure."], correct: 1 },
                        { question: "According to the passage, what is necessary to build resilience?", options: ["Giving up when things get difficult.", "Avoiding challenges altogether.", "Maintaining a positive attitude and being patient."], correct: 2 },
                        { question: "Which is a synonym for 'resilience'?", options: ["Weakness", "mental strength or Persistence", "Stubbornness"], correct: 1 }
                    ],
                    needs_manual: false
                },
                {
                    id: "g7_en_a_q2",
                    type: "mcq",
                    question: "Do as directed:",
                    marks: 10,
                    subQuestions: [
                        { question: "Part of speech: The students listened carefully.", options: ["Adjective", "Verb", "Adverb"], correct: 2 },
                        { question: "Which sentence contains a coordinating conjunction?", options: ["She stayed home because she was sick.", "I will call you after I arrive.", "He wanted to go to the park, but it started to rain."], correct: 2 },
                        { question: "Part of speech: The dog barked at the stranger.", options: ["Verb", "Adverb", "Preposition"], correct: 0 },
                        { question: "Which is in present continuous tense?", options: ["He will be studying at 7 p.m.", "He studied all night for the test.", "He is studying for his exams right now."], correct: 2 },
                        { question: "Fill in blank: She divided the cake equally ___ her three children.", options: ["Among", "Between", "With"], correct: 0 }
                    ],
                    needs_manual: false
                },
                {
                    id: "g7_en_a_q3",
                    type: "upload",
                    question: "Write a paragraph in about 100 words on: Advantages of School Uniform.",
                    marks: 10,
                    needs_manual: true
                }
            ],
            modelB: [
                {
                    id: "g7_en_b_q1",
                    type: "mcq",
                    question: "Read the passage and choose the correct answer.",
                    passage: "Teamwork is often considered the key to success in both personal and professional life. It brings together people with different skills, experiences, and perspectives, allowing them to accomplish things they could never achieve alone. In a team, each person plays a unique role, and when everyone contributes their strengths, the team as a whole becomes much stronger. Take sports teams, for example. A football team cannot win a match if every player tries to do everything on their own. The players must work together, relying on each other's strengths and trusting each other to perform their roles.",
                    marks: 10,
                    subQuestions: [
                        { question: "What is the main idea of the passage?", options: ["Teamwork is essential for success in various aspects of life.", "Working alone is more effective than working in a team.", "Teamwork only matters in sports."], correct: 0 },
                        { question: "Why is teamwork important in sports?", options: ["Because individual players can always win on their own.", "Because teamwork leads to more goals and success in the game.", "Because players don't need to work together to win."], correct: 1 },
                        { question: "What is one essential component of effective teamwork?", options: ["Ignoring each other's ideas.", "Communication and respect.", "Keeping ideas to oneself."], correct: 1 },
                        { question: "What does the author mean by 'a diversity of ideas'?", options: ["Only one person's idea should be considered.", "Everyone has the same idea.", "Each person brings unique ideas that contribute to the success of the team."], correct: 2 },
                        { question: "What does 'cooperation' mean?", options: ["Working independently", "Working together with others", "Avoiding others' ideas"], correct: 1 }
                    ],
                    needs_manual: false
                },
                {
                    id: "g7_en_b_q2",
                    type: "mcq",
                    question: "Do as directed:",
                    marks: 10,
                    subQuestions: [
                        { question: "Part of speech: She was feeling extremely tired.", options: ["Adverb", "Noun", "Verb"], correct: 0 },
                        { question: "Choose correct preposition: The book is lying ___ the table.", options: ["Under", "Between", "With"], correct: 0 },
                        { question: "Which sentence is in present perfect tense?", options: ["I have seen that movie before.", "I will watch that movie tomorrow.", "I watched that movie last night."], correct: 0 },
                        { question: "Choose sentence with past perfect tense:", options: ["They were walking to school.", "They would have walked to school every day.", "They had walked to school."], correct: 2 },
                        { question: "Identify tense: By next summer, I will have visited five countries.", options: ["Present perfect", "Past continuous", "Future perfect"], correct: 2 }
                    ],
                    needs_manual: false
                },
                {
                    id: "g7_en_b_q3",
                    type: "upload",
                    question: "Write a paragraph in about 100 words on: 'The most exciting day of my life.'",
                    marks: 10,
                    needs_manual: true
                }
            ]
        }
    },
    G8: {
        english: {
            modelA: [
                {
                    id: "g8_en_a_q1",
                    type: "mcq",
                    question: "Read the following passage and choose the correct answer.",
                    passage: "Garbage is a great environment hazard. It comes from various sources—used paper, tiffin packing's, plastic bags, ice-cream wrappers, bottle caps, fallen leaves from trees and many more. Garbage makes the premises ugly, unkempt and breeds diseases. A lot of trash that is thrown away contain material that can be recycled and reused such as paper, metals and glass which can be sent to the nearest recycling center or disposed of to the junk dealer. It also contains organic matter such as leaves which can enrich soil fertility. A compost pit can be made at a convenient location where the refuse can be placed with layers of soil and an occasional sprinkling of water. This would help decomposition to make valuable fertilizer. This would also prevent pollution that is usually caused by burning such organic waste.",
                    marks: 10,
                    subQuestions: [
                        { question: "Garbage originates from", options: ["used paper, tiffin, packings, plastic bags and fallen leaves from trees", "leftovers of food", "fallen branches from trees", "building materials."], correct: 0 },
                        { question: "Garbage can create havoc to the mankind by", options: ["spreading foul smell", "slowing our vehicles on the road", "spreading several diseases", "all the above."], correct: 2 },
                        { question: "What happens to the disposed material at the recycling center?", options: ["It is thrown away", "It is recycled for reuse", "It is sold to the rag pickers", "It is dumped into the ground."], correct: 1 },
                        { question: "Fallen leaves from trees are useful because they", options: ["solve the problem of fuel wood in village households", "enrich water quality", "enrich soil fertility", "beautify landscape."], correct: 2 },
                        { question: "Which is correct with reference to a composite pit?", options: ["The refuge is placed with layers of soil with an occasional sprinkling of water", "It contributes to the manufacture of useful fertilizer", "It prevents pollution", "All the above."], correct: 3 }
                    ],
                    needs_manual: false
                },
                {
                    id: "g8_en_a_q2",
                    type: "upload",
                    question: "Write an essay in 130 words on: An achievement that filled me with pride.",
                    marks: 20,
                    needs_manual: true
                }
            ],
            modelB: [
                {
                    id: "g8_en_b_q1",
                    type: "mcq",
                    question: "Read the article and choose the correct answer.",
                    passage: "Ancient cave art - In December 1994, three climbers were climbing a cliff in southern France when they came across a small opening. They made the opening wider, and then crawled along a narrow passage into a large cave. To their amazement, they saw hundreds of beautiful images of animals on the cave walls. As they walked through the cave, they realised they were stepping on animal bones. Later tests showed that these were thousands of years old. The climbers told the local authorities about the cave, and experts were sent to study it. The experts realised it was a very important discovery. They identified more than 400 drawings and paintings of 15 different animal species. Some were between 28000 and 31000 years old. The majority, however, dated back 35000 years.",
                    marks: 10,
                    subQuestions: [
                        { question: "What did the climbers notice on the floor of the cave?", options: ["Images of animals", "narrow passage", "animal bones"], correct: 2 },
                        { question: "How many years ago was most of the art in the cave made?", options: ["28000", "35000", "31000"], correct: 1 },
                        { question: "Why were people unable to enter the cave for thousands of years?", options: ["Rock fall", "no art", "cave was damaged"], correct: 0 },
                        { question: "What material did the cave artists use to make their brushes?", options: ["Wood", "horsehair", "hair"], correct: 1 },
                        { question: "Who was sent to study about the cave?", options: ["Climbers", "local authorities", "experts"], correct: 2 }
                    ],
                    needs_manual: false
                },
                {
                    id: "g8_en_b_q2",
                    type: "upload",
                    question: "Write an essay in about 130 words on: Importance of Sports.",
                    marks: 20,
                    needs_manual: true
                }
            ]
        }
    }
};
