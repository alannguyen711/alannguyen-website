import React from 'react';
import './TCW.css';
import Header from '../Components/Header/Header';
import TCWProfilePage from '../Assets/Screens/TCWProfilePage.png';
import TCWHomePages from '../Assets/Screens/TCWHomePages.png';
import Banner from '../Assets/Banners/TCWBanner.png';
import Logo from '../Assets/Logos/TCWLogo.png';

function TCW() {
  return (
    <div>
      <Header />
      <div className="entire-TCW">
        <img src={Banner} alt="TCW banner" className="tcw-banner" />
        <div className="project-details">
          <div className="project-basics">
            <div>
              <div className="tcw-title">TransCanWork</div>
              <div className="tcw-type">WEB APPLICATION</div>
              <img src={Logo} alt="TCW logo" className="tcw-logo" />
            </div>
          </div>
          <div className="top-pairs">
            <div className="top-pair">
              <div className="top-category">ROLE</div>
              <div className="top-answer">
                Project Lead
                <br />
                Software Developer
              </div>
            </div>
            <div className="top-pair">
              <div className="top-category">DURATION</div>
              <div className="top-answer">Oct 2022 - Present</div>
            </div>
            <div className="top-pair">
              <div className="top-category">TECHNOLOGIES</div>
              <div className="top-answer">React, JavaScript, CSS</div>
            </div>
          </div>
        </div>
        <div className="tcw-grey-line" />
        <div className="tcw-text-section">
          <div className="tcw-section-title">OVERVIEW</div>
          <div className="paragraph-title">PROJECT SUMMARY</div>
          <div className="paragraph-content">
            The web application acts as an interactive employment roadmap for the 501(c)(3)
            nonprofit TransCanWork which aids transgender, gender-nonconforming and intersex
            jobseekers in their job search. Clients are able to complete milestones and
            log important demographic information for their assigned navigators to view.
          </div>
          <div className="paragraph-break" />
          <div className="paragraph-title">MOTIVATION</div>
          <div className="paragraph-content">
            The nonprofit currently logs extensive information of 2500+ jobseekers in a large Excel
            spreadsheet, lacking organization, readability and efficiency. The new web application
            aims to streamline the flow of information between jobseekers and navigators, ultimately
            aiding TransCanWork in their mission to uplift and support the clients they serve.
          </div>
        </div>
        <div className="tcw-grey-line" />
        <div className="tcw-text-section">
          <div className="tcw-section-title">PERSONAL CONTRIBUTION</div>
          <div className="paragraph-title">SEARCH AND FILTER</div>
          <div className="paragraph-content">
            On the dashboard, there is a search bar for navigators to locate specific jobseekers.
            Users can type in a search query and filter by certain skills or interests. I used a
            state variable for the contents of the search bar that updated when a user typed into
            the query, and made an API call to pull all the jobseekers from Firebase.
          </div>
          <div className="paragraph-break" />
          <img src={TCWProfilePage} alt="TCW Profile Page" className="tcw-profile-page" />
          <div className="paragraph-break" />
          <div className="paragraph-title">PROFILE PAGE</div>
          <div className="paragraph-content">
            To create a profile page with selected editable fields, I made an API call to retrieve
            the user’s data from the backend. One of the challenges of this page is that it is
            role-specific and the contents depend on the permissions of the user. In that same API
            call that returned all the users’ info, I used that returned information and checked for
            the users’ role to display the appropriate information.
          </div>
          <div className="paragraph-break" />
          <div className="paragraph-title">ASSESSMENT PAGE</div>
          <div className="paragraph-content">
            When jobseekers are first onboarded to TransCanWork, they fill out an assessment that
            logs personal information essential to beginning their job search: preferred name,
            methods of contact, past occupations, degrees acquired and hard/soft skills. I
            implemented the page that allows users to input all this information and successfully
            instates their profile.
          </div>
          <div className="paragraph-break" />
          <img src={TCWHomePages} alt="TCW Home Pages" className="tcw-home-pages" />
          <div className="paragraph-break" />
          <div className="paragraph-title">HOME PAGES</div>
          <div className="paragraph-content">
            The home page links to several other components including pages, training programs,
            internships, job fairs and the central roadmap. I coded and styled these pages,
            which save data to our Firebase backend.
          </div>
        </div>
        <div className="tcw-bottom" />
      </div>
    </div>
  );
}

export default TCW;
