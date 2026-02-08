const mongoose = require("mongoose");
const connectDB = require("./config/db");
const Event = require("./models/Event");

const seedEvents = async () => {
  await connectDB();

  const sampleEvents = [
    {
      title: "Mission Reunion",
      description: "Gathering of returned missionaries to reconnect and share testimonies.",
      date: new Date("2026-03-15"),
      location: "Accra Conference Center",
    },
    {
      title: "Community Service Project",
      description: "Join us for a day of service at the local orphanage.",
      date: new Date("2026-04-02"),
      location: "Osu Children's Home, Accra",
    },
    {
      title: "Faith & Leadership Workshop",
      description: "A workshop on building leadership skills rooted in faith.",
      date: new Date("2026-05-10"),
      location: "University of Ghana, Legon",
    },
  ];

  try {
    await Event.deleteMany(); // clear old events
    await Event.insertMany(sampleEvents);
    console.log("✅ Sample events seeded successfully");
    process.exit();
  } catch (err) {
    console.error("❌ Error seeding events:", err);
    process.exit(1);
  }
};

seedEvents();
