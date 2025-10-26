import React, { useState } from 'react';

const TimetableSection = ({ timetables = [] }) => {
  const [activeTab, setActiveTab] = useState('Class');

  const tabs = ['Class', 'Exam', 'Events'];

  // Sample timetable data
  const sampleTimetable = {
    title: "III B.A., B.Sc., B.Com & B.B.A. Degree FIFTH SEMESTER - END (Supplementary) 20-22 Series Examinations OCTOBER 2025",
    time: "10 A.M. to 12.30 P.M.",
    schedule: [
      { date: "28-10-2025 Tuesday", ba: "Economics - VII (Banking and Financial Services)", bsc: "Mathematics - VI (Numerical Methods) Botany - VI (Plant Tissue Culture)", bcom: "Management Accounting & Practice", bba: "Global Human Resource Management" },
      { date: "29-10-2025 Wednesday", ba: "History - VII (Tourism Guidance and Operating Skills)", bsc: "Mathematics - VII (Mathematical Special Functions) Botany - VII (Mushroom Cultivation)", bcom: "Cost Control Techniques", bba: "e-Payment System" },
      { date: "30-10-2025 Thursday", ba: "", bsc: "Physics - VI (Applications of Electricity & Electronics) Zoology - VI (Sustainable Aquaculture Management)", bcom: "Life Insurance with Practice", bba: "" },
    ]
  };

  return (
    <section className="px-4 pb-6">
      <h2 className="text-text-light dark:text-text-dark text-xl font-bold leading-tight tracking-tight mb-3">
        Timetable
      </h2>
      
      <div className="flex flex-col gap-4">
        <div className="flex border-b border-gray-200 dark:border-gray-700">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 text-center text-base font-medium border-b-2 transition-colors ${
                activeTab === tab
                  ? 'border-primary text-primary dark:border-accent dark:text-accent font-semibold'
                  : 'border-transparent text-text-muted-light dark:text-text-muted-dark'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        
        <div className="bg-card-light dark:bg-card-dark rounded-lg p-4 shadow-sm">
          {activeTab === 'Class' && (
            <div className="text-center">
              <div className="bg-primary/10 dark:bg-primary/20 rounded-lg p-4 mb-4">
                <p className="text-primary dark:text-white font-semibold text-sm">
                  {sampleTimetable.title}
                </p>
                <p className="text-text-muted-light dark:text-text-muted-dark text-xs mt-1">
                  {sampleTimetable.time}
                </p>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="px-3 py-2 font-semibold">Date & Day</th>
                      <th className="px-3 py-2 font-semibold">B.A.</th>
                      <th className="px-3 py-2 font-semibold">B.Sc.</th>
                      <th className="px-3 py-2 font-semibold">B.Com.</th>
                      <th className="px-3 py-2 font-semibold">B.B.A.</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sampleTimetable.schedule.map((row, index) => (
                      <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
                        <td className="px-3 py-2 font-medium">{row.date}</td>
                        <td className="px-3 py-2">{row.ba || '-'}</td>
                        <td className="px-3 py-2">{row.bsc || '-'}</td>
                        <td className="px-3 py-2">{row.bcom || '-'}</td>
                        <td className="px-3 py-2">{row.bba || '-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          
          {activeTab === 'Exam' && (
            <div className="text-center py-8">
              <span className="material-symbols-outlined text-4xl text-text-muted-light dark:text-text-muted-dark mb-2">
                event_note
              </span>
              <p className="text-text-muted-light dark:text-text-muted-dark">
                Exam schedules will be updated soon
              </p>
            </div>
          )}
          
          {activeTab === 'Events' && (
            <div className="text-center py-8">
              <span className="material-symbols-outlined text-4xl text-text-muted-light dark:text-text-muted-dark mb-2">
                festival
              </span>
              <p className="text-text-muted-light dark:text-text-muted-dark">
                Upcoming events will be announced here
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TimetableSection;