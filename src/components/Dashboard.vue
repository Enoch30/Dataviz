<template>
  <div>
    <mdb-container class='max-width hidden-sm-and-down'>
      
      <!-- 
        Removed due to Google Maps API key
        <GChart
        :settings="{ packages: ['corechart', 'table', 'map'] }"
        type="Map"
        :data="[
          salesData.labels,
          salesData.datasets.data
        ]
        "
        :options="chartOptions"
      /> -->
      <mdb-row>
        <mdb-col md="6" >
          <template>
            <mdb-card class="chart">
              <mdb-card-header color="indigo lighten-1">Pie chart</mdb-card-header>
              <mdb-card-body>
              <mdb-card-title></mdb-card-title>
              <div class="d-flex justify-content-center">
                  <mdb-pie-chart
                datalabels
                :data="salesData"
                :options="pieChartOptions"
                :width="470"
              />
            </div>
            </mdb-card-body>
            </mdb-card>
          </template>
        </mdb-col>

        <mdb-col md="6">
          <template>
            <mdb-card class="chart">
              <mdb-card-header color="indigo lighten-1">Bar chart</mdb-card-header>
              <mdb-card-body>
              <mdb-card-title></mdb-card-title>
              <div class="d-flex justify-content-center">
                <mdb-bar-chart 
                  :data="salesData"
                  :options="barChartOptions"
                  :width="470"
                  >
                </mdb-bar-chart>
            </div>
            </mdb-card-body>
            </mdb-card>
          </template>
        </mdb-col>     
      </mdb-row>
    </mdb-container>
     <mdb-card class="m-3">
        <mdb-card-header color="indigo lighten-1">Data Table</mdb-card-header>
        <!--Sales Table-->
        <DataTable :salesData='salesData' />
     </mdb-card>
  </div>
</template>

<script>
import { mdbPieChart, mdbContainer, mdbBarChart } from "mdbvue";
import DataTable from '../components/DataTable';
import {mdbRow, mdbCol} from 'mdbvue';
 import { mdbCard, mdbCardBody, mdbCardHeader, mdbCardTitle } from 'mdbvue';
//  import { GChart } from 'vue-google-charts';

  export default {
    name: "Dashboard",
    components: {
      DataTable,
      mdbBarChart,
      mdbPieChart,
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbCard,
      mdbCardBody,
      mdbCardHeader,
      mdbCardTitle,
      // GChart
    },
    data() {
      return {
        //Primary Data
        salesData: {
          labels: ["2015", "2016", "2017", "2018", "2019"],
          transactions: [5000, 3200, 1238, 2834, 2672],
          datasets: [
            {
              label: "Sales per year",
              data: [300, 50, 100, 40, 120],
              backgroundColor: [
                "#F7464A",
                "#46BFBD",
                "#FDB45C",
                "#949FB1",
                "#4D5360"
              ],
              hoverBackgroundColor: [
                "#FF5A5E",
                "#5AD3D1",
                "#FFC870",
                "#A8B3C5",
                "#616774"
              ],
              borderWidth: 1
            }
          ]
        },

        //Pie chart settings
        pieChartOptions: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            datalabels: {
              color: "white",
              align: "center",
              font: {
                size: 16
              },
              //formates the table values
              formatter: value => {
                const [dataset] = this.salesData.datasets;
                const setValue = dataset.data.reduce((a, b) => a + b);
                return `${Math.round((value / setValue) * 100)}%`;
              }
            }
          }
        },
      
      //Bar chart settings
      barChartOptions: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            xAxes: [
              {
                barPercentage: 1,
                gridLines: {
                  display: true,
                  color: "rgba(0, 0, 0, 0.1)"
                }
              }
            ],
            yAxes: [
              {
                gridLines: {
                  display: true,
                  color: "rgba(0, 0, 0, 0.1)"
                }
              }
            ]
          }
        }
      };
    }
  }

    
</script>
<style scoped>
h3 {
  font-weight: normal;
  padding-top: 20px;
  padding-bottom: 30px;
}
p {
  color: #969696;
  margin-bottom: 0;
  font-size: 14px;
}
</style>
