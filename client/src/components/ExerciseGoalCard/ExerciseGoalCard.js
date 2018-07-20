import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import ChartsBar from './../ChartsBar';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: 10
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
    // width: 200
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  expansionPanelStyle: {
    margin: 11
  },
  rootList: {
    width: '100%',
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    // position: 'relative',
    // overflow: 'auto',
    maxHeight: 300
  },
  listSection: {
    backgroundColor: 'inherit'
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0
  },
  header: {
    marginBottom: 28
  },
  formRoot: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  },
  submit: {
    textAlign: 'center'
  },
  progressColor: {
    backgroundColor: '#ea6192b5',
    marginLeft: '19%',
    marginRight: '19%',
    marginBottom: '28px',
    marginTop: '19px',
    padding: '4px'
  }
});

class ExerciseGoalCard extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper className={classes.root} elevation={1}>
              <Typography
                className={classes.header}
                variant="display1"
                align="center"
              >
                Exercise Tracker
              </Typography>

              <Paper className={classes.progressColor}>
                <Typography align="center">
                  Current Progress: {this.props.history} ??
                </Typography>
              </Paper>

              <Grid container spacing={16}>
                <Grid item xs={12}>
                  <form
                    align="center"
                    className={classes.formRoot}
                    autoComplete="off"
                  >
                    <FormControl fullWidth className={classes.formControl}>
                      <InputLabel htmlFor="workout-simple">Workouts</InputLabel>
                      <Select
                        value={this.props.activity}
                        onChange={this.props.handleChange}
                        inputProps={{ name: 'activity', id: 'workout-simple' }}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={'walking'}>Walking</MenuItem>
                        <MenuItem value={'jogging'}>Jogging</MenuItem>
                        <MenuItem value={'running'}>Running</MenuItem>
                        <MenuItem value={'swimming'}>Swimming</MenuItem>
                        <MenuItem value={'cycling'}>Cycling</MenuItem>
                        <MenuItem value={'yoga'}>Yoga</MenuItem>
                        <MenuItem value={'hiit'}>HIIT</MenuItem>
                        <MenuItem value={'strengthTraining'}>
                          Strength Training
                        </MenuItem>
                        <MenuItem value={'stairStepper'}>
                          Stair Stepper
                        </MenuItem>
                        <MenuItem value={'boxing'}>Boxing</MenuItem>
                        <MenuItem value={'other'}>Other</MenuItem>
                      </Select>
                      <FormHelperText>
                        Select the workout and duration
                      </FormHelperText>
                    </FormControl>
                  </form>
                </Grid>
                <Grid item xs={6}>
                  <form
                    className={classes.container}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="addHours"
                      label="Hours"
                      value={this.props.hours}
                      onChange={this.props.handleChange}
                      type="number"
                      className={classes.textField}
                      margin="normal"
                      name="hours"
                      fullWidth
                    />
                  </form>
                </Grid>
                <Grid item xs={6}>
                  <form
                    className={classes.container}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="addMinutes"
                      label="Minutes"
                      value={this.props.minutes}
                      onChange={this.props.handleChange}
                      type="number"
                      className={classes.textField}
                      margin="normal"
                      name="minutes"
                      fullWidth
                    />
                  </form>
                </Grid>
                <Grid className={classes.submit} item xs={12}>
                  <Button onClick={this.props.handleSubmit} variant="contained">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper className={classes.root} elevation={1}>
              <Typography variant="display1" className={classes.heading}>
                Today
              </Typography>

              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Exercises</TableCell>
                    <TableCell>Duration</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Walking</TableCell>
                    <TableCell>30 Minutes</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Yoga (Points)</TableCell>
                    <TableCell>1 Hour</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Running</TableCell>
                    <TableCell>24 Minutes</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Strength Training</TableCell>
                    <TableCell>1 Hour</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper className={classes.root} elevation={1}>
              <Typography className={classes.heading}>History</Typography>
              <ChartsBar />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

ExerciseGoalCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ExerciseGoalCard);
