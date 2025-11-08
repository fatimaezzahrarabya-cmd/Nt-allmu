// Lessons Data
const lessons = [
    {
        id: 1,
        title: "العد من 1 إلى 20",
        emoji: "🔢",
        videoUrl: "https://www.youtube.com/embed/2xgyEC9WCA4?si=tayfcu4wZkB39xOE&amp;start=7",
        description: "تعلم العد من 1 إلى 20 بطريقة سهلة وممتعة",
        quiz: [
            {
                question: "كم عدد التفاحات؟ 🍎🍎🍎",
                choices: ["2", "3", "4"],
                correctAnswer: 1
            },
            {
                question: "كم عدد النجوم؟ ⭐⭐⭐⭐⭐",
                choices: ["3", "4", "5"],
                correctAnswer: 2
            },
            {
                question: "اختر الرقم الصحيح: واحد",
                choices: ["1", "2", "3"],
                correctAnswer: 0
            }
        ]
    },
    {
        id: 2,
        title: "الجمع البسيط",
        emoji: "➕",
        videoUrl: "https://www.youtube.com/embed/X6Yw4yyWr-Q?si=rkvsNEi3askEsdRA",
        description: "تعلم جمع الأرقام الصغيرة",
        quiz: [
            {
                question: "1 + 1 = ؟",
                choices: ["1", "2", "3"],
                correctAnswer: 1
            },
            {
                question: "2 + 2 = ؟",
                choices: ["3", "4", "5"],
                correctAnswer: 1
            },
            {
                question: "3 + 1 = ؟",
                choices: ["2", "3", "4"],
                correctAnswer: 2
            }
        ]
    },
    {
        id: 3,
        title: "الحروف العربية - الجزء الأول",
        emoji: "📚",
        videoUrl: "https://www.youtube.com/embed/pDNzdR8Aryo?si=hGHuForH5z-Ph0G5&amp;start=11",
        description: "تعلم أول خمسة حروف من الأبجدية العربية",
        quiz: [
            {
                question: "أي حرف هذا؟ أ",
                choices: ["ألف", "باء", "تاء"],
                correctAnswer: 0
            },
            {
                question: "أي حرف هذا؟ ب",
                choices: ["ألف", "باء", "تاء"],
                correctAnswer: 1
            },
            {
                question: "كم عدد الحروف في كلمة 'بيت'؟",
                choices: ["2", "3", "4"],
                correctAnswer: 1
            }
        ]
    }
];

// to get a lesson using ID
function getLessonById(id) {
    return lessons.find(lesson => lesson.id === parseInt(id));
}

// to get all lessons
function getAllLessons() {
    return lessons;
}