import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const quizData = {
  "General Knowledge": [
    { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Lisbon"], answer: "Paris", difficulty: "easy" },
    { question: "Who wrote 'To Kill a Mockingbird'?", options: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"], answer: "Harper Lee", difficulty: "easy" },
    { question: "What is the largest ocean on Earth?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: "Pacific", difficulty: "easy" },
    { question: "What year did World War II end?", options: ["1942", "1945", "1948", "1950"], answer: "1945", difficulty: "medium" },
    { question: "What is the smallest planet in our solar system?", options: ["Mars", "Venus", "Mercury", "Pluto"], answer: "Mercury", difficulty: "medium" },
    { question: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond", "Platinum"], answer: "Diamond", difficulty: "medium" },
    { question: "Who painted the Mona Lisa?", options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"], answer: "Leonardo da Vinci", difficulty: "hard" },
    { question: "What is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], answer: "Nile", difficulty: "hard" },
    { question: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Pb", "Fe"], answer: "Au", difficulty: "hard" },
    { question: "Who developed the theory of relativity?", options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"], answer: "Albert Einstein", difficulty: "hard" },
  ],
  "Science & Technology": [
    { question: "What is the chemical symbol for water?", options: ["O2", "H2O", "CO2", "NaCl"], answer: "H2O", difficulty: "easy" },
    { question: "What planet is known as the Red Planet?", options: ["Earth", "Venus", "Mars", "Jupiter"], answer: "Mars", difficulty: "easy" },
    { question: "What is the speed of light?", options: ["300,000 km/s", "150,000 km/s", "1,000 km/s", "500,000 km/s"], answer: "300,000 km/s", difficulty: "easy" },
    { question: "What is the powerhouse of the cell?", options: ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"], answer: "Mitochondria", difficulty: "medium" },
    { question: "What is the chemical formula for table salt?", options: ["NaCl", "KCl", "CaCl2", "MgCl2"], answer: "NaCl", difficulty: "medium" },
    { question: "What is the most abundant gas in Earth's atmosphere?", options: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon Dioxide"], answer: "Nitrogen", difficulty: "medium" },
    { question: "Who invented the telephone?", options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"], answer: "Alexander Graham Bell", difficulty: "hard" },
    { question: "What is the main component of the sun?", options: ["Oxygen", "Carbon", "Hydrogen", "Helium"], answer: "Hydrogen", difficulty: "hard" },
    { question: "What is the chemical symbol for lead?", options: ["Pb", "Fe", "Hg", "Au"], answer: "Pb", difficulty: "hard" },
    { question: "What is the most common element in the universe?", options: ["Oxygen", "Carbon", "Hydrogen", "Helium"], answer: "Hydrogen", difficulty: "hard" },
  ],
 "Mathematics": [
    { question: "What is 7 + 8?", options: ["12", "15", "14", "16"], answer: "15", difficulty: "easy" },
    { question: "What is the square root of 64?", options: ["6", "7", "8", "9"], answer: "8", difficulty: "easy" },
    { question: "Solve: 5 × 6", options: ["25", "30", "35", "40"], answer: "30", difficulty: "easy" },
    { question: "What is the value of π (pi)?", options: ["3.14", "2.71", "1.62", "1.41"], answer: "3.14", difficulty: "medium" },
    { question: "What is the derivative of x^2?", options: ["x", "2x", "x^2", "2x^2"], answer: "2x", difficulty: "medium" },
    { question: "What is the integral of 1/x?", options: ["ln(x)", "x", "1/x", "x^2"], answer: "ln(x)", difficulty: "medium" },
    { question: "What is the Pythagorean theorem?", options: ["a^2 + b^2 = c^2", "a^2 - b^2 = c^2", "a^2 + b = c^2", "a + b^2 = c^2"], answer: "a^2 + b^2 = c^2", difficulty: "hard" },
    { question: "What is the Fibonacci sequence?", options: ["1, 1, 2, 3, 5, 8", "1, 2, 4, 8, 16", "2, 4, 6, 8, 10", "1, 3, 6, 10, 15"], answer: "1, 1, 2, 3, 5, 8", difficulty: "hard" },
    { question: "What is the value of e?", options: ["2.71", "3.14", "1.62", "1.41"], answer: "2.71", difficulty: "hard" },
    { question: "What is the quadratic formula?", options: ["-b ± √(b^2 - 4ac) / 2a", "b ± √(b^2 - 4ac) / 2a", "-b ± √(b^2 + 4ac) / 2a", "b ± √(b^2 + 4ac) / 2a"], answer: "-b ± √(b^2 - 4ac) / 2a", difficulty: "hard" },
  ],
 "History & Geography": [
   { question: "Who was the first President of the United States?", options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"], answer: "George Washington", difficulty: "easy" },
   
   { question: "Which country is known as the Land of the Rising Sun?", options: ["China", "Japan", "South Korea", "Thailand"], answer: "Japan", difficulty: "easy" },
   
   { question: "What is the longest river in the world?", options: ["Amazon River", "Yangtze River", "Mississippi River", "Nile River"], answer: "Nile River", difficulty: "easy" },
   
   { question: "Which ancient wonder was located in Babylon?", options: ["Great Pyramid of Giza", "Hanging Gardens", "Statue of Zeus", "Colossus of Rhodes"], answer: "Hanging Gardens", difficulty: "medium" },
   
   { question: "Who was the first emperor of China?", options: ["Kublai Khan", "Qin Shi Huang", "Ming Taizu", "Liu Bang"], answer: "Qin Shi Huang", difficulty: "medium" },
   
   { question: "Which war ended with the Treaty of Versailles?", options: ["World War I", "World War II", "Cold War", "Napoleonic Wars"], answer: "World War I", difficulty: "medium" },
   
   { question: "Which is the smallest country in the world?", options: ["Monaco", "Vatican City", "Malta", "Liechtenstein"], answer: "Vatican City", difficulty: "hard" },
   
   { question: "What is the capital of Canada?", options: ["Toronto", "Vancouver", "Ottawa", "Montreal"], answer: "Ottawa", difficulty: "hard" },
   
   { question: "Which continent has the most countries?", options: ["Asia", "Europe", "Africa", "South America"], answer: "Africa", difficulty: "hard" },
   
   { question: "Which civilization built Machu Picchu?", options: ["Aztecs", "Mayans", "Incas", "Olmecs"], answer: "Incas", difficulty: "hard" }
],
"English Language & Grammar": [
   { question: "What is the plural of 'child'?", options: ["Childs", "Children", "Childes", "Child"], answer: "Children", difficulty: "easy" },
   
   { question: "Which word is an adverb?", options: ["Run", "Quickly", "Beautiful", "Happy"], answer: "Quickly", difficulty: "easy" },
   
   { question: "What is the past tense of 'go'?", options: ["Goes", "Went", "Gone", "Going"], answer: "Went", difficulty: "easy" },
   
   { question: "Which sentence is grammatically correct?", options: ["She don't like apples.", "She doesn't like apples.", "She not like apples.", "She isn't like apples."], answer: "She doesn't like apples.", difficulty: "medium" },
   
   { question: "Which of the following is a synonym for 'Happy'?", options: ["Sad", "Excited", "Joyful", "Angry"], answer: "Joyful", difficulty: "medium" },
   
   { question: "Which sentence is in passive voice?", options: ["The cat chased the mouse.", "The mouse was chased by the cat.", "I eat an apple.", "She is reading a book."], answer: "The mouse was chased by the cat.", difficulty: "medium" },
   
   { question: "Which is an example of a preposition?", options: ["Run", "Between", "Quickly", "Strong"], answer: "Between", difficulty: "hard" },
   
   { question: "What type of sentence is: 'If it rains, we will cancel the trip.'?", options: ["Simple", "Compound", "Complex", "Imperative"], answer: "Complex", difficulty: "hard" },
   
   { question: "Identify the correct indirect speech: She said, 'I am happy.'", options: ["She said she was happy.", "She said I am happy.", "She said she happy.", "She said she is happy."], answer: "She said she was happy.", difficulty: "hard" },
   
   { question: "What is an oxymoron?", options: ["A comparison without 'like' or 'as'", "A phrase with contradictory words", "A word that imitates sound", "An overstatement"], answer: "A phrase with contradictory words", difficulty: "hard" }
],
"Logical Reasoning & Aptitude": [
   { question: "What is the next number in the sequence: 2, 4, 8, 16, ?", options: ["24", "32", "40", "48"], answer: "32", difficulty: "easy" },
   
   { question: "If a car travels at 60 km/h, how far will it travel in 2.5 hours?", options: ["120 km", "130 km", "140 km", "150 km"], answer: "150 km", difficulty: "easy" },
   
   { question: "What is 25% of 200?", options: ["25", "40", "50", "60"], answer: "50", difficulty: "easy" },
   
   { question: "If A is the brother of B, and B is the father of C, how is A related to C?", options: ["Father", "Uncle", "Brother", "Grandfather"], answer: "Uncle", difficulty: "medium" },
   
   { question: "Find the odd one out: Apple, Banana, Mango, Carrot", options: ["Apple", "Banana", "Mango", "Carrot"], answer: "Carrot", difficulty: "medium" },
   
   { question: "What is the missing number? 3, 6, 9, 12, ?", options: ["14", "15", "16", "18"], answer: "15", difficulty: "medium" },
   
   { question: "If in a certain code, 'BOOK' is written as 'DQQM', how is 'PEN' written?", options: ["RGP", "RQN", "QFO", "RGO"], answer: "RGO", difficulty: "hard" },
   
   { question: "A clock shows 10:30 AM. What is the angle between the hour and minute hands?", options: ["90°", "105°", "120°", "150°"], answer: "105°", difficulty: "hard" },
   
   { question: "If all BLOKES are BLAMES, and all BLAMES are BLISTS, then all BLOKES are?", options: ["BLAMES", "BLISTS", "BLOKES", "None"], answer: "BLISTS", difficulty: "hard" },
   
   { question: "How many squares are there in a standard 8x8 chessboard?", options: ["64", "128", "204", "256"], answer: "204", difficulty: "hard" }
],
"Programming (JavaScript, Python, C++, etc.)": [
   { question: "Which keyword is used to declare a variable in JavaScript?", options: ["var", "int", "string", "declare"], answer: "var", difficulty: "easy" },
   
   { question: "What does 'print()' do in Python?", options: ["Takes input", "Outputs text", "Declares a variable", "Ends a program"], answer: "Outputs text", difficulty: "easy" },
   
   { question: "Which data structure follows the LIFO principle?", options: ["Queue", "Stack", "Array", "Linked List"], answer: "Stack", difficulty: "easy" },
   
   { question: "What is the output of 3 + '3' in JavaScript?", options: ["6", "33", "Error", "Undefined"], answer: "33", difficulty: "medium" },
   
   { question: "Which symbol is used for single-line comments in Python?", options: ["//", "#", "/*", "--"], answer: "#", difficulty: "medium" },
   
   { question: "Which sorting algorithm has the worst-case time complexity of O(n²)?", options: ["Merge Sort", "Bubble Sort", "Quick Sort", "Heap Sort"], answer: "Bubble Sort", difficulty: "medium" },
   
   { question: "Which of the following is NOT an OOP principle?", options: ["Encapsulation", "Abstraction", "Polymorphism", "Compilation"], answer: "Compilation", difficulty: "hard" },
   
   { question: "Which function is used to read a file in Python?", options: ["open()", "readFile()", "file.open()", "getFile()"], answer: "open()", difficulty: "hard" },
   
   { question: "What does the 'this' keyword refer to in JavaScript?", options: ["Global object", "Current object", "Previous function", "Window object"], answer: "Current object", difficulty: "hard" },
   
   { question: "Which data structure is used to implement recursion?", options: ["Queue", "Stack", "Heap", "Tree"], answer: "Stack", difficulty: "hard" }
],
"Web Development": [
   { question: "What does HTML stand for?", options: ["Hyper Transfer Markup Language", "Hyper Text Markup Language", "Hyper Tool Markup Language", "Hyperlink Markup Language"], answer: "Hyper Text Markup Language", difficulty: "easy" },
   
   { question: "Which CSS property is used to change text color?", options: ["background", "color", "font-style", "text-color"], answer: "color", difficulty: "easy" },
   
   { question: "Which tag is used to link an external CSS file?", options: ["<script>", "<link>", "<style>", "<css>"], answer: "<link>", difficulty: "easy" },
   
   { question: "Which HTTP method is used to update a resource?", options: ["GET", "POST", "PUT", "DELETE"], answer: "PUT", difficulty: "medium" },
   
   { question: "What is the purpose of a 'div' tag in HTML?", options: ["Define a section", "Create a button", "Display images", "Define a hyperlink"], answer: "Define a section", difficulty: "medium" },
   
   { question: "What is the default position of an HTML element?", options: ["Relative", "Absolute", "Static", "Fixed"], answer: "Static", difficulty: "medium" },
   
   { question: "Which database is commonly used with React?", options: ["MongoDB", "MySQL", "PostgreSQL", "All of the above"], answer: "All of the above", difficulty: "hard" },
   
   { question: "What is the difference between '=='' and '===' in JavaScript?", options: ["No difference", "=== checks value & type", "== checks type only", "=== is for arrays"], answer: "=== checks value & type", difficulty: "hard" },
   
   { question: "Which HTTP status code indicates 'Not Found'?", options: ["200", "301", "400", "404"], answer: "404", difficulty: "hard" },
   
   { question: "Which framework is used for server-side rendering in React?", options: ["Angular", "Vue.js", "Next.js", "Svelte"], answer: "Next.js", difficulty: "hard" }
],
"AI & Machine Learning": [
   { question: "What does 'AI' stand for?", options: ["Automated Intelligence", "Artificial Intelligence", "Advanced Internet", "Automated Information"], answer: "Artificial Intelligence", difficulty: "easy" },
   
   { question: "Which library is commonly used for machine learning in Python?", options: ["NumPy", "Pandas", "TensorFlow", "Bootstrap"], answer: "TensorFlow", difficulty: "easy" },
   
   { question: "What is supervised learning?", options: ["Learning without labeled data", "Learning with labeled data", "Learning by interacting with the environment", "Learning by trial and error"], answer: "Learning with labeled data", difficulty: "easy" },
   
   { question: "What is the purpose of a loss function in ML?", options: ["Measure accuracy", "Optimize data", "Calculate error", "Store data"], answer: "Calculate error", difficulty: "medium" },
   
   { question: "Which algorithm is used for classification?", options: ["K-Means", "Linear Regression", "K-Nearest Neighbors", "PCA"], answer: "K-Nearest Neighbors", difficulty: "medium" },
   
   { question: "Which activation function is used in neural networks?", options: ["ReLU", "Sigmoid", "Tanh", "All of the above"], answer: "All of the above", difficulty: "medium" },
   
   { question: "What is 'overfitting' in ML?", options: ["Model too simple", "Model too complex", "Model is perfect", "Model doesn't work"], answer: "Model too complex", difficulty: "hard" },
   
   { question: "Which AI model is best for text generation?", options: ["CNN", "LSTM", "GAN", "Decision Tree"], answer: "LSTM", difficulty: "hard" },
   
   { question: "What is a 'hidden layer' in a neural network?", options: ["First layer", "Middle layer", "Last layer", "All layers"], answer: "Middle layer", difficulty: "hard" },
   
   { question: "Which concept is used in reinforcement learning?", options: ["Supervised learning", "Reward & punishment", "Unsupervised learning", "Classification"], answer: "Reward & punishment", difficulty: "hard" }
],
"Cybersecurity": [
   { question: "What does 'VPN' stand for?", options: ["Virtual Private Network", "Very Personal Network", "Verified Private Node", "Virtual Proxy Network"], answer: "Virtual Private Network", difficulty: "easy" },

   { question: "Which of the following is an example of strong password?", options: ["password123", "12345678", "P@ssw0rd!#", "qwerty"], answer: "P@ssw0rd!#", difficulty: "easy" },

   { question: "Which type of malware locks files and demands a ransom?", options: ["Trojan", "Ransomware", "Spyware", "Worm"], answer: "Ransomware", difficulty: "easy" },

   { question: "What is phishing?", options: ["A type of malware", "A hacking technique", "A scam to steal information", "A firewall feature"], answer: "A scam to steal information", difficulty: "medium" },

   { question: "Which protocol is used to encrypt web traffic?", options: ["HTTP", "HTTPS", "FTP", "SMTP"], answer: "HTTPS", difficulty: "medium" },

   { question: "What is multi-factor authentication (MFA)?", options: ["Using one password", "Using a username and password", "Using multiple authentication methods", "A type of firewall"], answer: "Using multiple authentication methods", difficulty: "medium" },

   { question: "Which attack exploits a website’s database vulnerability?", options: ["DDoS", "XSS", "SQL Injection", "Brute Force"], answer: "SQL Injection", difficulty: "hard" },

   { question: "What is the role of a firewall?", options: ["Detect viruses", "Block unauthorized access", "Encrypt files", "Speed up the internet"], answer: "Block unauthorized access", difficulty: "hard" },

   { question: "Which cybersecurity principle ensures data is not altered?", options: ["Confidentiality", "Integrity", "Availability", "Authentication"], answer: "Integrity", difficulty: "hard" },

   { question: "Which security technique scrambles data to protect it?", options: ["Phishing", "Encryption", "Firewall", "Trojan"], answer: "Encryption", difficulty: "hard" }
],
"Movies & TV Shows": [
   { question: "Which movie features the famous line 'I am your father'?", options: ["The Matrix", "Star Wars", "Harry Potter", "Inception"], answer: "Star Wars", difficulty: "easy" },

   { question: "Which TV show is about a chemistry teacher turned drug dealer?", options: ["Breaking Bad", "Narcos", "Better Call Saul", "Dexter"], answer: "Breaking Bad", difficulty: "easy" },

   { question: "Which animated movie features a clownfish named Nemo?", options: ["Shrek", "Finding Nemo", "Toy Story", "The Lion King"], answer: "Finding Nemo", difficulty: "easy" },

   { question: "Who played Iron Man in the Marvel Cinematic Universe?", options: ["Chris Hemsworth", "Chris Evans", "Robert Downey Jr.", "Mark Ruffalo"], answer: "Robert Downey Jr.", difficulty: "medium" },

   { question: "Which director is known for movies like 'Inception' and 'Interstellar'?", options: ["Quentin Tarantino", "Christopher Nolan", "Steven Spielberg", "Martin Scorsese"], answer: "Christopher Nolan", difficulty: "medium" },

   { question: "Which TV show features a group of friends in New York City?", options: ["Friends", "How I Met Your Mother", "The Office", "Brooklyn Nine-Nine"], answer: "Friends", difficulty: "medium" },

   { question: "Which movie won Best Picture at the 2020 Oscars?", options: ["Joker", "Parasite", "1917", "Once Upon a Time in Hollywood"], answer: "Parasite", difficulty: "hard" },

   { question: "Which actor has won the most Oscars?", options: ["Leonardo DiCaprio", "Tom Hanks", "Meryl Streep", "Katharine Hepburn"], answer: "Katharine Hepburn", difficulty: "hard" },

   { question: "In which movie did Heath Ledger play the Joker?", options: ["Joker", "Batman Begins", "The Dark Knight", "Suicide Squad"], answer: "The Dark Knight", difficulty: "hard" },

   { question: "What is the highest-grossing movie of all time?", options: ["Titanic", "Avatar", "Avengers: Endgame", "The Lion King"], answer: "Avatar", difficulty: "hard" }
],
"Sports & Games": [
   { question: "Which sport is known as 'The Beautiful Game'?", options: ["Basketball", "Tennis", "Soccer", "Cricket"], answer: "Soccer", difficulty: "easy" },

   { question: "Which country won the 2018 FIFA World Cup?", options: ["Germany", "Brazil", "France", "Argentina"], answer: "France", difficulty: "easy" },

   { question: "Which player is known as 'The King' in basketball?", options: ["Michael Jordan", "LeBron James", "Kobe Bryant", "Shaquille O'Neal"], answer: "LeBron James", difficulty: "easy" },

   { question: "What is the maximum score in a single frame of bowling?", options: ["10", "20", "30", "50"], answer: "30", difficulty: "medium" },

   { question: "Which country has won the most Cricket World Cups?", options: ["India", "Australia", "England", "West Indies"], answer: "Australia", difficulty: "medium" },

   { question: "Who won the most Grand Slam titles in tennis?", options: ["Rafael Nadal", "Novak Djokovic", "Roger Federer", "Serena Williams"], answer: "Novak Djokovic", difficulty: "medium" },

   { question: "What is the diameter of a standard basketball hoop?", options: ["15 inches", "18 inches", "20 inches", "24 inches"], answer: "18 inches", difficulty: "hard" },

   { question: "Which chess piece can only move diagonally?", options: ["Rook", "Knight", "Bishop", "Queen"], answer: "Bishop", difficulty: "hard" },

   { question: "Which athlete has the most Olympic gold medals?", options: ["Usain Bolt", "Michael Phelps", "Simone Biles", "Carl Lewis"], answer: "Michael Phelps", difficulty: "hard" },

   { question: "What is the length of a marathon?", options: ["10 km", "21.1 km", "42.195 km", "50 km"], answer: "42.195 km", difficulty: "hard" }
],
"World Capitals & Countries": [
   { question: "What is the capital of France?", options: ["Berlin", "Paris", "Madrid", "Rome"], answer: "Paris", difficulty: "easy" },

   { question: "Which country has the largest population?", options: ["India", "USA", "China", "Russia"], answer: "China", difficulty: "easy" },

   { question: "Which continent is the Sahara Desert located in?", options: ["Asia", "Europe", "Africa", "Australia"], answer: "Africa", difficulty: "easy" },

   { question: "What is the capital of Canada?", options: ["Toronto", "Vancouver", "Montreal", "Ottawa"], answer: "Ottawa", difficulty: "medium" },

   { question: "Which country has the most islands?", options: ["Philippines", "Indonesia", "Sweden", "Japan"], answer: "Sweden", difficulty: "medium" },

   { question: "What is the smallest country in the world?", options: ["Monaco", "Malta", "Vatican City", "San Marino"], answer: "Vatican City", difficulty: "medium" },

   { question: "Which country has the highest number of time zones?", options: ["Russia", "France", "USA", "China"], answer: "France", difficulty: "hard" },

   { question: "Which country has the tallest mountain in the world?", options: ["India", "Nepal", "China", "Pakistan"], answer: "Nepal", difficulty: "hard" }
],
"Health & Fitness": [
   { question: "How many minutes of moderate exercise is recommended per week?", options: ["60 minutes", "150 minutes", "200 minutes", "300 minutes"], answer: "150 minutes", difficulty: "easy" },

   { question: "Which vitamin is primarily obtained from sunlight?", options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"], answer: "Vitamin D", difficulty: "easy" },

   { question: "What is the main muscle used in breathing?", options: ["Biceps", "Triceps", "Diaphragm", "Abdominals"], answer: "Diaphragm", difficulty: "easy" },

   { question: "Which macronutrient is the body's primary source of energy?", options: ["Proteins", "Carbohydrates", "Fats", "Vitamins"], answer: "Carbohydrates", difficulty: "medium" },

   { question: "Which organ is responsible for filtering toxins from the blood?", options: ["Lungs", "Kidneys", "Liver", "Heart"], answer: "Liver", difficulty: "medium" },

   { question: "What is the normal resting heart rate for an adult?", options: ["40-60 bpm", "60-100 bpm", "100-120 bpm", "120-140 bpm"], answer: "60-100 bpm", difficulty: "medium" },

   { question: "Which type of fat is considered healthy?", options: ["Trans fat", "Saturated fat", "Unsaturated fat", "Processed fat"], answer: "Unsaturated fat", difficulty: "hard" },

   { question: "What is the medical term for high blood pressure?", options: ["Hypotension", "Hypertension", "Hyperglycemia", "Hypoglycemia"], answer: "Hypertension", difficulty: "hard" },

   { question: "Which hormone regulates blood sugar levels?", options: ["Adrenaline", "Insulin", "Estrogen", "Testosterone"], answer: "Insulin", difficulty: "hard" },

   { question: "What is the recommended daily water intake for adults?", options: ["1-2 liters", "2-3 liters", "3-4 liters", "5-6 liters"], answer: "2-3 liters", difficulty: "hard" }
],
"Current Affairs & News": [
   { question: "Who is the current Secretary-General of the United Nations?", options: ["Antonio Guterres", "Ban Ki-moon", "Kofi Annan", "Tedros Adhanom"], answer: "Antonio Guterres", difficulty: "easy" },

   { question: "Which country hosted the most recent FIFA World Cup?", options: ["Brazil", "Qatar", "Russia", "Germany"], answer: "Qatar", difficulty: "easy" },

   { question: "Which global organization oversees international public health?", options: ["WHO", "UNICEF", "IMF", "WTO"], answer: "WHO", difficulty: "easy" },

   { question: "What was the name of the spacecraft that recently landed on the Moon?", options: ["Chandrayaan-3", "Apollo 13", "Perseverance", "Lunar Rover"], answer: "Chandrayaan-3", difficulty: "medium" },

   { question: "Which country recently became the most populous in the world?", options: ["China", "USA", "India", "Brazil"], answer: "India", difficulty: "medium" },

   { question: "What is the name of the world's largest stock exchange?", options: ["London Stock Exchange", "Tokyo Stock Exchange", "New York Stock Exchange", "NASDAQ"], answer: "New York Stock Exchange", difficulty: "medium" },

   { question: "Which country recently joined BRICS as a new member?", options: ["Egypt", "Germany", "Canada", "Japan"], answer: "Egypt", difficulty: "hard" },

   { question: "Which tech billionaire is the CEO of Tesla and SpaceX?", options: ["Jeff Bezos", "Elon Musk", "Bill Gates", "Mark Zuckerberg"], answer: "Elon Musk", difficulty: "hard" },

   { question: "Which natural disaster struck Turkey and Syria in 2023?", options: ["Hurricane", "Earthquake", "Tsunami", "Flood"], answer: "Earthquake", difficulty: "hard" },

   { question: "What is the name of the AI chatbot developed by OpenAI?", options: ["Alexa", "Siri", "ChatGPT", "Bard"], answer: "ChatGPT", difficulty: "hard" }
],
"random01": [
  { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Lisbon"], answer: "Paris", difficulty: "hard" },
  { question: "Who wrote 'To Kill a Mockingbird'?", options: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"], answer: "Harper Lee", difficulty: "hard" },
  { question: "What is the largest ocean on Earth?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: "Pacific", difficulty: "hard" },
  { question: "What year did World War II end?", options: ["1942", "1945", "1948", "1950"], answer: "1945", difficulty: "hard" },
  { question: "What is the smallest planet in our solar system?", options: ["Mars", "Venus", "Mercury", "Pluto"], answer: "Mercury", difficulty: "hard" },
  { question: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond", "Platinum"], answer: "Diamond", difficulty: "hard" },
  { question: "Who painted the Mona Lisa?", options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"], answer: "Leonardo da Vinci", difficulty: "hard" },
  { question: "What is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], answer: "Nile", difficulty: "hard" },
  { question: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Pb", "Fe"], answer: "Au", difficulty: "hard" },
  { question: "Who developed the theory of relativity?", options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"], answer: "Albert Einstein", difficulty: "hard" },
],
"random02": [
  { "question": "Which element has the highest melting point?", "options": ["Iron", "Tungsten", "Platinum", "Carbon"], "answer": "Tungsten", "difficulty": "hard" },
  { "question": "Who was the first person to reach the South Pole?", "options": ["Ernest Shackleton", "Robert Falcon Scott", "Roald Amundsen", "James Cook"], "answer": "Roald Amundsen", "difficulty": "hard" },
  { "question": "What is the rarest blood type?", "options": ["O-", "A+", "AB-", "B-"], "answer": "AB-", "difficulty": "hard" },
  { "question": "Which planet has the most moons?", "options": ["Jupiter", "Saturn", "Uranus", "Neptune"], "answer": "Saturn", "difficulty": "hard" },
  { "question": "Who discovered penicillin?", "options": ["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Joseph Lister"], "answer": "Alexander Fleming", "difficulty": "hard" },
  { "question": "What is the name of the deepest oceanic trench?", "options": ["Mariana Trench", "Tonga Trench", "Philippine Trench", "Kermadec Trench"], "answer": "Mariana Trench", "difficulty": "hard" },
  { "question": "Which Shakespeare play features the famous 'To be, or not to be' soliloquy?", "options": ["Macbeth", "Othello", "Hamlet", "King Lear"], "answer": "Hamlet", "difficulty": "hard" },
  { "question": "What is the mathematical constant e approximately equal to?", "options": ["2.71", "3.14", "1.62", "0.57"], "answer": "2.71", "difficulty": "hard" },
  { "question": "Which country has the most natural lakes?", "options": ["United States", "Canada", "Russia", "Brazil"], "answer": "Canada", "difficulty": "hard" },
  { "question": "Who was the first Emperor of China?", "options": ["Liu Bang", "Qin Shi Huang", "Kublai Khan", "Sun Yat-sen"], "answer": "Qin Shi Huang", "difficulty": "hard" }
],

"random03": [
  { "question": "What is the powerhouse of the cell?", "options": ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"], "answer": "Mitochondria", "difficulty": "hard" },
  { "question": "Which gas makes up about 78% of the Earth's atmosphere?", "options": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"], "answer": "Nitrogen", "difficulty": "hard" },
  { "question": "Who formulated the laws of planetary motion?", "options": ["Galileo Galilei", "Johannes Kepler", "Isaac Newton", "Nicolaus Copernicus"], "answer": "Johannes Kepler", "difficulty": "hard" },
  { "question": "What is the hardest known natural material?", "options": ["Graphene", "Diamond", "Corundum", "Topaz"], "answer": "Diamond", "difficulty": "hard" },
  { "question": "In computing, what does 'CPU' stand for?", "options": ["Central Processing Unit", "Central Programming Unit", "Computer Processing Unit", "Core Processing Unit"], "answer": "Central Processing Unit", "difficulty": "hard" },
  { "question": "What is the primary language spoken in Brazil?", "options": ["Spanish", "Portuguese", "English", "French"], "answer": "Portuguese", "difficulty": "hard" },
  { "question": "Which continent is the largest by land area?", "options": ["Africa", "North America", "Asia", "Europe"], "answer": "Asia", "difficulty": "hard" },
  { "question": "Who is known as the father of modern physics?", "options": ["Galileo Galilei", "Albert Einstein", "Max Planck", "Stephen Hawking"], "answer": "Albert Einstein", "difficulty": "hard" },
  { "question": "Which element is represented by the symbol 'Fe'?", "options": ["Fluorine", "Iron", "Fermium", "Francium"], "answer": "Iron", "difficulty": "hard" },
  { "question": "What is the term for animals that are active during the night?", "options": ["Diurnal", "Nocturnal", "Crepuscular", "Matutinal"], "answer": "Nocturnal", "difficulty": "hard" }
]
,
"random04": [
  { "question": "Which organ in the human body is responsible for detoxification?", "options": ["Heart", "Liver", "Kidney", "Spleen"], "answer": "Liver", "difficulty": "hard" },
  { "question": "What is the primary gas responsible for the greenhouse effect on Earth?", "options": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Methane"], "answer": "Carbon Dioxide", "difficulty": "hard" },
  { "question": "Who is credited with the discovery of electricity?", "options": ["Nikola Tesla", "Thomas Edison", "Benjamin Franklin", "Michael Faraday"], "answer": "Benjamin Franklin", "difficulty": "hard" },
  { "question": "What is the largest bone in the human body?", "options": ["Femur", "Tibia", "Humerus", "Skull"], "answer": "Femur", "difficulty": "hard" },
  { "question": "Which planet is known as the Red Planet?", "options": ["Venus", "Mars", "Mercury", "Jupiter"], "answer": "Mars", "difficulty": "hard" },
  { "question": "What is the study of earthquakes called?", "options": ["Volcanology", "Seismology", "Meteorology", "Geology"], "answer": "Seismology", "difficulty": "hard" },
  { "question": "Which vitamin is produced when a person is exposed to sunlight?", "options": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], "answer": "Vitamin D", "difficulty": "hard" },
  { "question": "What is the capital city of Japan?", "options": ["Seoul", "Tokyo", "Beijing", "Bangkok"], "answer": "Tokyo", "difficulty": "hard" },
  { "question": "Which mathematical symbol represents 'approximately equal to'?", "options": ["≈", "=", "≠", "≡"], "answer": "≈", "difficulty": "hard" },
  { "question": "What is the study of fungi called?", "options": ["Bacteriology", "Virology", "Mycology", "Zoology"], "answer": "Mycology", "difficulty": "hard" }
]
,
"random05": [
  { "question": "Who wrote the novel '1984'?", "options": ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Jules Verne"], "answer": "George Orwell", "difficulty": "hard" },
  { "question": "What is the longest mountain range in the world?", "options": ["Rocky Mountains", "Andes", "Himalayas", "Alps"], "answer": "Andes", "difficulty": "hard" },
  { "question": "Which instrument is used to measure atmospheric pressure?", "options": ["Thermometer", "Barometer", "Hygrometer", "Anemometer"], "answer": "Barometer", "difficulty": "hard" },
  { "question": "What is the main ingredient in traditional Japanese miso soup?", "options": ["Soybeans", "Rice", "Seaweed", "Tofu"], "answer": "Soybeans", "difficulty": "hard" },
  { "question": "Who is considered the founder of psychoanalysis?", "options": ["Carl Jung", "Sigmund Freud", "Alfred Adler", "Erik Erikson"], "answer": "Sigmund Freud", "difficulty": "hard" },
  { "question": "What is the currency of South Korea?", "options": ["Yen", "Won", "Yuan", "Baht"], "answer": "Won", "difficulty": "hard" },
  { "question": "Which element is essential for the formation of hemoglobin in blood?", "options": ["Calcium", "Iron", "Zinc", "Sodium"], "answer": "Iron", "difficulty": "hard" },
  { "question": "What is the term for a word that is similar in meaning to another word?", "options": ["Antonym", "Homonym", "Synonym", "Acronym"], "answer": "Synonym", "difficulty": "hard" },
  { "question": "Which ancient civilization built the pyramids?", "options": ["Romans", "Greeks", "Egyptians", "Mayans"], "answer": "Egyptians", "difficulty": "hard" },
  { "question": "What is the smallest unit of life?", "options": ["Atom", "Molecule", "Cell", "Organ"], "answer": "Cell", "difficulty": "hard" }
]
,
"random06": [
  { "question": "Which law explains the relationship between the pressure and volume of a gas?", "options": ["Boyle's Law", "Charles' Law", "Newton's Law", "Kepler's Law"], "answer": "Boyle's Law", "difficulty": "hard" },
  { "question": "What is the largest desert in the world?", "options": ["Gobi", "Sahara", "Antarctic Desert", "Arabian Desert"], "answer": "Antarctic Desert", "difficulty": "hard" },
  { "question": "Who painted 'The Starry Night'?", "options": ["Pablo Picasso", "Claude Monet", "Vincent van Gogh", "Salvador Dalí"], "answer": "Vincent van Gogh", "difficulty": "hard" },
  { "question": "What is the primary component of the sun?", "options": ["Helium", "Hydrogen", "Oxygen", "Carbon"], "answer": "Hydrogen", "difficulty": "hard" },
  { "question": "Which country is home to the ancient city of Petra?", "options": ["Egypt", "Jordan", "Lebanon", "Syria"], "answer": "Jordan", "difficulty": "hard" },
  { "question": "What is the term for a fear of confined spaces?", "options": ["Claustrophobia", "Agoraphobia", "Arachnophobia", "Acrophobia"], "answer": "Claustrophobia", "difficulty": "hard" },
  { "question": "Who is known for formulating the three laws of motion?", "options": ["Albert Einstein", "Galileo Galilei", "Isaac Newton", "Stephen Hawking"], "answer": "Isaac Newton", "difficulty": "hard" },
  { "question": "What is the largest internal organ in the human body?", "options": ["Heart", "Liver", "Lung", "Kidney"], "answer": "Liver", "difficulty": "hard" },
  { "question": "Which element is represented by the chemical symbol 'Na'?", "options": ["Nitrogen", "Sodium", "Neon", "Nickel"], "answer": "Sodium", "difficulty": "hard" },
  { "question": "What is the study of ancient human societies called?", "options": ["Archaeology", "Anthropology", "Sociology", "Paleontology"], "answer": "Archaeology", "difficulty": "hard" }
]
,
"random07": [
  { "question": "Which physicist is known for his uncertainty principle?", "options": ["Werner Heisenberg", "Niels Bohr", "Albert Einstein", "Max Planck"], "answer": "Werner Heisenberg", "difficulty": "hard" },
  { "question": "What is the capital city of Australia?", "options": ["Sydney", "Melbourne", "Canberra", "Brisbane"], "answer": "Canberra", "difficulty": "hard" },
  { "question": "Which language has the most native speakers worldwide?", "options": ["English", "Mandarin", "Spanish", "Hindi"], "answer": "Mandarin", "difficulty": "hard" },
  { "question": "What is the most abundant element in the Earth's crust?", "options": ["Oxygen", "Silicon", "Aluminum", "Iron"], "answer": "Oxygen", "difficulty": "hard" },
  { "question": "Which novel begins with the line, 'Call me Ishmael'?", "options": ["Moby Dick", "The Great Gatsby", "War and Peace", "The Odyssey"], "answer": "Moby Dick", "difficulty": "hard" },
  { "question": "What is the primary function of the human respiratory system?", "options": ["Digestion", "Circulation", "Breathing", "Excretion"], "answer": "Breathing", "difficulty": "hard" },
  { "question": "Who was the first woman to win a Nobel Prize?", "options": ["Marie Curie", "Rosalind Franklin", "Ada Lovelace", "Dorothy Hodgkin"], "answer": "Marie Curie", "difficulty": "hard" },
  { "question": "What is the hardest known naturally occurring mineral?", "options": ["Quartz", "Diamond", "Topaz", "Corundum"], "answer": "Diamond", "difficulty": "hard" },
  { "question": "Which country hosted the 2016 Summer Olympics?", "options": ["China", "Brazil", "United Kingdom", "Russia"], "answer": "Brazil", "difficulty": "hard" },
  { "question": "What is the chemical formula for table salt?", "options": ["NaCl", "KCl", "CaCl2", "MgCl2"], "answer": "NaCl", "difficulty": "hard" }
]
,
"random08": [
  { "question": "Which planet in our solar system is known for its prominent ring system?", "options": ["Uranus", "Jupiter", "Saturn", "Neptune"], "answer": "Saturn", "difficulty": "hard" },
  { "question": "Who is known as the 'Father of Geometry'?", "options": ["Pythagoras", "Euclid", "Archimedes", "Aristotle"], "answer": "Euclid", "difficulty": "hard" },
  { "question": "What is the largest mammal in the world?", "options": ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"], "answer": "Blue Whale", "difficulty": "hard" },
  { "question": "Which continent has the highest number of countries?", "options": ["Africa", "Asia", "Europe", "South America"], "answer": "Africa", "difficulty": "hard" },
  { "question": "What is the speed of light in a vacuum (in km/s)?", "options": ["300,000 km/s", "150,000 km/s", "299,792 km/s", "250,000 km/s"], "answer": "299,792 km/s", "difficulty": "hard" },
  { "question": "Which organelle is responsible for photosynthesis in plants?", "options": ["Mitochondria", "Nucleus", "Chloroplast", "Vacuole"], "answer": "Chloroplast", "difficulty": "hard" },
  { "question": "What is the longest bone in the human body?", "options": ["Tibia", "Femur", "Fibula", "Humerus"], "answer": "Femur", "difficulty": "hard" },
  { "question": "Who developed the theory of evolution by natural selection?", "options": ["Gregor Mendel", "Charles Darwin", "Alfred Russel Wallace", "Jean-Baptiste Lamarck"], "answer": "Charles Darwin", "difficulty": "hard" },
  { "question": "What is the main language spoken in Egypt?", "options": ["Arabic", "Turkish", "Persian", "French"], "answer": "Arabic", "difficulty": "hard" },
  { "question": "Which famous structure was built during the reign of Emperor Qin Shi Huang?", "options": ["The Great Wall of China", "The Forbidden City", "The Terracotta Army", "The Summer Palace"], "answer": "The Terracotta Army", "difficulty": "hard" }
]
,
"random09": [
  { "question": "Which ocean is the smallest by surface area?", "options": ["Arctic", "Indian", "Southern", "Atlantic"], "answer": "Arctic", "difficulty": "hard" },
  { "question": "Who is the author of 'The Brothers Karamazov'?", "options": ["Fyodor Dostoevsky", "Leo Tolstoy", "Anton Chekhov", "Ivan Turgenev"], "answer": "Fyodor Dostoevsky", "difficulty": "hard" },
  { "question": "What is the name of the first artificial Earth satellite?", "options": ["Apollo 11", "Sputnik 1", "Explorer 1", "Vostok 1"], "answer": "Sputnik 1", "difficulty": "hard" },
  { "question": "Which disease is caused by the bacterium Mycobacterium tuberculosis?", "options": ["Pneumonia", "Tuberculosis", "Cholera", "Malaria"], "answer": "Tuberculosis", "difficulty": "hard" },
  { "question": "What is the boiling point of water at sea level (in °C)?", "options": ["90°C", "100°C", "110°C", "120°C"], "answer": "100°C", "difficulty": "hard" },
  { "question": "Which ancient wonder was located in the city of Babylon?", "options": ["Hanging Gardens", "Colossus of Rhodes", "Mausoleum at Halicarnassus", "Temple of Artemis"], "answer": "Hanging Gardens", "difficulty": "hard" },
  { "question": "Who discovered the law of gravitational attraction?", "options": ["Galileo Galilei", "Johannes Kepler", "Isaac Newton", "Albert Einstein"], "answer": "Isaac Newton", "difficulty": "hard" },
  { "question": "What is the currency of the United Kingdom?", "options": ["Euro", "Dollar", "Pound Sterling", "Franc"], "answer": "Pound Sterling", "difficulty": "hard" },
  { "question": "Which chemical element has the atomic number 79?", "options": ["Platinum", "Gold", "Mercury", "Silver"], "answer": "Gold", "difficulty": "hard" },
  { "question": "What is the branch of mathematics that deals with shapes and their properties?", "options": ["Algebra", "Calculus", "Geometry", "Trigonometry"], "answer": "Geometry", "difficulty": "hard" }
]
,
"random10": [
  { "question": "Which philosopher wrote 'The Republic'?", "options": ["Aristotle", "Plato", "Socrates", "Epicurus"], "answer": "Plato", "difficulty": "hard" },
  { "question": "What is the main gas found in the air we breathe?", "options": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], "answer": "Nitrogen", "difficulty": "hard" },
  { "question": "Who is known for the theory of general relativity?", "options": ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Stephen Hawking"], "answer": "Albert Einstein", "difficulty": "hard" },
  { "question": "Which city is known as the 'Eternal City'?", "options": ["Athens", "Jerusalem", "Rome", "Cairo"], "answer": "Rome", "difficulty": "hard" },
  { "question": "What is the process by which plants make food called?", "options": ["Respiration", "Digestion", "Photosynthesis", "Transpiration"], "answer": "Photosynthesis", "difficulty": "hard" },
  { "question": "Which instrument is used to measure earthquakes?", "options": ["Seismograph", "Barometer", "Thermometer", "Anemometer"], "answer": "Seismograph", "difficulty": "hard" },
  { "question": "What is the capital of Canada?", "options": ["Toronto", "Vancouver", "Ottawa", "Montreal"], "answer": "Ottawa", "difficulty": "hard" },
  { "question": "Which ancient philosopher is known for his method of questioning?", "options": ["Plato", "Aristotle", "Socrates", "Diogenes"], "answer": "Socrates", "difficulty": "hard" },
  { "question": "What is the powerhouse of the cell?", "options": ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"], "answer": "Mitochondria", "difficulty": "hard" },
  { "question": "Which war was fought between the North and South regions in the United States?", "options": ["World War I", "American Civil War", "Revolutionary War", "Mexican-American War"], "answer": "American Civil War", "difficulty": "hard" }
]
,
};
const Quiz = () => {
  const { category } = useParams(); // Get category from URL
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(15);
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    if (quizData[category]) {
      setQuestions(quizData[category]);
    } else {
      navigate("/");
    }
  }, [category, navigate]);

  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    } else {
      handleNext();
    }
  }, [timer]);

  const handleAnswerClick = (option) => {
    setSelectedAnswer(option);
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setTimeout(() => handleNext(), 1000);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setTimer(15);
    } else {
      setQuizCompleted(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      {!quizCompleted ? (
        <>
          <h1 className="text-3xl font-bold">{category} Quiz</h1>
          <div className="bg-white shadow-lg p-6 rounded w-[80%] max-w-md mt-4">
            <p className="text-lg font-semibold">
              Question {currentQuestion + 1} / {questions.length}
            </p>
            <p className="text-xl mt-2">{questions[currentQuestion]?.question}</p>
            
            {/* Timer */}
            <div className="w-full bg-gray-300 h-3 rounded mt-3">
              <div
                className="bg-blue-500 h-3 rounded"
                style={{ width: `${(timer / 15) * 100}%` }}
              ></div>
            </div>
            <p className="mt-2 text-red-500">Time Left: {timer}s</p>

            {/* Answer Options */}
            <div className="mt-4">
              {questions[currentQuestion]?.options.map((option, index) => (
                <button
                  key={index}
                  className={`block w-full p-3 rounded mt-2 ${
                    selectedAnswer
                      ? option === questions[currentQuestion].answer
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                  onClick={() => handleAnswerClick(option)}
                  disabled={selectedAnswer}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </>
      ) : (
        // Quiz Completed - Show Score
        <div className="bg-white shadow-lg p-6 rounded w-[80%] max-w-md mt-4 text-center">
          <h2 className="text-2xl font-bold">Quiz Completed!</h2>
          <p className="text-lg mt-2">Your Score: {score} / {questions.length}</p>

          {/* Performance Analysis */}
          <div className="mt-4">
            {score >= questions.length * 0.7 ? (
              <p className="text-green-600 font-semibold">Great Job! 🎉</p>
            ) : (
              <p className="text-red-500 font-semibold">Keep Practicing! 📚</p>
            )}
          </div>

          {/* Restart Quiz Button */}
          <button
            onClick={() => navigate("/categories")}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600"
          >
            Go to Categories
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;