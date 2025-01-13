import React from 'react';

const Services = () => {
    const services = [
        {
            icon: "🤝", // Replace with an appropriate image/icon
            title: "Consultancy Services",
            description:
                "Complete consultancy for greenfield projectsFrom initial planning and setup to achieving full production.Strategic guidance to optimize production processes, improve quality, and reduce costs.",
        },
        {
            icon: "👨‍💼", // Replace with an appropriate image/icon
            title: "Engineering Expertise",
            description:
                "Innovative solutions for plant operations and efficiency enhancement.",
        },
        {
            icon: "🚀", // Replace with an appropriate image/icon
            title: "Transformation",
            description:
                "Driving organizational transformation through cutting-edge practices and a focus on measurable results.", 
            

            
        },
        {
            icon: "💬", // Replace with an appropriate image/icon
            title: "Standard Operating Procedures (SOPs)",
            description:
                "Formulating robust SOPs for smooth, long- term functioning",
        },
        {
            icon: "👥", // Replace with an appropriate image/icon
            title: "Team Building & Training",
            description:
                "Creating high- performing sales teams and leadership development programs.",
        },
        {
            icon: "🌐", // Replace with an appropriate image/icon
            title: "Brand Development",
            description:
                "Strategies to strengthen your brand presence in competitive markets.",
        },
        
    ];

    return (
        <section className="bg-gray-50 py-12 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold mb-2">
                    FutureVue Solutions LLP can help you with picking out the best services for your company.
                    </h2>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 ">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="text-center bg-white p-6 shadow-lg rounded-lg hover:shadow-xxl transition duration-300 hover:border-1 hover:bg-yellow-500 hover:text-white"
                        >
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                            <p className="text-gray-600 mt-2">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
