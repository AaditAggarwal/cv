class User{


    #down_payment;
    #house_value;
    #ltv;
    #pmi = 0;
    #income;
    #mortgage;
    #monthly_debt = [];
    #dti;
    #fedti
    #non_eligible = [];
    #data = [];

    constructor(cred_rating){
        this.cred_rating = cred_rating;
    }

    setCredRating(creds){
        this.cred_rating = creds;
    }
    getCredRating(){
        return this.cred_rating;
    }
    isCredGood(){
        if(this.cred_rating < 640){
            this.#non_eligible.push("cred");
            return false;
        }
        return true;
    }

    setDownPayment(dw_pay){
        this.#down_payment = dw_pay;
    }
    getDownPayment(){
        return this.#down_payment;
    }

    setHouseValue(value){
        this.#house_value = value;
    }
    getHouseValue(){
        return this.#house_value;
    }

    calculateLTV(){
        this.#ltv = ((this.#house_value - this.#down_payment) / this.#house_value) * 100;
        if (this.#ltv >= 80){
            this.#non_eligible.push("ltv");
            return false;
        }
        return true;
    }
    getLTV(){
        return this.#ltv;
    }

    getPMI(){
        this.#pmi = (0.01 * this.#house_value) / 12.0;
        return this.#pmi;
    }

    setIncome(income){
        this.#income = income;
    }
    getIncome(){
        return this.#income;
    }
    getDebtAmount(debt){
        this.#monthly_debt.push(debt);
    }

    setMortgage(mortgage){
        this.#mortgage = mortgage;
        this.#monthly_debt.push(mortgage);
    }
    getMortgage(){
        return this.#mortgage;
    }

    getDebtSum(){
        let sum = 0;
        for (let i = 0; i < this.#monthly_debt.length; i++){
            sum += this.#monthly_debt[i];
        }
        return sum;
    }

    calculateDTI(){
        this.#dti = (this.getDebtSum() / this.#income) * 100;
        if (this.#dti <= 36){
            return true;
        }
            this.#non_eligible.push("dti");
            return false;
    }
    getDTI(){
        return this.#dti;
    }

    calculateFEDTI(){
        this.#fedti = (this.#mortgage / this.#income) * 100;
        if (this.#fedti <= 28){
            this.#non_eligible.push("fedti");
            return true;
        }
        return false;
    }
    getFEDTI(){
        return this.#fedti;
    }

    credChecker(){
        if (this.#non_eligible.includes("cred")){
            return false;
        }
        return true;
    }

    ltvChecker(){
        if(this.#non_eligible.includes("ltv")){
            return false;
        }
        return true;
    }
    
    dtiChecker(){
        if(this.#non_eligible.includes("dti")){
            return false;
        }
        return true;
    }

    fedtiChecker(){
        if(this.#non_eligible.includes("fedti")){
            return false;
        }
        return true;
    }

    isApproved(){
        return this.#non_eligible.length == 0 ? 'Y' : 'N';
    }

    /*getData(){

        for (let j = 0; j < 5; j++){

        }
    }
    */
}

/*
anychart.onDocumentReady(function() {
  
    // create the chart
    var chart = anychart.pie();
  
    // set the chart title
    chart.title("Population by Race for the United States: 2010 Census");
  
    // add the data
    chart.data(data);
  
    // display the chart in the container
    chart.container('container');
    chart.draw();
  
  });
  */