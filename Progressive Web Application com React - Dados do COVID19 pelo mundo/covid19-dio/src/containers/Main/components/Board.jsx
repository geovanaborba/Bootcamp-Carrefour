import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Grid, Skeleton } from '../../../components'
import Card from './Card'

function Board({ data }) {
  const { cases, todayDeaths, recovered, deaths, todayCases } = data

  const getValue = (value) => value ? value : <Skeleton variant="text" width={182} height={60} />

  return (
    <center>
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Card value={getValue(cases)} label="Total de casos" color="#5d78ff" />
      </Grid>
      <Grid item xs={12} md={6}>
        <Card value={getValue(recovered)} label="Total de recuperados" color="#67C887" />
      </Grid>
      <Grid item xs={12} md={4}>
        <Card value={getValue(todayCases)} label="Casos hoje" color="#E95078" />
      </Grid>
      <Grid item xs={12} md={4}>
        <Card value={getValue(todayDeaths)} label="Óbitos hoje" color="#F7B829" />
      </Grid>
      <Grid item xs={12} md={4}>
        <Card value={getValue(deaths)} label="Total de mortes" color="#000" />
      </Grid>

    </Grid>
    </center>
  )
}

export default memo(Board)