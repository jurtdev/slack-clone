import React from 'react';
import styled from 'styled-components';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import StrikethroughSIcon from '@material-ui/icons/StrikethroughS';
import CodeIcon from '@material-ui/icons/Code';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';
import FontDownloadIcon from '@material-ui/icons/FontDownload';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import MoodIcon from '@material-ui/icons/Mood';

function ToolBar() {
  return (
    <Container>
      <FlashOnIcon />
      <FormatBoldIcon />
      <FormatItalicIcon />
      <StrikethroughSIcon />
      <CodeIcon />
      <AttachFileIcon />
      <FormatListNumberedIcon />
      <FormatListBulletedIcon />
      <LocalPizzaIcon />
      <FontDownloadIcon />
      <AlternateEmailIcon />
      <MoodIcon />
      <AttachFileIcon />
    </Container>
  );
}

export default ToolBar;

const Container = styled.div`
  height: 41px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 24px;
  font-size: 18px;
  color: #d6d9d7
  display: flex;
  align-items: center;
  justify-content: space-between;

`;
