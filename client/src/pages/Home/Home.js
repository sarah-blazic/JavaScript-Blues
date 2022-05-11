import Featured from "../../components/Featured/Featured";
import Box from "@mui/material/Box";
import SearchBar from "../../components/SearchBar/SearchBar";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import featured_images from './featured_data.js';
import Container from '@mui/material/Container';

const MainPage = ({ onAdd }) => {
    return (
    <Container sx={{
        overflow: 'hidden'
    }} maxWidth="xl">
        <Box sx={{my : 2, mx: "auto"}}>
            <SearchBar onAdd={onAdd}/>
        </Box>
        <Featured data={featured_images}/>
        <Divider sx={{
            width: '100%',
            mt: 2
        }}/>
        <Container maxWidth="md" sx={{ my: 2 }}>
            <Typography component="h1" variant="h2" align="center" color="text.primary">
                About Us
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                We are a company that sells a variety of used mice. Tired of faulty or unreliable peripherals? Want to get a mouse for cheap? Don't trust unreputable vendors
                to give you working refurbished mice? Then you've come to the right place.<br />
                Take a look at our variety of stock in our catalog, and for further inquaries feel free to reach out to us at support@example.tld, or at any of our media
                accounts that you can find linked below.
            </Typography>
        </Container>
    </Container>);
}

export default MainPage;