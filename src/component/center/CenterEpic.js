import React from 'react';
import { Typography, Grid, makeStyles, Slide, Hidden } from '@material-ui/core';
import { useSelector } from 'react-redux';
import LaunchIcon from '@material-ui/icons/Launch';
import EpicPT from '../Photo/epic-pt.jpg';
import { EpicLinks } from '../ProjectLinks';

const useStyles = makeStyles((theme) => ({
  lines: {
    lineHeight: 3,
    textAlign: 'left',
    marginLeft: '10px',
    fontSize: '15px',
  },
  divider: {
    borderLeft: '5px solid #482880',
  },
  tech: {
    lineHeight: 2,
    textAlign: 'left',
    marginLeft: '10px',
    fontSize: '15px',
  },
  jump: {
    filter: 'drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.35))',
    fontWeight: 'bold',
    marginLeft: '10px',
  },
  large: {
    marginTop: '20px',
    marginRight: '20px',
    marginLeft: theme.spacing(10),
    width: theme.spacing(75),
    height: 'auto',
    [theme.breakpoints.down('lg')]: {
      marginLeft: theme.spacing(5),
      width: theme.spacing(42),
      height: theme.spacing(47),
    },
    boxShadow: theme.shadows[15],
    marginBottom: '10px',
    borderRadius: '15px',
  },
  link: {
    color: '#482880',
    textDecoration: 'none',
    filter: 'drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5))',
    '&:hover': {
      color: 'gray',
      textDecoration: 'underline',
    },
  },
  center: {
    color: '#482880',
    marginLeft: '25px',
    filter: 'drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.25))',
    fontSize: 50,
    '&:hover': {
      color: 'gray',
    },
  },
}));

export default function Epic() {
  const classes = useStyles();

  const Epic = useSelector((state) => state.Epic);

  return (
    <Slide direction='right' in={Epic} mountOnEnter unmountOnExit>
      <Grid container direction='row' alignItems='center'>
        <Hidden mdDown>
          <Grid item>
            <a
              rel='noopener noreferrer'
              target='_blank'
              href='http://epic-pt.com/'
            >
              <img
                src={EpicPT}
                alt='RocketList home'
                className={classes.large}
              />
            </a>
          </Grid>
        </Hidden>
        <Grid item xs={9} md={8} lg={5}>
          <Grid container direction='column' className={classes.divider}>
            <Grid item>
              <Typography className={classes.jump} variant='h3'>
                EPIC Physical Therapy{' '}
                <a
                  href='http://epic-pt.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <LaunchIcon className={classes.center} />
                </a>
              </Typography>
              <p className={classes.lines}>
                Epic-PT is an application built for the EPIC Physical Therapy company. The application is built on React with Material-UI as the css framework. I worked on implementing the Contact and Testimonial forms that are tied to AWS-SES as well as stored in MongoAtlas. I worked with other members to deploy the site using Netlify and Cloudflare.
              </p>
            </Grid>
            <Grid item>
              <Typography variant='h4' className={classes.jump}>
                Built Using:
              </Typography>
              <p className={classes.tech}>
                {EpicLinks.map(({ tech, link, ending }) => (
                  <span>
                    <a
                      key={tech}
                      rel='noopener noreferrer'
                      className={classes.link}
                      target='_blank'
                      href={link}
                    >
                      {tech}
                    </a>
                    {ending}
                  </span>
                ))}
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Slide>
  );
}
