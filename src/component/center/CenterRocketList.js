import React from 'react';
import { Typography, Grid, makeStyles, Slide, Hidden } from '@material-ui/core';
import { useSelector } from 'react-redux';
import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';
import RocketListPic from '../Photo/RocketList.png';
import { RocketLinks } from '../ProjectLinks';

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

export default function RocketList() {
  const classes = useStyles();

  const RocketList = useSelector((state) => state.RocketList);

  return (
    <Slide direction='right' in={RocketList} mountOnEnter unmountOnExit>
      <Grid container direction='row' alignItems='center'>
        <Hidden mdDown>
          <Grid item>
            <a
              rel='noopener noreferrer'
              target='_blank'
              href='http://rocketlist.herokuapp.com/'
            >
              <img
                src={RocketListPic}
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
                RocketList{' '}
                <a
                  href='https://github.com/meganjacobs97/RocketList'
                  target='_blank'
                  rel='noreferrer'
                >
                  <GitHubIcon className={classes.center} />
                </a>
                <a
                  href='http://rocketlist.herokuapp.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <LaunchIcon className={classes.center} />
                </a>
              </Typography>
              <p className={classes.lines}>
                This application is a React website built with inspiration from
                Craigslist, Yahoo Answers, and Reddit. It allows for different
                topics and for people to make a post where others can make
                comments. We also added a feature that allows users to join chat
                rooms within a specific post where they can discuss the topic at
                hand in more depth.
              </p>
            </Grid>
            <Grid item>
              <Typography variant='h4' className={classes.jump}>
                Built Using:
              </Typography>
              <p className={classes.tech}>
                {RocketLinks.map(({ tech, link }) => (
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
                    ,{' '}
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
