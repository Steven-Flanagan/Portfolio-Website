import React, { useState } from "react";

const CategoryIcons: Record<string, React.ReactElement> = {
  "Software Development": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[var(--sec)] opacity-70">
      <path d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z"></path>
    </svg>
  ),
  "Infrastructure": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[var(--sec)] opacity-70">
      <path d="M4 16H20V5H4V16ZM13 18V20H17V22H7V20H11V18H2.9918C2.44405 18 2 17.5511 2 16.9925V4.00748C2 3.45107 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44892 22 4.00748V16.9925C22 17.5489 21.5447 18 21.0082 18H13Z"></path>
    </svg>
  ),
  "Compliance": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[var(--sec)] opacity-70">
      <path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM11.0535 13.4142L14.8252 17.1859L13.411 18.6001L9.63934 14.8284L8.22513 16.2426L6.81091 14.8284L11.0535 10.5858L13.411 12.9433L17.8949 8.45945L19.309 9.87366L11.0535 13.4142ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"></path>
    </svg>
  ),
  "Security": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[var(--sec)] opacity-70">
      <path d="M12 1L21.5 6.5V13.5C21.5 19.6944 17.6944 22 12 22C6.30558 22 2.5 19.6944 2.5 13.5V6.5L12 1ZM12 3.311L4.5 7.65311V13.5C4.5 18.5056 7.69442 20 12 20C16.3056 20 19.5 18.5056 19.5 13.5V7.65311L12 3.311ZM11 12.5858L14.8284 8.75736L16.2426 10.1716L11 15.4142L7.17157 11.5858L8.58579 10.1716L11 12.5858Z"></path>
    </svg>
  ),
  "Monitoring": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[var(--sec)] opacity-70">
      <path d="M2 13H8C8 14.6569 9.34315 16 11 16C11.3506 16 11.6872 15.9398 12 15.8293V21.5L16 22.5V15.8293C16.3128 15.9398 16.6494 16 17 16C18.6569 16 20 14.6569 20 13H22V3H2V13ZM4 5H20V11H17C17 12.6569 15.6569 14 14 14C13.6494 14 13.3128 13.9398 13 13.8293V18.337L14 18.671V13.8293C14.3128 13.9398 14.6494 14 15 14C16.6569 14 18 12.6569 18 11H4V5ZM6 6V9H10V6H6ZM12 6V9H16V6H12Z"></path>
    </svg>
  ),
  "CI / CD": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[var(--sec)] opacity-70">
      <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM16.0043 12.8777C15.6589 12.3533 15.4097 11.9746 14.4622 12.1248C12.6717 12.409 12.4732 12.7224 12.3877 13.2375L12.3636 13.3943L12.3393 13.5597C12.2416 14.2428 12.2453 14.5012 12.5589 14.8308C13.8241 16.1582 14.582 17.115 14.8116 17.6746C14.9237 17.9484 15.2119 18.7751 15.0136 19.5927C16.2372 19.1066 17.3156 18.3332 18.1653 17.3559C18.2755 16.9821 18.3551 16.5166 18.3551 15.9518C18.3551 14.6015 17.756 13.9742 16.0043 12.8777ZM12 3.83333C9.68259 3.83333 7.59062 4.79858 6.1042 6.34896C6.28116 6.47186 6.43537 6.64453 6.54129 6.88256C6.74529 7.34029 6.74529 7.8112 6.74529 8.22764C6.74529 8.36413 6.74529 8.49427 6.74529 8.61719L6.75 8.71012L6.75311 8.78288L6.75708 8.84615L6.76515 8.91925L6.77427 8.99542C6.78541 9.08404 6.79862 9.17908 6.81327 9.27491C6.88853 9.70169 6.96364 10.1398 6.96364 10.5825C6.96364 10.6918 6.96364 10.8011 6.96364 10.9103C6.96364 11.5139 6.96364 12.1176 6.96364 12.7212C6.96364 13.1816 6.96364 13.6419 6.96364 14.1023C6.96364 14.3623 6.96364 14.6224 6.96364 14.8825L6.96886 15.1637L6.97509 15.4446L6.98135 15.6835C6.99507 16.0864 7.01026 16.4922 7.03729 16.8432C7.05736 17.1031 7.1449 17.6342 7.52943 17.9056C7.85313 18.1302 8.39814 18.1598 8.81176 18.1598C9.2708 18.1598 9.62999 18.1316 9.96367 18.1046C10.6937 18.0507 11.2934 17.9988 11.8667 17.9988C12.1285 17.9988 12.3831 18.0085 12.6323 18.0182C12.8068 18.0182 13.1002 17.9988 13.3937 17.9988C13.5 18.0085 13.6062 18.0085 13.7125 18.0182C14.0363 18.0387 14.3628 18.0594 14.6917 18.0636C14.7927 18.0636 14.9093 18.0636 15.0265 18.0636C15.6364 18.0636 16.2782 18.0636 16.6492 17.586C16.9072 17.2598 16.9488 16.7423 16.9488 16.3893C16.9488 15.7555 16.9488 15.1217 16.9488 14.4879C16.9488 13.898 16.9488 13.3081 16.9488 12.7181C16.9488 12.1533 16.9488 11.5885 16.9488 11.0237C16.9488 10.8994 16.9488 10.7751 16.9488 10.6508C16.9488 10.1589 16.9488 9.66689 16.9488 9.17495C16.9488 8.99846 16.9488 8.82196 16.9488 8.64547C16.9488 8.61719 16.9488 8.58891 16.9488 8.56063C16.9488 8.52231 16.9488 8.48399 16.9488 8.44567C16.9488 8.02202 16.9488 7.59837 16.9488 7.17471C16.9488 6.98876 16.9488 6.80281 16.9488 6.61686C16.9488 6.34896 16.9488 6.08105 16.9488 5.81315C16.9488 5.76549 16.9488 5.71784 16.9488 5.67018C16.9488 5.57428 16.9488 5.47838 16.9488 5.38247C16.9488 5.05863 16.9488 4.73479 16.9488 4.41095C16.9488 3.83333 16.0043 3.83333 12 3.83333Z"></path>
    </svg>
  ),
  "Disaster Recovery": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[var(--sec)] opacity-70">
      <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 12H17L11 18V13H7L13 7V12Z"></path>
    </svg>
  ),
  "Incident Response": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[var(--sec)] opacity-70">
      <path d="M12.866 3L22 21H3.735L12.866 3ZM11.4995 16V18H13.4995V16H11.4995ZM11.4995 9V14H13.4995V9H11.4995Z"></path>
    </svg>
  ),
  "Customer Support": (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[var(--sec)] opacity-70">
      <path d="M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM11 10H13V12H11V10ZM11 6H13V8H11V6ZM11 14H13V16H11V14Z"></path>
    </svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills = {
    "Software Development": [
      "Fast and responsive static sites",
      "Full-stack web applications",
      "Business automation software",
    ],
    "Infrastructure": [
      "Cloud services (AWS, Azure)",
      "Physical hardware maintenance (servers, switches, firewalls, routers, NAS)",
      "Network Services (DHCP, DNS, VPN, SSL/TLS, IPS)"
    ],
    "Compliance": [
      "Led several ISO27001 audits",
      "Implemented PCI/DSS controls",
      "Maintained gambling commision remote technical standards"
    ],
    "Security": [
      "Proactively scan domains and networks for threats",
      "Patch software vulnerabilities",
      "Perform digital forensic investigations after incidents",
    ],
    "Monitoring": [
      "Collect and analyse important data like performance metrics, availability and resource utilisation ",
      "Configure intelligent alert systems for quick responses",
      "Easily visualise data using dashboard tools like Grafana"
    ],
    "CI / CD": [
      "Automate testing, building, and deployment pipelines",
      "Integrate version control with automated workflows (GitHub Actions)",
      "Ensure rapid, reliable software releases with minimal manual intervention",
    ],
    "Disaster Recovery": [
      "Design and implement backup strategies for critical systems",
      "Create recovery plans to minimize downtime during outages",
      "Test disaster recovery procedures to ensure business continuity",
    ],
    "Incident Response": [
      "Quickly identify, contain, and resolve security incidents",
      "Conduct post-incident analysis to prevent future occurrences",
      "Coordinate communication during critical incidents",
    ],
    "Customer Support": [
      "Provide technical assistance and troubleshooting for end users",
      "Document common issues and create knowledge base articles",
      "Deliver excellent service with clear, empathetic communication",
    ],
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left">
      <h2 className="text-lg text-[var(--sec)] mb-2 shiny-sec">What I can do</h2>
      <h3 className="text-4xl md:text-5xl font-medium text-[var(--white)] mb-6">
        Skills
      </h3>
      <ul className="space-y-4 flex flex-wrap mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full lg:w-1/3 flex justify-center items-end">
            <div
              onClick={() => toggleItem(category)}
              className="w-full hover:bg-[var(--white-icon-tr)] bg-[#1414149c] lg:mx-1 rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-3 p-6">
                {CategoryIcons[category]}
                <div className="flex items-center gap-2 flex-grow justify-between">
                  <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                    <span className="block truncate text-[var(--white)] lg:text-lg text-base">
                      {category}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-5 h-5 text-[var(--white-icon)] transition-transform duration-300 ${
                      openItem === category ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"></path>
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all duration-300 px-4 ${
                  openItem === category
                    ? "max-h-[500px] pb-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                  {items.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <span className="pl-1">•</span>
                      <li className="text-base pl-3">{item}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
