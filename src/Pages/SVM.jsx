import React from 'react';
import Header from '../Components/Header/Header';
import './SVM.css';
import Banner from '../Assets/Banners/SVMBanner.png';
import Logo from '../Assets/Logos/SVMLogo.svg';
import Poster from '../Assets/Screens/SVMPoster.png';

function SVM() {
  return (
    <div>
      <Header />
      <div className="entire-svm">
        <img src={Banner} alt="SVM banner" className="svm-banner" />
        <div className="project-details">
          <div className="project-basics">
            <div>
              <div className="dopamind-title">SVM Classification</div>
              <div className="dopamind-type">ML CLASSIFIER</div>
              <img src={Logo} alt="JSB logo" className="svm-logo" />
            </div>
          </div>
          <div className="top-pairs">
            <div className="top-pair">
              <div className="top-category">ROLE</div>
              <div className="top-answer">ML Research Assistant</div>
            </div>
            <div className="top-pair">
              <div className="top-category">DURATION</div>
              <div className="top-answer">Jan 2023 - June 2023</div>
            </div>
            <div className="top-pair">
              <div className="top-category">TECHNOLOGIES</div>
              <div className="top-answer">Python, NumPy, SciPy, pandas, Matplotlib, scikit-learn</div>
            </div>
          </div>
        </div>
        <div className="dopamind-grey-line" />
        <div className="dopamind-text-section">
          <div className="dopamind-section-title">OVERVIEW</div>
          <div className="paragraph-title">PROJECT SUMMARY</div>
          <div className="paragraph-content">
            Classifying cells by gene expression is important because it allows for better
            understanding of the underlying biological mechanisms and pathways that govern the
            behavior of cells. The program classifies mouse brain cells by single cell RNA
            sequencing data provided by the Broad Institute, using a Support Vector Machine (SVM).
            Two types of classifications were used: general classification, meaning fewer classes
            of cells, and specific classification, meaning more classes of cells.
          </div>
          <div className="paragraph-break" />
          <div className="paragraph-title">MOTIVATION</div>
          <div className="paragraph-content">
            In previous studies classifying pancreatic and breast cancer cells, the SVM better
            classified the cells into general classes compared to the specific classes. Counter
            to what was anticipated, we noticed that the SVM’s general classification
            outperformed the specific classification. This phenomenon and the lack of
            documentation on classification difficulty further motivated the questions that
            are the subject of this study: does class definition have an effect on
            classification performance, and if it does, why? If this phenomenon can be quantified
            or predicted, it can be used as a tool to help users with automatic annotation
            methods and estimate if subtypes are likely to be accurately identified or not.
          </div>
        </div>
        <div className="tcw-grey-line" />
        <div className="dopamind-text-section">
          <div className="dopamind-section-title">FEATURES</div>
          <div className="paragraph-title"><i>remove.ipynb</i></div>
          <div className="paragraph-content">
            The goal of this program is to remove each of the classes in the training
            data. The most challenging part of writing this program was removing the
            columns that represented the cells in the training data, but I was able to
            accomplish this by using an intermediate array to retrieve the column labels,
            then using the DataFrame drop function. This function outputs the training
            data and labels with specific cell classes removed, which are to be used
            in
            <i> SVM_Full_Data_Function.ipynb</i>
            .
          </div>
          <div className="paragraph-break" />
          <div className="paragraph-title"><i>SVM_Full_Data_Function.ipynb</i></div>
          <div className="paragraph-content">
            This program consists of a function that uses the output files from
            <i> remove.ipynb </i>
            that hold the training data and the training data labels with a specific class removed.
          </div>
          <div className="paragraph-break" />
          <div className="paragraph-title"><i>compare.ipynb</i></div>
          <div className="paragraph-content">
            This program uses the csv outputs from
            <i> SVM_Full_Data_Function.ipynb </i>
            and outputs the macro and micro F1 scores for each of the specific classes. I
            used the f1_score function, imported from sklearn, but I had to take some preliminary
            steps like organizing the classes into an array and setting up a storage container for
            the values. The output of the function is two DataFrames, one storing macro F1 scores
            for each class and the other storing micro F1 scores.
          </div>
        </div>
        <div className="tcw-grey-line" />
        <div className="dopamind-text-section">
          <div className="dopamind-section-title">POSTER</div>
          <div className="paragraph-title"><img src={Poster} alt="Poster" className="svm-poster" /></div>
          <div className="paragraph-break" />
          <div className="paragraph-content">
            I presented this poster at the Computational and Systems Biology Research
            Symposium to faculty and students within the department. In addition to this
            poster, I crafted a ten minute slideshow presentation and wrote a ten page paper
            summarizing the findings during my time at the Junction of Statistics and Biology.
          </div>
        </div>
        <div className="tcw-bottom" />
      </div>
    </div>
  );
}

export default SVM;
