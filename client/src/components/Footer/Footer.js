import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import "./Footer.css";

const Footer = () => {
    return (
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
        <Grid container justifyContent="flex-end" sx={{ pr: 5 }}>
            <Link color="inherit" className="fa-brands fa-twitter-square fa-xl footer-icons" href="https://twitter.com" sx={{ pr: 2 }}/>
            <Link color="inherit" className="fa-brands fa-instagram-square fa-xl footer-icons" href="https://twitter.com" />
          </Grid>
        </Box>);
}

export default Footer;
