import React, { useState, useEffect } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import category1 from "../../public/Images/category_1.png";
import category2 from "../../public/Images/category_2.png";
import category3 from "../../public/Images/category_3.png";
import category4 from "../../public/Images/category_4.png";
import { categoryList } from "./category_data";
import { StaticImageData } from "next/image";
const Category_section = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>("");

  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    setSelectedCategory(newValue);
  };
  useEffect(() => {
    if (categoryList.length > 0) {
      setSelectedCategory(categoryList[0].id);
    }
  }, [categoryList]);
  interface Category {
    id: string;
    name: string;
    products: Product[];
  }
  interface Product {
    id: string;
    name: string;
    img: StaticImageData;
    heading: string;
    price: string;
    title1: string;
    title2: string;
    titleText1: string;
    titleText2: string;
  }

  return (
    <Container maxWidth="xl">
      <Box>
        <Box>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Jacques Francois",
              textAlign: "center",
              marginBottom: { xs: "4vh", sm: "5vh", md: "6vh", lg: "7vh" },
            }}
          >
            Our <span style={{ color: "#B12930" }}>Plans</span>
          </Typography>
        </Box>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={selectedCategory || ""}>
            <Box>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab
                  sx={{
                    fontSize: {
                      xs: "10px",
                      sm: "18px",
                      md: "20px",
                      lg: "24px",
                    },
                  }}
                  label="Single Detached"
                  value="1"
                />
                <Tab
                  sx={{
                    fontSize: {
                      xs: "10px",
                      sm: "18px",
                      md: "20px",
                      lg: "24px",
                    },
                  }}
                  label="Semi Detached"
                  value="2"
                />
                <Tab
                  sx={{
                    fontSize: {
                      xs: "10px",
                      sm: "18px",
                      md: "20px",
                      lg: "24px",
                    },
                  }}
                  label="Acreage"
                  value="3"
                />
                <Tab
                  sx={{
                    fontSize: {
                      xs: "10px",
                      sm: "18px",
                      md: "20px",
                      lg: "24px",
                    },
                  }}
                  label="Garage Suite"
                  value="4"
                />
              </TabList>
            </Box>

            <Grid container>
              {selectedCategory &&
                categoryList.map((category) => {
                  if (category.id === selectedCategory) {
                    return category.products.map((product: Product) => (
                      <Grid item xs={12} sm={6} lg={3} key={product.id}>
                        <TabPanel value={selectedCategory}>
                          <Card
                            sx={{
                              maxWidth: 345,
                              border: "1px solid #C9C1BA",
                            }}
                          >
                            <CardMedia
                              component="img"
                              alt="green iguana"
                              height="200"
                              src={product.img.src}
                            />
                            <CardContent>
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                sx={{
                                  marginTop: { xs: "1vh", lg: "2vh" },
                                }}
                              >
                                {product.heading.slice(0, 20)}...
                              </Typography>
                              <Typography
                                color="#B12930"
                                sx={{
                                  marginTop: { xs: "1vh", lg: "2vh" },
                                  fontSize: { xs: "18px", md: "22px" },
                                }}
                              >
                                {product.price}
                              </Typography>
                              <Box
                                display={"flex"}
                                sx={{
                                  marginTop: "2vh",
                                }}
                              >
                                <Box
                                  sx={{
                                    marginRight: {
                                      xs: "4vh",
                                      md: "3vh",
                                      lg: "4vh",
                                    },
                                  }}
                                >
                                  <Typography variant="body1">
                                    {product.title1}
                                  </Typography>
                                  <Typography
                                    variant="body2"
                                    color="text.secondary"
                                  >
                                    {product.titleText1}
                                  </Typography>
                                </Box>
                                <Box>
                                  <Typography variant="body1">
                                    {product.title2}
                                  </Typography>
                                  <Typography
                                    variant="body2"
                                    color="text.secondary"
                                  >
                                    {product.titleText2}
                                  </Typography>
                                </Box>
                              </Box>
                            </CardContent>
                            <CardActions>
                              <Box
                                width={"100%"}
                                display={"flex"}
                                justifyContent={"space-around"}
                                py="1vh"
                              >
                                <Button
                                  sx={{
                                    padding: "1.2vh 4vh",
                                    fontFamily: "Times New Roman ",
                                    color: "white",
                                    backgroundColor: "#B12930",
                                    "&:hover": {
                                      backgroundColor: "hsl(357,62%,55%)",
                                    },
                                  }}
                                >
                                  Buy Now
                                </Button>
                                <Button
                                  sx={{
                                    padding: "1.2vh 4vh",
                                    fontFamily: "Times New Roman ",
                                    color: "black",
                                    border: "2px solid black",
                                    "&:hover": {
                                      backgroundColor: "black",
                                      color: "white",
                                    },
                                  }}
                                >
                                  View More
                                </Button>
                              </Box>
                            </CardActions>
                          </Card>
                        </TabPanel>
                      </Grid>
                    ));
                  }
                  return null;
                })}
            </Grid>
          </TabContext>
        </Box>
      </Box>
    </Container>
  );
};

export default Category_section;