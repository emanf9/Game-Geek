/*

This is an adaptation of the Space Geek template called Game Geek by Ethan Falck. Instead of saying space facts, it will now say video game facts.
Big thanks to the creators of the template for doing most of the work :D
Thanks to Tech Notification (http://www.technotification.com/2015/01/15-interesting-video-game-facts.html), Games Radar (http://www.gamesradar.com/101-game-facts-that-will-rock-your-world/), Kickassfacts (http://www.kickassfacts.com/30-kickass-interesting-facts-about-video-games-part-1/), and HowStuffWorks(http://electronics.howstuffworks.com/video-game6.htm) for the facts.

*/

/**
    Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

        http://aws.amazon.com/apache2.0/

    or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

/**
 * This simple sample has no external dependencies or session management, and shows the most basic
 * example of how to create a Lambda function for handling Alexa Skill requests.
 *
 * Examples:
 * One-shot model:
 *  User: "Alexa, ask Space Geek for a space fact"
 *  Alexa: "Here's your space fact: ..."
 */

/**
 * App ID for the skill
 */
var APP_ID = "amzn1.echo-sdk-ams.app.89580cc5-b617-4db9-b180-0d141100eec4"; //replace with "amzn1.echo-sdk-ams.app.[amzn1.echo-sdk-ams.app.89580cc5-b617-4db9-b180-0d141100eec4]";

/**
 * Array containing space facts.
 */
var GAME_FACTS = [
    "Mario was actually named after the landlord of Nintendo’s first warehouse Mr. Mario Segale. The original name of Mario was actually Mr. Video Game which ended up becoming Mr. Segale’s nickname speaking of Mario he is actually appearing in over a hundred and twenty video games.",
    "Pac Man was invented by the designer Toru Iwatani while he was eating pizza.",
    "The PlayStation was originally designed as a Nintendo Console with Sony to make the inside components when Nintendo console changed their minds about making the console Sony decided to go ahead make the PlayStation.",
    "The video game industry is valued at 70 Billion Dollars worldwide.",
    "In 1990, game Golden Axe from SEGA was voiced entirely by prisoners on death row.",
    "Due to the popularity of the Nintendo game Mario Brothers in 1983, there was an explosion of name Mario given to children around that time.",
    "The most famous G code for video games of all time: up, up, down, down, left, right, left, right, B, A, was made popular by the game Contra which gives the player a full set of power-ups. The code is called the Konami code or the Gamers code.",
    "The first gaming console to ever ship with an internal memory was the SEGA Saturn and it shipped with about one megabyte of memory.",
    "In the original arcade version of Donkey Kong, Mario was called jump man and he was a carpenter not a plumber.",
    "The best-selling consoles of all time are the PlayStation 2 and Nintendo DS both tied with about 155 million units sold.",
    "The highest grossing game of all time is actually World of WarCraft bringing in a whopping ten billion dollars over its lifetime.",
    "Atari is a Japanese word that means success",
    "The famously awful E.T. game for the Atari 2600 actually sold more than Atri's most famous game, Space Invaders. E.T. sold 1.5 million, while Invaders only shifted a million.",
    "In The Legend Of Zelda: Link's Awakening, the advisor from the SNES version of Sim City, Dr Wright, appears in a house. He's named after Will Wright, the creator of the Sim series.",
    "Early iterations of Nintendo's failed Virtual Boy console included a gun you'd set vertical on a flat surface that would project a 3D image into the air.",
    "The death screams of the bad guys in the original Golden Axe are digitized from screams used in the films First Blood and Conan The Barbarian.",
    "The damsel-in-distress that Mario rescues in the original Donkey Kong is called Pauline. In the Japanese version she was known simply as 'Lady'.",
    "In Metal Gear Solid 2: Sons Of Liberty, a scene was removed from the final game where Snake is chased through the sinking tanker by a rush of water. Kojima said it looked good, but wasn't fun to play. Footage still exists of this in early trailers.",
    "The name Atari comes from the Chinese game Go. 'Atari' refers to a situation where a stone or a group of stones is in imminent danger of being taken by another player; a state Atari ironically found themselves in when the brand was bought by French company Infogrames.",
    "The Texas Instruments TI-83 calculator has more graphics processing power than the Commodore 64. Amazingly, some basic C64 games can even be programmed into it.",
    "The Xbox was originally named DirectXbox, as it was initially designed to show how Microsoft's Direct X graphics technology could benefit the console market.",
    "Alien Hominid, a hardcore PS2 shooter, was originally a popular Flash internet game. It was downloaded more than 6 million times before being brought to the PlayStation 2.",
    "To create the gruesome Necromorph monsters in their game Dead Space, the devs at EA Redwood Shores studied photos of car wreck victims. They also watched hundreds of horror movies to get ideas for in-game scares.",
    "Final Fantasy got its name from the fact that it was supposed to be Square's last ever game. They were struggling to become popular with dodgy games like Rad Racer and World Runner 3D, and were going to bow out of the industry gracefully.",
    "Captain Commando was a sci-fi superhero who served as Capcom's mascot in its early days, but was replaced by Mega Man after the Captain proved unpopular with gamers.",
    "The name Kratos - as in, God Of War's angry hero - is taken from the Greek word 'cratos', which means power.",
    "The first game to feature multiple endings depending on how you played the game was Castlevania 2: Simon's Quest on the NES.",
    "Sonic The Hedgehog has appeared in four TV series; Sonic The Hedgehog, Sonic Underground, The Adventures Of Sonic The Hedgehog and Sonic X. He's also appeared in a comic book series.",
    "F-Zero X has an unlimited amount of courses. If you take part in the X Cup, the game will randomly generate tracks.",
    "The Magnavox Odyssey, released in 1972, contained 40 transistors and no microprocessor. The newest Pentium 4 microprocessor contains 42 million transistors on the chip itself.",
    "The Nintendo N64 marked the first time that computer graphics workstation manufacturer Silicon Graphics Inc. (SGI) developed game hardware technology.",
    "The Nintendo GameCube's proprietary disc can hold 1.5 gigabytes of data, 190 times more than what an N64 game cartridge can hold.",
    "In the 1980s, a service called Gameline allowed users to download games to the Atari 2600 over regular phone lines. It was a commercial failure, but eventually formed part of the foundation for America Online, the world's largest Internet service provider.",
    "Silent Hill 4 wasn't originally a Silent Hill game, but rather a separate franchise being developed by Konami simply titled The Room. When SH producer/composer Akira Yamaoka came across it, he decided to make it part of the official series.",
    "The Atari Jaguar proudly boasted that it was the first 64-bit console, but in reality it was two 32-bit chips stuck together, so not truly 64 bit.",
    "It's only humanly possible to press a button on a controller 16 times per second. This record was set by Toshuyuki Takahashi, a Japanese gamer.",
    "There's a full book you can read in Deus Ex. It's called The Man Who Was Thursday by G.K. Chesterton and shares some plot similarities with the game. The chapters were spread throughout the game in datacubes.",
    "If you cheated while playing the Sega 32x version of Doom, after the game ends you're taken to a fake DOS prompt. You can't quit out of it, and the only way to escape the screen is to reset the console. If you didn't cheat, you get an extra cutscene.",
    "Satoshi Tajiri, the creator of Pokemon, got the idea for the worldwide Game Boy phenomenon after collecting caterpillars as a child and watching them change into butterflies.",
    "The voice of Shodan, the insane AI in the System Shock series, was performed by the wife of the audio director at Looking Glass.",
    "Duke Nukem 3D was one of the first games to employ a real time audio effect to its sounds. If you went underwater, a calculated reverb was applied to sounds being played to make gunfire sound muffled and gurgly.",
    "In World Of Warcraft there's a dungeon called Uldaman where you can find and recruit three 'lost dwarves', who look very similar to characters from The Lost Vikings on SNES.",
    "Super Mario World for the SNES took 29,000 hours to program. Luckily, it went on to sell 17 million copies and was the best selling game of its generation.",
    "Sonic The Hedgehog 2 was one of the first ever games to have a simultaneous, worldwide release date. This was known amongst gamers as 'Sonic2sday', as it appeared in shops on a Tuesday. November 24, 1992 to be exact.",
    "Ico was originally meant to be released for the PlayStation, but the development was halted and then continued for the PlayStation 2. In the early version, Yorda had horns on her head, not Ico. You can find early concept footage of this on YouTube.",
    "Violent, pedestrian-squishing racer Carmageddon was only allowed to be released in the UK with zombies instead of people roaming the streets. In the Indian version, the cows were removed, and it was banned altogether in Germany.",
    "At the end of a game of Civilization 4, players are rated based on their performance by a comparison to one of 10 world leaders. The lowest rating compares the player to former US Vice-President Dan Quayle, who is legendary for such wisdom as 'If we do not succeed, then we run the risk of failure'.",
    "In Germany, copies of Medal Of Honor: Frontline had to be reprinted because there was a swastika on the back cover. The developers also had to go back into the game and take out all the Nazi flags and other paraphernalia.",
    "In the first Fallout, if you create your own character with less than 4 intelligence you can't converse with anyone; your only dialogue options are various grunts or other guttural noises. This makes the game insanely difficult to finish.",
    "Thanks largely to being bundled with a Wii-mote, Wii Play has sold around twice as much as Halo 3, shifting some 16 million copies.",
    "Starcraft is the first computer game to have ever physically made it into space. It was sent aboard Shuttle mission STS-96 on May 27, 1999 by Mission Specialist Daniel T. Barry, who is also a Starcraft fan.",
    "In the original Japanese version of River City Ransom, the characters wore schoolboy jackets and belonged to high schools instead of gangs. This was changed in the American version because the jackets could be mistaken for bath robes and beating up evil gang members seemed like a more worthy cause.",
    "The Sega Dreamcast was the first console to implement online play over a phone line, calling the system Sega Net.",
    "The Microsoft Xbox was the first video game system to provide full support for HDTV.",
    "The PlayStation 2 was the first system to have graphics capability better than that of the leading-edge personal computer at the time of its release.",
    "While the original Atari Football game was first created in 1973, it wasn't released until 1978. It was delayed because the game couldn't scroll the screen -- players couldn't move beyond the area shown on the monitor. When the game was finally released, it became the first game to utilize scrolling, a key part of many games today.",
    "The Atari Pong video game console was the No. 1 selling item for the holiday season in 1975.",
    "The first console to have games available in the form of add-on cartridges was the Fairchild Channel F console, introduced in August 1976.",
    "The PlayStation 2 was the first video game system to use DVD technology.",
    "On the original Magnavox Odyssey, players had to keep score themselves because the machine couldn't.",
    "On the market from 1991 till 2004, the SNK NeoGeo AES has tied the Atari 2600 (1977 to 1990) as the longest supported gaming console in history.",
    "The Sega Genesis featured a version of the same Motorola processor that powered the original Apple Macintosh computer.",
    "Mattel's Intellivison system, introduced in 1980, featured an add-on called 'PlayCable,' which delivered games by cable TV.",
    "Nintendo's Game Boy was the most successful game system ever, with more than 100 million units sold worldwide.",
    "The first color portable video game system was the Atari Lynx, introduced in 1989 and priced at $149.",
    "Introduced in 1993, the 3DO was the first video game system to be based entirely on CD technology.",
    "The Sony PlayStation was originally intended as a CD add-on to the Super Nintendo. When licensing problems and other issues arose, Sony decided to develop the PlayStation as a machine of its own.",
    "It’s not just video games that people have blamed for the violent actions of children. In 1979 and 1990, it was Dungeons and Dragons.",
    "Homefront, a video game released in early 2011, based on a war against North Korean global power, has so far successfully predicted both the year of Kim Jong-Il’s death (2011) and North Korea’s nuclear test in 2013.",
    "Jack Thompson, a former lawyer, sent a letter to Bill Gates claiming Microsoft could be legally responsible for the Virginia Tech massacre because of Counter-Strike, a game they didn’t even create.",
    "Jack Thompson, a lawyer, was barred and fined $100,000 for linking Grand Theft Auto series to crimes with very little or no evidence at all.",
    "In Assassin’s Creed, every key character you assassinate was a real person, and the date and location of their death is accurate.",
    "The Guinness World Records 2009 Gamer’s Edition lists GTA San Andreas as the videogame with the largest voice cast, with 861 credited voice actors, including 174 actors and 687 additional performers, many of those performers were fans of the series, who wanted to appear on the game.",
    "Studies have found that surgeons who regularly play video games make 37% fewer errors and perform tasks 27% faster than their peers",
    "8 out of 9 developers of the hugely influential N64 game GoldenEye 007 had never worked on video games before.",
    "Microsoft filed a patent in 2011 for media DRM based on monitoring users with cameras connected to a video game console.",
    "The crystal structure of an AIDS virus was decoded in 10 days using an online video game called Foldit. This was something that had stumped scientists for over 15 years.",
    "SPARX, a video game designed to treat depression has been found to work better than counseling",
    "The Boo character in the Mario series is based on the assistant director, Takashi Tezuka’s sometimes ill-tempered wife. Boo shrinks when Mario looks at it, but when Mario turns away, it will grow large and menacing.",
    "The opening song for Skyrim was sung by only 30 people, but they sang it 3 times and mixed it, so it sounds like there are 90 people singing.",
    "Mortal Kombat(1992) was the first game ever to get a “Mature” Rating by ESRB (Entertainment Software Rating Board). In fact, it was this game that was directly responsible for the creation of the ESRB.",
    "Metal Gear Solid 3 has a boss that can be defeated by not touching the game for a week or changing the date.",
    "The Sims was originally designed as an architecture simulator, with Sims only there to evaluate the builds",
    "Around 120,000 people gathered to watch the 2005 Starcraft Finals in South Korea (40,000 more than the attendance at Super Bowl that year)",
    "StarCraft is the national e-sport of South Korea. Some games can bring in as many as 120,000 fans, and the winners earn as high as $200,000.",
    "Will Wright, designer of SimCity 2000, said that the game does not actually reticulate splines when generating terrain, and he just inserted the phrase because it 'sounded cool'.",
    "Buzz Aldrin voiced Stargazer in Mass Effect 3.",
    "Windows 95 was the second most installed piece of software on computers in 1995; the videogame DOOM was the first.",
    "In 2003, when a German hacker stole the source code for Half Life 2, CEO Gabe Newell tricked him into thinking Valve wanted to hire him as an “in-house security auditor.” He was given plane tickets to the USA and was to be arrested on arrival by the FBI. When German Government became aware of the plan, the hacker was arrested in Germany instead and put on trial there.",
    "When EA was first convinced to make a soccer game, they treated it as a joke compared to Madden and they didn’t think it would sell a single copy. Today, FIFA is their biggest title and completely dwarfs Madden in sales.",
    "Leonard Nimoy, who is most know as Spock from Star Trek, narrated Civilization 4.",
    "In Civilization 4 you have to research a technology called 'Fascism' to enable building of wonder 'Mount Rushmore'.",
    "The main menu theme music for Civilization IV ('Baba Yetu') was the first original musical composition from a video game to win a Grammy.",
    "Portal is based on a game called Narbacular Drop, which was a class project created by university students. Liking the idea, Valve hired the entire team of students to develop Portal.",
    "Up until 2011, 5.93 million years of game play have been clocked in WoW",
    "The phrase “It’s on like Donkey Kong.” was actually trademarked by Nintendo in 2010.",
    "Donkey Kong, Mario, and Princess Peach are based off of characters from Popeye. Nintendo created it after they failed to obtain a license to make a Popeye video game.",
    "Nearly 37% of purchased Steam games are never played.",
    "Despite being one of the most successful fighting games of all time, 'Mortal Kombat' only had a development team of four people.",
    "'Space Invaders' was intended to always be at the same speed, but as you destroy more aliens, the computer can render faster. This is why the aliens speed up as you near the end of the level.",
    "The popular game Candy Crush exploits mechanisms of addiction in the same way some recreational drugs and gambling do."

];

/**
 * The AlexaSkill prototype and helper functions
 */
var AlexaSkill = require('./AlexaSkill');

/**
 * GameGeek is a child of AlexaSkill.
 * To read more about inheritance in JavaScript, see the link below.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript#Inheritance
 */
var GameGeek = function () {
    AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
GameGeek.prototype = Object.create(AlexaSkill.prototype);
GameGeek.prototype.constructor = GameGeek;

GameGeek.prototype.eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {
    console.log("GameGeek onSessionStarted requestId: " + sessionStartedRequest.requestId
        + ", sessionId: " + session.sessionId);
    // any initialization logic goes here
};

GameGeek.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    console.log("GameGeek onLaunch requestId: " + launchRequest.requestId + ", sessionId: " + session.sessionId);
    handleNewFactRequest(response);
};

/**
 * Overridden to show that a subclass can override this function to teardown session state.
 */
GameGeek.prototype.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
    console.log("GameGeek onSessionEnded requestId: " + sessionEndedRequest.requestId
        + ", sessionId: " + session.sessionId);
    // any cleanup logic goes here
};

GameGeek.prototype.intentHandlers = {
    "GetNewFactIntent": function (intent, session, response) {
        handleNewFactRequest(response);
    },

    "AMAZON.HelpIntent": function (intent, session, response) {
        response.ask("You can ask Game Geek tell me a video game fact, or, you can say exit... What can I help you with?", "What can I help you with?");
    },

    "AMAZON.StopIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    },

    "AMAZON.CancelIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    }
};

/**
 * Gets a random new fact from the list and returns to the user.
 */
function handleNewFactRequest(response) {
    // Get a random space fact from the space facts list
    var factIndex = Math.floor(Math.random() * GAME_FACTS.length);
    var fact = GAME_FACTS[factIndex];

    // Create speech output
    var speechOutput = "Here's your video game fact: " + fact;

    response.tellWithCard(speechOutput, "GameGeek", speechOutput);
}

// Create the handler that responds to the Alexa Request.
exports.handler = function (event, context) {
    // Create an instance of the GameGeek skill.
    var gameGeek = new GameGeek();
    gameGeek.execute(event, context);
};

