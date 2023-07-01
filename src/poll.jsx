import { useState } from "react"
import { PieChart } from 'react-minimal-pie-chart';

const Poll = () => {
    const [graphData,setGraphData]=useState([{
        title:"Java",
        value:10,
        color: '#FF2400'
    },{
        title:"JavaScript",
        value:5,
        color: '#57A0D2'
    },{
        title:"C#",
        value:14,
        color: '#00A86B'
    },{
        title:"ASP .Net",
        value:17,
        color: '#A38610'
    }]);
    let totalgraphValue = 0;
    graphData.map((item)=>{totalgraphValue+=item.value});
    const [selectedOption,setSelectedOption]=useState("");
    const handleOption=(e)=>{
        console.log(e);
        setSelectedOption(e.target.innerText);
        //e.target.className="bg-primary text-white";
    }
    const handleSubmit=()=>{
        if(selectedOption == "") return alert("Please select a option.")
        graphData.map((item)=>{if(item.title === selectedOption)return item.value++});
        setGraphData(graphData);
        alert("Thanks for submitting the vote!.");
        setSelectedOption("");
    }
    console.log(graphData);
  return (
    <>
    <div className='container-fluid text-white text-center p-2 bg-danger bg-gradient'>
        <h1>Voting Poll</h1>
    </div>
    <div className="container-fluid">
        <div className="row p-4"> 
            <div className="col-lg-6 col-md-12 col-sm-12">
                <div className=" shadow-lg p-2 border-2 rounded-lg">
                <h3>Q. Choose your favourite language?</h3>
                <div className="px-2 options-design">
                    {/* <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                    <label for="vehicle1"> I have a bike</label><br/>
                    <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
                    <label for="vehicle2"> I have a car</label><br/>
                    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                    <label for="vehicle3"> I have a boat</label><br/> */}
                    <ol>
                        <li onClick={handleOption} >C#</li>
                        <li onClick={handleOption} >JavaScript</li>
                        <li onClick={handleOption} >Java</li>
                        <li onClick={handleOption} >ASP .Net</li>
                    </ol>
                </div>
                <div className="text-center">
                    <button className="btn btn-success" onClick={handleSubmit}>Submit</button>
                </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 p-4">
                <h1>Poll Data</h1>
                {graphData.map((item)=>{
                    const dataVal = item.value / totalgraphValue * 100
                    return(
                        <div className="d-flex">
                            <div className={`mt-1 px-2 mx-2 bg-${item.color.replace('#','')}`}></div>
                            <h6>{item.title} - {Math.round(dataVal)}% or {item.value} people voted</h6>
                            <br/>
                        </div>
                    )
                })}
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 p-4">
                <PieChart data={graphData} 
                />
            </div>

        </div>
    </div>
    </>
  )
}

export default Poll