import './App.css';
import logo from './logo.png'
import search from './search.png'
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Footter from './Fotter';

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const highlightSearchTerm = (text, term) => {
    if (!term.trim()) return text;
    const regex = new RegExp(`(${term})`, 'ig');
    return text.replace(regex, '<mark>$1</mark>');
  };

  return (
    <div className='contain'>
      <div className='head'>
        <img src={logo} alt="SUT Logo" />
        <h1> Depression Research</h1>
      </div>
      <div className='content'>
        <div className='left'>
          <div className='associated'>
            <h1 dangerouslySetInnerHTML={{ __html: highlightSearchTerm("Depression & IOT", searchTerm) }} />
          </div>
          <div>
            <h2 dangerouslySetInnerHTML={{ __html: highlightSearchTerm("Abstract", searchTerm) }} />
            <p dangerouslySetInnerHTML={{ __html: highlightSearchTerm("Health issues are becoming more and more important to people due to the continuous development of health care. The social pressures on people are becoming more and more pronounced in a social environment that is developing at an increasing rate. Prolonged exposure to stress can have a negative impact on brain development (1), and depression is one of the more typical disorders that accompany it. Stress will increase the incidence of depression (2), depression has become a common disease (3), endangering people's physical health. Depression is a debilitating mental illness with mood disorders, also known as major depression, clinical depression, or melancholia. In human studies of the disease, it has been found that depression accounts for a large proportion of the affected population. According to the latest data from the World Health Organization (WHO) statistics in 2019, there are more than 350 million people with depression worldwide, with an increase of about 18% in the last decade and an estimated lifetime prevalence of 15% (4), it is a major cause of global disability and disease burden (5), and depression has quietly become a disease that threatens hundreds of millions of people worldwide.", searchTerm) }} />
            <p1 dangerouslySetInnerHTML={{ __html: highlightSearchTerm("Keywords: key1,key2,key3,key4  ", searchTerm) }} />
          </div>
          <div>
            <h2 dangerouslySetInnerHTML={{ __html: highlightSearchTerm("Introduction", searchTerm) }} />
            <p dangerouslySetInnerHTML={{ __html: highlightSearchTerm("Health issues are becoming more and more important to people due to the continuous development of health care. The social pressures on people are becoming more and more pronounced in a social environment that is developing at an increasing rate. Prolonged exposure to stress can have a negative impact on brain development (1), and depression is one of the more typical disorders that accompany it. Stress will increase the incidence of depression (2), depression has become a common disease (3), endangering people's physical health. Depression is a debilitating mental illness with mood disorders, also known as major depression, clinical depression, or melancholia. In human studies of the disease, it has been found that depression accounts for a large proportion of the affected population. According to the latest data from the World Health Organization (WHO) statistics in 2019, there are more than 350 million people with depression worldwide, with an increase of about 18% in the last decade and an estimated lifetime prevalence of 15% (4), it is a major cause of global disability and disease burden (5), and depression has quietly become a disease that threatens hundreds of millions of people worldwide.", searchTerm) }} />
          </div>
          <div>
            <h2 dangerouslySetInnerHTML={{ __html: highlightSearchTerm("Materials and methods", searchTerm) }} />
            <p dangerouslySetInnerHTML={{ __html: highlightSearchTerm("Health issues are becoming more and more important to people due to the continuous development of health care. The social pressures on people are becoming more and more pronounced in a social environment that is developing at an increasing rate. Prolonged exposure to stress can have a negative impact on brain development (1), and depression is one of the more typical disorders that accompany it. Stress will increase the incidence of depression (2), depression has become a common disease (3), endangering people's physical health. Depression is a debilitating mental illness with mood disorders, also known as major depression, clinical depression, or melancholia. In human studies of the disease, it has been found that depression accounts for a large proportion of the affected population. According to the latest data from the World Health Organization (WHO) statistics in 2019, there are more than 350 million people with depression worldwide, with an increase of about 18% in the last decade and an estimated lifetime prevalence of 15% (4), it is a major cause of global disability and disease burden (5), and depression has quietly become a disease that threatens hundreds of millions of people worldwide.", searchTerm) }} />
            <h3 dangerouslySetInnerHTML={{ __html: highlightSearchTerm("choices:   ", searchTerm) }} />
            <p dangerouslySetInnerHTML={{ __html: highlightSearchTerm("Health issues are becoming more and more important to people due to the continuous development of health care. The social pressures on people are becoming more and more pronounced in a social environment that is developing at an increasing rate. Prolonged exposure to stress can have a negative impact on brain development (1), and depression is one of the more typical disorders that accompany it. Stress will increase the incidence of depression (2), depression has become a common disease (3), endangering people's physical health. Depression is a debilitating mental illness with mood disorders, also known as major depression, clinical depression, or melancholia. In human studies of the disease, it has been found that depression accounts for a large proportion of the affected population. According to the latest data from the World Health Organization (WHO) statistics in 2019, there are more than 350 million people with depression worldwide, with an increase of about 18% in the last decade and an estimated lifetime prevalence of 15% (4), it is a major cause of global disability and disease burden (5), and depression has quietly become a disease that threatens hundreds of millions of people worldwide.", searchTerm) }} />
          </div>
          <div>
            <h2 dangerouslySetInnerHTML={{ __html: highlightSearchTerm("Results", searchTerm) }} />
            <p dangerouslySetInnerHTML={{ __html: highlightSearchTerm("Health issues are becoming more and more important to people due to the continuous development of health care. The social pressures on people are becoming more and more pronounced in a social environment that is developing at an increasing rate. Prolonged exposure to stress can have a negative impact on brain development (1), and depression is one of the more typical disorders that accompany it. Stress will increase the incidence of depression (2), depression has become a common disease (3), endangering people's physical health. Depression is a debilitating mental illness with mood disorders, also known as major depression, clinical depression, or melancholia. In human studies of the disease, it has been found that depression accounts for a large proportion of the affected population. According to the latest data from the World Health Organization (WHO) statistics in 2019, there are more than 350 million people with depression worldwide, with an increase of about 18% in the last decade and an estimated lifetime prevalence of 15% (4), it is a major cause of global disability and disease burden (5), and depression has quietly become a disease that threatens hundreds of millions of people worldwide.", searchTerm) }} />
            <h3 dangerouslySetInnerHTML={{ __html: highlightSearchTerm("choices:   ", searchTerm) }} />
            <p dangerouslySetInnerHTML={{ __html: highlightSearchTerm("Health issues are becoming more and more important to people due to the continuous development of health care. The social pressures on people are becoming more and more pronounced in a social environment that is developing at an increasing rate. Prolonged exposure to stress can have a negative impact on brain development (1), and depression is one of the more typical disorders that accompany it. Stress will increase the incidence of depression (2), depression has become a common disease (3), endangering people's physical health. Depression is a debilitating mental illness with mood disorders, also known as major depression, clinical depression, or melancholia. In human studies of the disease, it has been found that depression accounts for a large proportion of the affected population. According to the latest data from the World Health Organization (WHO) statistics in 2019, there are more than 350 million people with depression worldwide, with an increase of about 18% in the last decade and an estimated lifetime prevalence of 15% (4), it is a major cause of global disability and disease burden (5), and depression has quietly become a disease that threatens hundreds of millions of people worldwide.", searchTerm) }} />
          </div>
          <div>
            <h2 dangerouslySetInnerHTML={{ __html: highlightSearchTerm("Discussion", searchTerm) }} />
            <p dangerouslySetInnerHTML={{ __html: highlightSearchTerm("Health issues are becoming more and more important to people due to the continuous development of health care. The social pressures on people are becoming more and more pronounced in a social environment that is developing at an increasing rate. Prolonged exposure to stress can have a negative impact on brain development (1), and depression is one of the more typical disorders that accompany it. Stress will increase the incidence of depression (2), depression has become a common disease (3), endangering people's physical health. Depression is a debilitating mental illness with mood disorders, also known as major depression, clinical depression, or melancholia. In human studies of the disease, it has been found that depression accounts for a large proportion of the affected population. According to the latest data from the World Health Organization (WHO) statistics in 2019, there are more than 350 million people with depression worldwide, with an increase of about 18% in the last decade and an estimated lifetime prevalence of 15% (4), it is a major cause of global disability and disease burden (5), and depression has quietly become a disease that threatens hundreds of millions of people worldwide.", searchTerm) }} />
          </div>
          <div className='link'>
            <h2 dangerouslySetInnerHTML={{ __html: highlightSearchTerm("Refernces", searchTerm) }} />
          </div>
          <div className='link'>
            <a href="https://www.example.com">1.Visit our website</a>
            <a href="https://www.example.com">1.Visit our website</a>
            <a href="https://www.example.com">1.Visit our website</a>
            <a href="https://www.example.com">1.Visit our website</a>
            <a href="https://www.example.com">1.Visit our website</a>
            <a href="https://www.example.com">1.Visit our website</a>
            <a href="https://www.example.com">1.Visit our website</a>
            <a href="https://www.example.com">1.Visit our website</a>
          </div>
        </div>
        <div className='right'>
          <div>
            <h3>DATA SET</h3>
            <Button variant="contained" href="./logo.png" download="Test_download.zip">
              Download
            </Button>
          </div>
          <div>
            <h3>Download PDF</h3>
            <Button variant="contained">Download</Button>
          </div>
        </div>
      </div>
      <Footter/>
    </div>
  );
}

export default App;
