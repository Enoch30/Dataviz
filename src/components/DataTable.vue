<template>
  <v-data-table
    :headers="headers"
    :items="data"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Edit Revenues</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="indigo" name='add-new-btn' dark class="mb-2" v-on="on">Add New</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ 'formTitle' }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.year" label="Year" name='year'></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.sale" label="Sale" name='sale'></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.transactions" label="Transactions" name='transactions'></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn id='save-btn' color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.action="{ item }">
      <v-icon
       small
        class="m-2"
        @click="editItem(item)"
        id=edit
      >{{ icons.mdiPencil }}
      </v-icon>

      <v-icon
       small
        class="m-2"
        id=delete
        @click="deleteItem(item)"
      >{{ icons.mdiDelete }}
      </v-icon>

    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>
  
</template>

<script>
  import {
      mdiAccount,
      mdiPencil,
      mdiShareVariant,
      mdiDelete,
    } from '@mdi/js';

  export default {
    props: ['salesData'],
    data: () => ({
      dialog: false,
      headers: [
        {
          text: 'Year',
          align: 'left',
          sortable: false,
          value: 'year',
        },
        { text: 'Sale', value: 'sale' },
        { text: 'Transactions', value: 'transactions' },
        { text: 'Actions', value: 'action', sortable: false },
      ],
      data: [],
      //Stores information on new table entries
      editedIndex: -1,
      editedItem: {
        year: '',
        sale: '',
        transactions: '',
      },
      //initial values before user updates fields
      defaultItem: {
        year: '',
        sale: '',
        transactions: '',
      },
      icons: {
        mdiAccount,
        mdiPencil,
        mdiShareVariant,
        mdiDelete,
      },
    }),

    computed: {
      formTitle () {
        //Reflects form name with currnt action
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      //extract relevant data from the received object
      initialize () {
        var i = 0
        for ( i = 0; i < this.salesData.labels.length; i++){
          this.data.push({
            year: this.salesData.labels[i],
            sale: this.salesData.datasets[0].data[i],
            transactions: this.salesData.transactions[i]
          })
        }
      },

      editItem (item) {
        this.editedIndex = this.data.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.data.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.data.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.data[this.editedIndex], this.editedItem)
        } else {
          this.data.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>