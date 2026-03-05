const mongoose = require("mongoose");
require("dotenv").config();

const Service = require("./models/Service");
const Admin = require("./models/Admin");

const seedData = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected");

        // Clear existing data
        await Service.deleteMany({});
        await Admin.deleteMany({});

        // Seed services
        await Service.insertMany([
            {
                image: "https://torado.envytheme.com/content-marketing-agency/default/assets/images/svgs/service1.svg",
                title: "Content Marketing",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod maxime deleniti ipsa! Soluta illo doloremque quaerat accusamus",
                bullets: ["Content Roadmap", "Measurement Approach"],
                order: 1,
            },
            {
                image: "https://torado.envytheme.com/content-marketing-agency/default/assets/images/svgs/service2.svg",
                title: "Inbound Marketing",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod maxime deleniti ipsa! Soluta illo doloremque quaerat accusamus",
                bullets: ["Impressive Experience", "Web Design And Development"],
                order: 2,
            },
            {
                image: "https://torado.envytheme.com/content-marketing-agency/default/assets/images/svgs/service3.svg",
                title: "Social Media Marketing",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod maxime deleniti ipsa! Soluta illo doloremque quaerat accusamus",
                bullets: ["Audience Targeting", "Creative Recommendations"],
                order: 3,
            },
        ]);
        console.log("3 services seeded");

        // Seed admin user
        const admin = new Admin({
            email: "admin@torado.com",
            password: "admin123",
        });
        await admin.save();
        console.log("Admin user seeded (admin@torado.com / admin123)");

        await mongoose.disconnect();
        console.log("Done!");
        process.exit(0);
    } catch (error) {
        console.error("Seed error:", error);
        process.exit(1);
    }
};

seedData();
