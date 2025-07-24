console.log('JS loaded!!!');
const app = Vue.createApp({
    // Define the data for the app
    data() {
        return {
            studentName: "Nikhil Thakur",
            gasLevelValue:55,
            gasLevels: [
               { id: 'danger-low', color: 'danger', name: 'Danger - Low Gas Levels!',min: 0, max: 10 },
                { id: 'warn-low', color: 'warning', name: 'Warning - Low Gas Levels',min: 11, max: 31 },
                { id: 'safe', color: 'safe', name: 'Safe Gas Levels', min: 32, max: 70 },
                { id: 'warn-high', color: 'warning', name: 'Warning - High Gas Levels',min: 71, max: 91 },
                { id: 'danger-high', color: 'danger', name: 'Danger - High Gas Levels!',min: 92, max: 100 }


                
            ]



        };
    },
    // Define the methods for the app
    methods: {
        activeGasLevel(gasLevel) {
            // The logic goes here for if the gas level is within the level parameters return boolean
        }
    }
});

// Mount the Vue app to the DOM
app.mount('#app');
