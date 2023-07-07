import React from 'react';
import Header from '../Components/Header/Header';
import './DopaMind.css';
import Banner from '../Assets/Banners/DopaMindBanner.png';
import Logo from '../Assets/Logos/DopaMindLogo.svg';

function DopaMind() {
  return (
    <div>
      <Header />
      <div className="entire-dopamind">
        <img src={Banner} alt="DopaMind banner" className="dopamind-banner" />
        <div className="project-details">
          <div className="project-basics">
            <div>
              <div className="dopamind-title">DopaMind</div>
              <div className="dopamind-type">HACKATHON PROJECT</div>
              <img src={Logo} alt="DopaMind logo" className="dopamind-logo" />
            </div>
          </div>
          <div className="top-pairs">
            <div className="top-pair">
              <div className="top-category">ROLE</div>
              <div className="top-answer">
                Software Developer
              </div>
            </div>
            <div className="top-pair">
              <div className="top-category">DURATION</div>
              <div className="top-answer">Apr 2023</div>
            </div>
            <div className="top-pair">
              <div className="top-category">TECHNOLOGIES</div>
              <div className="top-answer">React, JavaScript, CSS</div>
            </div>
          </div>
        </div>
        <div className="dopamind-grey-line" />
        <div className="dopamind-text-section">
          <div className="dopamind-section-title">OVERVIEW</div>
          <div className="paragraph-title">PROJECT SUMMARY</div>
          <div className="paragraph-content">
            Our comprehensive web app for students with ADHD is designed to help improve their
            focus, organization, and social skills. Our app is an all-in-one solution
            or students with ADHD, providing them with fun and engaging activities that
            are tailored to their unique needs.
          </div>
          <div className="paragraph-break" />
          <div className="paragraph-title">MOTIVATION</div>
          <div className="paragraph-content">
            With one of our team members being student with ADHD, we understand firsthand how
            difficult it can be to excel in a traditional learning environment. It took him some
            time to find ways to develop strategies that worked for him, complementing his
            learning style and unique way he process information; structure, visual aides, and
            active learning techniques have all worked to make him a stronger student. We harnessed
            his experience and further research as inspiration to continue uplifting students with
            ADHD, recognizing that their capabilities are no different that their peers and
            providing them with the tools to succeed.
          </div>
          <div className="paragraph-break" />
          <div className="paragraph-title">TOOLS</div>
          <div className="paragraph-content">
            We used React as the front end, and Express.js as a server to access the Co:here APIs.
            We specifically used the &quot;/generate&quot; api of Co:here to generate
            thoughtful responses to the notes section of Transcribble, with the intention
            of acting as a mentor to give advice on anything the user might be feeling.
            Another API we used was the assembly API, used to transcribe the audio notes
            that users can create.
          </div>
        </div>
        <div className="tcw-grey-line" />
        <div className="dopamind-text-section">
          <div className="dopamind-section-title">FEATURES</div>
          <div className="paragraph-title">TRANSCRIBBLE</div>
          <div className="paragraph-content">
            Capable of transcribing what the user says onto the screen, Transcribble
            helps users organize their thoughts without needing to focus on typing them out.
            In addition to the transcribing tool is an AI chatbot that extends any ideas
            the user types into the idea box, helping the flow of inspiration continue
            beyond the user&apos;s initial thoughts.
          </div>
          <div className="paragraph-break" />
          <div className="paragraph-title">GAMES</div>
          <div className="paragraph-content">
            Our application includes traditional games reinterpreted to complement the
            learning styles of students with ADHD.
            <br />
            <i>Sudoku</i>
            : smaller than a traditional Sudoku board, pairing each value with an
            image to induce image-value relationships.
            <br />
            <i>Anagrams</i>
            : a word-based puzzle providing users with a scrambled word, asking users
            to return the original word. The game exercises both vocabulary skills and
            pattern recognition.
          </div>
          <div className="paragraph-break" />
          <div className="paragraph-title">STUDY SPACE</div>
          <div className="paragraph-content">
            The Study Space is an organization tool with musical and time-based elements.
            This page contains a sound machine that emulates a tranquil, flowing river that
            naturally soothes the psyche. Additionally, there is a Pomodoro-style timer,
            helping users break large tasks up into smaller manageable timed units
            and maintain focus.
          </div>
          <div className="paragraph-break" />
          <div className="paragraph-title">RESOURCES</div>
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

export default DopaMind;
