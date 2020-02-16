<template>
<div class="bg-whitesmoke">
  <mdb-card class="m-3">
        <mdb-card-header color="indigo lighten-1">Data Table</mdb-card-header>
        <!--Sales Table-->
        <DataTable :salesData='salesData' />
     </mdb-card>
</div>
</template>

<script>
  import DataTable from '../components/DataTable'
   import { mdbCard, mdbCardHeader} from 'mdbvue';

  export default {
    name: 'DataEditor',
    components: {
      DataTable,
      mdbCard,
      mdbCardHeader,
    },
    data: () => ({
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
    })
  }

  
</script>
