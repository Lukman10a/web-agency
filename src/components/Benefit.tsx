import Image from "next/image";
import React from "react";

const Features: React.FC = () => {
  return (
    <section className="py-10 px-4 bg-gray-50">

      {/* Features Section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-semi-bold text-gray-800 mb-6 text-center">Features</h2>
        <div className="flex justify-between sm:flex-col sm:flex-wrap">
            <Image src="/assets/checkers.png" className="sm:w-full sm:mx-auto" width={500} height={300} alt="" />
            <div className="grid grid-cols-1 gap-6 w-1/2 sm:w-full sm:mt-4">
            {/* Feature Box 1 */}
            <div className="border rounded-lg p-4 bg-white shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Project Milestone Tracking
                </h3>
                <p className="text-gray-600">
                Review the milestones that track key steps in initiatives’ life
                cycle: Get a clear view of progress milestones on implementation,
                outcomes, or other criteria you’ve specified.
                </p>
            </div>
            {/* Feature Box 2 */}
            <div className="border rounded-lg p-4 bg-white shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Action Items
                </h3>
                <p className="text-gray-600">
                Action items let us flag issues that may require your input,
                feedback, or cooperation. Here you can track their progress and
                get notified upon their completion.
                </p>
            </div>
            {/* Feature Box 3 */}
            <div className="border rounded-lg p-4 bg-white shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Risk Log</h3>
                <p className="text-gray-600">
                Obstacles and unexpected challenges are part of every project,
                and risk is not only unavoidable. This log lets you know your
                those risks before they become roadblocks.
                </p>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
