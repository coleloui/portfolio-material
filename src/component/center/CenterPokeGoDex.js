import React from 'react';
import { Typography, Grid, makeStyles, Slide, Hidden } from '@material-ui/core';
import { useSelector } from 'react-redux';
import PokeGoDexPic from '../Photo/pogo.png';
import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';
import { PokeLinks } from '../ProjectLinks';

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
    [theme.breakpoints.down('md')]: {
      marginLeft: theme.spacing(1),
      width: theme.spacing(32),
      height: theme.spacing(37),
    },
    [theme.breakpoints.down('xl')]: {
      marginLeft: theme.spacing(10),
      width: theme.spacing(75),
      height: 'auto',
    },
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

export default function PokeGoDex() {
  const classes = useStyles();

  const PokeGoDex = useSelector((state) => state.PokeGoDex);

  return (
    <Slide direction='right' in={PokeGoDex} mountOnEnter unmountOnExit>
      <Grid container direction='row' alignItems='center'>
        <Hidden mdDown>
          <Grid item>
            <a
              href='https://dionleung14.github.io/Pokemon-GO-Virtual-Dex/'
              target='_blank'
              rel='noreferrer'
            >
              <img
                src={PokeGoDexPic}
                alt='pokegodex home'
                className={classes.large}
              />
            </a>
          </Grid>
        </Hidden>
        <Grid item xs={9} md={8} lg={5}>
          <Grid container direction='column' className={classes.divider}>
            <Grid item>
              <Typography className={classes.jump} variant='h3'>
                Pok&eacute;GoDex{' '}
                <a
                  href='https://github.com/dionleung14/Pokemon-GO-Virtual-Dex'
                  target='_blank'
                  rel='noreferrer'
                >
                  <GitHubIcon className={classes.center} />
                </a>
                <a
                  href='https://dionleung14.github.io/Pokemon-GO-Virtual-Dex/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <LaunchIcon className={classes.center} />
                </a>
              </Typography>
              <p className={classes.lines}>
                As avid Pok&eacute;mon Go players, this application was built to
                provide utility to users to pull from two different API's to
                compare Pok&eacute;mon and check their catch availability. You
                can filter through a list of all Pok&eacute;mon and grab
                specific information about them. The stats that you receive are
                the name, type, generation, and the Pokédex entry. The filtered
                list allows you to see which Pok&eacute;mon are available in the
                mobile game Pok&eacute;mon GO.
              </p>
            </Grid>
            <Grid item>
              <Typography variant='h4' className={classes.jump}>
                Built Using:
              </Typography>
              <p className={classes.tech}>
                {PokeLinks.map(({ tech, link, ending }) => (
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
