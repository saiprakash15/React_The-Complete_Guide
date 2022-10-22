
import './Cards.css';

function Cards(props)
{
    const className ='card '+props.className;
    return <div className={className}>{props.children}</div>;
}

export default Cards;