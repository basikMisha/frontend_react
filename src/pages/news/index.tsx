import { Grid, Box, Typography } from "@mui/material";
import { getNews } from "../../store/thunks/news";
import { useAppDispatch, useAppSelector } from "../../utils/hook";
import React, { useEffect } from 'react'
import { useStyles } from "./styles";
import {Link} from 'react-router-dom';

const NewsComponent: React.FC = (): JSX.Element => {
  const { classes } = useStyles();
  const dispatch = useAppDispatch();
  const { news } = useAppSelector((state) => state.news);
  console.log(news);

  const renderNews = news.map((elem: any) => {
    return (
      <Grid container className={classes.newsBlock} key={elem.id} >
        <Grid item xs={12} md={3} >
          <img className={classes.newsImage} src={elem.imageurl} alt={elem.category} />
        </Grid>
        <Grid item xs={12} md={9}>
            <Box sx={{
              marginBottom: '20px',
              textAlign: 'center'
            }}>
              <Typography variant='h3'>{elem.title}</Typography>
            </Box>
            <Box>
              <Typography variant='body1' sx={{
                marginBottom: '10px'
              }}>{elem.body}</Typography>
            </Box>
        </Grid>
        <Grid item xs={12} md={12}>
            <Typography variant="h5" sx={{
              textAlign: 'center'
            }}>
                <Link to={elem.url}>ReadMore</Link>
            </Typography>
        </Grid>
      </Grid>
    )
  })
  useEffect(() => {
    dispatch(getNews());
  }, []);


  return (
    <Grid className={classes.root}>
      <Grid>
        <Typography variant="h2" sx={{
          textAlign: 'center',
          marginBottom: '20px'
        }}>Новости</Typography>
      </Grid>
      <Grid>{renderNews}</Grid>
    </Grid>
  )
}
export default NewsComponent;