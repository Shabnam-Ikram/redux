import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './actions';

function Counter({ count, increment, decrement }) {
  
  const styles = `
    
  body {
    margin: 0;
    padding: 0;
    background-image: url('https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg'); 
    background-size: cover;
    widhth: 100%
    background-position: center;
    font-family: Arial, sans-serif;
    justify-content: center;
    padding-top: 200px;
  }
  
  .card {
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 300px;
    margin: 20px auto;
    background-color: #93C572;
    
  }
  
  .card h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .counter-buttons {
    display: flex;
    justify-content: space-around;
  }
  
  .counter-button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: #fff;
    transition: background-color 0.3s ease;
  }
  
  .counter-button:hover {
    background-color: #0056b3;
  }
  
  .counter-button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }`
  
  
  

  return (
    <div id='outer' >

            <div className="card" style={{ margin: '20px auto' }}>
            <style>{styles}</style> 
            <h2>Counter: {count}</h2>
            <div className="counter-buttons">
                <button className="counter-button" onClick={increment}>Increment</button>
                <button className="counter-button" onClick={decrement}>Decrement</button>
            </div>
            </div>
    </div>
  );
}

const mapStateToProps = state => ({
  count: state.counter.count
});

const mapDispatchToProps = {
  increment,
  decrement
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
