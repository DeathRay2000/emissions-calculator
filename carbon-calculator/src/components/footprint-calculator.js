import {useState} from 'react'
function FootprintCalculator(props){
    const gasgallonemission = 8887
    const dieselgallonemission = 10180
    let [mpg, setMpg] = useState(0)
    let [traveled, setTraveled] = useState(0)
    let [diesel, setDiesel] = useState(false)
    let [calc, setCalc] = useState( <div></div>)
   
    function carbonCalculate(){
        let res = 0
        if(diesel == true){
            res = (traveled/mpg) * dieselgallonemission
        }
        else{
            res = (traveled/mpg) * gasgallonemission
        }
        console.log(res)
        setCalc(<div>You have caused {JSON.stringify(res)} grams of carbon emission today</div>)
        console.log(calc)
    }

    function changeMileage(e){
        console.log(mpg)
        setMpg(e.currentTarget.value)
        console.log(mpg)
    }
    function changeTraveled(e){
        console.log(traveled)
        setTraveled(e.currentTarget.value)
        console.log(traveled)
    }
    function changeDiesel(e){
        console.log(diesel)
        setDiesel(!diesel)
        console.log(diesel)
    }
    console.log(mpg)
    console.log(traveled)
    console.log(diesel)
    return(<>
        <label>Mileage of your car in mpg<input type = 'number' onChange = {changeMileage}></input></label>
        <label>Number of miles you have travelled today<input type = 'number' onChange = {changeTraveled}></input></label>
        <label>Check this box if your car runs on diesel<input type = 'checkbox' checked = {diesel} onChange={changeDiesel} ></input></label>
        <button onClick={carbonCalculate}>calculate</button>
    
    <div>{calc}</div></>
        

    )
    
}
export default FootprintCalculator