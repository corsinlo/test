import styled from 'styled-components';

export const Form = styled.form`
background-color: #f6f6f6;
display: flex;
justify-content: space-between; 
padding: 14px 11px; 
margin: 20px; 
width: calc(100% - 40px); 
`;

export const Input = styled.input`
background: transparent;
font-family: "Arial-Regular", Helvetica, sans-serif;
font-size: 18px; 
padding: 18px;
width: 40%;
border: none;
border-bottom: solid 4px #192128;
margin-right: 30px;
`;

export const SubmitButton = styled.button`
background-color: #192128;
border: none;
color: #ffffff;
font-family: "Inter-Regular", Helvetica, sans-serif;
font-weight: 100;
font-size: 18px;
line-height: 14px;
padding: 20px;
text-align: center;
width: 45%;
cursor: pointer;
align-items: center;
`;