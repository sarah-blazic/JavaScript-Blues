import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import "./ProductCard.css";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import ProductPage from "../../pages/ProductPage/ProductPage";

const ProductCard = ({ onAdd, item }) => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        boxShadow: 2,
        mb: 3,
      }}
    >
      <Box sx={{ my: 3, mx: 2 }}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h5" component="div">
              {item.name}
            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h6" component="div">
              ${item.price}
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <img
        className="product-image"
        src={"../../images/" + item.image}
        alt={item.name}
      />
      <Divider variant="middle" sx={{ width: "90%", ml: "5%" }} />
      <Typography color="text.secondary" variant="body2" sx={{ my: 3, mx: 2 }}>
        {item.description}
      </Typography>
      <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
        <Button onClick={() => onAdd(item)}>Add to cart</Button>
        <Button
          component={Link}
          to={`/product/${item.id}`}
        >
          View Product
        </Button>
      </Box>
    </Box>
  );
};
export default ProductCard;
