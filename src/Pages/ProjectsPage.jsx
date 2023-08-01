import React from 'react';
import './ProjectsPage.css';
import Header from '../Components/Header/Header';
import ProjectPageCards from '../Components/ProjectPageCards/ProjectPageCards';
import AASC from '../Assets/ProjectImages/aasc.png';
import TCW from '../Assets/ProjectImages/TCW.svg';
import DopaMind from '../Assets/ProjectImages/DopaMind.png';
import SVM from '../Assets/ProjectImages/SVM.svg';
import MentorSEAS from '../Assets/ProjectImages/mentorSEAS.png';
import BruinShare from '../Assets/ProjectImages/bruinshare.png';

function ProjectsPage() {
  const projectNames = [
    'UCLA Asian American Studies Center',
    'TransCanWork',
    'SVM Classification',
    'DopaMind',
    'MentorSEAS',
    'Bruin Share',
  ];
  const projectTypes = [
    'TEXTBOOK APPLICATION',
    'WEB APPLICATION',
    'MACHINE LEARNING CLASSIFIER',
    'HACKATHON PROJECT',
    'SORTING ALGORITHM',
    'STUDY PLATFORM',
  ];
  const projectDescriptions = [
    'An interactive textbook application deepening the public understanding of Asian American and Pacific Islander lives towards a healthy, just, democratic and compassionate society for all.',
    'An interactive employment roadmap for the 501(c)(3) nonprofit TransCanWork, aiding transgender, gender-nonconforming and intersex jobseekers in their job search.',
    'A Python program that employs a Support Vector Machine to classify mouse brain cells using single cell RNA-sequencing data.',
    'A comprehensive web app for students with ADHD, designed to help improve their focus and social skills by providing them with fun and engaging activities that are tailored to their unique needs.',
    'Utilizes the k-means algorithm to pair 1500 incoming engineering students with mentors, considering dozens of qualitative parameters to create axes for optimal pairings.',
    'A MERN Stack based web application for UCLA students to view, download and share their school essentials with other students.',
  ];
  const projectImages = [
    AASC,
    TCW,
    SVM,
    DopaMind,
    MentorSEAS,
    BruinShare,
  ];
  const projectRoutes = [
    '/aasc',
    '/tcw',
    '/svm',
    '/dopamind',
    '/wip',
    '/bruinshare',
  ];

  return (
    <div>
      <Header />
      <div className="entire-projects-page-container">
        <div className="temp" />
        <div className="project-list">
          {projectNames.map((projectName, index) => (
            <div>
              <ProjectPageCards
                name={projectName}
                type={projectTypes[index]}
                description={projectDescriptions[index]}
                image={projectImages[index]}
                route={projectRoutes[index]}
              />
              <div className="between-projects" />

            </div>

          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
