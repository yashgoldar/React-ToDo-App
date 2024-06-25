import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='container card mt-5'>
    <center className='text-uppercase m-3 heading'>TODO App</center>
  <div className=''>
    <div className='row m-3'>
      <div className='col-6'>
      <input type="text" class="form-control" placeholder="Todo" aria-label="Username" />
      </div>
      <div className='col-4'>
      <input type="date" class="form-control" placeholder="Todo" aria-label="" />
      </div>
      <div className='col-2'>
      <button type="button" class="btn btn-success">Add</button>
      </div>
    </div>

    <div className='row m-3'>
      <div className='col-6'>
      <p>Buy a Milk</p>
      </div>
      <div className='col-4'> 
        <p>14-06-2024</p>
         </div>
      <div className='col-2'>
      <button type="button" class="btn btn-danger">Delete</button>
      </div>
    </div>

    <div className='row m-3'>
      <div className='col-6'>
      <p>Go to Office</p>
      </div>
      <div className='col-4'>
      <p>14-06-2024</p>
      </div>
      <div className='col-2'>
      <button type="button" class="btn btn-danger">Delete</button>
      </div>
    </div>
    
  </div>
  </div>
  );
}

export default App;
