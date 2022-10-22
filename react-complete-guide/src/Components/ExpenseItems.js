import './ExpenseItems.css';
import ExpenseDate from './ExpenseDate'  ; 
import Cards from './Cards';


function ExpenseItems(props)
{
    console.log(props.title);
var expenseDate = new Date(2021,2,28);
const expenseTitle = 'Car Insurance';
const expenseAmount = 294.6;

    return (
         
            <Cards className="expense-item">
            <ExpenseDate date ={props.date}/>
              
            <div className="expense-item__description">
               <h2>{props.title}</h2>
             
            <div className="expense-item__price">
               {props.amount} </div>
            </div>
            </Cards>
         )
}

export default ExpenseItems;