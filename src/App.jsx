import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { BsImage } from 'react-icons/bs';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
  body {
    background: #000;
    color: #fff;
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    min-height: 100vh;
  }
`;

const Container = styled.div`
  min-height: 100vh;
  background: #000;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 32px;
  
  @media (max-width: 768px) {
    padding: 16px 20px;
  }
`;

const SubscribeButton = styled.button`
  background: #1DA1F2;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
  
  &:hover {
    background: #1991db;
  }
`;

const Logo = styled.h1`
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  color: white;
  
  span {
    color: #1DA1F2;
  }
`;

const ProfilePicture = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(45deg, #1DA1F2, #14171A);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 14px;
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  text-align: center;
`;

const MainHeading = styled.h2`
  font-size: 48px;
  font-weight: 700;
  margin: 0 0 60px 0;
  line-height: 1.2;
  max-width: 600px;
  
  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 40px;
  }
  
  span {
    color: #1DA1F2;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  max-width: 500px;
  background: #1a1a1a;
  border-radius: 12px;
  padding: 20px;
  border: 1px solid #333;
`;

const TextArea = styled.textarea`
  width: 100%;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  resize: none;
  outline: none;
  min-height: 80px;
  
  &::placeholder {
    color: #666;
  }
`;

const InputFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #333;
`;

const ImageIcon = styled.div`
  color: #1DA1F2;
  cursor: pointer;
  font-size: 18px;
  
  &:hover {
    color: #1991db;
  }
`;

const GenerateButton = styled.button`
  background: #1DA1F2;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 8px 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  
  &:hover {
    background: #1991db;
  }
  
  &:disabled {
    background: #333;
    cursor: not-allowed;
  }
`;

export default function App() {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false);
      alert('Post optimization complete!');
    }, 2000);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <SubscribeButton>Subscribe</SubscribeButton>
          <Logo>Crowd<span>Test</span></Logo>
          <ProfilePicture>MG</ProfilePicture>
        </Header>
        
        <MainContent>
          <MainHeading>
            Optimize your <span>X</span><br />
            posts with just a prompt
          </MainHeading>
          
          <InputContainer>
            <TextArea
              placeholder="Draft"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <InputFooter>
              <ImageIcon>
                <BsImage />
              </ImageIcon>
              <GenerateButton 
                onClick={handleGenerate}
                disabled={!prompt.trim() || isGenerating}
              >
                {isGenerating ? 'Generating...' : 'Generate'}
              </GenerateButton>
            </InputFooter>
          </InputContainer>
        </MainContent>
      </Container>
    </>
  );
} 