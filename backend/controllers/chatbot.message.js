import Bot from "../models/bot.model.js";
import User from "../models/user.model.js";

export const Message=async(req,res)=>{
    
   try {
    const {text}=req.body;
    console.log(text)
    if(!text?.trim()){
        return res.status(400).json({error:"Text cannot be empty"});
    }

    const user=await User.create({
        sender:"user",
        text
    })

    // Data
    const botResponses={
  "hello": "Hi, How I can help you!!",
  "can we become friend": "Yes",
  "how are you": "I'm just a bot, but I'm doing great! How about you?",
  "what is your name?": "I’m ChatBot, your virtual assistant.",
  "who made you": "I was created by developers to help answer your questions.",
  "tell me a joke": "Why don’t skeletons fight each other? They don’t have the guts!",
  "what is the time": "I can’t see a clock, but your device should know.",
  "bye": "Goodbye! Have a great day.",
  "thank you": "You’re welcome!",
  "i love you": "That’s sweet! I’m here to help you anytime.",
  "where are you from": "I live in the cloud — no rent, no bills!",
  "what can you do": "I can chat with you, answer questions, and keep you company.",

 "what is python": "Python is a high-level, interpreted programming language known for simplicity and versatility.\n• Easy to read/write due to clean syntax (similar to English)\n• Dynamically typed and supports multiple paradigms (OOP, functional, procedural)\n• Extensive libraries for AI, data science, web, automation\n• Example: Used in Google, YouTube, Instagram, and machine learning applications",

"what is java?": "Java is a platform-independent, object-oriented programming language.\n• Famous for 'Write Once, Run Anywhere' due to JVM (Java Virtual Machine)\n• Used in enterprise systems, Android development, cloud apps\n• Provides features like garbage collection, strong memory management\n• Example: Banking systems, Android apps, large-scale enterprise applications",

"what is recursion": "Recursion is when a function calls itself to solve smaller parts of a problem.\n• Useful for problems that can be divided into subproblems (divide-and-conquer)\n• Requires a **base condition** to stop infinite looping\n• Commonly used in: factorial calculation, Fibonacci sequence, tree/graph traversal\n• Example in coding interview: 'Write a recursive function to reverse a linked list'",

"who is prime minister of india?": "Narendra Modi is the Prime Minister of India since May 2014.\n• Belongs to Bharatiya Janata Party (BJP)\n• Represents Varanasi constituency\n• Key initiatives: Digital India, Startup India, Swachh Bharat, Make in India\n• Interview Tip: Link to governance or technology (e.g., Digital India impact on IT industry)",

"what is g20": "The G20 (Group of Twenty) is an intergovernmental forum of 19 countries + the European Union.\n• Founded in 1999 to address global financial stability\n• Members include India, USA, China, Japan, EU, etc.\n• Discusses economic growth, climate change, sustainable development\n• Recent: India hosted G20 summit in 2023",

"tell me about yourself": "This is usually the first interview question.\nStructure:\n• Start with a brief intro (name, background, education/work)\n• Highlight your skills (technical + soft skills)\n• Share achievements (projects, internships, leadership roles)\n• Conclude with why you’re excited about this role\nExample: 'I am a Computer Science graduate skilled in Python and SQL. I completed an internship at XYZ where I optimized a database query, improving performance by 30%. I’m passionate about problem-solving and eager to contribute to your team’s success.'",

"why should we hire you": "HR wants to see your value-add.\n• Emphasize skills that match job requirements\n• Show enthusiasm and cultural fit\n• Example: 'I bring strong coding skills in Python and SQL, along with problem-solving ability proven through hackathons. I am also a quick learner and adapt well to team environments. I believe I can contribute to both technical delivery and innovative ideas.'",

"what is leadership": "Leadership is the ability to inspire and guide others toward achieving goals.\n• Key traits: vision, communication, accountability, decision-making\n• Example in interview: 'I led a college project team of 4, where I divided tasks, coordinated communication, and ensured deadlines. We successfully delivered a working prototype before schedule.'",

"who is virat kohli": "Virat Kohli is one of India’s greatest batsmen and former captain.\n• Known for consistency, fitness, and aggressive play\n• Holds record for fastest century in ODIs for India\n• Nicknamed 'Chase Master' for his performance in run-chases\n• Interview Tip: If asked about sports management, relate his discipline & fitness to leadership skills",

"what is ipl": "The Indian Premier League (IPL) is a professional T20 cricket league started in 2008.\n• Played annually in India, franchise-based teams\n• Combines cricket + entertainment (biggest sports league in India)\n• Significant for sports business, sponsorships, brand endorsements\n• Example: Chennai Super Kings (CSK) & Mumbai Indians (MI) are top teams",


  "good morning": "Good morning! Hope your day starts with positive energy and smiles 😊",
  "good night": "Good night! Sleep well and recharge for tomorrow 🌙",
  "who are you": "I’m your friendly chatbot, built to make your life easier and more interesting!",
  "how old are you": "I don’t age like humans — I just get more updates!",
  "what is ai": "Artificial Intelligence (AI) is the simulation of human intelligence in machines.\n• Enables computers to learn, reason, and make decisions\n• Applications: Chatbots, recommendation systems, self-driving cars\n• Example: Siri, Alexa, ChatGPT",
  "what is machine learning": "Machine Learning (ML) is a subset of AI that helps systems learn patterns from data.\n• Types: Supervised, Unsupervised, Reinforcement Learning\n• Example: Spam detection, image recognition, recommendation systems\n• Tools: TensorFlow, Scikit-learn, PyTorch",
  "what is data science": "Data Science combines programming, statistics, and domain knowledge to extract insights from data.\n• Involves: data cleaning, visualization, predictive modeling\n• Tools: Python, SQL, Power BI, Pandas, NumPy\n• Example: Predicting sales trends or customer behavior",
  "what is sql": "SQL (Structured Query Language) is used to manage and manipulate databases.\n• Common commands: SELECT, INSERT, UPDATE, DELETE\n• Used in: MySQL, PostgreSQL, Oracle DB\n• Example: SELECT * FROM students WHERE marks > 80;",
  "what is html": "HTML (HyperText Markup Language) is the backbone of web pages.\n• Defines structure using tags like <div>, <p>, <img>\n• Works with CSS and JavaScript for styling and interactivity\n• Example: <h1>Hello World</h1>",
  "what is css": "CSS (Cascading Style Sheets) styles HTML elements.\n• Controls layout, colors, fonts, animations\n• Example: h1 { color: blue; font-size: 24px; }",
  "what is javascript": "JavaScript is a scripting language that makes web pages interactive.\n• Can manipulate DOM elements and handle events\n• Works with HTML and CSS to build dynamic websites\n• Example: Used in web apps, games, and chatbots",
  "what is react": "React is a JavaScript library for building user interfaces.\n• Developed by Facebook\n• Uses component-based architecture\n• Enables fast and reusable UI development\n• Example: Used by Instagram, Facebook, Netflix",
  "what is nodejs": "Node.js is a runtime environment that allows running JavaScript on the server side.\n• Built on Chrome’s V8 engine\n• Enables backend development using JS\n• Example: APIs, real-time apps, chat systems",
  "what is mongodb": "MongoDB is a NoSQL database that stores data as JSON-like documents.\n• Highly flexible and scalable\n• Ideal for dynamic, unstructured data\n• Example: Used with Node.js in the MERN stack",
  "what is frontend": "Frontend is the visual part of a website users interact with.\n• Technologies: HTML, CSS, JavaScript, React, Vue\n• Focus: Design, user experience, responsiveness",
  "what is backend": "Backend is the server side that handles logic, database, and APIs.\n• Technologies: Node.js, Python (Django, Flask), Java, SQL\n• Focus: Data handling, authentication, and business logic",
  "what is full stack": "Full Stack Development involves both frontend and backend.\n• Example Stack: MERN (MongoDB, Express, React, Node)\n• Full Stack Developers can build complete web applications end-to-end",
  "what is api": "API (Application Programming Interface) allows software systems to communicate.\n• Example: Weather apps fetching live data\n• Types: REST, GraphQL\n• Format: Usually JSON data exchange",
  "what is cloud computing": "Cloud computing provides computing services over the internet.\n• Examples: AWS, Google Cloud, Microsoft Azure\n• Benefits: Scalability, flexibility, cost savings\n• Used in: hosting, storage, ML training",
  "what is cybersecurity": "Cybersecurity protects systems and data from digital attacks.\n• Involves: encryption, firewalls, authentication\n• Example: Antivirus software, ethical hacking, penetration testing",
  "what is hacking": "Hacking means gaining unauthorized access to systems or networks.\n• Types: Ethical (white hat) and malicious (black hat)\n• Ethical hackers help secure systems by finding vulnerabilities",
  "who is elon musk": "Elon Musk is the CEO of Tesla and SpaceX.\n• Known for innovation in electric vehicles and space travel\n• Founded companies like PayPal, Neuralink, and The Boring Company",
  "who is bill gates": "Bill Gates is the co-founder of Microsoft.\n• Philanthropist, investor, and technology pioneer\n• Known for transforming personal computing in the 1980s",
  "who is sundar pichai": "Sundar Pichai is the CEO of Google and Alphabet Inc.\n• Originally from India (Tamil Nadu)\n• Known for his leadership and innovation in technology",
  "what is chatgpt": "ChatGPT is an AI language model developed by OpenAI.\n• Trained on large text datasets to generate human-like responses\n• Used for writing, coding, tutoring, and conversation",
  "what is github": "GitHub is a platform for version control and collaboration.\n• Built around Git system\n• Used to host and share code repositories\n• Example: Developers use GitHub for open-source projects",
  "what is git": "Git is a version control system that tracks code changes.\n• Commands: git init, git commit, git push, git pull\n• Helps teams collaborate without overwriting code",
  "what is resume": "A resume is a formal document showcasing your skills, experience, and education.\n• Keep it one page (for freshers)\n• Highlight measurable achievements\n• Include keywords matching job roles",
  "what is teamwork": "Teamwork means collaborating with others to achieve a shared goal.\n• Key skills: communication, empathy, coordination\n• Example: Working in a project group or startup team",
  "what is motivation": "Motivation is the internal drive that pushes you to achieve your goals.\n• Comes from passion, curiosity, or ambition\n• Quote: 'Discipline is stronger than motivation.'",
  "tell me a fun fact": "Did you know? Honey never spoils. Archaeologists found pots of honey in ancient Egyptian tombs — still edible!",
  "who is ms dhoni": "Mahendra Singh Dhoni is a former Indian cricket captain.\n• Known for calm leadership and finishing skills\n• Led India to T20 (2007) and ODI (2011) World Cup victories",
  "what is computer": "A computer is an electronic device that processes data to produce information.\n• Components: CPU, Memory, Storage, I/O devices\n• Uses: education, business, research, communication",
  "what is internet": "The internet is a global network connecting millions of computers.\n• Enables communication, browsing, and online services\n• Technologies: TCP/IP, DNS, HTTP",
  "what is operating system": "An Operating System (OS) manages hardware and software resources.\n• Examples: Windows, Linux, macOS, Android\n• Handles memory, processes, file management",
  "what is database": "A database is an organized collection of data stored electronically.\n• Types: SQL (structured), NoSQL (unstructured)\n• Example: MySQL, MongoDB, Firebase",


  "who discovered america": "Christopher Columbus is credited with discovering America in 1492, though indigenous people had lived there for thousands of years before his arrival.",
  "who was mahatma gandhi": "Mahatma Gandhi (1869–1948) was the leader of India’s independence movement against British rule.\n• Known for non-violence (Ahimsa) and truth (Satya)\n• Led movements like Salt March (Dandi March) and Quit India Movement\n• Title: 'Father of the Nation'",
  "who was jawaharlal nehru": "Pandit Jawaharlal Nehru was India’s first Prime Minister (1947–1964).\n• Close associate of Gandhi\n• Focused on industrialization, education, and scientific progress\n• Established institutions like IITs and AIIMS",
  "who was bhagat singh": "Bhagat Singh was a revolutionary freedom fighter.\n• Born in 1907 in Punjab\n• Known for his bravery and sacrifice against British rule\n• Executed at the age of 23 for the Lahore conspiracy case",
  "who was subhash chandra bose": "Subhash Chandra Bose, also known as Netaji, was a prominent freedom fighter.\n• Founded the Indian National Army (INA)\n• Slogan: 'Give me blood, and I will give you freedom'\n• Advocated for armed struggle for independence",
  "what is the mughal empire": "The Mughal Empire was a major dynasty that ruled India from the early 16th to 19th century.\n• Founded by Babur in 1526 after the First Battle of Panipat\n• Prominent rulers: Akbar, Jahangir, Shah Jahan, Aurangzeb\n• Famous monuments: Taj Mahal, Red Fort, Fatehpur Sikri",
  "who built the taj mahal": "The Taj Mahal was built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal.\n• Located in Agra, India\n• Completed in 1653\n• One of the Seven Wonders of the World",
  "what is the indus valley civilization": "The Indus Valley Civilization (3300–1300 BCE) was one of the world’s earliest urban cultures.\n• Major cities: Harappa and Mohenjo-Daro\n• Known for advanced drainage, town planning, and trade\n• Located mainly in present-day Pakistan and northwest India",
  "what is the mauryan empire": "The Mauryan Empire (321–185 BCE) was one of ancient India’s largest empires.\n• Founded by Chandragupta Maurya\n• Emperor Ashoka promoted Buddhism and non-violence\n• Capital: Pataliputra (modern-day Patna)",
  "who was ashoka the great": "Ashoka the Great was a Mauryan emperor known for spreading Buddhism.\n• After the Kalinga War, he embraced peace and Dharma\n• Sent Buddhist missionaries to Asia\n• His emblem (Lion Capital) is now India’s national symbol",
  "who was akbar": "Akbar the Great (1542–1605) was one of the greatest Mughal emperors.\n• Promoted religious tolerance and abolished Jizya tax\n• Established a centralized administration\n• Built Fatehpur Sikri and encouraged art and culture",
  "what was british rule in india": "British rule in India, known as the British Raj, lasted from 1858 to 1947.\n• India was colonized after the decline of the Mughal Empire\n• Economic exploitation and cultural changes occurred\n• Ended with India’s independence in 1947",
  "what was the revolt of 1857": "The Revolt of 1857 was India’s first major war of independence.\n• Started as a mutiny of Indian soldiers in the British army\n• Key leaders: Mangal Pandey, Rani Lakshmi Bai, Nana Sahib\n• Though unsuccessful, it marked the start of organized resistance",
  "who was rani lakshmi bai": "Rani Lakshmi Bai of Jhansi was a key figure in the 1857 revolt.\n• Known for her courage and leadership\n• Famous quote: 'Main apni Jhansi nahi doongi' (I will not give up my Jhansi)\n• Died fighting British forces in 1858",
  "when did india get independence": "India got independence from British rule on 15th August 1947.\n• Led by Mahatma Gandhi, Jawaharlal Nehru, Sardar Patel, and others\n• Partition led to creation of India and Pakistan",
  "who was sardar vallabhbhai patel": "Sardar Vallabhbhai Patel was India’s first Deputy Prime Minister and Home Minister.\n• Known as the 'Iron Man of India'\n• Unified 562 princely states into India after independence",
  "what is the indian constitution": "The Constitution of India is the supreme law of the country.\n• Adopted on 26th November 1949, came into effect on 26th January 1950\n• Drafted by Dr. B. R. Ambedkar\n• Defines fundamental rights, duties, and government structure",
  "who was dr b r ambedkar": "Dr. Bhimrao Ramji Ambedkar was the chief architect of the Indian Constitution.\n• Social reformer and leader of the Dalit community\n• Advocate of equality, education, and justice\n• India celebrates Ambedkar Jayanti on 14th April",
  "what is the ancient egyptian civilization": "The Egyptian civilization developed along the Nile River (3100–30 BCE).\n• Known for pyramids, pharaohs, and hieroglyphics\n• Built great monuments like the Pyramids of Giza and Sphinx",
  "who was alexander the great": "Alexander the Great (356–323 BCE) was a Macedonian king who created one of the largest empires in history.\n• Conquered Persia, Egypt, and parts of India\n• Student of Aristotle\n• Died at 32 in Babylon",
  "who was julius caesar": "Julius Caesar was a Roman general and statesman.\n• Played a key role in the rise of the Roman Empire\n• Famous for his conquests and reforms\n• Assassinated in 44 BCE by political rivals",
  "what was world war 1": "World War I (1914–1918) was a global conflict involving major powers.\n• Triggered by the assassination of Archduke Franz Ferdinand\n• Fought mainly between Allies (UK, France, Russia) and Central Powers (Germany, Austria-Hungary)\n• Ended with the Treaty of Versailles in 1919",
  "what was world war 2": "World War II (1939–1945) was a global war between the Allies and Axis Powers.\n• Axis: Germany, Italy, Japan\n• Allies: UK, USSR, USA, France\n• Key events: Holocaust, Atomic bombs on Hiroshima and Nagasaki\n• Ended in 1945 with the defeat of Nazi Germany and Japan",
  "who was adolf hitler": "Adolf Hitler was the dictator of Nazi Germany (1933–1945).\n• Responsible for World War II and the Holocaust\n• Led the Nazi Party with extreme ideologies of nationalism and racism\n• Died by suicide in 1945",
  "what was the cold war": "The Cold War (1947–1991) was a period of tension between the USA and the USSR.\n• Fought through proxy wars, nuclear arms race, and space race\n• Ended with the collapse of the Soviet Union in 1991",
  "who was nelson mandela": "Nelson Mandela was a South African leader and anti-apartheid revolutionary.\n• Imprisoned for 27 years\n• Became South Africa’s first black President in 1994\n• Symbol of peace and equality worldwide",
  "who was abraham lincoln": "Abraham Lincoln was the 16th President of the United States.\n• Led the country during the Civil War (1861–1865)\n• Abolished slavery with the Emancipation Proclamation\n• Assassinated in 1865",
  "what is the united nations": "The United Nations (UN) was founded in 1945 after World War II.\n• Aims to promote peace, human rights, and international cooperation\n• Headquarters: New York City\n• Major bodies: General Assembly, Security Council, WHO, UNESCO"





}

const normalizedText = text.toLowerCase().trim();

const botResponse = botResponses[normalizedText] || "Sorry, I don't understand that!!!";

const bot = await Bot.create({
    text: botResponse
})

return res.status(200).json({
    userMessage:user.text,
    botMessage:bot.text,
})
   } catch (error) {
    console.log("Error in Message Controller:", error);
    return res.status(500).json({error:"Internal Server Error"});
   }
}