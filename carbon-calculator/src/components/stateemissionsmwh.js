import {useState} from 'react'
function StateList(props){
    
    function stateData(name,so2mwh,nomwh, co2mwh, billperkwh){
        this.name = name
        this.so2mwh = so2mwh
        this.nomwh = nomwh
        this.co2mwh = co2mwh
        this.billperkwh = billperkwh
    }
    let alabama = new stateData('Alabama',0.4, 0.3, 717,.0984)
    let alaska = new stateData('Alaska',0.8, 6.9, 1212, .1982)
    let arizona = new stateData('Arizona',0.2,0.5, 719, .1044)
    let arkansas = new stateData('Arkansas',1.2,0.6,945,.0832)
    let california = new stateData('California',0.0,0.8,495, .18)
    let colorado = new stateData('Colorado',.3,.7,1182,.1027)
    let Connecticut = new stateData('Connecticut',0, .3, 544, .1913)
    let Delaware = new stateData('Delaware',.1,.6,1127, .1024)
    let dc = new stateData('DC',0,5.7, 1177, .1190)
    let Florida = new stateData('Florida',.3,.4,848, .1006)
    let Georgia = new stateData('Georgia',.8,.6,730,.0993)
    let Hawaii = new stateData('Hawaii',3.8,3.6,1555, .2755)
    let Idaho = new stateData('Idaho',.4,.5,276, .0799)
    let Illinois = new stateData('Illinois',.7,.3, 603, .0975)
    let Indiana = new stateData('Indiana',.8, 1.4, 1584, .0992)
    let Iowa = new stateData('Iowa',.6,.6,780, .0897)
    let Kansas = new stateData('Kansas',.1,.5,821, .1038)
    let Kentucky = new stateData('Kentucky',1.3,1,1723, .0858)
    let Louisiana = new stateData('Louisiana',.5,1.2,970, .0751)
    let Maine = new stateData('Maine',1.3,1.1,401, .1354)
    let Maryland = new stateData('Maryland',.2,.3,624, .1115)
    let Massachusetts = new stateData('Massachusetts',.2,.9,961,.1819)
    let Michigan = new stateData('Michigan',.8,1.2,1097, .1221)
    let Minnesota = new stateData('',.5,.7,816, .1057)
    let Mississippi = new stateData('Mississippi',.4,.5,884, .0913)
    let Missouri = new stateData('Missouri',2.5,1.5,1641, .0964)
    let Montana = new stateData('Montana',.6,.9, 981, .0913)
    let Nebraska = new stateData('Nebraska',2.2, 1.1, 1251, .0897)
    let Nevada = new stateData('Nevada',.1,.5,734, .0833)
    let NewHampshire = new stateData('New Hampshire',0, .2, 232, .1663)
    let NewJersey = new stateData('New Jersey',.1, .3, 537, .1363)
    let NewMexico = new stateData('New Mexico',.2,.8,1204, .0933)
    let NewYork = new stateData('New York',.1,.4, 455, .1487)
    let NorthCarolina = new stateData(' North Carolina',.5,.7,680,.0943)
    let NorthDakota = new stateData('North Dakota',1.7, 1.5,1430,.0853)
    let Ohio = new stateData('Ohio',1.5, .9, 1222, .0944)
    let Oklahoma= new stateData('Oklahoma',.2,.5,690, .0763)
    let Oregon= new stateData('Oregon',.2,.5,324, .0882)
    let Pennsylvania= new stateData('Pennsylvania',.3,.4,691,.0970)
    let RhodeIsland= new stateData('Rhode Island',0,.8,830,.1854)
    let SouthCarolina = new stateData('South Carolina',.4,.3,515,.099)
    let SouthDakota= new stateData('South Dakota',.1,.2,367,.1006)
    let Tennessee= new stateData('Tennessee',.5,.3,622,.0952)
    let Texas= new stateData('Texas',.6,.7,941,.0836)
    let Utah= new stateData('Utah',.4,1.7,1560,.0827)
    let Vermont= new stateData('Vermont',0,1.1,8,.1633)
    let Virginia= new stateData('Virginia',.2,.4,679,.0916)
    let Washington= new stateData('Washington',.2,.2,227,.0833)
    let WestVirginia= new stateData('West Virginia',1.2,1.1,1923,.0875)
    let Wisconsin= new stateData('Wisconsin',.5,.8,1188,.1082)
    let Wyoming= new stateData('Wyoming',1.3,1.6,1967,.0827)
    let usStates = [alabama,alaska,arizona,arkansas,california,colorado,Connecticut,Delaware,dc,Florida,Georgia,Hawaii,Idaho,Illinois,Indiana,Iowa,Kansas,Kentucky,Louisiana,Maine,Maryland,Massachusetts,Michigan,Minnesota,Mississippi,Missouri,Montana,Nebraska,Nevada,NewHampshire,NewJersey,NewMexico,NewYork,NorthCarolina,NorthDakota,Ohio,Oklahoma,Oregon,Pennsylvania,RhodeIsland,SouthCarolina ,SouthDakota,Tennessee,Texas,Utah,Vermont,Virginia,Washington,WestVirginia,Wisconsin ,Wyoming ]
    
    let [ans, setAns] = useState(<div></div>)
    let [stateofus, setStateofus] = useState()
    let [electricbill, SetElectricBill] = useState(0.00)
   
    function HandleStateChange(e){
      let v= usStates.find(x =>x.name = e.currentTarget.value)
       console.log(v)
        setStateofus(v)
        console.log(stateofus)
    
    }
    function HandleBillChange(e)
    { console.log(electricbill)
        SetElectricBill(e.currentTarget.value)
        console.log(electricbill)}
      
    console.log(stateofus)
    console.log(electricbill)
    function emissionsCalculate(){
        let kwhUsed = electricbill/stateofus.billperkwh
        console.log(kwhUsed)
        let mwhUsed = kwhUsed / 1000
        let so2Emitted = mwhUsed * stateofus.so2mwh
        let noEmitted = mwhUsed * stateofus.nomwh
        let co2Emitted = mwhUsed * stateofus.co2mwh
        setAns(<div>You have used {kwhUsed.toFixed(2)} kwh in your home, and you live in {stateofus.name}. The resulting emissions includes {so2Emitted.toFixed(2)} pounds of Sulfur dioxide, {noEmitted.toFixed(2)} pounds of nitrogen oxide, and {co2Emitted.toFixed(2)} pounds of Co2.</div>)
    }
    return(
        <>
      
            <label for = 'resi'>State of residence:</label>
            <select id = 'resi' value = {stateofus} onChange={HandleStateChange} >
                {usStates.map((usstate) => 
                (<option key={usStates.indexOf(usstate)} value = {usstate.name}>{usstate.name}</option>))}
            </select>
            <label >Electric bill for this month:</label>
            <input type = 'double' value = {electricbill} onChange = {HandleBillChange}></input>
            <button onClick = {emissionsCalculate}>calculate emissions</button>
            <div>{ans}</div>
        <div>Source: eia.gov</div></>
    )

}
export default StateList