import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Title from '../title';
import Description from '../description';
import LeadForm from '../leadForm';
import { PageContainer, Image } from './styles';
import { useParams } from 'react-router-dom';

const LandingPage = () => {
  const [landingPageData, setLandingPageData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_STRAPI_URL}/landing-pages/${id}`);
        setLandingPageData(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, [id]);

  if (!landingPageData) return <div>Loading...</div>;

  const imageUrl = landingPageData.image[0]
    ? `http://localhost:1337${landingPageData.image[0].url}`
    : '';

  return (
    <PageContainer>
      <Title text={landingPageData.title} />
      <Image src={imageUrl} alt={landingPageData.name} />
      <Description text={landingPageData.description} />
      <LeadForm landingPageId={id} />
    </PageContainer>
  );
}

export default LandingPage;
