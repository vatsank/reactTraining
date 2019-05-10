
import React ,{useState,useEffect} from 'react';

const InitialData = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => setData(data));
        },[]);
        
    return (
        <div>
            <h2>Loading Data</h2>

            <ul>
{
data.map(el =>(
<li key={el.id}>{el.name}</li>
))}
</ul>
        </div>
    );
};

export default InitialData;