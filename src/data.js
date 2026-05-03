export const itinerary = [
  {
    id: 1,
    day: "Day 1",
    date: "05 May 2026",
    title: "Travel Day",
    icon: "🚆",
    color: "#2d1554",
    accentColor: "#7b5cbf",
    summary: "Kacheguda → Tirupati via Venkatadri Express",
    events: [
      {
        time: "20:05",
        label: "Departure",
        detail: "Venkatadri Express from Kacheguda (12797)",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Kacheguda+Railway+Station",
        icon: "🚉"
      }
    ],
    passengertable: [
      { name: "Jawalkar Krishna", age: 50, gender: "M", seat: "B4-41 LOWER", status: "CNF" },
      { name: "Jawalkar Ranjitha", age: 43, gender: "F", seat: "B4-44 LOWER", status: "CNF" },
      { name: "JS Anitha", age: 53, gender: "F", seat: "B4-45 MIDDLE", status: "CNF" },
      { name: "Vaibhav L Jawalkar", age: 20, gender: "M", seat: "B4-43 UPPER", status: "CNF" },
      { name: "Pranav J Jawalkar", age: 16, gender: "M", seat: "B4-46 UPPER", status: "CNF" },

      { name: "Dubba Kalpana", age: 47, gender: "F", seat: "B4-49 LOWER", status: "CNF" },
      { name: "Aparna Jawalkar", age: 51, gender: "F", seat: "B4-50 MIDDLE", status: "CNF" },
      { name: "JS Preeti", age: 28, gender: "F", seat: "B4-51 UPPER", status: "CNF" },
      { name: "Dubba Shiva", age: 30, gender: "M", seat: "B4-52 LOWER", status: "CNF" },
      { name: "Jaganath Jawalkar", age: 52, gender: "M", seat: "B4-53 MIDDLE", status: "CNF" },
      { name: "Jatin Dounde", age: 19, gender: "M", seat: "B4-54 UPPER", status: "CNF" },

      { name: "Bhavani Shankar", age: 54, gender: "M", seat: "B4-57 LOWER", status: "CNF" },
      { name: "Kavita Dounde", age: 49, gender: "F", seat: "B4-60 LOWER", status: "CNF" },
      { name: "Jyotsna Dounde", age: 26, gender: "F", seat: "B4-58 MIDDLE", status: "CNF" },
      { name: "Mahenderkar Pavan", age: 30, gender: "M", seat: "B4-61 MIDDLE", status: "CNF" },
    ],
    documents: [
      { label: "Train Ticket 1", path: "assets/trains/ticket1.pdf", icon: "🎫" },
      { label: "Train Ticket 2", path: "assets/trains/ticket2.pdf", icon: "🎫" },
      { label: "Train Ticket 3", path: "assets/trains/ticket3.pdf", icon: "🎫" }
    ]
  },
  {
    id: 2,
    day: "Day 2",
    date: "06 May 2026",
    title: "Arrival & Tirumala Darshan",
    icon: "🌄",
    color: "#7b1c1c",
    accentColor: "#c0392b",
    summary: "Arrive at 6:55 AM · Check-in · Tirumala Darshan",
    events: [
      { time: "06:55 AM", label: "Arrival at Tirupati Station", detail: "Collect luggage & proceed to hotel", icon: "🚂" },
      { time: "Morning", label: "Hotel Check-in", detail: "Room check-in and freshen up", icon: "🏨" },
      { time: "Evening", label: "Tirumala Darshan", detail: "Venkateswara Swamy Temple — see timings below", icon: "🛕" }
    ],
    darshantable: [
      { name: "Jaganath K Jawalkar",           time: "12:00 Noon", report: "ATC Circle" },
      { name: "Jawalkar Aparna Jaganath",       time: "12:00 Noon", report: "ATC Circle" },
      { name: "Bhavani Shankar Dounde",         time: "12:00 Noon", report: "ATC Circle" },
      { name: "Kavita Dounde",                  time: "12:00 Noon", report: "ATC Circle" },
      { name: "Mahenderkar Pavan Kumar",        time: "12:00 Noon", report: "ATC Circle" },
      { name: "Jyotsna Dounde",                time: "12:00 Noon", report: "ATC Circle" },
      { name: "Dubba Kalpana",                 time: "12:00 Noon", report: "ATC Circle" },
      { name: "Jawalkar Krishna Lakshmikanth",  time: "08:00 PM",   report: "ATC Circle" },
      { name: "Jawalkar Ranjitha",              time: "08:00 PM",   report: "ATC Circle" },
      { name: "Gaurav L Jawalkar",              time: "08:00 PM",   report: "ATC Circle" },
      { name: "Vaibhav L Jawalkar",             time: "09:00 PM",   report: "ATC Circle" },
      { name: "Jatin Dounde",                   time: "09:00 PM",   report: "ATC Circle" },
      { name: "Pranav J Jawalkar",              time: "09:00 PM",   report: "ATC Circle" },
    ],
    plan: [
      "Arrive Tirupati Station at 6.55 AM fresh n up have Tea/Coffee and will proceed to Tirumala CRO Office and Check In by 9.30 am .",
      "Jaganath/Aparna Vaini /Sanju Bhowji/Kavita/Pavan Ji/Jyotsna/Kalpana Akka Have Bath/Break fast and get ready by 11.15 and proceed immediate to ATC Circle for Special Darshan Reach by 11.40 am and have darshan and come back to room approx by 5 PM.",
      "At Evening Lakshmikanth/Ranjitha/Gaurav/Vaibhav/Pranav/Jatin will procedd and reach to ATC Circle by 6 pm to have Special Darshan. ",
      "All Other Members who do not have Darshan on 6th May can take rest Relax or Vist nearby Temple Spots like Varaha Swamy Temple/ Sri Vari Padalu/Akash Ganga/ Paap Vinashanam/Shila Thoranam/Japali Theertham . ",
      "Note : Lunch/Dinner Pls have as per your Convenient time available with you since Darshan Timings are not the same all members and everyone of us together will not be available for Lunch and Dinner"
    ],
    documents: [
      { label: "Room 1 Booking", path: "assets/rooms/room1.pdf", icon: "🏨" },
      { label: "Room 2 Booking", path: "assets/rooms/room2.pdf", icon: "🏨" },
      { label: "Room 3 Booking", path: "assets/rooms/room3.pdf", icon: "🏨" },
      { label: "12 Noon — Jaganath, Aparna, Kalpana Dubba", path: "assets/darshan/group2.pdf", icon: "🎟️" },
      { label: "12 Noon — Bhavani Shankar, Kavita, Pavan, Jyotsna", path: "assets/darshan/group3.pdf", icon: "🎟️" },
      { label: "8 PM — Lakshmikanth, Ranjitha, Gaurav", path: "assets/darshan/group1.pdf", icon: "🎟️" },
      { label: "9 PM — Vaibhav, Pranav, Jatin", path: "assets/darshan/group4.pdf", icon: "🎟️" }
    ]
  },
  {
    id: 3,
    day: "Day 3",
    date: "07 May 2026",
    title: "Kalyanotsavam",
    icon: "💍",
    color: "#0f5c3a",
    accentColor: "#1a9e66",
    summary: "Two Kalyanotsavam slots — 10:00 AM & 1:00 PM",
    events: [
      { time: "10:00 AM", label: "Slot 1 — Supatham", detail: "Kalyanotsavam at Supatham", icon: "🌸" },
      { time: "01:00 PM", label: "Slot 2 — ATC Circle", detail: "Kalyanotsavam at ATC Circle", icon: "🌺" }
    ],
    kalyanamtable: [
      { name: "Gaurav L Jawalkar",            time: "10:00 AM", report: "Supatham Entry" },
      { name: "Amit Vitthal Telkar",           time: "10:00 AM", report: "Supatham Entry" },
      { name: "Dubba Shiva Krishna",           time: "10:00 AM", report: "Supatham Entry" },
      { name: "JS Preeti",                     time: "10:00 AM", report: "Supatham Entry" },
      { name: "Jawalkar Krishna Lakshmikanth", time: "01:00 PM", report: "ATC Circle" },
      { name: "Jawalkar Ranjitha",             time: "01:00 PM", report: "ATC Circle" },
      { name: "JS Anitha",                     time: "01:00 PM", report: "ATC Circle" },
      { name: "Mahenderkar Pavan Kumar",       time: "01:00 PM", report: "ATC Circle" },
      { name: "Jyotsna Dounde",               time: "01:00 PM", report: "ATC Circle" },
      { name: "Bhavani Shankar Dounde",        time: "09:00 PM", report: "ATC Circle" },
      { name: "Kavita Dounde",                 time: "09:00 PM", report: "ATC Circle" },
    ],
    plan: [
      "Gaurav/Amit/Shiva Krishna Ji/ Preeti should finish breakfast and ready to proceed and Reach Supatham Entry by 8.30 am for Kalyana Utsav.",
      "Lakshmikanth/Ranjitha/ Anitha/Pavan Ji/Jyotsna/Sanju Bhowji/Kavita should finish breakfast and ready to proceed and Reach ATC Circle  by 11 am for Virtual Kalyana Utsav.",
      "All Other Members who do not have Darshan on 7th May can take rest Relax or Vist nearby Spots like Varaha Swamy Temple / Sri Vari Padalu/Akash Ganga/ Paap Vinashanam/Shila Thoranam/Japali Theertham . ",
      "Note : Lunch/Dinner Pls have as per your Convenient time available with you since Darshan Timings are not the same all members and everyone of us together will not be available for Lunch and Dinner"
    ],
    documents: [
      { label: "10 AM — Amit & Gaurav", path: "assets/kalyanam/slot1_group1.pdf", icon: "🎟️" },
      { label: "10 AM — Shiva & Preeti", path: "assets/kalyanam/slot1_group2.pdf", icon: "🎟️" },
      { label: "1 PM — Lakshmikanth & Ranjitha", path: "assets/kalyanam/slot2_group1.pdf", icon: "🎟️" },
      { label: "1 PM — Pavan & Jyotsna", path: "assets/kalyanam/slot2_group3.pdf", icon: "🎟️" },
      { label: "1 PM — Sridhar & Anita", path: "assets/kalyanam/slot2_group4.pdf", icon: "🎟️" },
      { label: "9 PM — Bhavani Shankar & Kavita", path: "assets/kalyanam/slot2_group2.pdf", icon: "🎟️" },
    ]
  },
  {
    id: 4,
    day: "Day 4",
    date: "08 May 2026",
    title: "Padmavathi Darshan & Return",
    icon: "🛕",
    color: "#5a3000",
    accentColor: "#c9a84c",
    summary: "Padmavathi Darshan at 10:00 AM · Return train at 18:45",
    events: [
      { time: "10:00 AM", label: "Padmavathi Temple Darshan", detail: "Sri Padmavathi Ammavari Temple, Tiruchanur", icon: "🛕" },
      { time: "18:45", label: "Return Train", detail: "Tirupati → Kacheguda (12798)", icon: "🚆" }
    ],
    passengertable: [
      { name: "Jawalkar Krishna", age: 50, gender: "M", seat: "B3-25 LOWER", status: "CNF" },
      { name: "Jawalkar Ranjitha", age: 43, gender: "F", seat: "B3-28 LOWER", status: "CNF" },
      { name: "JS Anitha", age: 53, gender: "F", seat: "B3-29 MIDDLE", status: "CNF" },
      { name: "Vaibhav L Jawalkar", age: 20, gender: "M", seat: "B3-27 UPPER", status: "CNF" },
      { name: "Pranav J Jawalkar", age: 16, gender: "M", seat: "B3-30 UPPER", status: "CNF" },

      { name: "Dubba Kalpana", age: 47, gender: "F", seat: "B2-25 LOWER", status: "CNF" },
      { name: "Aparna Jawalkar", age: 51, gender: "F", seat: "B2-28 LOWER", status: "CNF" },
      { name: "JS Preeti", age: 28, gender: "F", seat: "B2-26 MIDDLE", status: "CNF" },
      { name: "Dubba Shiva", age: 30, gender: "M", seat: "B2-29 MIDDLE", status: "CNF" },
      { name: "Jaganath Jawalkar", age: 52, gender: "M", seat: "B2-27 UPPER", status: "CNF" },
      { name: "Jatin Dounde", age: 19, gender: "M", seat: "B2-30 UPPER", status: "CNF" },

      { name: "Bhavani Shankar", age: 54, gender: "M", seat: "B4-41 LOWER", status: "CNF" },
      { name: "Kavita Dounde", age: 49, gender: "F", seat: "B4-44 LOWER", status: "CNF" },
      { name: "Jyotsna Dounde", age: 26, gender: "F", seat: "B4-42 MIDDLE", status: "CNF" },
      { name: "Mahenderkar Pavan", age: 30, gender: "M", seat: "B4-45 MIDDLE", status: "CNF" },
    ],
    plan: [
      "Check-out from Tirumala rooms by 7 AM.",
      "Breakfast → Travel to Padmavathi Temple → Reach by 9:30 AM → Darshan.",
      "Visit Govindraj Swamy Temple / ISKCON / Kapila Theertham.",
      "Lunch in Tirupati.",
      "Reach station by 5:45 PM with packed dinner.",
      "Train departure at 6:45 PM."
    ],
    documents: [
      { label: "Padmavathi — Lakshmikanth, Ranjitha, Anita, Vaibhav, Pranav, Amit", path: "assets/padmavati/pad1.pdf", icon: "🎟️" },
      { label: "Padmavathi — Bhavani Shankar, Kavita, Pavan, Jyotsna, Jatin, Kalpana Dubba", path: "assets/padmavati/pad2.pdf", icon: "🎟️" },
      { label: "Padmavathi — Jaganath, Aparna, Shiva Krishna, Preeti", path: "assets/padmavati/pad3.pdf", icon: "🎟️" },
      { label: "Return Ticket 1", path: "assets/trains/return1.pdf", icon: "🎫" },
      { label: "Return Ticket 2", path: "assets/trains/return2.pdf", icon: "🎫" },
      { label: "Return Ticket 3", path: "assets/trains/return3.pdf", icon: "🎫" },
      { label: "Return Ticket 4", path: "assets/trains/return4.pdf", icon: "🎫" }
    ]
  },
  {
    id: 5,
    day: "Day 5",
    date: "09 May 2026",
    title: "Return to Hyderabad",
    icon: "🏠",
    color: "#1f2937",
    accentColor: "#6b7280",
    summary: "Arrival at Kacheguda — Trip Completion",

    events: [
      {
        time: "06:20 AM",
        label: "Arrival at Kacheguda",
        detail: "Back to Pavillion - Reach Kachiguda at 6.20 am",
        icon: "🚉"
      }
    ],

    plan: [
      "Back to Pavillion - Reach Kachiguda at 6.20 am and Thanks in Advance for everyone's Co ordination and Co operation"
    ],
    documents: []
  }
];