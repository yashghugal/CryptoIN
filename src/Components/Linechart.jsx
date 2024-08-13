import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'

const Linechart = ({ historicalData }) => {
  const [ndata, nsetData] = useState([["Date", "Prices"]])
  useEffect(() => {
    let datacopy = [["Date", "Prices"]]
    if (historicalData.prices) {
      historicalData.prices.map((item) => {
        datacopy.push([`${new Date(item[0]).toLocaleDateString().slice(0, -5)}`, item[1]])
      })
      nsetData(datacopy);
    }
  }, [historicalData])
  return (
    <Chart chartType='LineChart' data={ndata} height="100%" legendToggle />

  )
}

export default Linechart