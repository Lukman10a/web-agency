import React from 'react';

const cardData = [
    {
        icon: '💬',
        title: 'Discuss Your Opportunities',
        description: 'In addition to the visualizations we generate, our Cloud Analysts meet with you regularly to talk through areas where you may be overspending or working with an inefficient architecture.',
    },
    {
        icon: '📈',
        title: 'Optimize Performance',
        description: 'Our team will work with you to analyze performance metrics and identify optimization opportunities for your cloud environment.',
    },
    {
        icon: '🔒',
        title: 'Enhance Security',
        description: 'We provide guidance on security best practices, helping you maintain a secure and compliant cloud environment.',
    },
    {
        icon: '📊',
        title: 'Improve Scalability',
        description: 'Our experts assist in designing a scalable infrastructure to handle increased demand seamlessly.',
    },
    {
        icon: '💡',
        title: 'Innovate with Data',
        description: 'We help you leverage data analytics to uncover insights and drive business innovation.',
    },
    {
        icon: '🤝',
        title: 'Build Strong Partnerships',
        description: 'We collaborate closely with your team to ensure alignment with your business goals and objectives.',
    },
];

const InterpretDataSection: React.FC = () => {
    return (
        <section className="flex flex-col items-center py-12 px-4 bg-gray-50">
            {/* Top Badge */}
            <div className="text-xs text-gray-500 tracking-wide px-3 py-1 border border-gray-300 rounded-full mb-4">
                WHY TEVERSE CONTROL
            </div>

            {/* Title and Subtitle */}
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center mb-4">
                The Expertise to Interpret Data - Not Just Visualize It
            </h2>
            <p className="text-center text-gray-600 max-w-3xl mb-10">
                Mission Control helps you monitor and analyze your environment, similar to a cloud management platform.
                But Mission Control also leverages our teams as they build their knowledge of your business, industry,
                objectives, and the unique concerns and needs of your architecture.
            </p>

            {/* Cards Section */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 gap-6 max-w-6xl">
                {cardData.map((card, index) => (
                    <div key={index} className="flex flex-col items-start p-6 bg-orange-200 rounded-lg shadow-lg">
                        {/* Icon */}
                        <div className="mb-4 text-3xl">
                            <span>{card.icon}</span>
                        </div>
                        {/* Card Title */}
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{card.title}</h3>
                        {/* Card Description */}
                        <p className="text-gray-700 text-sm">
                            {card.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default InterpretDataSection;
