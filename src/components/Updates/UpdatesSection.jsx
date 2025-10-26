import React from 'react';
import { Link } from 'react-router-dom';

const UpdatesSection = ({ internships = [] }) => {
  const updates = [
    {
      id: 1,
      title: "Sem 4 Papers Added",
      description: "B.Tech CSE/IT",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDM1o0G8qLbhFflpDerj35VqxPSPPN67Ez-rlpbMW_hFedKpqYoHdeG-6nb0hC6Klw41Rvz6ykZu_YU5c7pE2ZTRuY3LOQ8MNWM1e-5xl3aQVaLO9FG0Le2iHdKmVnLbXb6mUmti2bey5mjsrJfKun-_VSqHwVJMTxVjZCoydsJQWBA4ZrTC8rrvMTlZkIXUdqjaoIrlKlgS6f_lOlQu9yhDCeHJS6It6QukGfHiRv6YmyVipyNgNhVkyw3qfKRKkUaM7Egv1RT3eE"
    },
    {
      id: 2,
      title: "New Internship",
      description: "TechCorp Inc.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiLIzRSfqxkAH6_fqLpGPsIT2bEHlJ6-xsesEbC59kiFphJfxYhRUFpRLhXL6yNU6yFJZyBR2IjKtmx--Dq12YnWNQfOHIg7YtckPMfYWDbolJPjwMDNf9f_eMmDJ8ESFY22FRbHijji8ZV2YLtcQZmXdyBYWwy-3EQaTe8OSFdHrwDah3T7rwEUWzD7wbUXymwKQMf1Y7axL3d58fSrgHtcpMulMqfbTlZlkJY64oNLj8R7viUX-v4gWcXI8rl7nYtxKStEnQD_I"
    },
    {
      id: 3,
      title: "New Study Material",
      description: "Data Structures",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSoZMMQUKTosrAHbMUtcGgUH_BlfhIG9iM6LXptdo7p2IhG56rYPMsZOfNK0mXzsAzizU9Dw3FUQv_f7ZVkGE5mdO7cxyfjRSB7nmOOSTW52BdyiGRO-PDXMUoLesfsdpMThdGLxnTJbZdZ_mU2D4898LfbC_iVwjpO-XyiNH52c4NNOFvcvThDK7hEl8Q4R-7-qHtPmOCNHXpTizcCsIwmox4BO6fe1DJxOuCndXWp4hb2ffi42k5kDET1aVnbCyWHo0SK7DRjbQ"
    }
  ];

  return (
    <section className="py-6">
      <div className="flex justify-between items-center px-4 pb-3">
        <h2 className="text-text-light dark:text-text-dark text-xl font-bold leading-tight tracking-tight">
          Updates
        </h2>
        <Link to="/materials" className="text-primary dark:text-accent text-sm font-semibold">
          See All
        </Link>
      </div>
      
      <div className="flex overflow-x-auto scrollbar-hide pl-4">
        <div className="flex items-stretch gap-4">
          {updates.map((update) => (
            <div key={update.id} className="flex flex-col gap-3 rounded-lg bg-card-light dark:bg-card-dark p-3 shadow-sm min-w-44">
              <div 
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                style={{ backgroundImage: `url("${update.image}")` }}
              />
              <div>
                <p className="text-text-light dark:text-text-dark text-base font-semibold leading-normal">
                  {update.title}
                </p>
                <p className="text-text-muted-light dark:text-text-muted-dark text-sm font-normal leading-normal">
                  {update.description}
                </p>
              </div>
            </div>
          ))}
          <div className="w-4 h-1"></div>
        </div>
      </div>
    </section>
  );
};

export default UpdatesSection;