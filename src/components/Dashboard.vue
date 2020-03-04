<template>
  <div>
    <mdb-container class='max-width'>
      
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
        <!-- <mdb-col md="6" >
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
        </mdb-col> -->

        <!-- <mdb-col md="6">
          <template>
            <mdb-card class="chart">
              <mdb-card-header color="indigo lighten-1">Bar chart</mdb-card-header>
              <mdb-card-body>
              <mdb-card-title>sdgsg</mdb-card-title>
              <div class="d-flex justify-content-center">
                
            </div>
            </mdb-card-body>
            </mdb-card>
          </template>
        </mdb-col>      -->
      </mdb-row>

      <template>
       
        <mdb-card class="card">
          <mdb-card-body>
            <template>
              <mdb-container>
                <mdb-row>
                  <mdb-col col='2'>
                    <!-- <mdb-avatar tag="img" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" circle class="z-depth-1" alt="Sample avatar"/> -->
                     <mdb-card-image class="cat" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%286%29.jpg" alt="Card image cap"></mdb-card-image>
                  </mdb-col>
                  <mdb-col col='10'>
                    <mdb-card-title class="title">Basic card</mdb-card-title>
                    <mdb-card-text class="subtitle">Short yeah yeah</mdb-card-text>
                  </mdb-col>
                </mdb-row>
              </mdb-container>
            </template>
            <mdb-row>
              
            </mdb-row>
            <mdb-row>
              
            </mdb-row>
            
            <!-- <mdb-btn color="primary">Button</mdb-btn> -->
          </mdb-card-body>
          <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%286%29.jpg" alt="Card image cap"></mdb-card-image>
         <template>
          <div class="text-center">
            <v-rating v-model="value"></v-rating>
          </div>
        </template>
        </mdb-card>
       
      </template>
    </mdb-container>
     <!-- <mdb-card class="m-3">
        <mdb-card-header color="indigo lighten-1">Data Table</mdb-card-header>
        Sales Table-->
        <!-- <DataTable :salesData='salesData' /> 
     </mdb-card> -->
  </div>
</template>

<script>
import { mdbContainer, mdbCardImage, mdbCol } from "mdbvue";
// import DataTable from '../components/DataTable';
import {mdbRow} from 'mdbvue';
 import { mdbCard, mdbCardBody, mdbCardTitle } from 'mdbvue';
//  import { GChart } from 'vue-google-charts';

  export default {
    name: "Dashboard",
    components: {
      // DataTable,
      // mdbBarChart,
      // mdbPieChart,
      // mdbIcon,
      // mdbRating,
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbCard,
      mdbCardBody,
      // mdbAvatar,
      // mdbCardHeader,
      mdbCardTitle,
      mdbCardImage,
      // GChart
    },
    data() {
      return {
        value: 2,
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
