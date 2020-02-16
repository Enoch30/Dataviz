import { shallowMount, createLocalVue } from '@vue/test-utils'
import Dashboard from "@/components/Dashboard.vue"
import DataTable from '@/components/DataTable.vue'
import vuetify from 'vuetify'

let testData = {
    labels: ["2015", "2016"],
    transactions: [5000, 3200],
    datasets: [
    {
        label: "Sales per year",
        data: [300, 50],
        backgroundColor: [
        "#F7464A",
        "#46BFBD",
        ],
        hoverBackgroundColor: [
        "#FF5A5E",
        "#616774"
        ],
    }
  ]
}

//Basic tests, see e2e tests
describe('Dashboard.vue', () => {
    let wrapper;
    let title = 'Dataviz'
    beforeEach(()=>{
        const localVue = createLocalVue()
        localVue.use(vuetify)
        wrapper = shallowMount(Dashboard, {
          localVue,
          propsData: { 
            salesData: testData,
          }
        });
      })

    it('renders a vue instance', () => {
        expect(shallowMount(Dashboard).isVueInstance()).toBe(true);
    });

    it('can mount table', () => {
        const wrapper = shallowMount(Dashboard, {
            propsData: { 
                salesData: testData
            }
          })
        expect(wrapper.find(DataTable).exists()).toBe(true)
    })
})



