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
        detail: "Venkatadri Express from Kacheguda",
        icon: "🚉"
      }
    ],
    documents: [
      { label: "Train Ticket 1", path: "assets/trains/ticket1.pdf", icon: "🎫" },
      { label: "Train Ticket 2", path: "assets/trains/ticket2.pdf", icon: "🎫" }
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
    summary: "Arrive at 6:55 AM · Check-in · Tirumala Darshan at 9:00 PM",
    events: [
      { time: "06:55 AM", label: "Arrival at Tirupati Station", detail: "Collect luggage & proceed to hotel", icon: "🚂" },
      { time: "Morning", label: "Hotel Check-in", detail: "Room check-in and freshen up", icon: "🏨" },
      { time: "09:00 PM", label: "Tirumala Darshan", detail: "Venkateswara Swamy Temple Darshan", icon: "🛕" }
    ],
    documents: [
      { label: "Room 1 Booking", path: "assets/rooms/room1.pdf", icon: "🏨" },
      { label: "Room 2 Booking", path: "assets/rooms/room2.pdf", icon: "🏨" },
      { label: "Darshan Group 1", path: "assets/darshan/group1.pdf", icon: "🎟️" },
      { label: "Darshan Group 2", path: "assets/darshan/group2.pdf", icon: "🎟️" },
      { label: "Darshan Group 3", path: "assets/darshan/group3.pdf", icon: "🎟️" },
      { label: "Darshan Group 4", path: "assets/darshan/group4.pdf", icon: "🎟️" }
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
    documents: [
      { label: "10 AM — Group 1", path: "assets/kalyanam/slot1_group1.pdf", icon: "🎟️" },
      { label: "10 AM — Group 2", path: "assets/kalyanam/slot1_group2.pdf", icon: "🎟️" },
      { label: "1 PM — Group 1", path: "assets/kalyanam/slot2_group1.pdf", icon: "🎟️" },
      { label: "1 PM — Group 2", path: "assets/kalyanam/slot2_group2.pdf", icon: "🎟️" },
      { label: "1 PM — Group 3", path: "assets/kalyanam/slot2_group3.pdf", icon: "🎟️" },
      { label: "1 PM — Group 4", path: "assets/kalyanam/slot2_group4.pdf", icon: "🎟️" }
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
      { time: "18:45", label: "Return Train", detail: "Tirupati → Kacheguda", icon: "🚆" }
    ],
    documents: [
      { label: "Padmavathi Ticket 1", path: "assets/padmavati/pad1.pdf", icon: "🎟️" },
      { label: "Padmavathi Ticket 2", path: "assets/padmavati/pad2.pdf", icon: "🎟️" },
      { label: "Padmavathi Ticket 3", path: "assets/padmavati/pad3.pdf", icon: "🎟️" },
      { label: "Return Ticket 1", path: "assets/trains/return1.pdf", icon: "🎫" },
      { label: "Return Ticket 2", path: "assets/trains/return2.pdf", icon: "🎫" }
    ]
  }
];
