import React,{ useState, useEffect} from 'react';
import axios from 'axios'

 export default function Task() {
  const url ='https://swapi.dev/api/people/'
  const [task, setTask] = useState(null)
  let content= null
  useEffect(() => {

    axios.get(url)
    .then((response) => {
      setTask(response.data)
    })
    },[url])

      if(task){
      
       return(
  
          content = 
         <ul className='list'>
           <img src = "https://www.shaadidukaan.com/vogue/wp-content/uploads/2019/08/hug-kiss-images.jpg" alt = "" />
           <li className='list2'>
             <h1>{task.results[0].name}</h1>
        <p>{task.results[0].gender}</p>
        <p>{task.results[0].height}cm</p>
           </li>
           <img src = "https://www.shaadidukaan.com/vogue/wp-content/uploads/2019/08/hug-kiss-images.jpg" alt = "" />
           <li>
             <h1>{task.results[1].name}</h1>
        <p>{task.results[1].gender}</p>
        <p>{task.results[1].height}cm</p>
           </li>
           <img src = "https://www.shaadidukaan.com/vogue/wp-content/uploads/2019/08/hug-kiss-images.jpg" alt = "" />
           <li>
             <h1>{task.results[2].name}</h1>
        <p>{task.results[2].gender}</p>
        <p>{task.results[2].height}cm</p>
           </li>
           <img src = "https://www.shaadidukaan.com/vogue/wp-content/uploads/2019/08/hug-kiss-images.jpg" alt = "" />
           <li>
             <h1>{task.results[3].name}</h1>
        <p>{task.results[3].gender}</p>
        <p>{task.results[3].height}cm</p>
           </li>
           <img src = "https://www.shaadidukaan.com/vogue/wp-content/uploads/2019/08/hug-kiss-images.jpg" alt = "" />
           <li>
             <h1>{task.results[4].name}</h1>
        <p>{task.results[4].gender}</p>
        <p>{task.results[4].height}cm</p>
           </li>
           <img src = "https://www.shaadidukaan.com/vogue/wp-content/uploads/2019/08/hug-kiss-images.jpg" alt = "" />
           <li>
             <h1>{task.results[5].name}</h1>
        <p>{task.results[5].gender}</p>
        <p>{task.results[5].height}cm</p>
           </li>
         </ul>   

        )
   
    } 


return (
  <div>
  <h1>{content}</h1>
  
  </div>
   );
}
 
