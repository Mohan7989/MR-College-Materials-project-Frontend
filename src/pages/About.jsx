import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const teamMembers = [
    {
      name: 'Jane Doe',
      role: 'Lead Developer',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBALzahSrZ-Kh2L41d2c4XYRM-WLSEJSZIQPlCjXFpdNJh7C87XouV4-4cSjkelumA_eUpfrMMyxExakzzCkwa426uJutjEcjUtnRnpcwIUGgS8rwshsL8jBNxrPcOhZ4QDntBiovrRpT6KatfOylna27sywmsiJyL2Y4plf_vPkV1xC3RK5MayvL704skKmHKpSjdLGuLBoMJf6wB1xeDcU62NvO5_toAqiJfEVjkwnU49tPav8RbyldPpHGKWotiW38lvv1wCAyQ'
    },
    {
      name: 'John Smith',
      role: 'UI/UX Designer',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXcZ04tx1Zb0UoBM--Xmnah7WdgX9Ygxktl114-gLmtQtlKMPgi4wO5s2vzm0n3erFnJf58S8l0y3yrUkLyu083dHKdgRIy_PD3PWhLQ_kAir-F_I-IiKdaR1NEbGXCuorvEBOaJtKPL-blwRBuisWMyAULNKOctshuvphsQI0wfOm5BGxanyZnT-zg6X_eA1y_t55AHuycwpzcTdePFvoPpkq5rC5CFoj5kaoqNG1fjntkYtSmYpDYEf-VKOX6zMhRAJ7fg0gYis'
    },
    {
      name: 'Emily White',
      role: 'Content Manager',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmbFFM5PGncJBzbuez0BnMSPlOk17PqM--8UN10zUVAHXVKKMKqNKLTFAPw1qcjlMf-hOe_cEwKojXwMZ4yP01ojmj6-8GPFFRiZTFWzlQ-4iCJsJnH2CaW7n-ZtS44ULEhaxzRmk4a0_DLCn3mjX-Wcdr26rpZlettNR-2wQnsJ4ytRySrSxNxOM2AyfVeBIgLswpa80rsynYw2G_0YrxhnDhSJr3OKeCYAerxiFg_BfUywlb5nNj4_xsjXjt6po1NneCwZ2l4Nc'
    },
    {
      name: 'Michael Brown',
      role: 'Community Lead',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3vmRMd1hUU3y54TBbFwNeRUQ4KNlaB5LhJlUKhf48-4ayPaPDXCsQjqhDrUKeIpcTzGr4-gyiEKWHwtQQ5lS_Kw2QtfcVxUPpTgmtYYzgb_Iyrrou2lw0HQoibynNSAIh81WWmwBP5L_2FUbal6DTiRkTiYLRFhvbB7O94UM4VA_kRetFxWV6nx_J9YRVCkVVMe5MDWD7YFVanW6wfu3-HutatFkzSsVyLdVJ1GRTVrkYtcnopc9ulgy3_pUMsLtJOqIxW7G3RWI'
    }
  ];

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      {/* Header */}
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200/50 dark:border-gray-700/50 bg-background-light/80 dark:bg-background-dark/80 p-4 pb-3 backdrop-blur-sm">
        <button 
          onClick={() => navigate(-1)}
          className="flex size-10 shrink-0 items-center justify-center rounded-full"
        >
          <span className="material-symbols-outlined text-text-light dark:text-text-dark">arrow_back</span>
        </button>
        <h2 className="flex-1 text-center text-lg font-bold leading-tight tracking-[-0.015em] text-text-light dark:text-text-dark">
          About Us
        </h2>
        <div className="size-10 shrink-0"></div>
      </div>

      {/* Main Content */}
      <main className="flex-1">
        {/* Header Image */}
        <div className="p-4">
          <div 
            className="bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-xl min-h-[218px] shadow-sm"
            style={{ 
              backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 40%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuChxLEdogTSHHiNThmzsoKkhMs-B3Hp-9iOWn4WXotrV6E0RsfMd800BwtcH2Z5_5vc-v1M-8ihJQnd15dedpnHb5XEW4F7jCxad9y9rrjXYVgciJcAo6IazqPJTCCw5I-mvsD2cJOiv1e9iMdgp7bVCepeEnoXCOfICdq_CIk2xC-ni3HRZ4AO5Mop5rWJtRpcO1fIJwHK7b6j_KfCdmRlzreJ3BEsmekT8hOm5rY5TVIA8z-rY5C5eQXe57meuaRD0JC5BgZvxyc")` 
            }}
          >
            <div className="flex p-5">
              <p className="text-white tracking-light text-[28px] font-bold leading-tight">
                Connecting and empowering MRCA students.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Card */}
        <div className="p-4 pt-0">
          <div className="flex flex-col items-stretch justify-start rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.05)] bg-white dark:bg-gray-800">
            <div 
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-t-xl"
              style={{ 
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAmmFeRppnpHG9apVB3nnxCBFbiNbyJ1x3AvYqST85ue2jZxEWh3mKW8SfVPp_U8BuExMM7KN8LTsnuaJCU7JfS-3l8C82gIiVci85V0XqPB0727ecuobK1UxnY3I30x6cEkUA3rm3DXvIkelzROKaduSfg2cCQH-kDJMtkj0Pc21MnBenFY72UmPIGt_vydM49X3IHyACi42z323oXyzu_7oUKZaIs46OqBSWN6d-qEWurqbl66pm4vBhKz0LFr9szx5Z7bEy1cvM")` 
              }}
            />
            <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 p-4">
              <p className="text-primary text-sm font-bold leading-normal">Our Mission</p>
              <p className="text-text-light dark:text-text-dark text-lg font-bold leading-tight tracking-[-0.015em]">
                Accessible Academic Resources
              </p>
              <p className="mt-1 text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-relaxed">
                To provide students with easy access to semester-wise question papers, internships, exam schedules, and a platform to share study materials.
              </p>
            </div>
          </div>
        </div>

        {/* Vision Card */}
        <div className="p-4">
          <div className="flex flex-col items-stretch justify-start rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.05)] bg-white dark:bg-gray-800">
            <div 
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-t-xl"
              style={{ 
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuB4kTzfOvhIGAOp8wP99hsjRDx-ZC86UbV7wGhUfRBJxcXtTBS2NQ2zfOsWd6ZJU4Bf3keJXxWqpNUZxXvnueHi1roOkZGgS_mOha2L8UYm0vmxdtkdcKK1kddytxPgoR8IvUkIywDmC-smkg-r6Tc1i5IIjKJ2Sa2cHCBHf7gpSyRnlGRmqhRb0I_UKgpuuwzjVKQ_NOAHirkeZZt8vZLNG6wsgJ51KW5ANLTVYHKkLp0cgWaKzVG5ljLnUz7xctd25wpoaxhyaAA")` 
              }}
            />
            <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 p-4">
              <p className="text-primary text-sm font-bold leading-normal">Our Vision</p>
              <p className="text-text-light dark:text-text-dark text-lg font-bold leading-tight tracking-[-0.015em]">
                Fostering a Collaborative Community
              </p>
              <p className="mt-1 text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-relaxed">
                To build a forward-thinking, supportive student community where knowledge and opportunities are shared freely for collective success.
              </p>
            </div>
          </div>
        </div>

        {/* Meet the Team Section */}
        <h2 className="text-text-light dark:text-text-dark text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Meet the Team
        </h2>

        {/* Team Members */}
        <div className="flex w-full snap-x snap-mandatory scroll-p-4 flex-row items-stretch justify-start gap-4 overflow-x-auto px-4 pb-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex w-40 shrink-0 snap-start flex-col items-center justify-start gap-3 rounded-xl bg-white dark:bg-gray-800 p-4 shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
              <div className="h-24 w-24 shrink-0">
                <img 
                  className="h-full w-full rounded-full object-cover" 
                  src={member.image} 
                  alt={`Profile picture of ${member.name}`}
                />
              </div>
              <div className="flex flex-col items-center justify-start">
                <p className="text-center font-bold text-text-light dark:text-text-dark">
                  {member.name}
                </p>
                <p className="text-center text-sm text-text-muted-light dark:text-text-muted-dark">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="p-4 pt-4">
          <Link 
            to="/upload"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3.5 text-base font-bold text-white shadow-sm transition-all hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <span className="material-symbols-outlined">add_circle</span>
            <span>Contribute Your Notes</span>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-8 border-t border-gray-200/50 dark:border-gray-700/50 bg-white dark:bg-gray-800 py-6">
        <div className="flex items-center justify-center gap-6">
          <a className="text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary" href="#">
            <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd"></path>
            </svg>
          </a>
          <a className="text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary" href="#">
            <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
            </svg>
          </a>
          <a className="text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary" href="#">
            <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.087-.79-.167-2.005.035-2.868.182-.78.937-3.967.937-3.967s-.239-.479-.239-1.187c0-1.114.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.264-3.442-3.264-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 01.056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A10 10 0 1012 2z" fillRule="evenodd"></path>
            </svg>
          </a>
          <a className="text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary" href="#">
            <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 3H4a2 2 0 00-2 2v14a2 2 0 002 2h16a2 2 0 002-2V5a2 2 0 00-2-2zM8 18H5V9h3v9zM6.5 7.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM19 18h-3v-5.4c0-1.3-1.1-2.4-2.5-2.4S11 11.3 11 12.6V18h-3V9h3v1.3c.7-1.2 1.9-2 3.5-2 2.5 0 4.5 2 4.5 4.5V18z"></path>
            </svg>
          </a>
        </div>
        <p className="mt-4 text-center text-sm text-text-muted-light dark:text-text-muted-dark">
          © 2024 MRCA Students Hub. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default About;