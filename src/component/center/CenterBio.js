import React from 'react';
import { makeStyles, Grid, Typography, Slide, Hidden } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Niko from '../Photo/Niko.jpg';
import { BioLinks } from '../ProjectLinks';

const useStyles = makeStyles((theme) => ({
  lines: {
    lineHeight: 3,
    textAlign: 'left',
    paddingLeft: '10px',
    fontSize: '15px',
  },
  tech: {
    lineHeight: 2,
    textAlign: 'left',
    paddingLeft: '10px',
    fontSize: '15px',
  },
  divider: {
    borderLeft: '5px solid #482880',
  },
  jump: {
    filter: 'drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5))',
    fontWeight: 'bold',
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
  nolink: {
    color: '#482880',
    textDecoration: 'none',
    filter: 'drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5))',
  },
  large: {
    marginTop: '20px',
    marginRight: '20px',
    marginLeft: theme.spacing(15),
    width: theme.spacing(42),
    height: theme.spacing(47),
    [theme.breakpoints.down('lg')]: {
      marginLeft: theme.spacing(10),
      width: theme.spacing(42),
      height: theme.spacing(47),
    },
    boxShadow: theme.shadows[15],
    marginBottom: '10px',
    borderRadius: '15px',
  },
}));

export default function Bio() {
  const classes = useStyles();

  const Bio = useSelector((state) => state.Bio);

  return (
    <Slide direction='right' in={Bio} mountOnEnter unmountOnExit>
      <Grid container direction='row' alignItems='center'>
        <Hidden mdDown>
          <Grid item>
            <img alt='Louis and Niko' src={Niko} className={classes.large} />
          </Grid>
        </Hidden>
        <Grid item xs={10} md={8} lg={6}>
          <Grid container direction='column' className={classes.divider}>
            <Grid item>
              <p className={classes.lines}>
                I am a passionate Full Stack Web Developer from from Tampa,
                Florida currently living in Seattle, Washington. I have always
                had a huge fascination in computers with an emphasis on gaming
                which has evolved over time into a love of coding. Initially, it
                was something I lightly dabbled in during my spare time which
                then turned more serious as I recently graduated from the
                University of Washington Full Stack Coding Bootcamp in May of
                2020.
              </p>
            </Grid>
            <Grid item className={classes.tech}>
              <Typography variant='h4' className={classes.jump}>
                Some of the technologies I use:
              </Typography>
              {BioLinks.map(({ tech, link }) => (
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
              ))}{' '}
              <span className={classes.nolink}>Database Theory and more!</span>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Slide>
  );
}
