import React, { useState } from 'react';
import axios from 'axios';
import { Form, Input, SubmitButton} from './styles';

const LeadForm = ({ landingPageId }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const leadData = {
      email: email,
      landing_page: landingPageId, 
    };

    try {
      const response = await axios.post(`${process.env.REACT_APP_STRAPI_URL}/leads`, leadData);
      console.log('Lead saved:', response.data);
      setEmail(''); 
      alert('Data submitted successfully');
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert(error.response.data.message); } else {      
          console.error('Error saving lead:', error);
      alert('Failed to submit data');
        }
    }

    setIsSubmitting(false);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <SubmitButton type="submit" disabled={isSubmitting}>
      {isSubmitting ? 'Submitting...' : 'Submit'}
      </SubmitButton>
    </Form>
  );
}

export default LeadForm;
