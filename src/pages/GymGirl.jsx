import Template from "../utils/gymTemplate";

function GymGirl () {
    const title = "Gym Test for girls";
    const description = "This is a test to see in which level of the gym you are, from a newbie to a really experimented person. This test is focused on guys, because there are differences between genders.";
    const questions = [
        "Do you go to the gym 3 or more times per week?",
        "Can you bench 45lb?",
        "Can you squat 65lb?",
        "Can you deadlift 85lb?",
        "Can you do 3 pull ups?",
        "Can you do 8 push ups?",
        "Do you weigh more than 110lb?",
        "Do you know what PPL is?",
        "Do you NOT skip upper body day?",
        "Do you know what 'bulking' means?",
        "Do you know what 'cutting' means?",
        "Have you trained for more than 1 year?",
        "Can you bench 110lb?",
        "Can you squat 150lb?",
        "Can you deadlift 175lb?",
        "Do you have visible veins?",
        "Do you do less than 12 sets per muscle group? (per day)",
        "Do you do small pauses in your lifts?",
        "Do you know what 'isolation' means?",
        "Do you know what 'compound movement' means?",
        "Do you train every muscle group at least once per week?",
        "Do you know how to count calories?",
        "Do you weigh more than 135lb?",
        "Do you know what 'macros' means?",
        "Can you bench your own body weight?",
        "Have you trained for more than 3 years?",
        "Can you squat x1.5 your own body weight?",
        "Can you deadlift x2 your own body weight?",
        "Are you leaner than 20% body fat?",
        "Do you know what RPT is?",
        "Do you know what 'drop sets' means?",
        "Can you do 10 pull ups?",
        "Can you do 30 push ups?",
        "Can you row 120lb?",
        "Do you know the difference between 'straps', 'grips', 'gloves' and 'wraps'?",
        "Do you know how protein synthesis works?",
        "Can you bench 165lb?",
        "Can you squat 225lb?",
        "Can you deadlift 310lb?",
        "Have you trained for more than 5 years?",
        "Do you train every muscle group at least twice per week?",
        "Can you stack the most of the machines?",
        "Do you train until failure?",
        "Do you train with full ROM?",
        "Do you weigh more than 175lb?",
        "Can you bench 225lb or more?",
        "Can you squat 315lb or more?",
        "Can you deadlift 405lb or more?",
        "Have you ever competed in a bodybuilding competition?",
        "Have you trained for more than 10 years?",

    ];

    return (
        <div>
          <Template gender={"girl"} questions={questions} title={title} description={description}/>
        </div>
    )
}

export default GymGirl;