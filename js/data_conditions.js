data_conditions = [
    {
        title: "Starving",
        icon: "apple-seeds",
        subtitle: "You need food each day.",
        description: "After a day without sufficient food, you become Starving. Being starving has several effects:",
        reference: "CRB, pg. 106.",
        bullets: [
            "You cannot recover Health or relieve Stress.",
            "Every day, you need to make a STAMINA roll. If you fail, you suffer one point of damage and your STRESS LEVEL increases one step. If you are Broken while Starving, you need to make a Death Roll (see page 99) every day. MEDICAL AID has no effect against these Death Rolls, you can only be saved by Ingesting some form of sustenance.",
            "As soon as you have eaten, the above effects wear off within one Shift.",
        ],
    },
    {
        title: "Dehydrated",
        icon: "water-drop",
        subtitle: "You need water each day.",
        description: "After a day without sufficient water, you become Dehydrated. Being Dehydrated has several effects:",
        reference: "CRB, pg. 106.",
        bullets: [
            "You cannot recover Health or relieve Stress.",
            "Every Shift, you suffer one point of damage and your STRESS LEVEL increases one step. If you are Broken while Dehydrated, you must make a Death Roll after every Shift without liquid. MEDICAL AID has no effect against these Death Rolls, you need fluids to save yourself.",
            "As soon as you dink, the above effects wear off within one Shift.",
        ],
    },
    {
        title: "Exhausted",
        icon: "pummeled",
        subtitle: "You need to sleep each day.",
        description: "You need to sleep for at least one Shift each day. After one day without sleep, you become Exhausted. Bein Exhausted has several effects:",
        reference: "CRB, pg. 106.",
        bullets: [
            "You cannot relieve Stress.",
            "You must make a STAMINA roll each day (the GM decides when), with a negative modification equal to the number of days spent without decent sleep. If the roll fails, you collapse and sleep for one Shift.",
            "As soon as you have slept for at least one Shift, you are no longer Exhausted.",
        ],
    },
    {
        title: "Freezing",
        icon: "snowflake-2",
        subtitle: "With not enough clothes or shelter.",
        description: "In an environment without enough clothes or shelter, you cecome Freezing. Being Freezing has several effects:",
        reference: "CRB, pg. 107.",
        bullets: [
            "You cannot recover Health or relieve Stress.",
            "You need to make STAMINA rolls at regular intervals. The colder it is, the more frequently you need to roll. If above freezing, once per day is enough. In sub-zero temperatures, roll once per Shift, and in the deep cold of space, you need to roll every Turn. If you fail, you suffer one point of damage and your STRESS LEVEL increases one step. If you are Broken while Freezing, you must make a Death Roll the next time you would need to roll for the cold.",
            "As soon as you get warm, you stop rolling for STAMINA and can recover Health and relieve Stress normally.",
        ],
    },
]