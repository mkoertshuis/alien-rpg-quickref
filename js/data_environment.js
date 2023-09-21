data_environment = [
    {
        title: "Vacuum",
        icon: "eclipse",
        subtitle: "The cold and unforgiving.",
        description: "Your life is in extreme danger. The absence of pressure creates gas bubbles in your blood, causing your whole body to swell up. This results in crippling pain, all while the raw UV radiation from the nearest star sears your skin. You can't hold your breath, if you do, your lungs collapse.",
        reference: "CRB, pg. 107.",
        bullets: [
            "You must make a STAMINA roll every Round without protection in a vacuum. This doesn't require an action but you must roll it before doing anything else in the Round.",
            "The roll is unmodified in the first Round, but you get a -1 modification for the second Round. In the third Round you get -2 and so on.",
            "A failed roll means you drop directly to zero Health and must make a Death Roll every Round until you die or you enter a pressurized area.",
            "You don't sufer a critical injury.",
        ],
    },
    {
        title: "Explosive decompression",
        icon: "explosive-materials",
        subtitle: "Air vents out in a Turn",
        description: "The air in the room will vent out into space in a Turn, and the intense draft will require everyone to make a STAMINA roll to perform any action.",
        reference: "CRB, pg. 107.",
        bullets: [
            "The STAMINA roll itself counts as a fast action.",
            "Once the air is gone, anyone still in the vented compartment will suffer the effects of vacuum.",
        ],
    },
    {
        title: "Falling",
        icon: "falling",
        subtitle: "Damage equal to the height of the fall.",
        description: "Falling on a hard surface automatically inflicts an amount of damage to you equal to the height of the fall (in meters) divided by 2, rounding all fractions down.",
        reference: "CRB, pg. 108.",
        bullets: [
            "In a controlled jump, roll MOBILITY, each success rolled reduces the damage done by one.",
            "Armor can also protect you from falling damage.",
        ]
    },
    {
        title: "Explosions",
        icon: "rolling-bomb",
        subtitle: "Measured in Blast Power.",
        description: "The for of an explosion is measured in Blast Power. For each person within SHORT range of the blast when the detonation occurs, roll a number of Base Dice equal to the Blast Power.",
        reference: "CRB, pg. 108.",
        bullets: [
            "For every success rolled, the victim suffers one point of damage. The roll cannot be pushed.",
            "Victims at ENGAGED range from the detonation suffer one extra point of damage.",
            "Powerful charges, with a Blast Power of 7 or more, can harm people even at MEDIUM range. The Blast Power is then reduced by 6."
        ]
    },
    {
        title: "Fire",
        icon: "flame",
        subtitle: "Roll Base Dice equal to the Intensity.",
        description: "A fire is measured in Intensity. A typical fire has Intensity 8. When exposed to fire, roll a number of Base Dice equal to the Intensity.",
        reference: "CRB, pg. 108.",
        bullets: [
            "For every success rolled, you suffer one point of damage. Armor can protect you.",
            "If you take damage, you catch fire and continue to burn and suffer another attack at the start of each new Round.",
            "The Intensity increases by one each Round.",
            "As soon as a fire attack inflicts no damage, the fire goes out by itself.",
            "You, or a friend at ENGAGED range, can put out the fire with a successful MOBILITY roll (slow action).",
            "If you are Broken by fire damage, or suffer fire damage when already Broken, you must make a Death Roll every Round until you die or you are saved by a MEDICAL AID roll.",
        ]
    },
    {
        title: "Disease",
        icon: "deathcab",
        subtitle: "Opposed roll against the Virulance.",
        description: "When exposed to a dangerous contagion or infection, you need to roll an opposed roll for STAMINA against the Virulence rating of the disease. This is called a Sickness Roll. A typical disease has a Virulance of 3, but there are diseases with much higher ratings. If you fail the roll, you fall sick, wich has several effects:",
        reference: "CRB, pg. 109.",
        bullets: [
            "One Shift after infection the disease breaks out, at which time you suffer one point of damage.",
            "You can't recover Health while sick.",
            "Make another Sickness Roll at the start of each Shift. Each failed roll means you suffer another point of damage.",
            "If you are Broken while sick, you must make another Sickness Roll after every Shift, failure means death.",
            "As soon as you succeed at a Sickness Roll, you are no longer sick. Stop roling Sickness Rolls and recover your Health normally.",
            "MEDICAL AID: If someone cares for you while you are sick, this person can roll your Sickness Rolls instead of you. The healer rolls for MEDICAL AID against the Virulence of the disease.",
            "OTHER DISEASES: The sickness effects described above reflect a common but deadly disease. There are many other diseases that an have unique effects.",
        ]
    },
    {
        title: "Radiation",
        icon: "radioactive",
        subtitle: "Effects of radiation exposure.",
        description: "The world of ALIEN contains many places where you will be exposed to hard radiation—on a spacewalk near a dying star, for example, or when you try to repair your ship’s leaking reactor core.",
        reference: "CRB, pg. 110",
        bullets: [
            "RADIATION LEVEL: When you are exposed to radiation, you gain Radiation Points, or Rads, that accumulate in your body. Check off the Rad boxes on your character sheet. The area’s Radiation Level determines how often you get Rads.\
            <ul>\
            <li>TWEAK RADIATION: 1 Rad per Shift</li>\
            <li>STRONG RADIATION: 1 Rad per Turn</li>\
            <li>EXTREME RADIATION: 1 Rad per Round</li>\
            </ul>",
            "EFFECTS: Every time you gain a Radiation Point, you must roll a number of dice equal to your total current number of accumulated Rads. For every success in the roll, you take one point of damage.",
            "If you are Broken by radiation damage, you must make a Death Roll each time you get another Rad, until you are removed from the radiation hotspot. As long as you remain inside a hotspot, you cannot recover Health in any way.",
            "RECOVERY: After you leave the irradiated area, you heal one Rad per Shift.",
            "PERMANENT RADIATION: There is a risk that the radiation will permanently stay in your body. Every time you are about to heal a Rad, roll a Stress Die. If it shows failure, the Rad is not healed but instead becomes permanent. Mark this by filling in the Rad box fully on your character sheet. Permanent radiation can never be healed."
        ]
    },
    {
        title: "Drowning",
        icon: "drowning",
        subtitle: "The dangers of being underwater.",
        description: "All player characters are assumed to know how to swim. For the purposes of movement, swimming counts as crawling. If, by choice or not, you are underwater, you need to make a STAMINA roll every Round. This roll is not an action and is made during your turn before you perform your actions. If you fail, you suffer one point of damage. If you are Broken when drowning, you must make a Death Roll each Turn, until you die or someone saves you with a MEDICAL AID roll.",
        reference: "CRB, pg. 110",
        bullets: [
            "All player characters are assumed to know how to swim. For the purposes of movement, swimming counts as crawling.",
            "If you find yourself underwater, whether by choice or not, you must make a STAMINA roll every Round. This roll is not an action and is made during your turn before you perform your actions. If you fail, you suffer one point of damage.",
            "If you are Broken while drowning, you must make a Death Roll each Turn, until you die or someone saves you with a MEDICAL AID roll."
        ]
    },
    {
        title: "Suffocation",
        icon: "crossed-air-flows",
        subtitle: "The peril of running out of air supply.",
        description: "If your supply of air runs out (see page 34), you won't have long to live. You'll start breathing in your own exhaled air, building up dangerous levels of carbon dioxide that will eventually kill you. After your air supply runs out, you must make a STAMINA roll every Turn or after every strenuous activity (like a roll for CLOSE COMBAT or MOBILITY). The first roll is unmodified, the second roll gets a –1 modification, the third gets –2, and so on. A failed roll means you drop directly to zero Health and must make a Death Roll every Round until you die or you enter a pressurized area.",
        reference: "CRB, pg. 110",
        bullets: [
            "If your supply of air runs out, you'll start breathing in your own exhaled air, building up dangerous levels of carbon dioxide that will eventually kill you.",
            "After your air supply runs out, you must make a STAMINA roll every Turn or after every strenuous activity (like a roll for CLOSE COMBAT or MOBILITY). The first roll is unmodified, the second roll gets a –1 modification, the third gets –2, and so on.",
            "A failed roll means you drop directly to zero Health and must make a Death Roll every Round until you die or you enter a pressurized area."
        ]
    },        
]