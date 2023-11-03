import { useState } from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import '../styles/Footer.css';
import { IconButton, Snackbar } from '@mui/material';
import {CopyToClipboard} from 'react-copy-to-clipboard';


function Footer() {

  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(true);
  } 

  return (
    <div className="footer">
      <p>&copy; 2023 Lucia Mejia. All rights reserved.</p>
      <div className="socialMedia">
        <IconButton 
          href="https://github.com/luquiceno"
          target="_blank" 
          rel="noreferrer noopener"
        >
          <GitHubIcon />
        </IconButton> 
        <IconButton 
          href="http://linkedin.com/in/lucia-mejiaq-frontend-developer"
          target="_blank" 
          rel="noreferrer noopener"
          >
          <LinkedInIcon />
        </IconButton>
        <IconButton onClick={handleClick} title="Click to copy the email">
          <CopyToClipboard text="luquiceno@gmail.com">
            <EmailIcon />
          </CopyToClipboard>
          <Snackbar 
            message="Email Copied"
            open={open}
            onClose={() => setOpen(false)}
            autoHideDuration={1500}
            anchorOrigin={ {vertical:"bottom", horizontal:"right"} }
            ContentProps={
              {style: {
                backgroundColor:"beige",
                color:"black"
              }}
            }
          />
        </IconButton>
      </div>
    </div>
  )
}

export default Footer;

