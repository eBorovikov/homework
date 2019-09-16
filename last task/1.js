class Transaction{
    constructor(){
        this.store = new Map();
        this.logs = [];
        this.status = undefined;
    }
    dispatch = function(scenario) {
        const scenarioArray = [...scenario];
        let logObj = {};
        try{
            for(let i = 0; i < scenarioArray.length; i++){
                logObj = {};

                this.store.set(scenarioArray[i].index, scenarioArray[i]);

                logObj.index = scenarioArray[i].index;
                logObj.meta = scenarioArray[i].meta;
                let callResult = scenarioArray[i].call(this.store, this.logs);//logObj.stepResult 
                if(callResult.PromiseStatus === 'rejected' ){
                    throw allResult.PromiseValue;
                }
                logObj.stepResult = callResult.PromiseValue;
                logObj.error = null;
                this.logs.push(logObj);

        }

        }catch(err){
            logObj.error = err.name;
            this.logs.push(logObj);
            this.rollback();
        }

    }
    rollback = function() {
        
    }
}

const scenario = [
    {
        index: 1,
        meta: {
            title: 'Collect backup information.',
            description: 'Collects pieces of data that required for restore scenario',
        },
        async call(store, logs) {
            // Логика выполнения шага
            console.log('first call');
            return 213;
        },
        async restore(store, logs) {
            // Логика отката шага
            console.log('first restore');
        },
    },
    {
        index: 2,
        meta: {
            title: 'Withdraw funds from source account.', 
            description:'Takes off funds from source account and freezes it until entire scenario ends successfully or unsuccessfully.',
        },
        async call(store, logs) {
            // Логика выполнения шага
            throw new Error('second call ERROR!!!');
            console.log('second call');
        },
        async restore(store, logs) {
            // Логика отката шага
            console.log('second restore');
        },
    },
];

const transaction = new Transaction();

transaction.dispatch(scenario);

const { store, logs, status } = transaction;
console.log(`logs: ${logs}`);
