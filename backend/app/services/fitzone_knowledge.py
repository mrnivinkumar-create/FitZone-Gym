FITZONE_KNOWLEDGE = {

    # =========================================================
    # GYM INFORMATION
    # =========================================================
    "gym": {
        "name": "FitZone Gym",

        "description": (
            "More than just a gym. We are a community dedicated to "
            "building stronger bodies and sharper minds with 10,000 sq ft "
            "of premium strength equipment and dedicated functional zones."
        ),

        # IMPORTANT:
        # Replace this with your REAL FitZone address.
        "location": "123 Fitness Street, New York, NY 10001, United States",

        "timings": {
            "monday_to_friday": "6:00 AM - 10:00 PM",
            "saturday_to_sunday": "8:00 AM - 8:00 PM"
        },

        "phone": "+91 9344517212",
        "email": "support@fitzone.com"
    },


    # =========================================================
    # MEMBERSHIP PLANS
    # =========================================================
    "membership": [

        {
            "name": "Day Pass",
            "price": "₹299",
            "details": "Full Gym Access, Group Classes"
        },

        {
            "name": "Monthly",
            "price": "₹1,499",
            "details": "1 Trainer Session, Basic Tracking"
        },

        {
            "name": "Quarterly",
            "price": "₹3,999",
            "details": (
                "Most Popular! 3 Trainer Sessions, "
                "Nutrition Consultation, AI Coach"
            )
        },

        {
            "name": "Half-Yearly",
            "price": "₹6,999",
            "details": (
                "6 Trainer Sessions, Monthly Nutrition, AI Coach"
            )
        },

        {
            "name": "Annual",
            "price": "₹11,999",
            "details": (
                "12 Trainer Sessions, Weekly Nutrition, "
                "Unlimited AI Coach"
            )
        },

        {
            "name": "Premium",
            "price": "₹17,999",
            "details": (
                "Unlimited Trainer Sessions, "
                "Daily Nutrition Coaching, VIP Locker"
            )
        }
    ],


    # =========================================================
    # FITNESS PROGRAMS
    # =========================================================
    "programs": [

        {
            "name": "Strength Training",
            "focus": (
                "Build strength, power and muscle with "
                "heavy compound lifts."
            )
        },

        {
            "name": "Weight Loss",
            "focus": (
                "Structured workouts and nutrition for "
                "sustainable fat loss."
            )
        },

        {
            "name": "Muscle Building",
            "focus": (
                "Progressive training designed specifically "
                "for hypertrophy."
            )
        },

        {
            "name": "Functional Training",
            "focus": (
                "Improve mobility, balance, coordination "
                "and real-world strength."
            )
        },

        {
            "name": "HIIT",
            "focus": (
                "High-intensity workouts for maximum "
                "cardiovascular fitness."
            )
        },

        {
            "name": "Personal Training",
            "focus": (
                "One-to-one coaching with an expert trainer "
                "tailored to your specific goals."
            )
        }
    ],


    # =========================================================
    # TRAINERS
    # =========================================================
    "trainers": [

        {
            "name": "Arun Kumar",
            "specialty": "Strength & Conditioning",
            "experience": "8 Years"
        },

        {
            "name": "Priya",
            "specialty": "HIIT & Weight Loss",
            "experience": "5 Years"
        },

        {
            "name": "Vikram",
            "specialty": "Bodybuilding",
            "experience": "12 Years"
        },

        {
            "name": "Neha Patel",
            "specialty": "Yoga & Mobility",
            "experience": "6 Years"
        }
    ],


    # =========================================================
    # FACILITIES
    # =========================================================
    "facilities": [

        "10,000 sq ft of premium strength equipment",

        "Olympic Lifting Platforms",

        "Custom Functional Rig",

        "Dedicated Recovery Zone (Sauna/Ice)",

        "Luxury Locker Rooms"
    ],


    # =========================================================
    # GYM RULES
    # =========================================================
    "rules": [

        "Memberships are non-transferable.",

        "Present digital access pass to enter.",

        "Rack weights after use.",

        "Use towels while training.",

        "Respect other members.",

        "Follow gym staff instructions.",

        "Keep training areas clean and organized."
    ],


    # =========================================================
    # TRIAL
    # =========================================================
    "trial": {
        "available": True,

        "duration": "7 days",

        "description": (
            "FitZone offers a free 7-day trial pass so you can "
            "experience the premium equipment, expert trainers "
            "and community."
        )
    },


    # =========================================================
    # PULSE AI
    # =========================================================
    "ai_coach": {

        "name": "Pulse AI",

        "description": (
            "Pulse AI is FitZone's AI fitness assistant. "
            "It helps members with workouts, nutrition, "
            "fitness goals, progress guidance and information "
            "about FitZone Gym."
        ),

        "can_help_with": [
            "Workout recommendations",
            "Exercise explanations",
            "Weight loss guidance",
            "Muscle building guidance",
            "Strength training advice",
            "Basic nutrition guidance",
            "Fitness goal planning",
            "BMI and fitness calculations",
            "FitZone membership information",
            "FitZone programs",
            "FitZone trainers",
            "FitZone facilities",
            "FitZone timings",
            "FitZone contact information"
        ]
    },


    # =========================================================
    # FAQ
    # =========================================================
    "faq": {

        "location": (
            "FitZone Gym is located at "
            "123 Fitness Street, New York, NY 10001, United States."
        ),

        "timings": (
            "FitZone is open Monday to Friday from 6:00 AM "
            "to 10:00 PM and Saturday to Sunday from "
            "8:00 AM to 8:00 PM."
        ),

        "contact": (
            "You can contact FitZone at "
            "+91 9344517212 or support@fitzone.com."
        ),

        "trial": (
            "FitZone offers a free 7-day trial."
        ),

        "membership": (
            "FitZone offers Day Pass, Monthly, Quarterly, "
            "Half-Yearly, Annual and Premium membership plans."
        )
    },


    # =========================================================
    # WEBSITE NAVIGATION
    # =========================================================
    "navigation": {

        "home": "/",

        "calculators": "/calculators",

        "trainers": "/trainers",

        "blog": "/blog",

        "contact": "/contact",

        "transformations": "/transformations",

        "login": "/login",

        "dashboard": "/dashboard",

        "ai_coach": "/dashboard/ai-coach"
    },


    # =========================================================
    # AI RESPONSE RULES
    # =========================================================
    "rules_for_ai": [

        "Answer FitZone-specific questions using this knowledge base.",

        "Do not invent FitZone information.",

        "Do not invent membership prices.",

        "Do not invent trainer names or qualifications.",

        "Do not invent gym facilities.",

        "Do not invent opening hours.",

        "Do not invent discounts or promotions.",

        "If information is not available, clearly say that "
        "the information is not available in the current FitZone data.",

        "For general fitness questions, provide useful general "
        "fitness guidance.",

        "For FitZone-specific questions, prioritize FitZone data.",

        "For questions containing both FitZone and general fitness "
        "topics, answer both parts separately.",

        "Never claim to be a human trainer.",

        "For medical or serious health issues, recommend consulting "
        "a qualified healthcare professional."
    ]
}