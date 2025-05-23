import React, { useState, useRef } from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import AnimatedGraph from './AnimatedGraph';
import { versionA, versionB } from './graphData';
import { BsImage, BsCollection, BsVolumeUp, BsListUl, BsEmojiSmile, BsCamera, BsGeoAlt, BsTypeItalic } from 'react-icons/bs';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
  body {
    background: #181a20;
    color: #fff;
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
  }
`;

const Header = styled.header`
  width: 100%;
  padding: 20px 0;
  background: #23262f;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
  margin: 0;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  color: #2e90fa;
`;

const Container = styled.div`
  max-width: 700px;
  margin: 100px auto 40px auto;
  background: #23262f;
  border-radius: 16px;
  box-shadow: 0 4px 32px #000a;
  padding: 24px 20px 20px 20px;
  
  @media (max-width: 768px) {
    margin: 80px 16px 24px 16px;
    padding: 16px;
  }
`;

const Versions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  gap: 16px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
  }
`;

const VersionBox = styled.div`
  flex: 1;
  background: #181a20;
  border-radius: 8px;
  padding: 12px;
  min-height: 60px;
  cursor: default;
  position: relative;
  
  @media (max-width: 768px) {
    min-height: 80px;
  }
`;

const VersionTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.color};
  margin-bottom: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid #333;
`;

const TextCursor = styled.div`
  width: 2px;
  height: 20px;
  background: #fff;
  position: absolute;
  left: 12px;
  top: 45px;
  animation: blink 1s step-end infinite;

  @keyframes blink {
    50% { opacity: 0; }
  }
`;

const PlaceholderText = styled.div`
  color: #666;
  font-size: 14px;
  margin-top: 4px;
  opacity: ${props => props.isVisible ? 0 : 1};
`;

const typewriter = keyframes`
  from {
    width: 0;
    border-right: 2px solid #fff;
  }
  to {
    width: 100%;
    border-right: 2px solid #fff;
  }
`;

const AnimatedText = styled.div`
  overflow: hidden;
  line-height: 1.4;
  font-size: 14px;
  position: absolute;
  top: 45px;
  left: 12px;
  right: 12px;
  opacity: ${props => props.isVisible ? 1 : 0};
  white-space: pre-wrap;
  word-break: break-word;

  &::after {
    content: '';
    position: absolute;
    right: -2px;
    top: 0;
    height: 18px;
    width: 2px;
    background: #fff;
    animation: ${props => props.isVisible ? 'blink 1s step-end infinite' : 'none'};
  }

  & > span {
    visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
    animation: ${props => props.isVisible ? 'type 0.05s steps(1)' : 'none'};
    animation-fill-mode: backwards;
  }

  @keyframes type {
    from { visibility: hidden; }
    to { visibility: visible; }
  }

  @keyframes blink {
    50% { opacity: 0; }
  }
`;

const PredictButton = styled.button`
  background: #2e90fa;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 7px 22px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin: 18px 18px 24px 0;
  float: right;
  transition: background 0.2s;
  &:hover {
    background: #1570ef;
  }
`;

const GraphSection = styled.div`
  background: #181a20;
  border-radius: 12px;
  padding: 24px 16px 16px 16px;
  margin-bottom: 24px;
`;

const StatsSection = styled.div`
  display: flex;
  justify-content: space-between;
  background: #181a20;
  border-radius: 12px;
  padding: 16px;
`;

const StatBox = styled.div`
  flex: 1;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
  color: #fff;
`;

const IconContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 40px;
  color: #2e90fa;
  font-size: 1rem;

  svg {
    cursor: pointer;
    transition: color 0.2s;
    &:hover {
      color: #1570ef;
    }
  }
`;

export default function App() {
  const [animating, setAnimating] = useState(false);
  const [progress, setProgress] = useState(-0.1);
  const [textAVisible, setTextAVisible] = useState(false);
  const [textBVisible, setTextBVisible] = useState(false);
  const [stats, setStats] = useState({
    likes: 100.0,
    comments: 100.0,
    retweets: 100.0,
    quotes: 100.0,
    likesLabel: 'Vers. A',
    commentsLabel: 'Vers. A',
    retweetsLabel: 'Vers. A',
    quotesLabel: 'Vers. A',
  });
  const intervalRef = useRef();

  const statsStart = {
    likes: 100.0,
    comments: 100.0,
    retweets: 100.0,
    quotes: 98.7,
    likesLabel: 'Vers. A',
    commentsLabel: 'Vers. A',
    retweetsLabel: 'Vers. A',
    quotesLabel: 'Vers. B',
  };
  const statsEnd = {
    likes: 100.0,
    comments: 100.0,
    retweets: 100.0,
    quotes: 100.0,
    likesLabel: 'Vers. A',
    commentsLabel: 'Vers. A',
    retweetsLabel: 'Vers. A',
    quotesLabel: 'Vers. A',
  };

  const textA = "built an algorithm that analyzes your digital footprint to create content that triggers you to react. at scale";
  const textB = "we've been quietly tracking everything that triggers reactions from you. this tweet was engineered using that data";

  const renderAnimatedText = (text, isVisible) => {
    return text.split('').map((char, index) => (
      <span key={index} style={{ animationDelay: `${index * 20}ms` }}>
        {char}
      </span>
    ));
  };

  function handlePredict() {
    if (animating) return;
    setAnimating(true);
    setProgress(-0.1);
    setStats(statsStart);
    
    let start;
    function animate(ts) {
      if (!start) start = ts;
      const elapsed = ts - start;
      const duration = 8000;
      
      const p = Math.min(elapsed / duration, 1);
      
      setProgress(p - 0.1);
      
      setStats({
        likes: statsStart.likes + (statsEnd.likes - statsStart.likes) * p,
        comments: statsStart.comments + (statsEnd.comments - statsStart.comments) * Math.max(0, p - 0.1),
        retweets: statsStart.retweets + (statsEnd.retweets - statsStart.retweets) * Math.max(0, p - 0.2),
        quotes: statsStart.quotes + (statsEnd.quotes - statsStart.quotes) * Math.max(0, p - 0.3),
        likesLabel: statsEnd.likesLabel,
        commentsLabel: statsEnd.commentsLabel,
        retweetsLabel: statsEnd.retweetsLabel,
        quotesLabel: p < 0.8 ? statsStart.quotesLabel : statsEnd.quotesLabel,
      });

      if (p < 1) {
        intervalRef.current = requestAnimationFrame(animate);
      } else {
        setAnimating(false);
      }
    }
    intervalRef.current = requestAnimationFrame(animate);
  }

  React.useEffect(() => {
    return () => intervalRef.current && cancelAnimationFrame(intervalRef.current);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header>
        <Logo>Predictful</Logo>
      </Header>
      <Container>
        <Versions>
          <VersionBox onClick={() => !textAVisible && setTextAVisible(true)}>
            <VersionTitle color="#2e90fa">Version A</VersionTitle>
            <PlaceholderText isVisible={textAVisible}>Enter version A tweet...</PlaceholderText>
            {!textAVisible && <TextCursor />}
            <AnimatedText isVisible={textAVisible}>
              {renderAnimatedText(textA, textAVisible)}
            </AnimatedText>
            <IconContainer>
              <BsImage />
              <BsCollection />
              <BsVolumeUp />
              <BsListUl />
              <BsEmojiSmile />
              <BsCamera />
              <BsGeoAlt />
              <BsTypeItalic />
            </IconContainer>
          </VersionBox>
          <VersionBox onClick={() => !textBVisible && setTextBVisible(true)}>
            <VersionTitle color="#ff9800">Version B</VersionTitle>
            <PlaceholderText isVisible={textBVisible}>Enter version B tweet...</PlaceholderText>
            {!textBVisible && <TextCursor />}
            <AnimatedText isVisible={textBVisible}>
              {renderAnimatedText(textB, textBVisible)}
            </AnimatedText>
            <IconContainer>
              <BsImage />
              <BsCollection />
              <BsVolumeUp />
              <BsListUl />
              <BsEmojiSmile />
              <BsCamera />
              <BsGeoAlt />
              <BsTypeItalic />
            </IconContainer>
          </VersionBox>
        </Versions>
        <PredictButton onClick={handlePredict} disabled={animating} style={{ opacity: animating ? 0.7 : 1 }}>
          Predict
        </PredictButton>
        <GraphSection>
          <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 8 }}>Cumulative Engagement</div>
          <AnimatedGraph dataA={versionA} dataB={versionB} animationProgress={progress} />
        </GraphSection>
        <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 8 }}>Statistical Confidence</div>
        <StatsSection>
          <StatBox>Likes<br /><span style={{ fontSize: '1.5rem', color: '#2e90fa' }}>{stats.likes.toFixed(1)}%</span><br /><span style={{ fontSize: '0.9rem', color: '#888' }}>{stats.likesLabel}</span></StatBox>
          <StatBox>Comments<br /><span style={{ fontSize: '1.5rem', color: '#2e90fa' }}>{stats.comments.toFixed(1)}%</span><br /><span style={{ fontSize: '0.9rem', color: '#888' }}>{stats.commentsLabel}</span></StatBox>
          <StatBox>Retweets<br /><span style={{ fontSize: '1.5rem', color: '#2e90fa' }}>{stats.retweets.toFixed(1)}%</span><br /><span style={{ fontSize: '0.9rem', color: '#888' }}>{stats.retweetsLabel}</span></StatBox>
          <StatBox>Quotes<br /><span style={{ fontSize: '1.5rem', color: '#ff9800' }}>{stats.quotes.toFixed(1)}%</span><br /><span style={{ fontSize: '0.9rem', color: '#888' }}>{stats.quotesLabel}</span></StatBox>
        </StatsSection>
      </Container>
    </>
  );
} 