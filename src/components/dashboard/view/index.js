import React from "react";
import { Grid, Typography, Divider } from "@material-ui/core";

const View = props => {
  return (
    <Grid container>
      {props.tileData.map(tile => (
        <Grid className="box" item md={3} lg={3} sm={6} xs={6}>
          <div className="boxTitle">
            <img src={tile.image} alt={tile.name} />
            <div className="boxTitleOverLay">
              <Typography component="div" variant="subtitle1">
                {tile.name}
              </Typography>
              <Typography component="div" variant="body2" color="secondary">
                <span>Id: {tile.id} - created </span>
              </Typography>
            </div>
          </div>
          <div className="pad10">
            <Grid container>
              <Grid item md={6} lg={6} sm={6} xs={6}>
                <Typography color="secondary">STATUS</Typography>
              </Grid>
              <Grid item md={6} lg={6} sm={6} xs={6}>
                <Typography color="primary">{tile.status}</Typography>
              </Grid>
              <Divider />
              <Grid item md={6} lg={6} sm={6} xs={6}>
                <Typography color="secondary">SPECIES</Typography>
              </Grid>
              <Grid item md={6} lg={6} sm={6} xs={6}>
                <Typography color="primary">{tile.species}</Typography>
              </Grid>
              <Divider />
              <Grid item md={6} lg={6} sm={6} xs={6}>
                <Typography color="secondary">GENDER</Typography>
              </Grid>
              <Grid item md={6} lg={6} sm={6} xs={6}>
                <Typography color="primary">{tile.gender}</Typography>
              </Grid>
              <Divider />
              <Grid item md={6} lg={6} sm={6} xs={6}>
                <Typography color="secondary">ORIGIN</Typography>
              </Grid>
              <Grid item md={6} lg={6} sm={6} xs={6}>
                <Typography color="primary" className="wordbreak">
                  {tile.origin.name}
                </Typography>
              </Grid>
              <Divider />
              <Grid item md={6} lg={6} sm={6} xs={6}>
                <Typography color="secondary">LAST LOCATION</Typography>
              </Grid>
              <Grid item md={6} lg={6} sm={6} xs={6}>
                <Typography color="primary" className="wordbreak">
                  {tile.location.name}
                </Typography>
              </Grid>
            </Grid>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default View;
